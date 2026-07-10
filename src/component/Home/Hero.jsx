import { useState } from 'react';
import { motion } from 'framer-motion';
import Greeting from '@/component/Home/Greeting';
import TypingRoles from '@/component/Home/Introduction';
import Button from '@/component/common/Button';
import PortfolioModal from '@/component/Home/PortfolioModal';
import '@/styles/Hero.css';
import sucreedit  from '@/assets/sucreedit.png';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userName = localStorage.getItem('userName') || 'Explorer';

  const navigate= useNavigate()

  const handleHireMe = () => {
    console.log('Navigating to contact');
    // Add your navigation logic
    navigate('/Contact');
  };

  const handleViewPortfolio = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Side - Text Content */}
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Greeting userName={userName} />
            <TypingRoles name="NSIKAN UNYIME" />
            
            {/* Buttons positioned further down */}
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button 
                variant="primary" 
                size="large"
                onClick={handleHireMe}
                icon="→"
              >
                Hire Me
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                onClick={handleViewPortfolio}
              >
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Avatar (Hidden on Mobile) */}
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="avatar-wrapper">
              <div className="avatar-glow"></div>
              <img 
                src={sucreedit}
                alt="Sucre Avatar" 
                className="hero-avatar"
              />
              {/* Floating elements around avatar */}
              <motion.div 
                className="float-element element-1"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💻
              </motion.div>
              <motion.div 
                className="float-element element-2"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                🎨
              </motion.div>
              <motion.div 
                className="float-element element-3"
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
