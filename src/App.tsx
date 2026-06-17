import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Menu, X, Code, Briefcase, GraduationCap, Mail } from "lucide-react";

const projects = [
  {
    title: "Logistics Administrative Web App",
    type: "WORK PROJECT",
    stack: ["React", "Node.js", "REST API", "MySQL"],
    desc: "An internal web-based system for managing logistics operations, shipment tracking, and administrative reporting.",
  },
  {
    title: "Digital Wedding Invitation Web App",
    type: "CLIENT PROJECT",
    stack: ["React", "TypeScript", "Firebase", "Tailwind", "Vite"],
    desc: "A fully featured platform with token-based guest access, RSVP system, digital gift notes, and a WhatsApp link generator.",
  },
  {
    title: "TuDu - To Do List Web Application",
    type: "FINAL SCHOOL PROJECT",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    desc: "A full-featured task management web application for creating, editing, and prioritizing tasks.",
  },
  {
    title: "RPLCashier - School Cashier Web App",
    type: "SCHOOL PROJECT",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    desc: "A web-based point-of-sale cashier system designed for a school canteen, featuring product management and daily sales reporting.",
  },
];

export default function Portfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsNavOpen(false);
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-dark text-bonewhite font-sans selection:bg-bravered/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/70 backdrop-blur-lg border-b border-cyan/10 shadow-lg transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-2xl font-bold tracking-tighter text-cyan"
          >
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              Sannns
            </a>{" "}
            <span className="text-bravered">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 text-sm font-medium text-cyan/80">
            {["About", "Education", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="hover:text-bonewhite relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-bravered after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-cyan hover:text-bonewhite transition-colors"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark/95 backdrop-blur-xl border-b border-cyan/10 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 gap-6 text-base font-medium text-cyan">
                {["About", "Education", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                    className="hover:text-bravered transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section
        id="about"
        className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen"
      >
        <motion.div
          className="flex-1 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm <br />
            <span className="text-cyan">Muhammad Ihsan Ushaim </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-bonewhite/80 leading-relaxed max-w-xl"
          >
            An Informatics Engineering student at UIN Syarif Hidayatullah
            Jakarta and a former professional Fullstack Developer. I build
            solutions with curiosity, discipline, and human-centered design.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="px-8 py-3 bg-bravered hover:bg-bravered/90 text-bonewhite rounded-full font-medium transition-all shadow-lg shadow-bravered/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="px-8 py-3 bg-transparent border-2 border-oceanblue hover:bg-oceanblue/20 text-bonewhite rounded-full font-medium transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Tilt Card */}
        <motion.div
          className="flex-1 w-full max-w-md perspective-1000"
          initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
        >
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            scale={1.04}
            transitionSpeed={1500}
            className="relative rounded-2xl bg-linear-to-br from-oceanblue/40 to-dark border border-cyan/20 p-8 shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-bravered/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-dark border-2 border-bravered flex items-center justify-center mb-2 shadow-inner overflow-hidden">
                <Code size={40} className="text-cyan" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-bonewhite">
                  Muhammad Ihsan Ushaim
                </h3>
                <p className="text-cyan font-medium mt-1">
                  Fullstack Developer
                </p>
              </div>
              <div className="w-full h-px bg-oceanblue/50 my-4"></div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center bg-dark/50 p-3 rounded-lg border border-cyan/10">
                  <span className="text-2xl font-bold text-bravered">1+</span>
                  <span className="text-xs text-cyan uppercase tracking-wider mt-1">
                    Years Exp
                  </span>
                </div>
                <div className="flex flex-col items-center bg-oceanblue/50 p-3 rounded-lg border border-cyan/10">
                  <span className="text-2xl font-bold text-cyan">5+</span>
                  <span className="text-xs text-cyan uppercase tracking-wider mt-1">
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </section>

      {/* EDUCATION SECTION */}
      <section
        id="education"
        className="py-24 px-6 bg-dark relative border-t border-oceanblue/30"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mb-4 text-bonewhite"
            >
              Education & Journey
            </motion.h2>
            <motion.p variants={fadeUp} className="text-cyan max-w-2xl mx-auto">
              A continuous process of learning from foundational concepts to
              advanced software architecture.
            </motion.p>
          </motion.div>

          <div className="relative border-l-2 border-oceanblue/50 pl-8 ml-4 space-y-12">
            {[
              {
                period: "Present",
                title: "Informatics Engineering (Undergraduate)",
                institution: "UIN Syarif Hidayatullah Jakarta",
                desc: "Second-semester student building a strong academic foundation in software engineering, interdisciplinary thinking, and algorithmic problem solving.",
                icon: <GraduationCap size={20} />,
              },
              {
                period: "Vocational High School",
                title: "Rekayasa Perangkat Lunak (Software Engineering)",
                institution: "SMK",
                desc: "Established the foundation in web development, database design, and software lifecycle by building real-world school applications.",
                icon: <Briefcase size={20} />,
              },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 60, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-13.25 top-0 p-2 bg-dark border-2 border-bravered rounded-full text-cyan">
                  {edu.icon}
                </div>
                <div className="bg-oceanblue/10 border border-oceanblue/30 rounded-xl p-6 hover:border-bravered/50 transition-colors">
                  <span className="text-xs font-bold text-bravered mb-2 block tracking-wider">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-semibold text-bonewhite">
                    {edu.title}
                  </h3>
                  <p className="text-cyan font-medium mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-bonewhite/70 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-24 px-6 bg-dark/80 relative border-t border-oceanblue/30"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mb-4 text-bonewhite"
            >
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeUp} className="text-cyan max-w-2xl">
              Taking ownership of a problem, learning the tools required, and
              delivering working solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-oceanblue/10 border border-oceanblue/30 rounded-xl p-6 hover:bg-oceanblue/20 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >
                <div className="text-xs font-bold text-bravered mb-3 tracking-wider">
                  {project.type}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-bonewhite/70 mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-oceanblue text-cyan rounded-md border border-oceanblue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 px-6 bg-dark relative border-t border-oceanblue/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="bg-gradient-to-br from-oceanblue/20 to-dark border border-oceanblue/40 rounded-3xl p-10 md:p-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-bonewhite">
              Wanna Collaborate or Just Say Hi?
            </h2>
            <p className="text-cyan max-w-2xl mx-auto mb-10 text-lg">
              Let's connect!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ushaimihsan@gmail.com?subject=Hello%20Ihsan!%20Let's%20Connect"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-bravered hover:bg-bravered/90 text-bonewhite rounded-full font-medium transition-all"
              >
                <Mail size={20} />
                Send an Email
              </a>
              <a
                href="https://github.com/SannnsUshaim"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-oceanblue border border-oceanblue/30 hover:bg-oceanblue/20 text-cyan rounded-full font-medium transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 256 256"
                >
                  <g className="ft5dvn">
                    <rect className="zdw9do"></rect>
                    <path className="c0haom"></path>
                  </g>
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ihsan-ushaim"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-oceanblue border border-oceanblue/30 hover:bg-oceanblue/20 text-cyan rounded-full font-medium transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 256 256"
                >
                  <g className="ft5dvn">
                    <rect className="v5546j"></rect>
                    <path className="dzgjwc"></path>
                  </g>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-oceanblue/20 py-8 text-center text-cyan/60 text-sm bg-dark">
        <p>© {new Date().getFullYear()} Muhammad Ihsan Ushaim.</p>
      </footer>
    </div>
  );
}
