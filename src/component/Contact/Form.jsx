
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';
import Button from '@/component/common/Button';
import '@/styles/Form.css';
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      "service_u7oe2mj",
      "template_6ls444v",
      formData,
      "RtuUhXybVxkV88RbG",
    ).then((response)=>{
      console.log('success',response.status, response.text);
      

    },
     (err)=>{
      console.error("failed...", err);
      alert('failed to send')
      
    });
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          subject: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div 
      className="contact-form-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="form-header">
        <h2 className="form-title">Send a Message</h2>
        <p className="form-subtitle">Fill out the form below and I'll get back to you within 24-48 hours</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name and Email Row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Your Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="form-input"
            />
          </div>
        </div>

        {/* Phone and Service Row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service" className="form-label">
              Service Interested In <span className="required">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="full-stack">Full-Stack Development</option>
              <option value="design-systems">Design Systems</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject 
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className="form-input"
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
            rows="6"
            className="form-textarea"
          />
        </div>

        {/* Submit Button */}
        <Button 
          variant="primary"
          size="large"
          disabled={isSubmitting || submitStatus === 'success'}
          
          icon={
            isSubmitting ? <Loader size={20} className="spinning" /> : 
            submitStatus === 'success' ? '✓' : <Send size={20} />
          }
        >
          {isSubmitting ? 'Sending...' : 
           submitStatus === 'success' ? 'Message Sent!' : 
           'Send Message'}
        </Button>
       

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div 
            className="form-message success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✓ Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div 
            className="form-message error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✗ Something went wrong. Please try again.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}





export  function ContactInfoCard({ icon, title, info, link, linkText }) {
  return (
    <motion.div 
      className="contact-info-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="info-icon-wrapper">
        {icon}
      </div>

      <div className="info-content">
        <h3 className="info-title">{title}</h3>
        <p className="info-text">{info}</p>
        {link && (
          <a href={link} className="info-link" target="_blank" rel="noopener noreferrer">
            {linkText || 'Contact →'}
          </a>
        )}
      </div>
    </motion.div>
  );
}


import { Github, Linkedin, Twitter, Mail, Dribbble, MessageCircle } from 'lucide-react';


export  function SocialLinks() {
  const socials = [
    { icon: <Github size={24} />, name: 'GitHub', link: 'https://github.com/Unyime-77', username: '@Unyime-77' },
    { icon: <Linkedin size={24} />, name: 'LinkedIn', link: 'www.linkedin.com/in/abiaxabia', username: 'Abia Abia' },
    { icon: <Twitter size={24} />, name: 'Twitter', link: 'https://x.com/Unyime_X', username: 'Unyime' },
    { icon: <Dribbble size={24} />, name: 'Dribbble', link: 'https://dribbble.com/abia-abia', username: 'abia abia' },
    { icon: <Mail size={24} />, name: 'Email', link: 'mailto:nsikanunyime3@gmail.com', username: 'nsikannyime3l@gmail.com' },
    { icon: <MessageCircle size={24} />, name: 'Discord', link: 'https://discordapp.com/users/1370066410159476857', username: 'Sucre' }
  ];

  return (
    <motion.div 
      className="social-links-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="social-title">Connect With Me</h3>
      <p className="social-subtitle">Find me on these platforms</p>

      <div className="social-links-grid">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="social-icon">{social.icon}</div>
            <div className="social-info">
              <span className="social-name">{social.name}</span>
              <span className="social-username">{social.username}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}