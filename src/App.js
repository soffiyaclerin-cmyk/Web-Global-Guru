import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Mainlogo from './assets/Mainlogo.png'; 
import { 
  User, History, Heart, Bell, DollarSign, MessageSquare, Shield, Terminal, PlusCircle, Activity, 
  RotateCw, BarChart3, ChevronRight, ArrowLeft, Info, Edit3, Lock, Trash2, Zap, Globe, 
  Eye, Settings2, CreditCard, LayoutGrid, CheckCircle2, TrendingUp, Share2, Briefcase, Filter, 
  Star, Camera, Key, ShieldCheck, Database, BarChart, HardDrive, FileText, BadgeCheck, 
  UploadCloud, CloudLightning, Landmark, PieChart, AlertCircle, ExternalLink, Copy, Download, 
  Search, Check, Clock, Image, Laptop, Smartphone, Video, FileCheck, MessageCircle, BarChart2, Server, HelpCircle
} from 'lucide-react';

function App() {
  const [view, setView] = useState('home'); 
  const [selectedRole, setSelectedRole] = useState(null); 
  const [activeModule, setActiveModule] = useState(null); 

  const deepBlush = '#DD7A83';
  const lightBlush = '#E3BFC3';

  const goBack = () => {
    if (activeModule) setActiveModule(null);
    else if (selectedRole) setSelectedRole(null);
    else setView('home');
  };

  useEffect(() => { window.scrollTo(0, 0); }, [selectedRole, activeModule]);

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
        { id: 'd_profile', title: 'Developer Profile', sub: 'KYC & Account', icon: <Terminal/> },
        { id: 'd_publish', title: 'Publish New Website', sub: 'Deployment Engine', icon: <PlusCircle/> },
        { id: 'd_status', title: 'Website Publish Status', sub: 'Workflow tracker', icon: <Activity/> },
        { id: 'd_renewal', title: 'Renewal Website', sub: 'Domain & Billing', icon: <RotateCw/> },
        { id: 'd_seo', title: 'SEO Ads Run', sub: 'Marketing & Analysis', icon: <TrendingUp/> },
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
      title: "Admin Panel",
      modules: [
        { id: 'a_profile', title: 'Admin Profile', sub: 'Master security', icon: <ShieldCheck/> },
        { id: 'a_listing', title: 'Listing Websites View', sub: 'Global Audit', icon: <LayoutGrid/> },
      ]
    }
  };

  return (
    <div style={styles.appWrapper}>
      <style>{`
        @media (max-width: 600px) {
          .main-card { width: 95% !important; border-radius: 24px !important; margin-top: 15px !important; }
          .hero-title { font-size: 32px !important; }
          .clickable-row { padding: 12px 15px !important; }
        }
      `}</style>

      <Header t={{brandTagline: "SILK WEB SYSTEMS"}} onProfileClick={() => setView('settings')} currentView={view} />
      
      <div style={styles.mainBody}>
        <div style={styles.mainContainer}>
          <AnimatePresence mode="wait">
            {view === 'home' && (
              <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.homeView}>
                 <div style={styles.heroLogoWrapper}><img src={Mainlogo} alt="Logo" style={styles.heroMainLogo} /></div>
                 <h1 className="hero-title" style={styles.heroTitle}>Smart Web <span style={{color: deepBlush}}>Gateway</span></h1>
                 <p className="hero-sub" style={styles.heroSub}>Advanced role-based ecosystem for professional management.</p>
                 <button style={{...styles.mainBtn, background: `linear-gradient(135deg, ${deepBlush}, ${lightBlush})` }} onClick={() => setView('settings')}>Open Control Center</button>
              </motion.main>
            )}

            {view === 'settings' && (
              <motion.div key="settings" className="main-card" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={styles.dashboardCard}>
                <div className="card-header" style={styles.cardHeader}>
                  <button onClick={goBack} style={styles.backCircle}><ArrowLeft size={20} color={deepBlush} /></button>
                  <h2 style={styles.sheetTitle}>{activeModule ? activeModule.title : selectedRole ? roleData[selectedRole].title : "Control Center"}</h2>
                </div>

                <div className="scroll-area" style={styles.scrollArea}>
                  <AnimatePresence mode="wait">
                    {!selectedRole && <RoleGateway onSelect={(r) => setSelectedRole(r)} theme={deepBlush} />}
                    {selectedRole && !activeModule && <ModuleList modules={roleData[selectedRole].modules} onSelect={(m) => setActiveModule(m)} theme={deepBlush} />}
                    {activeModule && <RenderModuleContent module={activeModule} themeColor={deepBlush} />}
                  </AnimatePresence>

                  {/* App Version Info */}
                  <div className="v-card" style={styles.vCard}>
                    <Info size={16} color={deepBlush} /><span style={styles.vText}>ENGINE v1.2.6 • SECURE CONNECTION</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer rendering after main body */}
      <Footer />
    </div>
  );
}

