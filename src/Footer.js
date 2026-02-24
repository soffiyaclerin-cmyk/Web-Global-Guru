import React, { useState } from 'react';
import { Gamepad2, LayoutGrid, User, Store } from 'lucide-react'; // Changed Tag to User
import { motion } from 'framer-motion';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('store');

  const deepBlush = '#DD7A83';
  // const lightBlush = '#E3BFC3'; // Unused variable removed for cleanliness
  const textDark = '#4A1D1F';

  const tabs = [
    { id: 'games', label: 'Games', icon: <Gamepad2 size={20} /> },
    { id: 'store', label: 'Store', icon: <Store size={20} /> },
    { id: 'apps', label: 'Apps', icon: <LayoutGrid size={20} /> },
    // Replaced 'Offers' with 'You'
    { id: 'you', label: 'You', icon: <User size={20} /> }, 
  ];

  return (
    <div style={styles.footerContainer}>
      <div style={styles.tabWrapper}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.div 
              key={tab.id} 
              style={styles.tabItem} 
              onClick={() => setActiveTab(tab.id)}
              whileTap={{ scale: 0.9 }} 
            >
              {/* Pill Shape Highlight */}
              <div style={{
                ...styles.iconContainer,
                backgroundColor: isActive ? `${deepBlush}22` : 'transparent', 
                color: isActive ? deepBlush : '#7D5A5C',
              }}>
                {React.cloneElement(tab.icon, { strokeWidth: isActive ? 2.5 : 2 })}
              </div>
              
              {/* Label */}
              <span style={{
                ...styles.tabLabel,
                color: isActive ? textDark : '#7D5A5C',
                fontWeight: isActive ? '800' : '500',
              }}>
                {tab.label}
              </span>

              {/* Active Dot Animation */}
              {isActive && (
                <motion.div 
                  layoutId="activeDot"
                  style={{...styles.activeDot, background: deepBlush}}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  footerContainer: {
    position: 'fixed',
    bottom: '15px', 
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '500px',
    height: '65px',
    // Glassmorphism effect
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(15px)',
    borderRadius: '24px',
    border: '1px solid rgba(221, 122, 131, 0.2)',
    boxShadow: '0 10px 30px rgba(221, 122, 131, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '0 10px',
  },
  tabWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    padding: '5px 0',
    flex: 1,
  },
  iconContainer: {
    width: '55px',
    height: '30px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s ease',
    marginBottom: '2px',
  },
  tabLabel: {
    fontSize: '10px',
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.3px',
    textTransform: 'uppercase',
  },
  activeDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    marginTop: '4px',
    position: 'absolute',
    bottom: '-2px',
  }
};

export default Footer;