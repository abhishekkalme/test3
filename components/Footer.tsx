'use client'

import { useState, useEffect } from 'react'
import { Github, Twitter, Linkedin, Instagram, Mail, MessageCircle, ArrowUp } from 'lucide-react'

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/abhishekkalme' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-kalme/' },
  { icon: Twitter, href: 'https://twitter.com/Abhishek_kalme' },
  { icon: Instagram, href: 'https://instagram.com/' },
  { icon: Mail, href: 'mailto:abhishekkalme0@gmail.com' },
  { icon: MessageCircle, href: 'https://t.me/ur_abd' }
]

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const footerLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

export default function Footer({ scrollToSection }: FooterProps) {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="bg-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">AK</span>
                </div>
                <span className="font-bold text-lg">Abhishek Kalme</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Crafting exceptional digital experiences with cutting-edge technology 
                and innovative design solutions that drive real business results.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">• Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">• Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">
                Join my newsletter for exclusive content, latest projects, and tech 
                insights delivered straight to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors duration-200"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">No spam ever. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>© 2025 Abhishek Kalme. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.map((link, index) => (
                <span
                  key={index}
                  className="hover:text-white cursor-pointer transition-colors duration-200"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50
          ${showTopBtn ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  )
}