// --- MODULE CONTENT RENDERER ---
const RenderModuleContent = ({ module, themeColor }) => {
  return <div style={{padding:'30px', textAlign:'center', color:'#999'}}>Detailed UI for {module.title} active.</div>;
};

// --- CORE UI HELPERS ---
const RoleGateway = ({ onSelect, theme }) => (
  <div style={styles.verticalList}>
    <RoleCard icon={<User/>} title="User Settings" desc="Profile & History" onClick={() => onSelect('user')} color={theme} />
    <RoleCard icon={<Terminal/>} title="Developer Portal" desc="Publish & SEO" onClick={() => onSelect('developer')} color={theme} />
    <RoleCard icon={<Briefcase/>} title="Website Client" desc="Analytics & Status" onClick={() => onSelect('client')} color={theme} />
    <RoleCard icon={<ShieldAlert color="#ef4444"/>} title="Admin Control" desc="Approvals & Logs" onClick={() => onSelect('admin')} color={theme} />
  </div>
);

const ModuleList = ({ modules, onSelect, theme }) => (
  <div style={styles.verticalList}>
    {modules.map(mod => (
      <div key={mod.id} onClick={() => onSelect(mod)} className="clickable-row" style={styles.clickableRowCard}>
         <div className="icon-box" style={{...styles.iconBoxSmall, background: `${theme}11`}}>{React.cloneElement(mod.icon, {size: 18, color: theme})}</div>
         <div style={{flex:1}}><div className="row-title" style={styles.mTitle}>{mod.title}</div><div className="m-sub" style={styles.mSub}>{mod.sub}</div></div>
         <ChevronRight size={16} color="#cbd5e1" />
      </div>
    ))}
  </div>
);

const RoleCard = ({ icon, title, onClick, color, desc }) => (
  <div onClick={onClick} className="clickable-row" style={styles.clickableRowCard}>
    <div className="icon-box" style={{...styles.iconBox, background: `${color}11`}}>{React.cloneElement(icon, {size: 22, color: color})}</div>
    <div style={{flex:1}}><h3 className="row-title" style={styles.rowTitle}>{title}</h3><p className="m-sub" style={styles.mSub}>{desc}</p></div>
    <ChevronRight size={18} color="#cbd5e1" />
  </div>
);

// ✅ Fix: Only one declaration of ShieldAlert
const ShieldAlert = (props) => <Shield {...props} />;

// --- STYLES OBJECT ---
const styles = {
  appWrapper: { backgroundColor: '#FDF2F3', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Poppins', sans-serif" },
  mainBody: { flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' },
  mainContainer: { maxWidth: '850px', margin: '0 auto', width: '100%', padding: '0 10px' },
  homeView: { textAlign: 'center', padding: '100px 20px' },
  heroLogoWrapper: { display: 'flex', justifyContent: 'center', marginBottom: '20px' },
  heroMainLogo: { width: '100px', background: '#fff', padding: '12px', borderRadius: '25px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' },
  heroTitle: { fontSize: '42px', fontWeight: '900', color: '#4A1D1F', margin: '10px 0' },
  heroSub: { color: '#7D5A5C', fontSize: '16px', maxWidth: '450px', margin: '0 auto 30px' },
  mainBtn: { color: '#fff', border: 'none', padding: '14px 35px', borderRadius: '50px', fontWeight: '800', cursor: 'pointer' },
  
  dashboardCard: { 
    backgroundColor: '#ffffff', 
    borderRadius: '35px', 
    boxShadow: '0 30px 80px rgba(74, 29, 31, 0.1)', 
    overflow: 'hidden', 
    minHeight: '450px', 
    margin: '20px auto 120px' // ✅ Added massive bottom margin to avoid overlap
  },
  cardHeader: { padding: '25px 35px', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #FDF2F3' },
  backCircle: { width: '40px', height: '40px', borderRadius: '12px', background: '#FDF2F3', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  sheetTitle: { fontSize: '18px', fontWeight: '800', color: '#4A1D1F', margin: 0 },
  
  // ✅ Crucial Fix: Padding bottom ensures content isn't hidden behind floating footer
  scrollArea: { padding: '25px 35px 100px 35px', overflowY: 'auto' }, 
  
  verticalList: { display: 'flex', flexDirection: 'column', gap: '10px' },
  clickableRowCard: { background: '#FFF9F9', border: '1px solid #FDF2F3', borderRadius: '22px', padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '18px', cursor: 'pointer', transition: '0.3s' },
  iconBox: { width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  iconBoxSmall: { width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  rowTitle: { flex: 1, fontSize: '16px', fontWeight: '800', color: '#4A1D1F', margin: 0 },
  mTitle: { fontSize: '14px', fontWeight: '700', color: '#4A1D1F' },
  mSub: { fontSize: '11px', color: '#94a3b8' },
  vCard: { marginTop: '30px', padding: '12px', background: '#F9EFF0', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' },
  vText: { color: '#7D5A5C', fontSize: '10px', fontWeight: '700' },
};

export default App;