import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Code, Rotate3D } from "lucide-react";
import { projects } from "../data/Project";
import me from "../img/me.png";
import {
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div
      className="flex-1 w-full max-w-md"
      initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.04}
        transitionSpeed={1500}
        className="w-full relative perspective:[4000px]"
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          <div
            className="relative rounded-2xl bg-linear-to-br from-oceanblue/40 to-dark border border-cyan/20 p-8 shadow-2xl overflow-hidden backdrop-blur-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setIsFlipped(true)}
              className="absolute top-4 right-4 z-20 text-cyan/60 hover:text-bravered transition-colors bg-dark/50 p-2 rounded-full border border-cyan/10 cursor-pointer"
              title="Flip Card"
            >
              <Rotate3D size={22} />
            </button>

            <div className="absolute top-0 right-0 w-40 h-40 bg-bravered/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-4 pt-4 gap-2">
              <div className="w-24 h-24 rounded-full bg-dark border-2 border-bravered flex items-center justify-center mb-2 shadow-inner overflow-hidden">
                <Code size={40} className="text-cyan" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-bonewhite tracking-tight capitalize">
                  Muhammad Ihsan Ushaim
                </h3>
                <p className="text-cyan font-medium mt-1">
                  Fullstack Developer
                </p>
              </div>
              <div className="w-full h-px bg-cyan/50 my-4"></div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center bg-dark/50 p-3 rounded-lg border border-cyan/10">
                  <span className="text-2xl font-bold text-bravered">1+</span>
                  <span className="text-xs text-cyan uppercase tracking-wider mt-1">
                    Years Exp
                  </span>
                </div>
                <div className="flex flex-col items-center bg-dark/50 p-3 rounded-lg border border-cyan/10">
                  <span className="text-2xl font-bold text-cyan">
                    {projects.length}+
                  </span>
                  <span className="text-xs text-cyan uppercase tracking-wider mt-1">
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-dark border border-cyan/20 cursor-default"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute bg-linear-to-br from-bonewhite to-white w-full h-full"
              style={{ transform: "translateZ(10px)" }}
            >
              <div className="absolute inset-0 flex flex-col justify-center overflow-hidden opacity-20">
                <span className="text-[110px] font-black leading-none text-dark uppercase transform -rotate-12 scale-150">
                  MUHAMMAD
                </span>
                <span className="text-[110px] font-black leading-none text-dark uppercase transform -rotate-12 scale-150">
                  IHSAN
                </span>
                <span className="text-[110px] font-black leading-none text-dark uppercase transform -rotate-12 scale-150 outline-text">
                  USHAIM
                </span>
              </div>
              <div className="absolute top-31 left-0 -ml-1 w-5/6 h-[2.5px] bg-bravered/50 -rotate-12"></div>
              <div className="absolute top-1/3 left-0 -ml-2 w-4/5 h-[2.5px] bg-dark/50 -rotate-12"></div>
              <div className="absolute top-34.5 left-0 -ml-1.5 w-3/4 h-[2.5px] bg-oceanblue/50 -rotate-12"></div>
              <div className="absolute top-1/2 right-0 -mr-2 w-4/5 h-[2.5px] bg-bravered/50 -rotate-12"></div>
              <div className="absolute top-50.5 right-0 -mr-2 w-4/5 h-[2.5px] bg-dark/50 -rotate-12"></div>
              <div className="absolute top-51.75 right-0 -mr-2.5 w-4/5 h-[2.5px] bg-oceanblue/50 -rotate-12"></div>
            </div>
            <button
              onClick={() => setIsFlipped(false)}
              className="absolute top-4 right-4 z-[200px] text-white hover:text-[#ff4655] transition-colors bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/20 cursor-pointer"
              style={{ transform: "translateZ(80px)" }}
              title="Flip back"
            >
              <Rotate3D size={22} />
            </button>
            <div
              className="absolute top-10 bottom-32 left-0 right-0 flex items-end justify-center z-10 pointer-events-none"
              style={{ transform: "translateZ(70px)" }}
            >
              <img
                src={me}
                alt="Ihsan Character"
                className="absolute -top-7 w-42.5 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] z-[1000px]"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-linear-to-br from-slate-800 to-blueblack h-38 border-t-2 border-cyan px-6 py-4 flex flex-col justify-between z-10"
              style={{
                transform: "translateZ(2000px)",
                boxShadow: "0 -10px 30px rgba(0,0,0,0.5)",
              }}
            >
              {/* Tag Nama */}
              <div className="text-center mt-1">
                <h2 className="text-2xl font-black text-white tracking-wide uppercase font-sans">
                  Ihsan<span className="text-slate-400 font-bold">#DEV</span>
                </h2>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Indonesia
                  </span>
                  <span className="text-[10px] font-bold text-white bg-oceanblue px-1.5 py-0.5 rounded tracking-wider">
                    Sannn.
                  </span>
                </div>
                <div className="flex flex-col gap-1 items-center mt-1">
                  <p className="text-white font-medium text-[12px] uppercase">
                    tools
                  </p>
                  <div className="flex gap-3 text-xl items-center">
                    <SiReact className="text-oceanblue" />
                    <SiJavascript className="text-javascript rounded-xs" />
                    <SiTypescript className="text-oceanblue rounded-xs" />
                    <SiNodedotjs className="text-nodejs" />
                    <SiMysql size={30} />
                    <SiTailwindcss className="text-tailwind" />
                    <div className="vscode" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
}
