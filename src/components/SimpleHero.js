import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Bot, Zap, Shield } from 'lucide-react';
import './SimpleHero.css';

const SimpleHero = () => {
  const features = [
    { icon: <Bot size={24} />, title: "AI-Powered", description: "Intelligent automation solutions" },
    { icon: <Zap size={24} />, title: "Fast & Efficient", description: "Streamlined operations" },
    { icon: <Shield size={24} />, title: "Secure", description: "Enterprise-grade security" }
  ];

  const contactInfo = [
    { icon: <Mail size={20} />, detail: "hello@harautomations.com", link: "mailto:hello@harautomations.com" },
    { icon: <Phone size={20} />, detail: "+1 555 137 9545", link: "tel:+15551234567" },
    { icon: <MapPin size={20} />, detail: "123 Innovation Drive, Tech City", link: "#" }
  ];

  return (
    <section className="simple-hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Zap size={16} />
            <span>Fresh Startup</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Har Automations
            <span className="gradient-text"> Smart Solutions</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A fresh startup revolutionizing business automation with cutting-edge technology. 
            We help new businesses establish efficient operations from day one.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <div className="card-icon">🤖</div>
              <span>AI-Powered</span>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">⚡</div>
              <span>Fast & Efficient</span>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🔒</div>
              <span>Secure</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        id="features"
        className="features-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="features-container">
          <h2>What We Offer</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        id="contact"
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <p>Ready to start your automation journey? Let's build something amazing together!</p>
          
          <div className="contact-methods">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-method"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <span>{info.detail}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SimpleHero; 