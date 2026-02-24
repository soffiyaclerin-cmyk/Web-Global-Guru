import React, { useState, useEffect } from 'react';
import logo from './assets/Mainlogo.png'; 
import { Search, Mic, Settings, Scan, QrCode, Menu, X } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ onProfileClick, t, currentView, isMobile, isTablet, isDesktop }) => {
  const primary = '#6366F1';
  const textDark = '#1E293B';
  const textMuted = '#64748B';

  const [menuOpen, setMenuOpen] = useState(false);

  // Responsive values
  const getHeaderPadding = () => {
    if (isMobile) return '12px 16px';
    if (isTablet) return '15px 24px';
    return '20px 40px';
  };

  const getLogoSize = () => {
    if (isMobile) return '28px';
    return '32px';
  };

  const getSearchPadding = () => {
    if (isMobile) return '8px 12px';
    return '10px 20px';
  };

  const getSettingsSize = () => {
    if (isMobile) return '36px';
    if (isTablet) return '40px';
    return '44px';
  };

  return (
    <header style={{
      ...styles.header,
      padding: getHeaderPadding(),
      position: isDesktop ? 'sticky' : 'relative',
    }}>
      {/* Logo Area */}
      <div style={styles.logoArea}>
        <div style={{
          ...styles.logoBg,
          padding: isMobile ? '4px' : '6px'
        }}>
          <img 
            src={logo} 
            alt="Logo" 
            style={{
              ...styles.logoImg,
              width: getLogoSize(),
              height: getLogoSize()
            }} 
          />
        </div>
        {(!isMobile) && (
          <div style={styles.textContainer}>
            <h1 style={{
              ...styles.brandTitle,
              fontSize: isTablet ? '14px' : '18px'
            }}>
              Web Global <span style={{color: primary}}>Guru</span>
            </h1>
            {!isTablet && (
              <p style={{
                ...styles.tagline,
                fontSize: isDesktop ? '9px' : '8px'
              }}>
                {t?.brandTagline}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Search Box - Hidden on very small mobile */}
      {!isMobile && (
        <div style={{
          ...styles.searchWrapper,
          maxWidth: isTablet ? '400px' : '550px',
          flex: isDesktop ? 1 : 0
        }}>
          <div style={{
            ...styles.searchContainer,
            padding: getSearchPadding(),
          }}>
            <Search size={isTablet ? 16 : 18} color={textMuted} style={{ flexShrink: 0 }} />
            
            <input 
              type="text" 
              placeholder="Search website or apps..." 
              style={{
                ...styles.searchInput,
                fontSize: isTablet ? '13px' : '14px'
              }} 
            />
            
            <div style={{
              ...styles.rightIconsGroup,
              gap: isTablet ? '10px' : '15px'
            }}>
              <Scan size={18} color={textMuted} style={styles.iconHover} />
              <Mic size={18} color={primary} style={styles.iconHover} />
              <div style={styles.divider}></div>
              <QrCode size={18} color={textDark} style={styles.iconHover} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search Icon */}
      {isMobile && (
        <motion.div 
          whileTap={{ scale: 0.9 }}
          style={styles.mobileSearchBtn}
          onClick={() => {}}
        >
          <Search size={18} color={primary} />
        </motion.div>
      )}

      {/* Settings Button */}
      <div style={{display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px'}}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <motion.div 
            whileTap={{ scale: 0.9 }}
            style={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={20} color={textDark} />
            ) : (
              <Menu size={20} color={textDark} />
            )}
          </motion.div>
        )}

        <motion.div 
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            ...styles.settingsBtn,
            width: getSettingsSize(),
            height: getSettingsSize(),
          }} 
          onClick={onProfileClick}
        >
          <Settings size={isMobile ? 18 : 20} color={primary} />
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={styles.mobileMenu}
          >
            <div style={styles.mobileMenuItem}>
              <Search size={18} />
              <span>Search</span>
            </div>
            <div style={styles.mobileMenuItem}>
              <QrCode size={18} />
              <span>Scan QR</span>
            </div>
            <div style={styles.mobileMenuItem}>
              <Mic size={18} />
              <span>Voice Search</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const styles = {
  header: {
    minHeight: isMobile => isMobile ? '60px' : '80px',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    position: 'sticky', 
    top: 0, 
    zIndex: 2000,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
  },
  logoArea: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px',
    flexShrink: 0 
  },
  logoBg: { 
    background: '#fff', 
    borderRadius: '12px', 
    display: 'flex', 
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.15)',
    border: '1px solid rgba(99, 102, 241, 0.1)'
  },
  logoImg: {
    borderRadius: '8px'
  },
  brandTitle: { 
    fontWeight: '800', 
    margin: 0, 
    color: '#1E293B', 
    letterSpacing: '-0.5px',
    whiteSpace: 'nowrap'
  },
  tagline: { 
    fontWeight: '700', 
    color: '#64748B', 
    margin: 0, 
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  searchWrapper: { 
    display: 'flex', 
    justifyContent: 'center', 
    margin: '0 20px'   ,
    minWidth: '200px'
  },
  searchContainer: { 
    width: '100%', 
    borderRadius: '100px', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px',
    backgroundColor: '#F8FAFC', 
    border: '1px solid #E2E8F0',
    overflow: 'hidden',
    transition: '0.3s'
  },
  searchInput: { 
    flex: 1, 
    border: 'none', 
    background: 'transparent', 
    outline: 'none', 
    color: '#1E293B',
    width: '100%',
    minWidth: '80px',
    fontFamily: 'inherit'
  },
  rightIconsGroup: { 
    display: 'flex', 
    alignItems: 'center', 
    flexShrink: 0 
  },
  divider: { 
    width: '1px', 
    height: '18px', 
    backgroundColor: '#E2E8F0', 
    margin: '0 5px' 
  },
  iconHover: { cursor: 'pointer', opacity: 0.8 },
  settingsBtn: { 
    borderRadius: '14px', 
    background: '#F8FAFC', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.2)', 
    border: '1px solid #fff',
    flexShrink: 0
  },
  mobileSearchBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: '#F8FAFC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #E2E8F0'
  },
  menuBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: '#F8FAFC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #E2E8F0'
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#fff',
    padding: '16px',
    borderRadius: '0 0 16px 16px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  mobileMenuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 16px',
    borderRadius: '12px',
    background: '#F8FAFC',
    color: '#1E293B',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer'
  }
};

export default Header;
