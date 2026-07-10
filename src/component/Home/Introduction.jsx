import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/Introduction.css';

export default function TypingRoles({ name = 'NSIKAN UNYIME' }) {
  const roles = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Blockchain Developer',
    'UX Writer',
    'Product Designer',
    'Frontend Developer',
    'Creative Developer',
    'Technical Writer'
  ];

  const prefixes = ["I'm a", "Let me be your"];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentPrefixIndex, setCurrentPrefixIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause at end
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting animation
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Delete speed (faster)
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next role
        const nextRoleIndex = (currentRoleIndex + 1) % roles.length;
        
        // Check if we completed a full cycle
        if (nextRoleIndex === 0) {
          const newCycleCount = cycleCount + 1;
          setCycleCount(newCycleCount);
          // Switch prefix after each complete cycle
          setCurrentPrefixIndex((newCycleCount) % prefixes.length);
        }
        
        setCurrentRoleIndex(nextRoleIndex);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentRoleIndex, roles, cycleCount, prefixes.length]);

  return (
    <div className="typing-roles">
      <motion.h1 
        className="name-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className='norm'>my name is</span>  <br /><span className="name-highlight">{name}</span>
      </motion.h1>

      <div className="role-container">
        <motion.span 
          className="role-prefix"
          key={currentPrefixIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          {prefixes[currentPrefixIndex]}
        </motion.span>
        
        <div className="role-text-wrapper">
          <span className="role-text">
            {displayedText}
            <span className="cursor">|</span>
          </span>
        </div>
        <p className="role-subtext">
            I am a rare blend of Software Developer and UI/UX Designer specializing in creating pixel-perfect user interfaces, user experiences, and writing the robust code to bring them to life.
        </p>
      </div>
    </div>
  );
}