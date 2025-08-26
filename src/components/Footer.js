import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
          { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' }
    ],
    services: [
      { name: 'AI Automation', href: '#services' },
      { name: 'Process Optimization', href: '#services' },
      { name: 'System Integration', href: '#services' },
      { name: 'Consulting', href: '#services' }
    ],
    support: [
          { name: 'Help Center', href: '#help' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Contact Support', href: '#contact' },
    { name: 'Status Page', href: '#status' }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#linkedin', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#twitter', label: 'Twitter' },
    { icon: <Github size={20} />, href: '#github', label: 'GitHub' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Har Automations</h3>
            <p>
              A fresh startup transforming businesses through intelligent automation solutions. 
              We help new companies establish efficient operations from day one.
            </p>
            
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@harautomations.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 555 137 9545</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Innovation Drive, Tech City</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Har Automations. All rights reserved.</p>
            
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 