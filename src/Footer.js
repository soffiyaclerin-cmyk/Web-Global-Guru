import React, { useState } from 'react';
import { Gamepad2, LayoutGrid, User, Store, Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ isMobile, isDesktop }) => {
  const [activeTab, setActiveTab] = useState('store');

  const primary = '#6366F1';
  const textDark = '#1E293B';
  const textMuted = '#64748B';

  const tabs = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'search', label: 'Search', icon: <Search size={20} /> },
    { id: 'games', label: 'Games', icon: <Gamepad2 size={20} /> },
    { id: 'store', label: 'Store', icon: <Store size={20} /> },
    { id: 'apps', label: 'Apps', icon: <LayoutGrid size={20} /> },
    { id: 'you', label: 'You', icon: <User size={20} /> },
  ];

  // Desktop footer - more minimal
  if (isDesktop) {
    return (
      <div style={styles.desktopFooter}>
        <div style={styles.desktopFooterContent}>
          <span style={styles.footerLink}>About</span>
          <span style={styles.footerLink}>Privacy</span>
          <span style={styles.footerLink}>Terms</span>
          <span style={styles.footerLink}>Support</span>
          <span style={styles.copyright}>© 2024 Web Global Guru</span>
        </div>
      </div>
    );
  }

  // Mobile/Tablet footer - bottom navigation
  return (
    <div style={{
      ...styles.footerContainer,
      width: isMobile ? '95%' : '90%',
      maxWidth: isMobile ? 'none' : '600px',
      borderRadius: isMobile ? '24px' : '28px',
      bottom: isMobile ? '10px' : '20px',
      padding: isMobile ? '8px 12px' : '10px 16px',
    }}>
      <div style={{
        ...styles.tabWrapper,
        justifyContent: isMobile ? 'space-around' : 'space-evenly'
      }}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.div 
              key={tab.id} 
              style={{
                ...styles.tabItem,
                padding: isMobile ? '4px 0' : '6px 0',
              }} 
              onClick={() => setActiveTab(tab.id)}
              whileTap={{ scale: 0.9 }}
            >
              {/* Active Background Pill */}
              <motion.div 
                style={{
                  ...styles.activePill,
                  backgroundColor: isActive ? `${primary}15` : 'transparent',
                  width: isMobile ? '44px' : '50px',
                  height: isMobile ? '28px' : '32px',
                }}
              >
                {React.cloneElement(tab.icon, { 
                  strokeWidth: isActive ? 2.5 : 2,
                  size: isMobile ? 18 : 20,
                  color: isActive ? primary : textMuted
                })}
              </motion.div>
              
              {/* Label */}
              <span style={{
                ...styles.tabLabel,
                color: isActive ? textDark : textMuted,
                fontWeight: isActive ? '700' : '500',
                fontSize: isMobile ? '9px' : '10px',
              }}>
                {tab.label}
              </span>

              {/* Active Dot Animation */}
              {isActive && (
                <motion.div 
                  layoutId="activeDot"
                  style={{
                    ...styles.activeDot, 
                    background: primary,
                    width: isMobile ? '4px' : '5px',
                    height: isMobile ? '4px' : '5px',
                  }}
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
    left: '50%',
    transform: 'translateX(-50%)',
    // Glassmorphism effect - more refined
    background: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.15), 0 2px 8px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  tabWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  tabItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    flex: 1,
  },
  activePill: {
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s ease',
  },
  tabLabel: {
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.3px',
    textTransform: 'none',
    marginTop: '2px',
  },
  activeDot: {
    borderRadius: '50%',
    position: 'absolute',
    bottom: '-4px',
  },
  // Desktop footer styles
  desktopFooter: {
    position: 'relative',
    background: '#fff',
    borderTop: '1px solid #E2E8F0',
    padding: '20px 0',
    marginTop: 'auto'
  },
  desktopFooterContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap'
  },
  footerLink: {
    color: '#64748B',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 0.2s'
  },
  copyright: {
    color: '#94a3b8',
    fontSize: '12px',
    fontWeight: '500'
  }
};

export default Footer;
