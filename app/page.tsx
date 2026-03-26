"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";
import {
  dataSkills,
  dataExperience,
  dataProjects,
  dataEducation,
} from "@/data";

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center max-w-3xl"
        >
          <p className="text-apple-gray text-sm md:text-base tracking-widest uppercase mb-6">
            Software Engineer & Data Analyst
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-apple-dark leading-[0.95]">
            Gustavo
            <br />
            Larco
          </h1>
          <p className="mt-8 text-lg md:text-xl text-apple-gray max-w-xl mx-auto leading-relaxed">
            Building enterprise applications, data-driven insights, and
            beautiful web experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 text-sm font-medium text-white bg-apple-blue rounded-full hover:bg-apple-blue-hover transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="/Gustavo-Larco-Resume.pdf"
              target="_blank"
              className="px-8 py-3 text-sm font-medium text-apple-blue border border-apple-blue/30 rounded-full hover:bg-apple-blue hover:text-white transition-all duration-200"
            >
              Download Resume
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10">
            <a
              href="https://www.linkedin.com/in/gustavo-larco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-gray hover:text-apple-dark transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/GustavoLarcoDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-gray hover:text-apple-dark transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:gustavo.larcoj@gmail.com"
              className="text-apple-gray hover:text-apple-dark transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll down"
          >
            <ArrowDown
              size={18}
              className="text-apple-gray animate-bounce"
            />
          </a>
        </motion.div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 md:py-32 bg-apple-gray-light">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-apple-blue text-xs font-semibold tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-apple-dark tracking-tight leading-tight">
              Passionate about crafting
              <br className="hidden md:block" /> elegant solutions.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 text-lg md:text-xl text-apple-gray max-w-3xl leading-relaxed">
              Software Engineer and Data Analyst at Simplicity Software,
              specializing in enterprise applications with C#, ASP.NET Core, and
              .NET. I build interactive Power BI dashboards, architect scalable
              backends, and deliver full-stack web solutions for clients across
              industries.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8 text-sm text-apple-gray">
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-apple-blue" /> St Louis, MO
              </span>
              <span className="flex items-center gap-2">
                <Mail size={15} className="text-apple-blue" />{" "}
                gustavo.larcoj@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={15} className="text-apple-blue" /> (737) 287-6304
              </span>
              <span className="flex items-center gap-2">
                <Globe size={15} className="text-apple-blue" /> English,
                Spanish, Portuguese, Italian
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section id="skills" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-apple-blue text-xs font-semibold tracking-widest uppercase mb-4">
              Skills
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-apple-dark tracking-tight">
              Technical expertise.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {dataSkills.map((skill, i) => (
              <FadeIn key={skill.category} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl border border-apple-border/50 bg-white hover:shadow-lg hover:shadow-black/[0.04] hover:border-apple-border transition-all duration-500 h-full">
                  <h3 className="text-xs font-semibold text-apple-blue uppercase tracking-widest mb-5">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-[13px] text-apple-dark bg-apple-gray-light rounded-full transition-colors duration-200 group-hover:bg-apple-blue/[0.06]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section id="experience" className="py-24 md:py-32 bg-apple-gray-light">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-apple-blue text-xs font-semibold tracking-widest uppercase mb-4">
              Experience
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-apple-dark tracking-tight">
              Where I&apos;ve worked.
            </h2>
          </FadeIn>
          <div className="mt-14 space-y-6">
            {dataExperience.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 md:p-8 border border-apple-border/30 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-5">
                    <div>
                      <h3 className="text-lg font-semibold text-apple-dark">
                        {exp.company}
                      </h3>
                      <p className="text-apple-gray text-sm">{exp.role}</p>
                    </div>
                    <span className="text-xs text-apple-gray font-medium shrink-0 md:mt-1 bg-apple-gray-light px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-apple-gray text-[14px] leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-apple-blue/60 before:rounded-full"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-apple-blue text-xs font-semibold tracking-widest uppercase mb-4">
              Projects
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-apple-dark tracking-tight">
              Featured work.
            </h2>
          </FadeIn>
          <div className="mt-14 space-y-6">
            {dataProjects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl border border-apple-border/30 overflow-hidden hover:shadow-xl hover:shadow-black/[0.06] transition-all duration-500">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image */}
                    <div className="md:col-span-2 relative h-52 md:h-full min-h-[220px] bg-apple-gray-light overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    {/* Content */}
                    <div className="md:col-span-3 p-7 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-apple-dark">
                            {project.title}
                          </h3>
                          <p className="text-apple-gray text-sm mt-1">
                            {project.subtitle}
                          </p>
                        </div>
                        <span className="text-xs text-apple-gray font-medium shrink-0 mt-0.5 bg-apple-gray-light px-3 py-1 rounded-full">
                          {project.period}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[11px] font-medium text-apple-blue bg-apple-blue/[0.06] rounded-full border border-apple-blue/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <ul className="mt-5 space-y-2">
                        {project.highlights.slice(0, 3).map((h, j) => (
                          <li
                            key={j}
                            className="text-apple-gray text-[13px] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[8px] before:w-1 before:h-1 before:bg-apple-gray/50 before:rounded-full"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-5 mt-6">
                        {project.urlGithub && (
                          <a
                            href={project.urlGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-apple-gray hover:text-apple-dark transition-colors"
                          >
                            <Github size={14} /> Source Code
                          </a>
                        )}
                        {project.urlDemo && (
                          <a
                            href={project.urlDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-apple-blue hover:text-apple-blue-hover transition-colors"
                          >
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Education ─── */}
      <section id="education" className="py-24 md:py-32 bg-apple-gray-light">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-apple-blue text-xs font-semibold tracking-widest uppercase mb-4">
              Education
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-apple-dark tracking-tight">
              Learning journey.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5 mt-14">
            {dataEducation.map((edu, i) => (
              <FadeIn key={edu.id} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-7 md:p-8 border border-apple-border/30 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-500 h-full">
                  <span className="text-xs text-apple-blue font-semibold tracking-wide">
                    {edu.date}
                  </span>
                  <h3 className="text-lg font-semibold text-apple-dark mt-3">
                    {edu.school}
                  </h3>
                  <p className="text-apple-gray text-sm mt-1">{edu.degree}</p>
                  {edu.description && (
                    <p className="text-apple-gray text-[13px] mt-4 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-apple-blue text-xs font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-apple-dark tracking-tight">
              Let&apos;s work together.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg text-apple-gray max-w-xl mx-auto leading-relaxed">
              Open to new opportunities and collaborations. Whether you have a
              project in mind or just want to connect, feel free to reach out.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href="mailto:gustavo.larcoj@gmail.com"
                className="px-8 py-3.5 text-sm font-medium text-white bg-apple-blue rounded-full hover:bg-apple-blue-hover transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Mail size={16} />
                gustavo.larcoj@gmail.com
              </a>
              <a
                href="/Gustavo-Larco-Resume.pdf"
                target="_blank"
                className="px-8 py-3.5 text-sm font-medium text-apple-blue border border-apple-blue/30 rounded-full hover:bg-apple-blue hover:text-white transition-all duration-200 inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="flex items-center justify-center gap-8 mt-14">
              <a
                href="https://www.linkedin.com/in/gustavo-larco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-gray hover:text-apple-dark transition-colors duration-200"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/GustavoLarcoDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-gray hover:text-apple-dark transition-colors duration-200"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:gustavo.larcoj@gmail.com"
                className="text-apple-gray hover:text-apple-dark transition-colors duration-200"
              >
                <Mail size={22} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-apple-border/30">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-apple-gray">
            &copy; {new Date().getFullYear()} Gustavo Larco. All rights
            reserved.
          </p>
          <p className="text-xs text-apple-gray">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
