'use client'

import { useEffect, useRef } from 'react'
import { Monitor, Database, Cloud, Bot, Layers } from 'lucide-react'

const skillCards = [
  {
    icon: Monitor ,
    title: 'Frontend Development',
    color: 'bg-blue-600',
    skills: [
      'React', 
      'Next.js', 
      'JavaScript/TypeScript', 
      'Tailwind CSS', 
      'Framer Motion', 
      'Vite', 
      'Axios', 
      'React Context', 
      'React Router', 
      'UI/UX Best Practices'
    ],
  },
  {
    icon: Database ,
    title: 'Backend Development',
    color: 'bg-green-600',
    skills: [
      'Node.js & Express.js', 
      'MongoDB & Mongoose', 
      'REST APIs & GraphQL', 
      'Authentication & Authorization (JWT, Passport.js)', 
      'Cloudinary & File Storage', 
      'Database Design & ORM Concepts'
    ],
  },
  {
    icon: Cloud ,
    title: 'DevOps & Cloud',
    color: 'bg-purple-600',
    skills: [
      'Git & GitHub', 
      'CI/CD Pipelines', 
      'Vercel & Netlify', 
      'Docker & Containerization', 
      'Cloud Deployment (AWS/GCP basics)', 
      'Domain & SSL Management', 
      'Monitoring & Logging'
    ],
  },
  {
    icon: Bot,
    title: 'Generative AI & LLMs',
    color: 'bg-pink-600',
    skills: [
      'LangChain & LLMs', 
      'OpenAI GPT/ChatGPT Integration', 
      'Prompt Engineering', 
      'FastAPI for AI APIs', 
      'Data Visualization & Dashboards', 
      'Generative AI Workflows'
    ],
  },
  {
    icon: Layers , // replace with system design icon if available
    title: 'System Design & Architecture',
    color: 'bg-orange-600',
    skills: [
      'Scalable Web Architecture', 
      'REST & Microservices Design', 
      'Database Schema Design', 
      'Load Balancing & Caching Strategies', 
      'High Availability & Fault Tolerance', 
      'Design Patterns & Best Practices'
    ],
  },
];




export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll<HTMLElement>('.about-animate')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 about-animate">
          <h2 className="text-4xl font-bold mb-4 text-reveal">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack developer with a passion for creating exceptional digital experiences and
            sharing knowledge through content creation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side Text */}
          <div className="about-animate">
            <h3 className="text-2xl font-bold mb-6 animated-underline">
              Crafting Digital Excellence
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in both frontend and backend
              technologies. I specialize in building performant, accessible, and visually stunning
              web applications.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              My DevOps skills ensure seamless deployment and hosting solutions using platforms like
              Vercel, Netlify, and custom domain configurations. I'm also an active content creator,
              sharing my knowledge through tutorials, articles, and open-source contributions.
            </p>

            <div className="flex items-center space-x-4 bounce-in about-animate">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
                <div className="text-xs text-gray-500">Delivered successfully</div>
              </div>
            </div>
          </div>

          {/* Right Side Skill Cards */}
          <div className="grid grid-cols-2 gap-6">
            {skillCards.map((card, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-200 about-animate"
              >
                <div
                  className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3">{card.title}</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  {card.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
