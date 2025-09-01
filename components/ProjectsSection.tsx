"use client";

import { Code, Database, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "LMS-MERN",
    description:
      "A full-stack Learning Management System with secure authentication, role-based access, note management, Cloudinary integration, and syllabus uploads to make learning seamless.",
    image: "/projectimg/LMS.png",
    tags: [
      "MERN Stack",
      "Authentication",
      "Role-Based Access",
      "Cloudinary",
      "Syllabus Upload",
    ],
    tagColors: [
      "bg-blue-600",
      "bg-green-600",
      "bg-red-600",
      "bg-purple-600",
      "bg-orange-600",
    ],
    codeLink: "https://github.com/abhishekkalme/LMS-MERN",
    demoLink: "https://lms-learning-management-system.netlify.app/",
  },
  {
    id: 2,
    title: "CineVerse",
    description:
      "A modern, responsive web app to explore and discover movies & TV shows using TMDB API, built with React.js and Vite for a smooth and interactive user experience.",
    image: "/projectimg/cineverse.png",
    tags: [
      "React.js",
      "Vite",
      "TMDB API",
      "Responsive UI",
      "Tailwind CSS",
    ],
    tagColors: [
      "bg-blue-600",
      "bg-green-600",
      "bg-purple-600",
      "bg-orange-600",
      "bg-cyan-600",
    ],
    codeLink: "https://github.com/abhishekkalme/React.js-MovieApp-and-TMDB-API",
    demoLink: "https://cineverse25.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and tech stack. Built with Next.js and Tailwind CSS for a modern and responsive design.",
    image: "/projectimg/Portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "React.js"],
    tagColors: ["bg-blue-600", "bg-green-600", "bg-purple-600", "bg-orange-600"],
    codeLink: "https://github.com/abhishekkalme/portfolio-website",
    demoLink: "https://eklak.dev/",
  },
];





export default function ProjectsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards =
              entry.target.querySelectorAll(".stagger-animation");
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate");
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-2 text-reveal">
            <Code className="w-8 h-8" />
            My <span className="text-blue-400">Projects</span>
            <Database className="w-8 h-8" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each project represents{" "}
            <span className="text-blue-400">real-world solutions</span> crafted
            with modern technologies and{" "}
            <span className="text-green-400">attention to detail</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group stagger-animation"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-42 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Sliding Overlay with Pulse Glow */}
                <div className="absolute inset-0 bg-black bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center items-center p-4 text-center group-hover:pulse-glow">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`${
                          project.tagColors[idx] ?? "bg-gray-600"
                        } text-xs px-2 py-1 rounded`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
