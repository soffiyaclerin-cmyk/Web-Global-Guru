import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { RenderModuleContent, RoleGateway } from './Settings';
import Mainlogo from './assets/Mainlogo.png'; 
import { 
  User, History, Heart, Bell, DollarSign, MessageSquare, Shield, Terminal, PlusCircle, Activity, 
  RotateCw, BarChart3, ChevronRight, ArrowLeft, Info, Edit3, Lock, Trash2, Zap, Globe, 
  Eye, Settings2, CreditCard, LayoutGrid, CheckCircle2, TrendingUp, Share2, Briefcase, Filter, 
  Star, Camera, Key, ShieldCheck, Database, BarChart, HardDrive, FileText, BadgeCheck, 
  UploadCloud, CloudLightning, Landmark, PieChart, AlertCircle, ExternalLink, Link, Copy, Download, 
  Search, Check, Clock, Image, Laptop, Smartphone, Video, FileCheck, MessageCircle, BarChart2, Server, HelpCircle, 
  XCircle, AlertTriangle, Plus, Mail, Users, Building, Code, Globe2, LockOpen, Fingerprint,
  Wallet, CreditCard as CardIcon, Activity as ActivityIcon,TrendingUp as TrendIcon,
  CheckCircle, X, Copy as CopyIcon, RefreshCw, Package, File, Shield as ShieldIcon,
  Play, Pause, Edit, Trash, MoreVertical, Menu, LogOut, UserCheck, UserPlus, DollarCircle,
  PieChart as PieChartIcon, BarChart as BarChartIcon, ArrowUpRight, ArrowDownRight,
  Clock3, Calendar, MapPin, Phone, AtSign, ShieldAlert, Grid, Compass, Award, Smartphone as MobileIcon, Layers,
  Headphones, ShoppingBag, Music, Gamepad2, Rocket
} from 'lucide-react';

