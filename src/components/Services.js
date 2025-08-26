import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Shield, BarChart3, Cpu, Database } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Bot size={32} />,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that learn and adapt to your business processes.",
      features: ["Machine Learning", "Predictive Analytics", "Smart Workflows"]
    },
    {
      icon: <Zap size={32} />,
      title: "Process Optimization",
      description: "Streamline operations and eliminate bottlenecks with our advanced process mapping.",
      features: ["Workflow Analysis", "Performance Metrics", "Continuous Improvement"]
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with full compliance and audit trail capabilities.",
      features: ["End-to-End Encryption", "GDPR Compliance", "Audit Logging"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Business Intelligence",
      description: "Real-time insights and analytics to drive data-driven decision making.",
      features: ["Custom Dashboards", "Real-time Reports", "KPI Tracking"]
    },
    {
      icon: <Cpu size={32} />,
      title: "System Integration",
      description: "Seamlessly connect your existing tools and platforms for unified operations.",
      features: ["API Integration", "Legacy Systems", "Cloud Migration"]
    },
    {
      icon: <Database size={32} />,
      title: "Data Management",
      description: "Comprehensive data solutions for storage, processing, and analytics.",
      features: ["Data Warehousing", "ETL Processes", "Data Quality"]
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive automation solutions tailored to your business needs</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Ready to Start Your Automation Journey?</h3>
          <p>Join us as we build the future of business automation together</p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 