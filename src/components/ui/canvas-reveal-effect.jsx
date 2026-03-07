"use client";

import { cn } from "@/lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[16, 185, 129]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}) => {
  return (
    <div className={cn("h-full relative w-full", containerClassName)}>
      <DotMatrix colors={colors} dotSize={dotSize} opacities={opacities} />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent" />
      )}
    </div>
  );
};

const DotMatrix = ({ colors, opacities, totalSize = 4, dotSize = 2 }) => {
  const uniforms = useMemo(
    () => ({
      u_colors: {
        value: colors.map((c) => [c[0] / 255, c[1] / 255, c[2] / 255]),
      },
      u_opacities: { value: opacities },
      u_total_size: { value: totalSize },
      u_dot_size: { value: dotSize },
    }),
    [colors, opacities, totalSize, dotSize],
  );

  return <Shader source={fragmentShader} uniforms={uniforms} />;
};

const fragmentShader = `
precision mediump float;

uniform float u_time;
uniform float u_opacities[10];
uniform vec3 u_colors[1];
uniform float u_total_size;
uniform float u_dot_size;
uniform vec2 u_resolution;

out vec4 fragColor;

float random(vec2 xy){
 return fract(sin(dot(xy,vec2(12.9898,78.233)))*43758.5453);
}

void main(){

 vec2 st = gl_FragCoord.xy;

 float opacity = step(0.0,st.x)*step(0.0,st.y);

 vec2 st2 = vec2(int(st.x/u_total_size),int(st.y/u_total_size));

 float rand = random(st2);
 opacity *= u_opacities[int(rand*10.0)];

 opacity *= 1.0-step(u_dot_size/u_total_size,fract(st.x/u_total_size));
 opacity *= 1.0-step(u_dot_size/u_total_size,fract(st.y/u_total_size));

 vec3 color = u_colors[0];

 fragColor = vec4(color,opacity);
 fragColor.rgb*=fragColor.a;
}
`;

const ShaderMaterial = ({ source, uniforms }) => {
  const { size } = useThree();
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.uniforms.u_time.value = clock.elapsedTime;
    }
  });

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        fragmentShader: source,
        vertexShader: `
      void main(){
        gl_Position = vec4(position,1.0);
      }
    `,
        uniforms: {
          ...uniforms,
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(size.width, size.height) },
        },
        transparent: true,
      }),
    [source, size],
  );

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader = ({ source, uniforms }) => {
  return (
    <Canvas className="absolute inset-0">
      <ShaderMaterial source={source} uniforms={uniforms} />
    </Canvas>
  );
};