function App() {
  const [view, setView] = useState('home'); 
  const [selectedRole, setSelectedRole] = useState(null); 
  const [activeModule, setActiveModule] = useState(null); 
  const [activeTab, setActiveTab] = useState('For You');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Theme colors - Modern palette
  const primary = '#6366F1'; // Indigo
  const primaryLight = '#818CF8';
  const primaryDark = '#4F46E5';
  const accent = '#EC4899'; // Pink accent
  const success = '#10B981';
  const warning = '#F59E0B';
  const danger = '#EF4444';
  
  // Neutral colors
  const dark = '#1E293B';
  const gray = '#64748B';
  const lightGray = '#E2E8F0';
  const lightest = '#F8FAFC';
  const white = '#FFFFFF';

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoints: Mobile < 640px, Tablet 640-1024px, Desktop > 1024px
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const goBack = () => {
    if (activeModule) setActiveModule(null);
    else if (selectedRole) setSelectedRole(null);
    else setView('home');
  };

  useEffect(() => { window.scrollTo(0, 0); }, [selectedRole, activeModule]);

  const banners = [
    { id: 1, title: "Global Dev Tools", desc: "Deploy React apps in seconds with our new cloud engine.", btn: "Start Building", color: "#4A1D1F", icon: <Terminal size={40} /> },
    { id: 2, title: "Analytics Pro", desc: "Track every visitor with real-time heatmaps.", btn: "View Charts", color: "#6366F1", icon: <BarChart3 size={40} /> },
    { id: 3, title: "Secure Guard", desc: "Enterprise-grade SSL & Firewall protection included.", btn: "Secure Now", color: "#10B981", icon: <ShieldCheck size={40} /> },
    { id: 4, title: "SEO Masterclass", desc: "Rank #1 on search engines with our AI keywords.", btn: "Learn SEO", color: "#F59E0B", icon: <TrendingUp size={40} /> },
    { id: 5, title: "Client Portal", desc: "Manage billing and invoices in one seamless dashboard.", btn: "Manage", color: "#EC4899", icon: <Users size={40} /> },
    { id: 6, title: "Cloud Storage", desc: "50GB Free storage for all new developer accounts.", btn: "Claim Offer", color: "#3B82F6", icon: <CloudLightning size={40} /> },
    { id: 7, title: "Domain Hunter", desc: "Find the perfect premium domain for your brand.", btn: "Search", color: "#8B5CF6", icon: <Globe size={40} /> },
    { id: 8, title: "24/7 Support", desc: "Our expert engineers are here to help you debug.", btn: "Chat Now", color: "#EF4444", icon: <MessageSquare size={40} /> },
  ];

  useEffect(() => {
    if (view !== 'home' || isPaused) return;
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [view, isPaused, banners.length]);

  const navTabs = [
    { name: "For You", icon: <Compass size={14} /> },
    { name: "Top Charts", icon: <BarChart2 size={14} /> },
    { name: "Categories", icon: <Grid size={14} /> },
    { name: "Editor's Choice", icon: <Award size={14} /> },
    { name: "New Apps", icon: <PlusCircle size={14} /> },
    { name: "Trending", icon: <TrendingUp size={14} /> },
  ];

  const popularApps = [
    { id: 1, name: "Social", color: "#E1306C", icon: <Camera size={22}/> },
    { id: 2, name: "Music", color: "#1DB954", icon: <Headphones size={22}/> },
    { id: 3, name: "Chat", color: "#25D366", icon: <MessageCircle size={22}/> },
    { id: 4, name: "Video", color: "#FF0000", icon: <Play size={22}/> },
    { id: 5, name: "Cloud", color: "#4285F4", icon: <CloudLightning size={22}/> },
    { id: 6, name: "Wallet", color: "#662D91", icon: <Wallet size={22}/> },
    { id: 7, name: "Maps", color: "#34A853", icon: <MapPin size={22}/> },
    { id: 8, name: "News", color: "#F4B400", icon: <Globe size={22}/> },
    { id: 9, name: "Docs", color: "#4A90E2", icon: <FileText size={22}/> },
    { id: 10, name: "Bank", color: "#0F9D58", icon: <Landmark size={22}/> },
    { id: 11, name: "Games", color: "#FF4500", icon: <Gamepad2 size={22}/> },
    { id: 12, name: "Shop", color: "#FF9900", icon: <ShoppingBag size={22}/> },
  ];

  const roleData = {
    user: {
      title: "User Settings",
      modules: [
        { id: 'u_profile', title: 'Profile', sub: 'Identity & Security', icon: <User/> },
        { id: 'u_history', title: 'Browse History', sub: 'Past activities', icon: <History/> },
        { id: 'u_saved', title: 'Saved Sites', sub: 'Favorites & Folders', icon: <Heart/> },
        { id: 'u_notify', title: 'Notification', sub: 'Alerts & Updates', icon: <Bell/> },
        { id: 'u_refer', title: 'Refer and Earn', sub: 'Income & Stats', icon: <DollarSign/> },
        { id: 'u_feed', title: 'Feedback Share', sub: 'Rate experience', icon: <MessageSquare/> },
        { id: 'u_legal', title: 'Legal and Policy', sub: 'Terms & Privacy', icon: <Shield/> },
      ]
    },
    developer: {
      title: "Developer Portal",
      modules: [
        { id: 'd_profile', title: 'Developer Profile', sub: 'KYC & Account', icon: <User/> },
        { id: 'd_publish', title: 'Publish New Website', sub: 'Deployment Engine', icon: <UploadCloud/> },
        { id: 'd_buy_domain', title: 'Buy Global Domain', sub: 'Domain Search & Purchase', icon: <Globe/> },
        { id: 'd_buy_ssl', title: 'Buy SSL Certificate', sub: 'Security & Encryption', icon: <Lock/> },
        { id: 'd_status', title: 'Website Publish Status', sub: 'Workflow tracker', icon: <Activity/> },
        { id: 'd_renewal_website', title: 'Renewal Website', sub: 'Hosting & Server', icon: <RefreshCw/> },
        { id: 'd_renewal_domain', title: 'Renewal Domain', sub: 'Domain Expiry', icon: <RotateCw/> },
        { id: 'd_seo', title: 'SEO Ads Run', sub: 'Marketing & Analysis', icon: <TrendingUp/> },
        { id: 'd_project_list', title: 'Project List', sub: 'Manage Projects', icon: <Briefcase/> },
        { id: 'd_performance', title: 'Projects Performance', sub: 'Analytics & Stats', icon: <BarChart3/> },
        { id: 'd_invite', title: 'Invite Developers', sub: 'Team Management', icon: <UserPlus/> },
        { id: 'd_refer', title: 'Refer & Earn (Dev)', sub: 'Commission stats', icon: <DollarSign/> },
        { id: 'd_feed', title: 'Feedback Share', sub: 'Support tickets', icon: <MessageSquare/> },
        { id: 'd_legal', title: 'Legal & Policy', sub: 'Dev Agreement', icon: <Shield/> },
      ]
    },
    client: {
      title: "Website Client Workspace",
      modules: [
        { id: 'c_profile', title: 'Client Profile', sub: 'Business Identity', icon: <User/> },
        { id: 'c_performance', title: 'Website Performance', sub: 'Traffic & Analytics', icon: <BarChart3/> },
        { id: 'c_status', title: 'Website Status', sub: 'Site Health & Expiry', icon: <Zap/> },
        { id: 'c_renewal', title: 'Renewal Website', sub: 'Invoices & Plans', icon: <RotateCw/> },
        { id: 'c_ads', title: 'Website Ads Run', sub: 'Campaign ROI', icon: <TrendingUp/> },
        { id: 'c_refer', title: 'Refer Website', sub: 'Partner Rewards', icon: <Share2/> },
        { id: 'c_feedback', title: 'View Website Feedback', sub: 'Customer Reviews', icon: <MessageSquare/> },
        { id: 'c_legal', title: 'Legal & Policy', sub: 'Service SLA', icon: <Shield/> },
      ]
    },
    admin: {
      title: "Web Global Guru Admin",
      modules: [
        { id: 'a_profile', title: 'Admin Profile', sub: 'Master security', icon: <ShieldAlert/> },
        { id: 'a_listing', title: 'Listing Websites View', sub: 'Global Audit', icon: <LayoutGrid/> },
        { id: 'a_approve', title: 'Website Approval Settings', sub: 'Compliance Control', icon: <CheckCircle2/> },
        { id: 'a_renew_list', title: 'Renewal Website List', sub: 'Revenue Tracking', icon: <RotateCw/> },
        { id: 'a_ads_view', title: 'Website Ads View', sub: 'Ad Monitoring', icon: <Eye/> },
        { id: 'a_ads_set', title: 'Web Store Ads Settings', sub: 'Monetization', icon: <Settings2/> },
        { id: 'a_payments', title: 'Global Payments List', sub: 'Financial Ledger', icon: <CreditCard/> },
        { id: 'a_profit', title: 'Global Profit Checker', sub: 'Revenue Analytics', icon: <BarChart2/> },
        { id: 'a_legal', title: 'Legal and Policy Management', sub: 'Compliance Edit', icon: <Shield/> },
      ]
    }
  };

  // Responsive styles based on screen size
  const getContainerWidth = () => {
    if (isDesktop) return '1400px';
    if (isTablet) return '100%';
    return '100%';
  };

  const getPadding = () => {
    if (isDesktop) return '0 40px';
    if (isTablet) return '0 24px';
    return '0 16px';
  };

  const getBannerHeight = () => {
    if (isDesktop) return '320px';
    if (isTablet) return '280px';
    return '220px';
  };

  return (
    <div style={{
      ...styles.appWrapper,
      background: isDesktop ? `linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)` : lightest
    }}>
      <Header 
        t={{brandTagline: "SILK WEB SYSTEMS"}} 
        onProfileClick={() => setView('settings')} 
        currentView={view}
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
      />
      
      <div style={{
        ...styles.mainBody,
        padding: isDesktop ? '30px 0' : '20px 0'
      }}>
        <div style={{
          ...styles.mainContainer,
          maxWidth: getContainerWidth(),
          padding: getPadding()
        }}>
          <AnimatePresence mode="wait">
            {view === 'home' && (
              <motion.main 
                key="home" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                style={{
                  ...styles.homeView,
                  maxWidth: isDesktop ? '1200px' : '100%',
                  margin: '0 auto'
                }}
              >
                {/* Navigation Tabs */}
                <div style={{
                  ...styles.navScrollContainer,
                  justifyContent: isDesktop ? 'center' : 'flex-start',
                  overflowX: isMobile ? 'auto' : 'visible',
                  WebkitOverflowScrolling: 'touch',
                }}>
                  {navTabs.map((tab) => (
                    <button 
                      key={tab.name} 
                      style={{
                        ...(activeTab === tab.name ? styles.navTabActive : styles.navTab),
                        padding: isMobile ? '8px 14px' : '10px 20px',
                        fontSize: isMobile ? '11px' : '13px',
                        flexShrink: 0,
                        minWidth: isMobile ? 'auto' : 'auto',
                      }} 
                      onClick={() => setActiveTab(tab.name)}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {tab.icon}
                        {tab.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Popular Apps Section */}
                <div style={styles.popularSection}>
                  <div style={{
                    ...styles.sectionHeaderRow,
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    gap: isMobile ? '8px' : '0'
                  }}>
                    <h3 style={styles.sectionTitleSmall}>Popular Apps</h3>
                    <span style={styles.seeAllLink}>See All</span>
                  </div>
                  <div style={{
                    ...styles.appScrollContainer,
                    paddingBottom: isMobile ? '10px' : '15px'
                  }}>
                    {popularApps.map((app) => (
                      <motion.div 
                        key={app.id} 
                        style={{
                          ...styles.appItem,
                          minWidth: isMobile ? '55px' : '65px'
                        }} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                      >
                        <div style={{
                          ...styles.appIconCircle, 
                          background: app.color,
                          width: isMobile ? '50px' : '60px',
                          height: isMobile ? '50px' : '60px'
                        }}>
                          {React.cloneElement(app.icon, { size: isMobile ? 18 : 22 })}
                        </div>
                        <span style={{
                          ...styles.appName,
                          maxWidth: isMobile ? '55px' : '65px',
                          fontSize: isMobile ? '10px' : '11px'
                        }}>
                          {app.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Banner Section */}
                <div style={{
                  ...styles.bannerContainer,
                  height: getBannerHeight(),
                  borderRadius: isDesktop ? '32px' : '20px'
                }} 
                onMouseEnter={() => setIsPaused(true)} 
                onMouseLeave={() => setIsPaused(false)}
                >
                  <AnimatePresence mode='wait'>
                    <motion.div 
                      key={currentBanner} 
                      initial={{ opacity: 0, x: 50 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -50 }} 
                      transition={{ duration: 0.6, ease: "easeInOut" }} 
                      style={{
                        ...styles.bannerCard, 
                        backgroundColor: banners[currentBanner].color,
                        borderRadius: isDesktop ? '32px' : '20px',
                        padding: isDesktop ? '50px' : isMobile ? '25px' : '35px'
                      }}
                    >
                      <div style={{
                        ...styles.bannerContent,
                        maxWidth: isMobile ? '100%' : '60%'
                      }}>
                        <div style={styles.bannerIconBox}>{banners[currentBanner].icon}</div>
                        <h2 style={{
                          ...styles.bannerTitle,
                          fontSize: isDesktop ? '36px' : isMobile ? '22px' : '28px'
                        }}>
                          {banners[currentBanner].title}
                        </h2>
                        <p style={{
                          ...styles.bannerDesc,
                          fontSize: isMobile ? '12px' : '14px'
                        }}>
                          {banners[currentBanner].desc}
                        </p>
                        <button style={{
                          ...styles.bannerBtn,
                          padding: isMobile ? '8px 18px' : '10px 24px',
                          fontSize: isMobile ? '12px' : '14px'
                        }} 
                        onClick={() => setView('settings')}
                        >
                          {banners[currentBanner].btn}
                        </button>
                      </div>
                      <div style={{
                        ...styles.bannerDeco,
                        width: isDesktop ? '300px' : '200px',
                        height: isDesktop ? '300px' : '200px',
                        right: isDesktop ? '-50px' : '-20px'
                      }}></div>
                    </motion.div>
                  </AnimatePresence>
                  <div style={styles.indicatorContainer}>
                    {banners.map((_, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setCurrentBanner(idx)} 
                        style={{
                          ...styles.indicatorDot, 
                          backgroundColor: currentBanner === idx ? '#fff' : 'rgba(255,255,255,0.4)', 
                          transform: currentBanner === idx ? 'scale(1.3)' : 'scale(1)',
                          width: isMobile ? '6px' : '8px',
                          height: isMobile ? '6px' : '8px'
                        }} 
                      />
                    ))}
                  </div>
                </div>

                {/* Quick Access Section */}
                <div style={styles.quickAccessSection}>
                  <h3 style={{
                    ...styles.sectionHeader,
                    fontSize: isMobile ? '14px' : '16px'
                  }}>
                    Quick Access
                  </h3>
                  <div style={{
                    ...styles.quickGrid,
                    gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
                    gap: isMobile ? '10px' : '15px'
                  }}>
                    <motion.div 
                      style={{
                        ...styles.quickCard,
                        padding: isMobile ? '15px' : '20px'
                      }} 
                      onClick={() => setView('settings')} 
                      whileHover={{ scale: 1.02, y: -2 }} 
                      whileTap={{ scale: 0.98 }}
                    >
                      <Terminal size={isMobile ? 20 : 24} color={primary}/>
                      <span style={{ fontSize: isMobile ? '11px' : '13px' }}>Developer</span>
                    </motion.div>
                    <motion.div 
                      style={{
                        ...styles.quickCard,
                        padding: isMobile ? '15px' : '20px'
                      }} 
                      onClick={() => setView('settings')} 
                      whileHover={{ scale: 1.02, y: -2 }} 
                      whileTap={{ scale: 0.98 }}
                    >
                      <Briefcase size={isMobile ? 20 : 24} color={primary}/>
                      <span style={{ fontSize: isMobile ? '11px' : '13px' }}>Clients</span>
                    </motion.div>
                    <motion.div 
                      style={{
                        ...styles.quickCard,
                        padding: isMobile ? '15px' : '20px'
                      }} 
                      onClick={() => setView('settings')} 
                      whileHover={{ scale: 1.02, y: -2 }} 
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShieldCheck size={isMobile ? 20 : 24} color={primary}/>
                      <span style={{ fontSize: isMobile ? '11px' : '13px' }}>Admin</span>
                    </motion.div>
                    {isDesktop && (
                      <>
                        <motion.div 
                          style={{...styles.quickCard, padding: '20px'}} 
                          onClick={() => setView('settings')} 
                          whileHover={{ scale: 1.02, y: -2 }} 
                          whileTap={{ scale: 0.98 }}
                        >
                          <Globe size={24} color={primary}/>
                          <span style={{ fontSize: '13px' }}>Domains</span>
                        </motion.div>
                        <motion.div 
                          style={{...styles.quickCard, padding: '20px'}} 
                          onClick={() => setView('settings')} 
                          whileHover={{ scale: 1.02, y: -2 }} 
                          whileTap={{ scale: 0.98 }}
                        >
                          <BarChart3 size={24} color={primary}/>
                          <span style={{ fontSize: '13px' }}>Analytics</span>
                        </motion.div>
                        <motion.div 
                          style={{...styles.quickCard, padding: '20px'}} 
                          onClick={() => setView('settings')} 
                          whileHover={{ scale: 1.02, y: -2 }} 
                          whileTap={{ scale: 0.98 }}
                        >
                          <Shield size={24} color={primary}/>
                          <span style={{ fontSize: '13px' }}>Security</span>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              </motion.main>
            )}

            {view === 'settings' && (
              <motion.div 
                key="settings" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0 }} 
                style={{
                  ...styles.dashboardCard,
                  borderRadius: isDesktop ? '32px' : isTablet ? '20px' : '16px',
                  margin: isMobile ? '10px 8px 100px' : isTablet ? '15px auto 120px' : '20px auto 120px',
                  maxWidth: isDesktop ? '900px' : isTablet ? '90%' : '100%',
                  width: isMobile ? 'calc(100% - 16px)' : '100%',
                  padding: isMobile ? '0' : '0',
                }}
              >
                <div style={{
                  ...styles.cardHeader,
                  padding: isMobile ? '20px' : '30px 40px',
                  flexDirection: isMobile ? 'row' : 'row',
                  gap: isMobile ? '12px' : '20px'
                }}>
                  <button 
                    onClick={goBack} 
                    style={{
                      ...styles.backCircle,
                      width: isMobile ? '38px' : '45px',
                      height: isMobile ? '38px' : '45px'
                    }}
                  >
                    <ArrowLeft size={isMobile ? 18 : 20} color={primary} />
                  </button>
                  <h2 style={{
                    ...styles.sheetTitle,
                    fontSize: isMobile ? '16px' : '20px'
                  }}>
                    {activeModule ? activeModule.title : selectedRole ? roleData[selectedRole].title : "Control Center"}
                  </h2>
                </div>
                <div style={{
                  ...styles.scrollArea,
                  padding: isMobile ? '15px' : '25px 35px 100px 35px'
                }}>
                  <AnimatePresence mode="wait">
                    {!selectedRole && (
                      <RoleGateway 
                        key="gateway" 
                        onSelect={(r) => setSelectedRole(r)} 
                        theme={primary} 
                      />
                    )}
                    {selectedRole && !activeModule && (
                      <div style={styles.verticalList}>
                        {roleData[selectedRole].modules.map(mod => (
                          <div 
                            key={mod.id} 
                            onClick={() => setActiveModule(mod)} 
                            style={{
                              ...styles.clickableRowCard,
                              padding: isMobile ? '14px 18px' : '18px 25px',
                              borderRadius: isMobile ? '18px' : '25px'
                            }}
                          >
                            <div style={{
                              ...styles.iconBoxSmall, 
                              background: `${primary}11`,
                              width: isMobile ? '36px' : '40px',
                              height: isMobile ? '36px' : '40px'
                            }}>
                              {React.cloneElement(mod.icon, {size: isMobile ? 16 : 18, color: primary})}
                            </div>
                            <div style={{flex: 1}}>
                              <div style={{
                                ...styles.mTitle,
                                fontSize: isMobile ? '13px' : '15px'
                              }}>
                                {mod.title}
                              </div>
                              <div style={{
                                ...styles.mSub,
                                fontSize: isMobile ? '10px' : '12px'
                              }}>
                                {mod.sub}
                              </div>
                            </div>
                            <ChevronRight size={isMobile ? 16 : 18} color="#cbd5e1" />
                          </div>
                        ))}
                      </div>
                    )}
                    {activeModule && (
                      <RenderModuleContent 
                        key="renderContent" 
                        module={activeModule} 
                        themeColor={primary}
                        isMobile={isMobile}
                        isTablet={isTablet}
                        isDesktop={isDesktop}
                      />
                    )}
                  </AnimatePresence>
                  <div style={{
                    ...styles.vCard,
                    marginTop: isMobile ? '25px' : '40px',
                    padding: isMobile ? '12px' : '15px'
                  }}>
                    <Info size={isMobile ? 14 : 16} color={primary} />
                    <span style={{
                      ...styles.vText,
                      fontSize: isMobile ? '9px' : '11px'
                    }}>
                      ENGINE v1.2.6 • SECURE CONNECTION
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer isMobile={isMobile} isDesktop={isDesktop} />
    </div>
  );
}

const styles = {
  appWrapper: { 
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    fontFamily: "'Inter', 'Segoe UI', sans-serif"
  },
  mainBody: { 
    flex: 1, 
    display: 'flex', 
    alignItems: 'flex-start', 
    justifyContent: 'center'
  },
  mainContainer: { 
    width: '100%', 
    margin: '0 auto'
  },
  homeView: { 
    textAlign: 'center' 
  },
  dashboardCard: { 
    backgroundColor: '#ffffff', 
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.08)', 
    overflow: 'hidden', 
    minHeight: '450px'
  },
  cardHeader: { 
    display: 'flex', 
    alignItems: 'center', 
    borderBottom: '1px solid #F1F5F9' 
  },
  backCircle: { 
    borderRadius: '12px', 
    background: '#F1F5F9', 
    border: 'none', 
    cursor: 'pointer', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  sheetTitle: { 
    fontSize: '20px', 
    fontWeight: '800', 
    color: '#1E293B', 
    margin: 0 
  },
  scrollArea: { 
    overflowY: 'auto' 
  }, 
  verticalList: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px' 
  },
  clickableRowCard: { 
    background: '#F8FAFC', 
    border: '1px solid #E2E8F0', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '20px', 
    cursor: 'pointer', 
    transition: '0.3s' 
  },
  iconBoxSmall: { 
    borderRadius: '12px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  mTitle: { 
    fontWeight: '700', 
    color: '#1E293B' 
  },
  mSub: { 
    color: '#94a3b8' 
  },
  vCard: { 
    padding: '15px', 
    background: '#F1F5F9', 
    borderRadius: '16px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '10px' 
  },
  vText: { 
    color: '#64748B', 
    fontWeight: '700' 
  },
  navScrollContainer: { 
    display: 'flex', 
    flexWrap: 'nowrap',
    gap: '10px', 
    overflowX: 'auto', 
    overflowY: 'hidden',
    padding: '0 5px 15px 5px', 
    whiteSpace: 'nowrap', 
    scrollbarWidth: 'none', 
    marginBottom: '20px',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
    msOverflowStyle: 'none',
  },
  navTab: { 
    padding: '10px 20px', 
    borderRadius: '20px', 
    background: 'transparent', 
    border: '1px solid transparent', 
    color: '#64748B', 
    fontWeight: '600', 
    cursor: 'pointer', 
    transition: '0.2s', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px', 
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    flexShrink: 0,
  },
  navTabActive: { 
    padding: '10px 20px', 
    borderRadius: '20px', 
    background: '#6366F1', 
    border: '1px solid #6366F1', 
    color: '#ffffff', 
    fontWeight: '700', 
    cursor: 'pointer', 
    transition: '0.2s', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px', 
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    flexShrink: 0,
  },
  popularSection: { 
    marginBottom: '30px', 
    textAlign: 'left' 
  },
  sectionHeaderRow: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '0 5px', 
    marginBottom: '15px' 
  },
  sectionTitleSmall: { 
    fontSize: '18px', 
    fontWeight: '800', 
    color: '#1E293B', 
    margin: 0 
  },
  seeAllLink: { 
    fontSize: '13px', 
    fontWeight: '600', 
    color: '#6366F1', 
    cursor: 'pointer' 
  },
  appScrollContainer: { 
    display: 'flex', 
    gap: '20px', 
    overflowX: 'auto', 
    padding: '5px 5px 15px 5px', 
    scrollbarWidth: 'none', 
    msOverflowStyle: 'none', 
    scrollSnapType: 'x mandatory' 
  },
  appItem: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    cursor: 'pointer', 
    scrollSnapAlign: 'start' 
  },
  appIconCircle: { 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: '8px', 
    color: '#fff', 
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)', 
    border: '3px solid #fff' 
  },
  appName: { 
    fontWeight: '600', 
    color: '#1E293B', 
    textAlign: 'center', 
    whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis' 
  },
  bannerContainer: { 
    position: 'relative', 
    width: '100%', 
    overflow: 'hidden', 
    boxShadow: '0 20px 60px rgba(0,0,0,0.12)', 
    marginBottom: '30px' 
  },
  bannerCard: { 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    color: '#fff' 
  },
  bannerContent: { 
    position: 'relative', 
    zIndex: 2 
  },
  bannerTitle: { 
    fontWeight: '800', 
    margin: '0 0 10px 0', 
    lineHeight: 1.1 
  },
  bannerDesc: { 
    opacity: 0.9, 
    marginBottom: '20px' 
  },
  bannerBtn: { 
    background: '#fff', 
    color: '#000', 
    border: 'none', 
    borderRadius: '10px', 
    fontWeight: '700', 
    cursor: 'pointer' 
  },
  bannerIconBox: { 
    marginBottom: '15px', 
    opacity: 0.8 
  },
  bannerDeco: { 
    position: 'absolute', 
    right: '-20px', 
    bottom: '-40px', 
    borderRadius: '50%', 
    background: 'rgba(255,255,255,0.1)' 
  },
  indicatorContainer: { 
    position: 'absolute', 
    bottom: '20px', 
    left: '0', 
    right: '0', 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '8px', 
    zIndex: 10 
  },
  indicatorDot: { 
    borderRadius: '50%', 
    cursor: 'pointer', 
    transition: 'all 0.3s' 
  },
  quickAccessSection: { 
    textAlign: 'left', 
    marginTop: '20px' 
  },
  quickGrid: { 
    display: 'grid',
    gap: '15px' 
  },
  quickCard: { 
    background: '#fff', 
    borderRadius: '20px', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '10px', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)', 
    cursor: 'pointer', 
    fontWeight: '600', 
    color: '#1E293B',
    border: '1px solid #E2E8F0',
    transition: '0.3s'
  },
  sectionHeader: { 
    fontWeight: '800', 
    color: '#1E293B', 
    margin: '20px 0 15px 5px', 
    textTransform: 'uppercase' 
  },
};

export default App;
