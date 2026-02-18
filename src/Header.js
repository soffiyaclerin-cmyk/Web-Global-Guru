import React from 'react';
import logo from './assets/Mainlogo.png'; 
import { Search, Mic, Settings, Scan, QrCode } from 'lucide-react'; 
import { motion } from 'framer-motion';

const Header = ({ onProfileClick, t, currentView }) => {
  const deepBlush = '#DD7A83';
  const textBrown = '#4A1D1F';
  const lightBlush = '#E3BFC3';

  return (
    <nav style={styles.header}>
      <div style={styles.logoArea}>
        <div style={styles.logoBg}>
          <img src={logo} alt="Logo" style={styles.logoImg} />
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.brandTitle}>Web Global <span style={{color: deepBlush}}>Guru</span></h1>
          <p style={styles.tagline}>{t.brandTagline}</p>
        </div>
      </div>

      <div style={styles.searchWrapper}>
        <div style={styles.searchContainer}>
          {/* 1. சர்ச் ஐகான் */}
          <Search size={18} color="#7D5A5C" style={{ flexShrink: 0 }} />
          
          {/* 2. இன்புட் பாக்ஸ் */}
          <input type="text" placeholder="Search website or apps..." style={styles.searchInput} />
          
          {/* 3. வலது பக்க ஐகான்கள் (குரூப் செய்யப்பட்டது) */}
          <div style={styles.rightIconsGroup}>
            <Scan size={18} color="#7D5A5C" style={styles.iconHover} title="Scan" />
            <Mic size={18} color={deepBlush} style={styles.iconHover} title="Voice Search" />
            
            {/* மெல்லிய கோடு (Divider) */}
            <div style={styles.divider}></div>
            
            {/* QR ஸ்கேனர் இப்போது உள்ளே உள்ளது */}
            <QrCode size={18} color="#4A1D1F" style={styles.iconHover} title="QR Code" />
          </div>
        </div>
      </div>

      <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
        <motion.div 
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={styles.settingsBtn} 
          onClick={onProfileClick}
        >
          <Settings size={20} color={deepBlush} />
        </motion.div>
      </div>
    </nav>
  );
};

const styles = {
  header: {
    height: '75px', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    position: 'sticky', top: 0, zIndex: 2000,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(15px)',
    borderBottom: '1px solid rgba(221, 122, 131, 0.2)',
  },
  logoArea: { display: 'flex', alignItems: 'center', gap: '12px' },
  logoBg: { background: '#fff', padding: '5px', borderRadius: '10px', display: 'flex', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  logoImg: { width: '30px', height: '30px' },
  brandTitle: { fontSize: '18px', fontWeight: '800', margin: 0, color: '#4A1D1F', letterSpacing: '-0.5px' },
  tagline: { fontSize: '8px', fontWeight: '700', color: '#7D5A5C', margin: 0, textTransform: 'uppercase' },
  
  searchWrapper: { flex: 1, display: 'flex', justifyContent: 'center', margin: '0 40px' },
  searchContainer: { 
    width: '100%', maxWidth: '520px', padding: '8px 18px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '12px',
    backgroundColor: '#fff', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', border: '1px solid rgba(221, 122, 131, 0.15)'
  },
  searchInput: { flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', color: '#4A1D1F' },
  
  rightIconsGroup: { display: 'flex', alignItems: 'center', gap: '15px' },
  divider: { width: '1px', height: '18px', backgroundColor: '#eee' },
  iconHover: { cursor: 'pointer', opacity: 0.8 },
  
  settingsBtn: { 
    width: '42px', height: '42px', borderRadius: '14px', background: '#fff', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(221, 122, 131, 0.2)', border: '1px solid #fff'
  }
};

export default Header;