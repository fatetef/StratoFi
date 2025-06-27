import { motion } from 'framer-motion';
import { Github, Twitter, MessageCircle, Send } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const footerSections = [
    {
      title: 'Community & Socials',
      links: [
        { text: 'Twitter', href: '#' },
        { text: 'Discord', href: '#' },
        { text: 'Telegram', href: '#' },
        { text: 'Medium', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Audits', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' }
      ]
    },
    {
      title: 'Protocol',
      links: [
        { text: 'Governance', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Bug Bounty', href: '#' },
        { text: 'Analytics', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-[hsl(0,0%,10%)]/50 border-t border-[hsl(0,0%,16%)]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <img 
                src="attached_assets/ChatGPT Image Jun 26, 2025, 09_37_33 PM_1750954066084.png" 
                alt="StratoFi Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              DeFi reimagined for every token. High-yield passive income powered by Solana and cross-chain liquidity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-[hsl(160,100%,42%)] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-[hsl(160,100%,42%)] transition-colors"
                    >
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t border-[hsl(0,0%,16%)]/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">© 2024 StratoFi. All rights reserved.</p>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mt-4 md:mt-0">
            <motion.div 
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>All systems operational</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
