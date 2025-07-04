import { motion } from "framer-motion"
import { Instagram, Linkedin, Mail, Dribbble } from "lucide-react"

export function PortfolioFooter() {
  console.log('Rendering PortfolioFooter')

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Mail, href: "mailto:shannon@example.com", label: "Email" },
  ]

  return (
    <footer className="py-12 px-6 border-t border-white/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            Shannon Lockett
          </h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-400 text-sm">
            <p>&copy; 2024 Shannon Lockett. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}