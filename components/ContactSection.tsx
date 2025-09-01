'use client'

import { useEffect } from 'react'
import { MessageCircle, Globe, Phone, Github, Linkedin, Twitter, Instagram, Send, Mail, ExternalLink, MapPin } from 'lucide-react'

const socialPlatforms = [
  { name: 'GitHub', icon: Github, color: 'bg-slate-800 hover:bg-slate-700', link: 'https://github.com/abhishekkalme' },
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-600 hover:bg-blue-700', link: 'https://www.linkedin.com/in/abhishek-kalme/' },
  { name: 'Twitter', icon: Twitter, color: 'bg-cyan-500 hover:bg-cyan-600', link: 'https://twitter.com/Abhishek_kalme' },
  { name: 'Instagram', icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700', link: 'https://instagram.com/' },
  { name: 'Telegram', icon: Send, color: 'bg-blue-500 hover:bg-blue-600', link: 'https://t.me/ur_abd' }
]

const contactMethods = [
  { icon: Mail, color: 'text-blue-400', label: 'Email Me', value: 'abhishekkalme0@gmail.com', link: 'mailto:abhishekkalme0@gmail.com' },
  { icon: MessageCircle, color: 'text-green-400', label: 'WhatsApp', value: '+91 XXXXXXXXXX', link: 'https://wa.me/91XXXXXXXXXX' },
  { icon: MapPin, color: 'text-orange-400', label: 'Location', value: 'Indore, Madhya Pradesh, India', link: 'https://www.google.com/maps?q=Indore,+Madhya Pradesh,+India' }
]

export default function ContactSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedEls = entry.target.querySelectorAll('.contact-animation')
            animatedEls.forEach((el, index) => {
              setTimeout(() => el.classList.add('animate'), index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    const section = document.getElementById('contact')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center bounce-in">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-reveal">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-gray-400">
            Whether you have a project in mind or just want to chat tech, I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Find Me Online */}
          <div className="contact-animation stagger-animation">
            <h3 className="text-xl font-semibold mb-6 flex items-center animated-underline">
              <Globe className="w-5 h-5 mr-2 text-blue-400" />
              Find Me Online
            </h3>

            <div className="overflow-hidden relative w-full">
              <div className="flex animate-marquee whitespace-nowrap gap-6">
                {socialPlatforms.concat(socialPlatforms).map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${platform.color} p-4 rounded-xl text-center cursor-pointer flex-shrink-0 hover:scale-105 transition-all duration-200`}
                  >
                    <platform.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">{platform.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="contact-animation stagger-animation">
            <h3 className="text-xl font-semibold mb-6 flex items-center animated-underline">
              <Phone className="w-5 h-5 mr-2 text-green-400" />
              Direct Contact
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-slate-700/50 transition-all duration-200 cursor-pointer group contact-animation stagger-animation"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                    <div>
                      <div className="text-sm text-gray-400">{method.label}</div>
                      <div className="font-medium break-words">{method.value}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 contact-animation stagger-animation">
          <p className="text-gray-400 mb-6">Ready to start your project?</p>
          <a
            href="mailto:abhishekkalme0@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 mx-auto hover:scale-105 pulse-glow"
          >
            <Mail className="w-4 h-4" />
            <span>Send Me An Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
