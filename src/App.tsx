import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Menu, X, Briefcase, GraduationCap, XIcon, Globe } from "lucide-react";
import { projects } from "./data/Project";
import { clsx } from "clsx";
import Card from "./components/Card";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface ProjectType {
  title: string;
  type: string;
  tech: string[];
  desc: string;
  source_code?: string;
  demo?: string;
  images?: string[];
}

export default function Portfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType>();

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

  const fadeIn: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
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
    <div className="min-h-screen bg-dark text-bonewhite font-sans selection:bg-bravered/30 overflow-x-hidden">
      {/* Project Details Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(undefined)}
          className="fixed w-full h-screen bg-black/30 z-49"
        />
      )}
      <div
        className={clsx(
          "fixed flex flex-col p-8 h-screen max-h-screen overflow-y-auto sm:w-2/5 w-full bg-linear-to-tr from-bonewhite to-white right-0 transition-transform duration-1000 shadow-2xl z-50 space-y-8",
          !selectedProject && "translate-x-[100rem]",
        )}
      >
        <div className="flex w-full text-dark justify-end">
          <XIcon
            size={24}
            onClick={() => setSelectedProject(undefined)}
            className="cursor-pointer"
          />
        </div>
        <h1 className="text-3xl font-bold text-dark capitalize">
          Project Details
        </h1>
        <p className="text-oceanblue text-base font-medium leading-relaxed tracking-wide uppercase">
          ___ {selectedProject?.type}
        </p>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-regular text-dark capitalize">
            Project Name
          </h2>
          <h3 className="text-2xl font-bold text-dark capitalize">
            {selectedProject?.title}
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-dark text-lg leading-relaxed capitalize">
            Description
          </p>
          <p className="text-dark/90 text-base leading-relaxed">
            {selectedProject?.desc}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-dark text-lg leading-relaxed capitalize">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedProject?.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-oceanblue text-bonewhite rounded-md border border-oceanblue/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-dark text-lg leading-relaxed capitalize">
            Source Code
          </p>
          {selectedProject?.source_code ? (
            <a
              href={selectedProject.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-oceanblue"
            >
              <p className=" font-medium text-lg">Github</p>
              <FaGithub size={24} />
            </a>
          ) : (
            <p className="text-dark/90 text-base leading-relaxed capitalize">
              Source code not available.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-dark text-lg leading-relaxed capitalize">Demo</p>
          {selectedProject?.demo ? (
            <a
              href={selectedProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <p className="text-oceanblue font-medium text-lg">Demo</p>
              <Globe size={24} className="text-oceanblue" />
            </a>
          ) : (
            <p className="text-dark/90 text-base leading-relaxed capitalize">
              demo not available.
            </p>
          )}
        </div>
        <div className="border-t border-dark/50"></div>
        <h2 className="text-xl text-center font-medium text-dark capitalize">
          Preview
        </h2>
        <div className="flex flex-col gap-5 justify-center items-center">
          {selectedProject?.images ? (
            selectedProject?.images?.map((project, index) => (
              <img key={index} src={project} className="" />
            ))
          ) : (
            <p className="text-dark text-2xl capitalize leading-relaxed">
              Preview Not Available
            </p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-dark/40 backdrop-blur-lg transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
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
          viewport={{ once: false, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl lg:text-3xl font-bold uppercase text-bravered tracking-wider"
          >
            web developer
          </motion.h2>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-cyan">
              Muhammad{" "}
              <span className="hover:text-bonewhite relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-bravered after:transition-all after:duration-300 hover:after:w-full">
                Ihsan
              </span>{" "}
              Ushaim
            </span>
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
        <Card />
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
            viewport={{ once: false, margin: "-40px" }}
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
                desc: "A student building a strong academic foundation in software engineering, interdisciplinary thinking, and algorithmic problem solving.",
                icon: <GraduationCap size={20} />,
              },
              {
                period: "Vocational High School",
                title: "Rekayasa Perangkat Lunak (Software Engineering)",
                institution: "SMKN 4 Tangerang",
                desc: "Established the foundation in web development, database design, and software lifecycle by building real-world school applications.",
                icon: <Briefcase size={20} />,
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  delay: index * 0.2,
                }}
                className="relative"
              >
                <div className="absolute -left-14 top-0 p-3 bg-dark border-2 border-bravered rounded-full text-cyan">
                  {edu.icon}
                </div>
                <div className="relative bg-linear-to-br from-oceanblue/5 to-oceanblue/30 border border-oceanblue/30 rounded-xl p-6 hover:border-bravered/50 transition-colors overflow-hidden">
                  <div className="absolute bg-bravered/15 h-34 w-28 top-0 right-0 rounded-full blur-2xl -mr-6 -mt-10 -rotate-45"></div>
                  <div className="absolute bg-cyan/20 h-28 w-28 bottom-0 left-0 rounded-full blur-3xl -ml-4 -mb-7"></div>
                  <div className="relative z-10">
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
            viewport={{ once: false, margin: "-20px" }}
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
            viewport={{ once: false, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-oceanblue/10 border border-oceanblue/30 rounded-xl p-6 hover:bg-oceanblue/20 hover:-translate-y-2 transition-all duration-300 group flex flex-col hover:cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="text-xs font-bold text-bravered mb-3 tracking-wider">
                  {project.type}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-bonewhite/70 mb-6 grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
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
            viewport={{ once: false, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="bg-linear-to-br from-oceanblue/20 to-dark border border-oceanblue/40 rounded-3xl p-10 md:p-16"
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
                <FaEnvelope size={24} />
                Send an Email
              </a>
              <a
                href="https://github.com/SannnsUshaim"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-oceanblue border border-oceanblue/30 hover:bg-oceanblue/20 text-cyan rounded-full font-medium transition-all"
              >
                <FaGithub size={24} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ihsan-ushaim"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-oceanblue border border-oceanblue/30 hover:bg-oceanblue/20 text-cyan rounded-full font-medium transition-all"
              >
                <FaLinkedin size={24} />
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
