import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: <Users size={32} />, number: "25+", label: "Early Adopters" },
    { icon: <Award size={32} />, number: "3+", label: "Innovation Awards" },
    { icon: <Clock size={32} />, number: "24/7", label: "Support" },
    { icon: <TrendingUp size={32} />, number: "100%", label: "Client Satisfaction" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Har Automations</h2>
          <p className="about-subtitle">
            A fresh startup revolutionizing business automation with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="about-text">
            <p>
              Har Automations is a newly established company born from the vision to democratize automation for businesses 
              of all sizes. We're passionate about making advanced AI and automation technologies accessible to startups 
              and growing companies who need to compete in today's digital-first world.
            </p>
            
            <p>
              As a startup ourselves, we understand the challenges of building efficient processes from the ground up. 
              Our team brings together fresh perspectives and innovative approaches to help other new businesses 
              establish scalable operations through intelligent automation from day one.
            </p>
          </div>

                      <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <div>
                  <h4>Startup Mindset</h4>
                  <p>Agile, innovative, and ready to disrupt the status quo</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <div>
                  <h4>Growth Partners</h4>
                  <p>We grow together with our clients as partners</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">💡</div>
                <div>
                  <h4>Fresh Perspectives</h4>
                  <p>New approaches to old problems with modern solutions</p>
                </div>
              </div>
            </div>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">🏢</div>
                <span>Har Automations HQ</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="stats-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              variants={statVariants}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About; 