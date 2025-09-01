'use client'

import { useState, useEffect } from 'react'
import { 
  FaReact, FaNodeJs, FaJava, FaGithub, FaGitAlt, FaDocker, 
  FaPython, FaFigma 
} from "react-icons/fa"
import { 
  SiNextdotjs, SiTailwindcss, SiFramer, SiSpringboot, SiMongodb, 
  SiPostgresql, SiKubernetes, SiAmazon, SiTypescript, SiExpress, 
  SiNginx, SiPostman, SiCplusplus, SiMysql, 
  SiTensorflow, SiPytorch, SiOpenai, SiLangchain, 
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc";
import { RiJavascriptFill } from "react-icons/ri";

const categories = [
  { id: 'frontend', label: 'Frontend', active: true },
  { id: 'backend', label: 'Backend', active: false },
  { id: 'devops', label: 'DevOps', active: false },
  { id: 'tools', label: 'Tools', active: false },
  { id: 'languages', label: 'Languages', active: false },
  { id: 'ai', label: 'AI & GenAI', active: false }
]

const skills = [ 
  // --- Frontend ---
  { name: 'React.js', category: 'frontend', icon: FaReact, color: 'bg-blue-500', description: 'UI Development' },
  { name: 'Next.js', category: 'frontend', icon: SiNextdotjs, color: 'bg-gray-800', description: 'Full-stack Apps' },
  { name: 'JavaScript', category: 'frontend', icon: RiJavascriptFill, color: 'bg-yellow-500', description: 'Dynamic Web Apps' },
  { name: 'TypeScript', category: 'frontend', icon: SiTypescript, color: 'bg-sky-600', description: 'Typed JavaScript' },
  { name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, color: 'bg-cyan-500', description: 'Utility-first CSS' },
  { name: 'Framer Motion', category: 'frontend', icon: SiFramer, color: 'bg-pink-500', description: 'UI Animations' },

  // --- Backend ---
  { name: 'Java', category: 'backend', icon: FaJava, color: 'bg-orange-600', description: 'Backend Logic' },
  { name: 'Spring Boot', category: 'backend', icon: SiSpringboot, color: 'bg-green-600', description: 'Java Framework' },
  { name: 'Node.js', category: 'backend', icon: FaNodeJs, color: 'bg-lime-600', description: 'Server-side Runtime' },
  { name: 'Express.js', category: 'backend', icon: SiExpress, color: 'bg-gray-700', description: 'Backend Framework' },
  { name: 'MongoDB', category: 'backend', icon: SiMongodb, color: 'bg-green-500', description: 'NoSQL Database' },
  { name: 'PostgreSQL', category: 'backend', icon: SiPostgresql, color: 'bg-blue-700', description: 'Relational DB' },

  // --- DevOps ---
  { name: 'Docker', category: 'devops', icon: FaDocker, color: 'bg-sky-500', description: 'Containerization' },
  { name: 'Kubernetes', category: 'devops', icon: SiKubernetes, color: 'bg-blue-600', description: 'Container Orchestration' },
  { name: 'GitHub Actions', category: 'devops', icon: FaGithub, color: 'bg-gray-700', description: 'CI/CD Pipelines' },
  { name: 'Nginx', category: 'devops', icon: SiNginx, color: 'bg-green-700', description: 'Web Server & Proxy' },
  { name: 'AWS', category: 'devops', icon: SiAmazon, color: 'bg-yellow-600', description: 'Cloud Services' },

  // --- Tools ---
  { name: 'Git', category: 'tools', icon: FaGitAlt, color: 'bg-red-600', description: 'Version Control' },
  { name: 'VS Code', category: 'tools', icon: VscVscode, color: 'bg-blue-400', description: 'Code Editor' },
  { name: 'Postman', category: 'tools', icon: SiPostman, color: 'bg-orange-500', description: 'API Testing' },
  { name: 'Figma', category: 'tools', icon: FaFigma, color: 'bg-purple-500', description: 'UI/UX Design' },

  // --- Languages ---
  { name: 'Python', category: 'languages', icon: FaPython, color: 'bg-green-400', description: 'General-purpose' },
  { name: 'C++', category: 'languages', icon: SiCplusplus, color: 'bg-indigo-600', description: 'High-performance' },
  { name: 'SQL', category: 'languages', icon: SiMysql, color: 'bg-teal-500', description: 'Database Queries' },

  // --- AI & GenAI ---
  { name: 'OpenAI API', category: 'ai', icon: SiOpenai, color: 'bg-purple-600', description: 'LLMs & Chatbots' },
  { name: 'LangChain', category: 'ai', icon: SiLangchain, color: 'bg-pink-600', description: 'AI App Framework' },
  { name: 'Pinecone', category: 'ai', icon: "", color: 'bg-yellow-600', description: 'Vector Database' },
  { name: 'TensorFlow', category: 'ai', icon: SiTensorflow, color: 'bg-orange-400', description: 'ML Framework' },
  { name: 'PyTorch', category: 'ai', icon: SiPytorch, color: 'bg-red-500', description: 'Deep Learning' },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card')
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [activeCategory])

  const filteredSkills = skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-reveal">
            My <span className="text-blue-400">Tech Stack</span>
          </h2>
          <p className="text-gray-400">
            Technologies and languages I work with to build digital experiences
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 slide-in-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-200 skill-card stagger-animation"
              >
                <div className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                  {Icon ? <Icon className="w-6 h-6" /> : <span className="text-xs">No Icon</span>}
                </div>
                <h4 className="font-semibold mb-1">{skill.name}</h4>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
