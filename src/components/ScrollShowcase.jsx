// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function ScrollShowcase() {
//     const ref = useRef(null);

//     const { scrollYProgress } = useScroll({
//       target: ref,
//       offset: ["start start", "end start"],
//     });

//     const textOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
//     const textX = useTransform(scrollYProgress, [0, 0.2], [-80, 0]);

//     return (
//       <>
//         <section className="lg:hidden py-16">
//           <div className="container mx-auto px-6">
//             <div className="max-w-xl mx-auto">
//               <div className="inline-flex items-center gap-3 px-5 py-2
//   rounded-full bg-emerald-100/50 border border-emerald-200 text-[#059669]
//   text-xs font-black uppercase tracking-[0.25em] mb-6">
//                 AI Hiring Intelligence
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold mb-8
//   text-[#059669] font-serif leading-[1.1]">
//                 AI Powered
//                 <br />
//                 Talent Engine
//               </h2>

//               <div className="space-y-6">
//                 <div className="flex gap-6">
//                   <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex
//   items-center justify-center text-emerald-600">
//                     <span className="font-bold">01</span>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-[#344D41] mb-2">
//                       Smart Candidate Matching
//                     </h3>
//                     <p className="text-[#4A5D54]">
//                       AI automatically finds the best candidates from your
//                       database.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-6">
//                   <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex
//   items-center justify-center text-emerald-600">
//                     <span className="font-bold">02</span>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-[#344D41] mb-2">
//                       Automated Screening
//                     </h3>
//                     <p className="text-[#4A5D54]">
//                       Instantly evaluate applicants and reduce hiring time.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-6">
//                   <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex
//   items-center justify-center text-emerald-600">
//                     <span className="font-bold">03</span>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-[#344D41] mb-2">
//                       Revenue From Talent Pool
//                     </h3>
//                     <p className="text-[#4A5D54]">
//                       Turn your candidate database into a revenue engine.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section ref={ref} className="hidden lg:block relative h-[160vh]">
//           <div className="sticky top-0 h-screen flex items-center justify-start py-20">
//             <div className="container mx-auto px-6 relative">
//               <motion.div
//                 style={{
//                   opacity: textOpacity,
//                   x: textX,
//                   willChange: "transform, opacity",
//                 }}
//                 className="
//                   max-w-xl
//                   lg:ml-20
//                   lg:z-10
//                 "
//               >
//                 <div className="inline-flex items-center gap-3 px-5 py-2
//   rounded-full bg-emerald-100/50 border border-emerald-200 text-[#059669]
//   text-xs font-black uppercase tracking-[0.25em] mb-6">
//                   AI Hiring Intelligence
//                 </div>

//                 <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold
//   mb-10 text-[#059669] font-serif leading-[1.1]">
//                   AI Powered
//                   <br />
//                   Talent Engine
//                 </h2>

//                 <div className="space-y-6">
//                   <div className="flex gap-6">
//                     <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex
//   items-center justify-center text-emerald-600">
//                       <span className="font-bold">01</span>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-[#344D41] mb-2">
//                         Smart Candidate Matching
//                       </h3>
//                       <p className="text-[#4A5D54]">
//                         AI automatically finds the best candidates from your
//                         database.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-6">
//                     <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex
//   items-center justify-center text-emerald-600">
//                       <span className="font-bold">02</span>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-[#344D41] mb-2">
//                         Automated Screening
//                       </h3>
//                       <p className="text-[#4A5D54]">
//                         Instantly evaluate applicants and reduce hiring
//   time.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-6">
//                     <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex
//   items-center justify-center text-emerald-600">
//                       <span className="font-bold">03</span>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-[#344D41] mb-2">
//                         Revenue From Talent Pool
//                       </h3>
//                       <p className="text-[#4A5D54]">
//                         Turn your candidate database into a revenue engine.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }

export default function ScrollShowcase() {
  return null;
}
