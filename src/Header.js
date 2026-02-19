import React, { useState, useEffect } from 'react';
import logo from './assets/Mainlogo.png'; 
import { Search, Mic, Settings, Scan, QrCode } from 'lucide-react'; 
import { motion } from 'framer-motion';

const Header = ({ onProfileClick, t, currentView }) => {
  const deepBlush = '#DD7A83';
  const textBrown = '#4A1D1F';

  // ஸ்கிரீன் அளவைக் கண்டறிய State
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 600;
  const isTablet = windowWidth >= 600 && windowWidth < 1024;

  return (
    <nav style={{
      ...styles.header,
      padding: isMobile ? '0 15px' : '0 40px'
    }}>
      {/* 1. Logo Area */}
      <div style={styles.logoArea}>
        <div style={styles.logoBg}>
          <img src={logo} alt="Logo" style={styles.logoImg} />
        </div>
        {!isMobile && (
          <div style={styles.textContainer}>
            <h1 style={styles.brandTitle}>Web Global <span style={{color: deepBlush}}>Guru</span></h1>
            {!isMobile && windowWidth > 800 && <p style={styles.tagline}>{t.brandTagline}</p>}
          </div>
        )}
      </div>

      {/* 2. Search Box Area - இது திரைக்கு ஏற்ப அகலம் மாறும் */}
      <div style={{
        ...styles.searchWrapper,
        margin: isMobile ? '0 10px' : '0 20px'
      }}>
        <div style={{
          ...styles.searchContainer,
          padding: isMobile ? '6px 12px' : '8px 18px',
        }}>
          <Search size={isMobile ? 16 : 18} color="#7D5A5C" style={{ flexShrink: 0 }} />
          
          <input 
            type="text" 
            placeholder={isMobile ? "Search..." : "Search website or apps..."} 
            style={styles.searchInput} 
          />
          
          <div style={{...styles.rightIconsGroup, gap: isMobile ? '8px' : '15px'}}>
            {!isMobile && <Scan size={18} color="#7D5A5C" style={styles.iconHover} />}
            <Mic size={isMobile ? 16 : 18} color={deepBlush} style={styles.iconHover} />
            
            <div style={styles.divider}></div>
            
            <QrCode size={isMobile ? 16 : 18} color="#4A1D1F" style={styles.iconHover} />
          </div>
        </div>
      </div>

      {/* 3. Settings Button */}
      <div style={{display:'flex', alignItems:'center', flexShrink: 0}}>
        <motion.div 
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            ...styles.settingsBtn,
            width: isMobile ? '36px' : '42px',
            height: isMobile ? '36px' : '42px',
          }} 
          onClick={onProfileClick}
        >
          <Settings size={isMobile ? 18 : 20} color={deepBlush} />
        </motion.div>
      </div>
    </nav>
  );
};

const styles = {
  header: {
    height: '75px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    position: 'sticky', 
    top: 0, 
    zIndex: 2000,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(15px)',
    borderBottom: '1px solid rgba(221, 122, 131, 0.2)',
    width: '100%',
    boxSizing: 'border-box'
  },
  logoArea: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px',
    flexShrink: 0 // மொபைலில் லோகோ சுருங்காமல் இருக்க
  },
  logoBg: { 
    background: '#fff', 
    padding: '5px', 
    borderRadius: '10px', 
    display: 'flex', 
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)' 
  },
  logoImg: { width: '30px', height: '30px' },
  brandTitle: { 
    fontSize: '16px', 
    fontWeight: '800', 
    margin: 0, 
    color: '#4A1D1F', 
    letterSpacing: '-0.5px',
    whiteSpace: 'nowrap'
  },
  tagline: { 
    fontSize: '8px', 
    fontWeight: '700', 
    color: '#7D5A5C', 
    margin: 0, 
    textTransform: 'uppercase' 
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  searchWrapper: { 
    flex: 1, 
    display: 'flex', 
    justifyContent: 'center', 
    maxWidth: '520px', // அதிகபட்ச அகலம்
    minWidth: '50px'   // மிகச்சிறிய அகலம்
  },
  searchContainer: { 
    width: '100%', 
    borderRadius: '100px', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px',
    backgroundColor: '#fff', 
    boxShadow: '0 2px 15px rgba(0,0,0,0.03)', 
    border: '1px solid rgba(221, 122, 131, 0.15)',
    overflow: 'hidden'
  },
  searchInput: { 
    flex: 1, 
    border: 'none', 
    background: 'transparent', 
    outline: 'none', 
    fontSize: '14px', 
    color: '#4A1D1F',
    width: '100%',
    minWidth: '20px'
  },
  rightIconsGroup: { 
    display: 'flex', 
    alignItems: 'center', 
    flexShrink: 0 
  },
  divider: { 
    width: '1px', 
    height: '18px', 
    backgroundColor: '#eee', 
    margin: '0 5px' 
  },
  iconHover: { cursor: 'pointer', opacity: 0.8 },
  settingsBtn: { 
    borderRadius: '12px', 
    background: '#fff', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(221, 122, 131, 0.2)', 
    border: '1px solid #fff',
    flexShrink: 0
  }
};

export default Header;