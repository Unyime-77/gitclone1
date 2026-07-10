import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import Button from '@/component/common/Button';
import '@/styles/CTASection.css';

export default function GetInTouchCard({ 
  variant = 'default', // 'default', 'minimal', 'colorful'
  title = "Let's Work Together",
  subtitle = "Have a project in mind? I'd love to hear about it.",
  showIcons = true,
  animated = true
}) {
  const handleContact = () => {
    console.log('Navigating to contact page');
    // Add your navigation logic
    // navigate('/contact'); or window.location.href = '/contact';
  };

  const content = (
    <div className={`get-in-touch-card ${variant}`}>
      {/* Background Decorations */}
      <div className="card-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </div>

      <div className="card-content">
        {/* Icons (optional) */}
        {showIcons && (
          <div className="floating-icons">
            <motion.div 
              className="icon-wrapper icon-1"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Mail size={32} />
            </motion.div>
            <motion.div 
              className="icon-wrapper icon-2"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <MessageCircle size={32} />
            </motion.div>
          </div>
        )}

        {/* Main Content */}
        <div className="card-main-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">{subtitle}</p>

          {/* CTA Button */}
          <div className="card-cta">
            <Button 
              variant="primary" 
              size="large"
              onClick={handleContact}
              icon={<ArrowRight size={20} />}
            >
              Get In Touch
            </Button>
          </div>

          {/* Alternative Contact Info */}
          <div className="quick-contact">
            <span className="contact-label">or email me directly at</span>
            <a href="mailto:nsikanunyime3@gmail.com" className="contact-email">
              nsikanunyime3@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}