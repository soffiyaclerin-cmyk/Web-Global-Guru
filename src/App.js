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

  const deepBlush = '#DD7A83';
  const lightBlush = '#E3BFC3';
  const darkBrown = '#4A1D1F';
  const textBrown = '#4A1D1F';
  const mutedText = '#7D5A5C';

  const goBack = () => {
    if (activeModule) setActiveModule(null);
    else if (selectedRole) setSelectedRole(null);
    else setView('home');
  };

  useEffect(() => { window.scrollTo(0, 0); }, [selectedRole, activeModule]);

  const banners = [
    { id: 1, title: "Global Dev Tools", desc: "Deploy React apps in seconds with our new cloud engine.", btn: "Start Building", color: "#4A1D1F", icon: <Terminal size={40} /> },
    { id: 2, title: "Analytics Pro", desc: "Track every visitor with real-time heatmaps.", btn: "View Charts", color: "#DD7A83", icon: <BarChart3 size={40} /> },
    { id: 3, title: "Secure Guard", desc: "Enterprise-grade SSL & Firewall protection included.", btn: "Secure Now", color: "#2E3B55", icon: <ShieldCheck size={40} /> },
    { id: 4, title: "SEO Masterclass", desc: "Rank #1 on search engines with our AI keywords.", btn: "Learn SEO", color: "#D97706", icon: <TrendingUp size={40} /> },
    { id: 5, title: "Client Portal", desc: "Manage billing and invoices in one seamless dashboard.", btn: "Manage", color: "#059669", icon: <Users size={40} /> },
    { id: 6, title: "Cloud Storage", desc: "50GB Free storage for all new developer accounts.", btn: "Claim Offer", color: "#2563EB", icon: <CloudLightning size={40} /> },
    { id: 7, title: "Domain Hunter", desc: "Find the perfect premium domain for your brand.", btn: "Search", color: "#7C3AED", icon: <Globe size={40} /> },
    { id: 8, title: "24/7 Support", desc: "Our expert engineers are here to help you debug.", btn: "Chat Now", color: "#DB2777", icon: <MessageSquare size={40} /> },
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

  return (
    <div style={styles.appWrapper}>
      <Header t={{brandTagline: "SILK WEB SYSTEMS"}} onProfileClick={() => setView('settings')} currentView={view} />
      <div style={styles.mainBody}>
        <div style={styles.mainContainer}>
          <AnimatePresence mode="wait">
            {view === 'home' && (
              <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.homeView}>
                 <div style={styles.navScrollContainer}>
                   {navTabs.map((tab) => (
                     <button key={tab.name} style={activeTab === tab.name ? styles.navTabActive : styles.navTab} onClick={() => setActiveTab(tab.name)}>
                       {tab.icon}
                       {tab.name}
                     </button>
                   ))}
                 </div>

                 <div style={styles.popularSection}>
                   <div style={styles.sectionHeaderRow}>
                      <h3 style={styles.sectionTitleSmall}>Popular Apps</h3>
                      <span style={styles.seeAllLink}>See All</span>
                   </div>
                   <div style={styles.appScrollContainer}>
                     {popularApps.map((app) => (
                       <motion.div key={app.id} style={styles.appItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                         <div style={{...styles.appIconCircle, background: app.color}}>{app.icon}</div>
                         <span style={styles.appName}>{app.name}</span>
                       </motion.div>
                     ))}
                   </div>
                 </div>

                 <div style={styles.bannerContainer} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                   <AnimatePresence mode='wait'>
                     <motion.div key={currentBanner} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.6, ease: "easeInOut" }} style={{...styles.bannerCard, backgroundColor: banners[currentBanner].color}}>
                       <div style={styles.bannerContent}>
                         <div style={styles.bannerIconBox}>{banners[currentBanner].icon}</div>
                         <h2 style={styles.bannerTitle}>{banners[currentBanner].title}</h2>
                         <p style={styles.bannerDesc}>{banners[currentBanner].desc}</p>
                         <button style={styles.bannerBtn} onClick={() => setView('settings')}>{banners[currentBanner].btn}</button>
                       </div>
                       <div style={styles.bannerDeco}></div>
                     </motion.div>
                   </AnimatePresence>
                   <div style={styles.indicatorContainer}>
                     {banners.map((_, idx) => (
                       <div key={idx} onClick={() => setCurrentBanner(idx)} style={{...styles.indicatorDot, backgroundColor: currentBanner === idx ? '#fff' : 'rgba(255,255,255,0.4)', transform: currentBanner === idx ? 'scale(1.3)' : 'scale(1)'}} />
                     ))}
                   </div>
                 </div>

                 <div style={styles.quickAccessSection}>
                    <h3 style={styles.sectionHeader}>Quick Access</h3>
                    <div style={styles.quickGrid}>
                       <motion.div style={styles.quickCard} onClick={() => setView('settings')} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                         <Terminal size={24} color={deepBlush}/>
                         <span>Developer</span>
                       </motion.div>
                       <motion.div style={styles.quickCard} onClick={() => setView('settings')} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                         <Briefcase size={24} color={deepBlush}/>
                         <span>Clients</span>
                       </motion.div>
                       <motion.div style={styles.quickCard} onClick={() => setView('settings')} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                         <ShieldCheck size={24} color={deepBlush}/>
                         <span>Admin</span>
                       </motion.div>
                    </div>
                 </div>
              </motion.main>
            )}

            {view === 'settings' && (
              <motion.div key="settings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={styles.dashboardCard}>
                <div style={styles.cardHeader}>
                  <button onClick={goBack} style={styles.backCircle}><ArrowLeft size={20} color={deepBlush} /></button>
                  <h2 style={styles.sheetTitle}>{activeModule ? activeModule.title : selectedRole ? roleData[selectedRole].title : "Control Center"}</h2>
                </div>
                <div style={styles.scrollArea}>
                  <AnimatePresence mode="wait">
                    {!selectedRole && (<RoleGateway key="gateway" onSelect={(r) => setSelectedRole(r)} theme={deepBlush} />)}
                    {selectedRole && !activeModule && (
                      <div style={styles.verticalList}>
                        {roleData[selectedRole].modules.map(mod => (
                          <div key={mod.id} onClick={() => setActiveModule(mod)} style={styles.clickableRowCard}>
                             <div style={{...styles.iconBoxSmall, background: `${deepBlush}11`}}>{React.cloneElement(mod.icon, {size: 18, color: deepBlush})}</div>
                             <div style={{flex:1}}><div style={styles.mTitle}>{mod.title}</div><div style={styles.mSub}>{mod.sub}</div></div>
                             <ChevronRight size={18} color="#cbd5e1" />
                          </div>
                        ))}
                      </div>
                    )}
                    {activeModule && (<RenderModuleContent key="renderContent" module={activeModule} themeColor={deepBlush} />)}
                  </AnimatePresence>
                  <div style={styles.vCard}>
                    <Info size={16} color={deepBlush} />
                    <span style={styles.vText}>ENGINE v1.2.6 • SECURE CONNECTION</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  appWrapper: { backgroundColor: '#FDF2F3', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Poppins', sans-serif" },
  mainBody: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0' },
  mainContainer: { maxWidth: '850px', margin: '0 auto', width: '100%', padding: '0 20px' },
  homeView: { textAlign: 'center' },
  dashboardCard: { backgroundColor: '#ffffff', borderRadius: '35px', boxShadow: '0 30px 80px rgba(74, 29, 31, 0.1)', overflow: 'hidden', minHeight: '450px', margin: '20px auto 120px'},
  cardHeader: { padding: '30px 40px', display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #FDF2F3' },
  backCircle: { width: '45px', height: '45px', borderRadius: '15px', background: '#FDF2F3', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  sheetTitle: { fontSize: '20px', fontWeight: '800', color: '#4A1D1F', margin: 0 },
  scrollArea: { padding: '25px 35px 100px 35px', overflowY: 'auto' }, 
  verticalList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  clickableRowCard: { background: '#FFF9F9', border: '1px solid #FDF2F3', borderRadius: '25px', padding: '18px 25px', display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', transition: '0.3s' },
  iconBoxSmall: { width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  mTitle: { fontSize: '15px', fontWeight: '700', color: '#4A1D1F' },
  mSub: { fontSize: '12px', color: '#94a3b8' },
  vCard: { marginTop: '40px', padding: '15px', background: '#F9EFF0', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
  vText: { color: '#7D5A5C', fontSize: '11px', fontWeight: '700' },
  navScrollContainer: { display: 'flex', gap: '12px', overflowX: 'auto', padding: '0 5px 15px 5px', whiteSpace: 'nowrap', scrollbarWidth: 'none', marginBottom: '10px' },
  navTab: { padding: '10px 20px', borderRadius: '20px', background: 'transparent', border: '1px solid transparent', color: '#7D5A5C', fontWeight: '600', cursor: 'pointer', transition: '0.2s', fontSize: '14px', display:'flex', alignItems:'center', gap:'8px', whiteSpace: 'nowrap' },
  navTabActive: { padding: '10px 20px', borderRadius: '20px', background: '#F9EFF0', border: '1px solid #DD7A83', color: '#DD7A83', fontWeight: '700', cursor: 'pointer', transition: '0.2s', fontSize: '14px', display:'flex', alignItems:'center', gap:'8px', whiteSpace: 'nowrap' },
  popularSection: { marginBottom: '25px', textAlign: 'left' },
  sectionHeaderRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5px', marginBottom: '15px' },
  sectionTitleSmall: { fontSize: '16px', fontWeight: '800', color: '#4A1D1F', margin: 0 },
  seeAllLink: { fontSize: '12px', fontWeight: '600', color: '#DD7A83', cursor: 'pointer' },
  appScrollContainer: { display: 'flex', gap: '20px', overflowX: 'auto', padding: '5px 5px 15px 5px', scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' },
  appItem: { display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '65px', cursor: 'pointer', scrollSnapAlign: 'start' },
  appIconCircle: { width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', color: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', border: '2px solid #fff' },
  appName: { fontSize: '11px', fontWeight: '600', color: '#4A1D1F', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '65px' },
  bannerContainer: { position: 'relative', width: '100%', height: '240px', overflow: 'hidden', borderRadius: '25px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', marginBottom: '30px' },
  bannerCard: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '25px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff' },
  bannerContent: { position: 'relative', zIndex: 2, maxWidth: '60%' },
  bannerTitle: { fontSize: '28px', fontWeight: '800', margin: '0 0 10px 0', lineHeight: 1.1 },
  bannerDesc: { fontSize: '14px', opacity: 0.9, marginBottom: '20px' },
  bannerBtn: { background: '#fff', color: '#000', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' },
  bannerIconBox: { marginBottom: '15px', opacity: 0.8 },
  bannerDeco: { position: 'absolute', right: '-20px', bottom: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' },
  indicatorContainer: { position: 'absolute', bottom: '20px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 },
  indicatorDot: { width: '8px', height: '8px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s' },
  quickAccessSection: { textAlign: 'left', marginTop: '20px' },
  quickGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' },
  quickCard: { background: '#fff', padding: '20px', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', cursor: 'pointer', fontWeight: '600', fontSize: '13px', color: '#4A1D1F' },
  sectionHeader: { fontSize: '14px', fontWeight: '800', color: '#4A1D1F', margin: '20px 0 10px 5px', textAlign: 'left', textTransform: 'uppercase' },
};

export default App;
