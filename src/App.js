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
  Search, Check, Clock, Image, Laptop, Smartphone, Video, FileCheck, MessageCircle, BarChart2, Server, HelpCircle, 
} from 'lucide-react';


function App() {
  const [view, setView] = useState('home'); 
  const [selectedRole, setSelectedRole] = useState(null); 
  const [activeModule, setActiveModule] = useState(null); 

  const deepBlush = '#DD7A83';
  const lightBlush = '#E3BFC3';

  // Navigation logic
  const goBack = () => {
    if (activeModule) setActiveModule(null);
    else if (selectedRole) setSelectedRole(null);
    else setView('home');
  };

  useEffect(() => { window.scrollTo(0, 0); }, [selectedRole, activeModule]);

  // --- 1. FULL ROLE DATA STRUCTURE ---
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
                 <div style={styles.heroLogoWrapper}><img src={Mainlogo} alt="Logo" style={styles.heroMainLogo} /></div>
                 <h1 style={styles.heroTitle}>Web Global <span style={{color: deepBlush}}>Guru</span></h1>
                 <p style={styles.heroSub}>Download your next favorite app.
The adventure starts here.</p>
                 <button style={{...styles.mainBtn, background: `linear-gradient(135deg, ${deepBlush}, ${lightBlush})` }} onClick={() => setView('settings')}>Open Control Center</button>
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
                    {!selectedRole && <RoleGateway onSelect={(r) => setSelectedRole(r)} theme={deepBlush} />}
                    {selectedRole && !activeModule && <ModuleList modules={roleData[selectedRole].modules} onSelect={(m) => setActiveModule(m)} theme={deepBlush} />}
                    {activeModule && <RenderModuleContent module={activeModule} themeColor={deepBlush} />}
                  </AnimatePresence>
                  <div style={styles.vCard}>
                    <Info size={16} color={deepBlush} /><span style={styles.vText}>ENGINE v1.2.6 • SECURE CONNECTION</span>
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

// --- MEGA RENDERER ENGINE (The heart of the system) ---
const RenderModuleContent = ({ module, themeColor }) => {
  const [activeTab, setActiveTab] = useState('sites'); // History/Feedback toggle
  const [activeStep, setActiveStep] = useState(1); // Developer publish wizard

  switch(module.id) {
    // ==========================================
    // 1. USER & COMMON MODULES
    // ==========================================
    case 'u_profile': return (
        <div style={styles.deepPage}>
          <div style={styles.profileUpload}><Camera size={24} color={themeColor}/></div>
          <input style={styles.input} placeholder="Full Name" /><input style={styles.input} placeholder="Email" />
          <ActionRow icon={<Lock/>} label="Change Master Password" /><ActionRow icon={<ShieldCheck/>} label="Two-Factor Authentication" isToggle />
          <button style={styles.dangerBtn}>Deactivate Account</button>
        </div>
    );

    case 'u_history': return (
      <div style={styles.deepPage}>
        <div style={styles.tabHeader}>
          <button style={activeTab === 'sites' ? styles.tabOn : styles.tabOff} onClick={()=>setActiveTab('sites')}>Recently Viewed</button>
          <button style={activeTab === 'search' ? styles.tabOn : styles.tabOff} onClick={()=>setActiveTab('search')}>Search History</button>
        </div>
        {activeTab === 'sites' ? (
          <div style={styles.listArea}>
            <div style={styles.historyCard}>
              <div style={styles.siteThumb}><img src={Mainlogo} width="24"/></div>
              <div style={{flex:1}}><b>Global Web Guru</b><p>E-Commerce • Today 10:20 AM</p></div>
              <button style={styles.miniBtn}>Visit Again</button>
              <Trash2 size={16} color="#ddd"/>
            </div>
            <div style={styles.sectionHeader}>Clear History Options</div>
            <div style={styles.btnRow}><button style={styles.outlineBtn}>Last 24h</button><button style={styles.outlineBtn}>Last 7 Days</button><button style={styles.clearBtnFull}>Clear All</button></div>
          </div>
        ) : (
          <div style={styles.listArea}>
             <div style={styles.searchLogItem}><Search size={14}/> <span>React Infrastructure Templates</span> <small>Today</small></div>
             <button style={styles.clearBtnFull}>Clear All Search Logs</button>
          </div>
        )}
        <div style={styles.advancedBox}><ActionRow icon={<RotateCw/>} label="Auto delete after 30 days" isToggle /><ActionRow icon={<Clock/>} label="Pause Tracking" isToggle /></div>
      </div>
    );

    case 'u_saved': return (
        <div style={styles.deepPage}>
          <div style={styles.folderGrid}>
             <div style={styles.folder}><Heart fill={themeColor} color={themeColor}/> Favorites</div>
             <div style={styles.folder}><Briefcase color={themeColor}/> Work</div>
             <div style={styles.folder}><PlusCircle color="#999"/> New Category</div>
          </div>
          <div style={styles.historyCard}><div style={{flex:1}}><b>React-Silk-UI.com</b><p>Category: Dev Tools</p></div><ExternalLink size={18} color={themeColor}/></div>
          <div style={styles.sectionHeader}>Share & Export</div>
          <div style={styles.btnRow}><button style={styles.outlineBtn}><Share2 size={14}/> Share via Link</button><button style={styles.outlineBtn}><Download size={14}/> Export (PDF)</button></div>
        </div>
    );

    case 'u_notify': return (
        <div style={styles.deepPage}>
          <div style={styles.notifyCard}><div style={styles.pulseDot}></div><div style={{flex:1}}><b>Website Approved</b><p>Infrastructure deployment successful.</p></div><Check size={16} color="#10b981"/></div>
          <div style={styles.sectionHeader}>System Alert Controls</div>
          <ActionRow icon={<BadgeCheck/>} label="Approval Alerts" isToggle /><ActionRow icon={<RotateCw/>} label="Renewal Reminders" isToggle /><ActionRow icon={<Zap/>} label="Ads Performance alert" isToggle />
          <div style={styles.sectionHeader}>Channel Settings</div>
          <ActionRow icon={<Globe/>} label="Email Notifications" isToggle /><ActionRow icon={<Smartphone/>} label="App Push Notifications" isToggle />
          <button style={styles.clearBtnFull}>Clear All Notifications</button>
        </div>
    );

    case 'u_refer': case 'd_refer': case 'c_refer': return (
        <div style={styles.deepPage}>
          <div style={styles.walletCard}><p>Withdrawable Balance</p><h1>$124.50</h1><div style={styles.linkCopy}><span>wgg.io/ref/USER7X2</span> <Copy size={16} /></div></div>
          <div style={styles.statGrid}><div style={styles.statCard}><h4>24</h4><p>Total Ref</p></div><div style={styles.statCard}><h4>18</h4><p>Active</p></div></div>
          <div style={styles.sectionHeader}>Withdrawal Banking</div>
          <input style={styles.input} placeholder="Bank Name / IFSC" /><input style={styles.input} placeholder="Account Number" />
          <button style={{...styles.mainBtnFull, background: themeColor}}>Request Withdraw</button>
          <p style={{fontSize:'11px', color:'#999', textAlign:'center', marginTop:'10px'}}>Referral growth graph available in monthly reports.</p>
        </div>
    );

    case 'u_feed': case 'd_feed': return (
        <div style={styles.deepPage}>
          <div style={styles.ratingRow}>{[1,2,3,4,5].map(i => <Star key={i} size={30} color={i <= 4 ? "#FFD700" : "#ddd"} fill={i <= 4 ? "#FFD700" : "none"} />)}</div>
          <select style={styles.input}><option>Select Category</option><option>Bug Report</option><option>Suggestion</option><option>Feature Request</option></select>
          <textarea style={styles.inputArea} placeholder="How can we improve?"></textarea>
          <div style={styles.uploadBox}><Image size={20}/> Attach Screenshot</div>
          <button style={{...styles.mainBtnFull, background: themeColor}}>Submit Feedback</button>
          <div style={styles.sectionHeader}>Previous Submissions</div>
          <div style={styles.notifyCard}><div style={{flex:1}}><b>Dashboard Bug</b><p>Status: Under Review</p></div><ChevronRight size={16}/></div>
        </div>
    );

    // ==========================================
    // 2. DEVELOPER MODULES LOGIC
    // ==========================================
    case 'd_profile': return (
        <div style={styles.deepPage}>
          <div style={styles.sectionHeader}>Developer Identity</div>
          <div style={styles.profileUpload}><Terminal size={24} color={themeColor}/></div>
          <input style={styles.input} placeholder="Business Name" />
          <div style={styles.inputRow}><input style={{...styles.input, flex:1}} placeholder="Phone" /><button style={styles.miniBtn}>Verify OTP</button></div>
          <div style={styles.statGrid}><input style={styles.input} placeholder="Exp (Years)" /><input style={styles.input} placeholder="Tech Stack" /></div>
          <input style={styles.input} placeholder="Portfolio / GitHub Link" />
          <div style={styles.sectionHeader}>Verification</div>
          <div style={styles.uploadBox}><UploadCloud size={20}/> ID Proof / Company Docs</div>
          <div style={styles.statusBanner}>Account Status: <b>VERIFIED</b></div>
        </div>
    );

    case 'd_publish': return (
        <div style={styles.deepPage}>
          <div style={styles.stepBar}>{[1,2,3,4].map(s => <div key={s} style={{...styles.stepDot, background: activeStep >= s ? themeColor : '#eee'}}>{s}</div>)}</div>
          {activeStep === 1 && (
            <div>
               <div style={styles.sectionHeader}>Step 1: Basic Details</div>
               <input style={styles.input} placeholder="Website Name" /><input style={styles.input} placeholder="Domain Name" />
               <select style={styles.input}><option>Select Category</option></select>
               <textarea style={styles.inputArea} placeholder="Description & Target Audience"></textarea>
               <button style={styles.mainBtnFull} onClick={()=>setActiveStep(2)}>Next: Technical</button>
            </div>
          )}
          {activeStep === 2 && (
            <div>
               <div style={styles.sectionHeader}>Step 2: Technical Info</div>
               <input style={styles.input} placeholder="Hosting Provider" /><input style={styles.input} placeholder="Server Type" />
               <ActionRow icon={<ShieldCheck/>} label="SSL Enabled" isToggle /><ActionRow icon={<Smartphone/>} label="Mobile Responsive" isToggle />
               <button style={styles.mainBtnFull} onClick={()=>setActiveStep(3)}>Next: Media</button>
            </div>
          )}
          {activeStep === 3 && (
            <div>
               <div style={styles.sectionHeader}>Step 3: Media Upload</div>
               <div style={styles.uploadBox}><Image/> Website Logo</div>
               <div style={styles.uploadBox}><Laptop/> Screenshot Gallery</div>
               <input style={styles.input} placeholder="Demo Video URL" />
               <button style={styles.mainBtnFull} onClick={()=>setActiveStep(4)}>Next: Final Pricing</button>
            </div>
          )}
          {activeStep === 4 && (
            <div>
               <div style={styles.sectionHeader}>Step 4: Pricing & Submit</div>
               <input style={styles.input} placeholder="Price ($)" type="number" />
               <div style={styles.infoBanner}>System Commission: 10% per sale</div>
               <div style={styles.acceptBox}><input type="checkbox"/> I agree to Developer Terms</div>
               <button style={{...styles.mainBtnFull, background:themeColor}}>Submit for Admin Approval</button>
            </div>
          )}
        </div>
    );

    case 'd_status': return (
        <div style={styles.deepPage}>
          <div style={styles.tableCard}>
             <div style={styles.tableRow}><div><b>Market-App v2</b><p>Submitted: 12 Feb</p></div><span style={{color:'orange'}}>Pending</span></div>
             <div style={styles.tableRow}><div><b>Admin-Console</b><p>Submitted: 10 Feb</p></div><span style={{color:'red'}}>Rejected</span></div>
             <div style={styles.rejectionBox}>Reason: Meta tags not optimized.</div>
          </div>
          <div style={styles.btnRow}><button style={styles.outlineBtn}><Edit3 size={14}/> Edit</button><button style={styles.outlineBtn}><RotateCw size={14}/> Resubmit</button></div>
        </div>
    );

    case 'd_renewal': case 'c_renewal': return (
        <div style={styles.deepPage}>
          <div style={styles.walletCard}><p>Days Left until Expiry</p><h1>18 Days</h1><small>Expires: 05 March 2026</small></div>
          <div style={styles.infoRow}><span>Renewal Cost</span><b>$45.00</b></div>
          <ActionRow icon={<RotateCw/>} label="Auto Renewal" isToggle />
          <div style={styles.sectionHeader}>Quick Payment</div>
          <div style={styles.btnRow}><button style={styles.outlineBtn}>Pay via UPI</button><button style={styles.outlineBtn}>Pay via Card</button></div>
          <div style={styles.legalRow}><span>Invoice_#99201.pdf</span> <Download size={18} color={themeColor}/></div>
        </div>
    );

    case 'd_seo': return (
        <div style={styles.deepPage}>
          <div style={styles.sectionHeader}>Campaign Optimization</div>
          <input style={styles.input} placeholder="Campaign Name" />
          <div style={styles.statGrid}><div style={styles.statCard}><h4>1.4k</h4><p>Clicks</p></div><div style={styles.statCard}><h4>3.4%</h4><p>CTR</p></div></div>
          <div style={styles.chartMock}>{[40, 70, 95, 60, 85].map((h,i) => <div key={i} style={{...styles.bar, height:h+'%', background:themeColor}}></div>)}</div>
          <div style={styles.sectionHeader}>Meta Editor</div>
          <input style={styles.input} placeholder="Meta Title" /><textarea style={styles.inputArea} placeholder="Meta Description"></textarea>
          <button style={{...styles.mainBtnFull, background:themeColor}}>Update SEO Tags</button>
        </div>
    );

    // ==========================================
    // 3. CLIENT MODULES LOGIC
    // ==========================================
    case 'c_profile': return (
        <div style={styles.deepPage}>
          <div style={styles.sectionHeader}>Business Profile</div>
          <div style={styles.profileUpload}><UploadCloud size={24} color={themeColor}/><p>Upload Company Logo</p></div>
          <input style={styles.input} placeholder="Company Name" /><input style={styles.input} placeholder="Contact Person" />
          <div style={styles.inputRow}><input style={{...styles.input, flex:1}} placeholder="Email" /><BadgeCheck size={20} color="green" /></div>
          <div style={styles.sectionHeader}>Billing & Industry</div>
          <input style={styles.input} placeholder="Business Type" /><input style={styles.input} placeholder="GST Number" />
          <textarea style={styles.inputArea} placeholder="Billing Address"></textarea>
          <div style={styles.statusBanner}>Status: <b>ACTIVE CLIENT</b></div>
        </div>
    );

    case 'c_performance': return (
        <div style={styles.deepPage}>
          <div style={styles.sectionHeader}>Traffic & Engagement</div>
          <div style={styles.statGrid}>
             <div style={styles.statCard}><h4>12k</h4><p>Visitors</p></div>
             <div style={styles.statCard}><h4>4.2%</h4><p>Conversion</p></div>
             <div style={styles.statCard}><h4>0.9s</h4><p>Avg Speed</p></div>
          </div>
          <div style={styles.chartMock}>{[30, 60, 90, 45, 75, 55, 80].map((h,i) => <motion.div key={i} initial={{height:0}} animate={{height:h+'%'}} style={{...styles.bar, background:themeColor}}></motion.div>)}</div>
          <div style={styles.infoBanner}>Top Source: Search (42%) • Direct (38%)</div>
          <div style={styles.btnRow}><button style={styles.outlineBtn}><Download size={14}/> Export PDF</button><button style={styles.outlineBtn}><Download size={14}/> CSV</button></div>
        </div>
    );

    case 'c_status': return (
        <div style={styles.deepPage}>
          <div style={styles.walletCard}><p>Infrastructure Health</p><h1>OPERATIONAL</h1><small>99.9% Uptime Monitor</small></div>
          <ActionRow icon={<Server/>} label="Hosting Node Status" /><ActionRow icon={<ShieldCheck/>} label="SSL Encryption" />
          <button style={{...styles.mainBtnFull, background:themeColor, marginTop:'20px'}}>Renew Infrastructure</button>
          <button style={{...styles.outlineBtn, width:'100%', marginTop:'10px'}}>Contact Cloud Support</button>
        </div>
    );

    case 'c_ads': return (
        <div style={styles.deepPage}>
          <div style={styles.sectionHeader}>Ad Campaign ROI</div>
          <div style={styles.notifyCard}><div style={styles.pulseDot}></div><div style={{flex:1}}><b>Winter Promo</b><p>Active • Target: Europe</p></div><button style={styles.miniBtn}>Pause</button></div>
          <input style={styles.input} placeholder="Budget Increase ($)" type="number" />
          <button style={{...styles.mainBtnFull, background:themeColor}}>Launch New Campaign</button>
        </div>
    );

    case 'c_feedback': return (
        <div style={styles.deepPage}>
          <div style={styles.statGrid}><div style={styles.statCard}><h4>4.9/5</h4><p>Avg Rating</p></div><div style={styles.statCard}><h4>142</h4><p>Reviews</p></div></div>
          <div style={styles.historyCard}><div style={{flex:1}}><b>Alice Johnson</b><p>"Great UI and performance."</p><small>Today 11:30 AM</small></div><MessageCircle size={18} color={themeColor}/></div>
          <button style={styles.clearBtnFull}>View Review History</button>
        </div>
    );

    // ==========================================
    // 4. ADMIN MODULES LOGIC
    // ==========================================
    case 'a_profile': return (
        <div style={styles.deepPage}>
          <div style={styles.sectionHeader}>Admin Master Console</div>
          <div style={styles.profileUpload}><ShieldCheck size={28} color={themeColor}/><p>Alex Admin (Super)</p></div>
          <ActionRow icon={<Lock/>} label="Password Verification" /><ActionRow icon={<Activity/>} label="Master Activity Log" />
          <div style={styles.enterpriseBadge}>ADMIN PRIVILEGES GRANTED</div>
        </div>
    );

    case 'a_listing': return (
        <div style={styles.deepPage}>
          <div style={styles.filterBar}><Search size={14}/> <input placeholder="Search global sites..." style={{border:'none', background:'transparent', flex:1}} /></div>
          <div style={styles.tableCard}>
             <div style={styles.tableRow}><div><b>MarketNode.io</b><p>Category: E-Comm</p></div><b style={{color:'green'}}>$1,240</b></div>
             <div style={styles.tableRow}><div><b>DevDocs.com</b><p>Category: Tools</p></div><b>$0.00</b></div>
          </div>
          <button style={styles.outlineBtn}>Bulk Export List</button>
        </div>
    );

    // ================= COMMON LOGIC =================
    case 'u_legal': case 'd_legal': case 'c_legal': return (
        <div style={styles.deepPage}>
          {['Service Agreement', 'Privacy Policy', 'Refund Policy', 'Data Usage'].map(l => (
            <div key={l} style={styles.legalRow}><span>{l}</span> <Download size={18} color={themeColor}/></div>
          ))}
          <div style={styles.acceptBox}><input type="checkbox" /> I accept global data guidelines</div>
        </div>
    );

    default: return <div style={styles.placeholder}>System node for {module.title} active.</div>;
  }
};

// --- CORE UI HELPERS ---
const RoleGateway = ({ onSelect, theme }) => (
  <div style={styles.verticalList}>
    <RoleCard icon={<User/>} title="User Settings" desc="Personal data & History" onClick={() => onSelect('user')} color={theme} />
    <RoleCard icon={<Terminal/>} title="Developer Settings" desc="Publishing & SEO Ads" onClick={() => onSelect('developer')} color={theme} />
    <RoleCard icon={<Briefcase/>} title="Website Client" desc="Analytics & Status" onClick={() => onSelect('client')} color={theme} />
    <RoleCard icon={<ShieldAlert/>} title="Admin Control" desc="Approvals & Profits" onClick={() => onSelect('admin')} color={theme} />
  </div>
);

const ModuleList = ({ modules, onSelect, theme }) => (
  <div style={styles.verticalList}>
    {modules.map(mod => (
      <div key={mod.id} onClick={() => onSelect(mod)} style={styles.clickableRowCard}>
         <div style={{...styles.iconBoxSmall, background: `${theme}11`}}>{React.cloneElement(mod.icon, {size: 18, color: theme})}</div>
         <div style={{flex:1}}><div style={styles.mTitle}>{mod.title}</div><div style={styles.mSub}>{mod.sub}</div></div>
         <ChevronRight size={18} color="#cbd5e1" />
      </div>
    ))}
  </div>
);

const RoleCard = ({ icon, title, onClick, color, desc }) => (
  <div onClick={onClick} style={styles.clickableRowCard}>
    <div style={{...styles.iconBox, background: `${color}11`}}>{React.cloneElement(icon, {size: 24, color: color})}</div>
    <div style={{flex:1}}><h3 style={styles.rowTitle}>{title}</h3><p style={styles.mSub}>{desc}</p></div>
    <ChevronRight size={20} color="#cbd5e1" />
  </div>
);

const ActionRow = ({ icon, label, isToggle }) => {
    const [on, setOn] = useState(false);
    return (
        <div style={styles.detailRow}>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>{React.cloneElement(icon, {size: 18, color: '#7D5A5C'})} <span>{label}</span></div>
            {isToggle ? (
                <div onClick={()=>setOn(!on)} style={{...styles.toggle, background: on ? '#DD7A83' : '#ccc'}}>
                    <div style={{...styles.toggleCircle, transform: on ? 'translateX(18px)' : 'translateX(0)'}}></div>
                </div>
            ) : <ChevronRight size={16} color="#ccc"/>}
        </div>
    );
};

const ShieldAlert = (props) => <Shield {...props} color="#ef4444" />;

// --- STYLES OBJECT ---
const styles = {
  appWrapper: { backgroundColor: '#FDF2F3', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Poppins', sans-serif" },
  mainBody: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0' },
  mainContainer: { maxWidth: '850px', margin: '0 auto', width: '100%', padding: '0 20px' },
  homeView: { textAlign: 'center' },
  heroLogoWrapper: { display: 'flex', justifyContent: 'center', marginBottom: '30px' },
  heroMainLogo: { width: '110px', background: '#fff', padding: '15px', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' },
  heroTitle: { fontSize: '48px', fontWeight: '900', color: '#4A1D1F' },
  heroSub: { color: '#7D5A5C', fontSize: '18px', maxWidth: '450px', margin: '0 auto 40px' },
  mainBtn: { color: '#fff', border: 'none', padding: '16px 45px', borderRadius: '50px', fontWeight: '800', cursor: 'pointer' },
  dashboardCard: { backgroundColor: '#ffffff', borderRadius: '40px', boxShadow: '0 40px 100px rgba(74, 29, 31, 0.1)', overflow: 'hidden' },
  cardHeader: { padding: '30px 40px', display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #FDF2F3' },
  backCircle: { width: '45px', height: '45px', borderRadius: '15px', background: '#FDF2F3', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  sheetTitle: { fontSize: '20px', fontWeight: '800', color: '#4A1D1F', margin: 0 },
  scrollArea: { padding: '30px 40px 40px 40px', minHeight: '450px', maxHeight: '650px', overflowY: 'auto' },
  verticalList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  clickableRowCard: { background: '#FFF9F9', border: '1px solid #FDF2F3', borderRadius: '25px', padding: '18px 25px', display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', transition: '0.3s' },
  iconBox: { width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  iconBoxSmall: { width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  rowTitle: { flex: 1, fontSize: '17px', fontWeight: '800', color: '#4A1D1F', margin: 0 },
  mTitle: { fontSize: '15px', fontWeight: '700', color: '#4A1D1F' },
  mSub: { fontSize: '12px', color: '#94a3b8' },

  deepPage: { animation: 'fadeIn 0.4s' },
  tabHeader: { display: 'flex', gap: '10px', marginBottom: '20px' },
  tabOn: { background: '#DD7A83', color: '#fff', border:'none', padding: '8px 20px', borderRadius:'10px', fontWeight:'700', cursor:'pointer' },
  tabOff: { background: '#FDF2F3', color: '#7D5A5C', border:'none', padding: '8px 20px', borderRadius:'10px', cursor:'pointer' },
  historyCard: { padding: '15px', background: '#FFF9F9', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', border: '1px solid #FDF2F3' },
  siteThumb: { width: '40px', height: '40px', background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  miniBtn: { padding: '5px 12px', background: '#DD7A83', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: '700', cursor:'pointer' },
  btnRow: { display: 'flex', gap: '10px', marginBottom: '15px' },
  outlineBtn: { flex: 1, padding: '10px', background: '#fff', border: '1px solid #ddd', borderRadius: '12px', fontSize: '12px', cursor:'pointer' },
  clearBtnFull: { width: '100%', padding: '12px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '12px', fontWeight: '800', marginTop: '10px', cursor:'pointer' },
  folderGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' },
  folder: { padding: '20px', background: '#FFF9F9', borderRadius: '18px', textAlign: 'center', fontWeight: '700', border: '1px solid #FDF2F3', display:'flex', flexDirection:'column', alignItems:'center', gap:'10px' },
  walletCard: { padding: '30px', background: '#DD7A83', borderRadius: '25px', color: '#fff', textAlign: 'center', marginBottom: '20px' },
  linkCopy: { marginTop: '15px', padding: '10px', background: 'rgba(0,0,0,0.1)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '12px' },
  statGrid: { display: 'flex', gap: '10px', marginBottom: '20px' },
  statCard: { flex: 1, padding: '15px', background: '#FDF2F3', borderRadius: '15px', textAlign: 'center' },
  notifyCard: { padding: '15px', background: '#FFF9F9', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', borderLeft: '4px solid #DD7A83' },
  pulseDot: { width: '10px', height: '10px', background: '#DD7A83', borderRadius: '50%' },
  ratingRow: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '25px' },
  uploadBox: { padding: '20px', border: '2px dashed #ddd', borderRadius: '15px', textAlign: 'center', color: '#999', marginBottom: '15px', cursor: 'pointer' },
  legalRow: { padding: '18px', borderBottom: '1px solid #FDF2F3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  acceptBox: { marginTop: '20px', fontSize: '12px', color: '#7D5A5C', display:'flex', gap:'10px', alignItems:'center' },
  input: { width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #FDF2F3', marginBottom: '15px', fontFamily: 'inherit' },
  inputArea: { width: '100%', height: '100px', padding: '15px', borderRadius: '12px', border: '1px solid #FDF2F3', marginBottom: '15px', fontFamily: 'inherit' },
  sectionHeader: { fontSize: '12px', fontWeight: '800', color: '#DD7A83', margin: '20px 0 10px 5px', textTransform: 'uppercase' },
  detailRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid #FDF2F3' },
  toggle: { width: '36px', height: '18px', borderRadius: '10px', padding: '2px' },
  toggleCircle: { width: '14px', height: '14px', background: '#fff', borderRadius: '50%', transition: '0.3s' },
  profileUpload: { width: '80px', height: '80px', borderRadius: '50%', background: '#FDF2F3', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #DD7A83' },
  inputRow: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' },
  statusBanner: { padding: '12px', background: '#e6f3ef', borderRadius: '10px', textAlign: 'center', color: '#01875f', fontSize: '13px' },
  stepBar: { display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '25px' },
  stepDot: { width: '25px', height: '25px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#fff' },
  mainBtnFull: { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', color: '#fff', fontWeight: '800', cursor: 'pointer' },
  tableCard: { background: '#FFF9F9', borderRadius: '15px', padding: '10px', marginBottom: '15px' },
  tableRow: { display: 'flex', justifyContent: 'space-between', padding: '15px 10px', borderBottom: '1px solid #f1f1f1', fontSize: '14px' },
  rejectionBox: { padding: '10px', background: '#fee2e2', borderRadius: '10px', color: '#dc2626', fontSize: '12px', marginTop: '10px' },
  infoRow: { display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #FDF2F3' },
  infoBanner: { padding: '12px', background: '#FDF2F3', borderRadius: '10px', color: '#7D5A5C', fontSize: '13px', textAlign: 'center', marginBottom: '15px' },
  chartMock: { height: '100px', background: '#FFF9F9', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', gap: '5px', padding: '10px' },
  bar: { flex: 1, borderRadius: '3px 3px 0 0' },
  dangerBtn: { width: '100%', padding: '14px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '12px', fontWeight: '800', marginTop: '10px' },
  vCard: { marginTop: '40px', padding: '15px', background: '#F9EFF0', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
  vText: { color: '#7D5A5C', fontSize: '11px', fontWeight: '700' },
  placeholder: { padding: '40px', textAlign: 'center', color: '#999' },
  enterpriseBadge: { marginTop: '20px', padding: '10px', background: '#4A1D1F', color: '#fff', textAlign: 'center', borderRadius: '10px', fontSize: '12px', fontWeight: '700' },
  filterBar: { padding: '10px', background: '#f9f9f9', borderRadius: '8px', marginBottom: '10px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '10px' },
};

export default App;