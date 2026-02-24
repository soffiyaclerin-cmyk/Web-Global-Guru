import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, History, Heart, Bell, DollarSign, MessageSquare, Shield, Terminal, PlusCircle, Activity, 
  RotateCw, BarChart3, ChevronRight, ArrowLeft, Edit3, Lock, Trash2, Zap, Globe, 
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
  Headphones, ShoppingBag, Music, Gamepad2, Rocket, CheckCircle as CheckIcon
} from 'lucide-react';

import Mainlogo from './assets/Mainlogo.png';

// Modern color palette
const colors = {
  primary: '#6366F1',
  primaryLight: '#818CF8',
  primaryDark: '#4F46E5',
  accent: '#EC4899',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  dark: '#1E293B',
  gray: '#64748B',
  lightGray: '#E2E8F0',
  lightest: '#F8FAFC',
  white: '#FFFFFF'
};

// --- PUBLISH WEBSITE FORM COMPONENT ---
const PublishWebsiteForm = ({ themeColor, isMobile }) => {
  const [formData, setFormData] = useState({
    websiteUrl: '',
    shortName: '',
    websiteType: '',
    developerId: '',
    ownerName: '',
    adharNumber: '',
    mobileNumber: '',
    gmailId: '',
    description: '',
    logo: null,
    screenshots: [],
    enableSSL: true,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: URL.createObjectURL(file) }));
    }
  };

  const handleScreenshotUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.screenshots.length <= 5) {
      const newScreenshots = files.map(file => URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, screenshots: [...prev.screenshots, ...newScreenshots] }));
    }
  };

  const removeScreenshot = (index) => {
    setFormData(prev => ({
      ...prev,
      screenshots: prev.screenshots.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Website submitted for approval successfully!');
    }, 2000);
  };

  const websiteTypes = [
    'E-Commerce', 'Portfolio', 'Business', 'Blog', 'Entertainment', 
    'Education', 'Social Media', 'Health & Fitness', 'Finance', 'News', 'Other'
  ];

  return (
    <motion.div 
      style={publishStyles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Progress Steps */}
      <div style={publishStyles.stepIndicator}>
        {[1, 2, 3].map((step) => (
          <motion.div 
            key={step}
            style={{
              ...publishStyles.stepItem,
              background: currentStep >= step ? themeColor : colors.lightGray,
              color: currentStep >= step ? '#fff' : colors.gray,
              width: isMobile ? '28px' : '32px',
              height: isMobile ? '28px' : '32px',
            }}
            onClick={() => setCurrentStep(step)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentStep > step ? <Check size={14} /> : step}
          </motion.div>
        ))}
      </div>

      <div style={{
        ...publishStyles.stepLabels,
        fontSize: isMobile ? '10px' : '12px'
      }}>
        <span style={{ color: currentStep >= 1 ? themeColor : colors.gray }}>Website Info</span>
        <span style={{ color: currentStep >= 2 ? themeColor : colors.gray }}>Owner Details</span>
        <span style={{ color: currentStep >= 3 ? themeColor : colors.gray }}>Publish</span>
      </div>

      {/* Step 1: Website Information */}
      {currentStep === 1 && (
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div style={publishStyles.formSection}>
            <div style={publishStyles.sectionIconBox}>
              <Globe size={20} color={themeColor} />
            </div>
            <h3 style={publishStyles.formSectionTitle}>Website Information</h3>
          </div>

          <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Website URL <span style={{color: colors.danger}}>*</span></label>
            <div style={publishStyles.inputWrapper}>
              <Link size={16} color={themeColor} />
              <input style={publishStyles.formInput} name="websiteUrl" value={formData.websiteUrl} onChange={handleInputChange} placeholder="https://www.yourwebsite.com" />
            </div>
          </motion.div>

          <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Website Short Name <span style={{color: colors.danger}}>*</span></label>
            <div style={publishStyles.inputWrapper}>
              <Edit3 size={16} color={themeColor} />
              <input style={publishStyles.formInput} name="shortName" value={formData.shortName} onChange={handleInputChange} placeholder="MyApp" />
            </div>
          </motion.div>

          <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Website Type <span style={{color: colors.danger}}>*</span></label>
            <div style={publishStyles.selectWrapper}>
              <LayoutGrid size={16} color={themeColor} />
              <select style={publishStyles.formSelect} name="websiteType" value={formData.websiteType} onChange={handleInputChange}>
                <option value="">Select Website Type</option>
                {websiteTypes.map(type => (<option key={type} value={type}>{type}</option>))}
              </select>
            </div>
          </motion.div>

          <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Developer ID <span style={{color: colors.danger}}>*</span></label>
            <div style={publishStyles.inputWrapper}>
              <Code size={16} color={themeColor} />
              <input style={publishStyles.formInput} name="developerId" value={formData.developerId} onChange={handleInputChange} placeholder="DEV-XXXX-XXXX" />
            </div>
          </motion.div>

          <motion.button 
            style={{...publishStyles.nextBtn, background: themeColor}} onClick={() => setCurrentStep(2)}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            disabled={!formData.websiteUrl || !formData.shortName || !formData.websiteType || !formData.developerId}
          >
            Next: Owner Details <ChevronRight size={18} />
          </motion.button>
        </motion.div>
      )}

      {/* Step 2: Owner Details */}
      {currentStep === 2 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <div style={publishStyles.formSection}>
            <div style={publishStyles.sectionIconBox}><User size={20} color={themeColor} /></div>
            <h3 style={publishStyles.formSectionTitle}>Owner Information</h3>
          </div>

          <div style={publishStyles.twoColumnGrid}>
            <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
              <label style={publishStyles.inputLabel}>Owner Name <span style={{color: colors.danger}}>*</span></label>
              <div style={publishStyles.inputWrapper}>
                <User size={16} color={themeColor} />
                <input style={publishStyles.formInput} name="ownerName" value={formData.ownerName} onChange={handleInputChange} placeholder="Full Name" />
              </div>
            </motion.div>
            <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
              <label style={publishStyles.inputLabel}>Mobile Number <span style={{color: colors.danger}}>*</span></label>
              <div style={publishStyles.inputWrapper}>
                <Phone size={16} color={themeColor} />
                <input style={publishStyles.formInput} name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" type="tel" />
              </div>
            </motion.div>
          </div>

          <div style={publishStyles.ownerInfoNote}>
            <ShieldCheck size={16} color={themeColor} />
            <span>Your information is secure and encrypted.</span>
          </div>

          <div style={publishStyles.buttonGroup}>
            <motion.button style={publishStyles.backBtn} onClick={() => setCurrentStep(1)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ArrowLeft size={18} /> Back
            </motion.button>
            <motion.button style={{...publishStyles.nextBtn, background: themeColor}} onClick={() => setCurrentStep(3)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={!formData.ownerName || !formData.mobileNumber}>
              Next: Publish <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Payment & Publish */}
      {currentStep === 3 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <div style={publishStyles.formSection}>
            <div style={publishStyles.sectionIconBox}><Rocket size={20} color={themeColor} /></div>
            <h3 style={publishStyles.formSectionTitle}>Review & Publish</h3>
          </div>

          <motion.button style={{...publishStyles.payBtn, background: themeColor}} onClick={handleSubmit} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={isSubmitting}>
            {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} style={publishStyles.spinner} /> : (<><Wallet size={18} /> Pay & Publish Website</>)}
          </motion.button>

          <div style={publishStyles.buttonGroup}>
            <motion.button style={publishStyles.backBtn} onClick={() => setCurrentStep(2)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ArrowLeft size={18} /> Back
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// --- PUBLISH WEBSITE FORM STYLES ---
const publishStyles = {
  container: { padding: '0 5px' },
  stepIndicator: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '8px' },
  stepItem: { borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', cursor: 'pointer', transition: '0.3s' },
  stepLabels: { display: 'flex', justifyContent: 'space-between', padding: '0 20px', marginBottom: '25px', fontWeight: '600' },
  formSection: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '10px', borderBottom: `2px solid ${colors.lightGray}` },
  sectionIconBox: { width: '40px', height: '40px', borderRadius: '12px', background: `${colors.primary}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  formSectionTitle: { fontSize: '18px', fontWeight: '800', color: colors.dark, margin: 0 },
  inputGroup: { marginBottom: '16px' },
  inputLabel: { display: 'block', fontSize: '13px', fontWeight: '700', color: colors.dark, marginBottom: '8px' },
  inputWrapper: { display: 'flex', alignItems: 'center', gap: '10px', background: colors.white, border: `2px solid ${colors.lightGray}`, borderRadius: '12px', padding: '0 14px', transition: '0.3s' },
  selectWrapper: { display: 'flex', alignItems: 'center', gap: '10px', background: colors.white, border: `2px solid ${colors.lightGray}`, borderRadius: '12px', padding: '0 14px' },
  formInput: { flex: 1, padding: '14px 0', border: 'none', outline: 'none', fontSize: '14px', color: colors.dark, fontFamily: 'inherit', background: 'transparent' },
  formSelect: { flex: 1, padding: '14px 0', border: 'none', outline: 'none', fontSize: '14px', color: colors.dark, fontFamily: 'inherit', background: 'transparent', cursor: 'pointer' },
  twoColumnGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
  ownerInfoNote: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: `${colors.primary}12`, borderRadius: '10px', fontSize: '12px', color: colors.primary, marginTop: '15px' },
  buttonGroup: { display: 'flex', gap: '12px', marginTop: '25px' },
  backBtn: { flex: 1, padding: '14px', borderRadius: '12px', border: `2px solid ${colors.primary}`, background: colors.white, color: colors.primary, fontWeight: '700', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: '0.3s' },
  nextBtn: { flex: 1, padding: '14px', borderRadius: '12px', border: 'none', color: colors.white, fontWeight: '700', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: '0.3s', boxShadow: `0 4px 15px ${colors.primary}40` },
  payBtn: { width: '100%', padding: '16px', borderRadius: '12px', border: 'none', color: colors.white, fontWeight: '700', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: '0.3s', boxShadow: `0 4px 20px ${colors.primary}50` },
  spinner: { width: '20px', height: '20px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%' },
};

// --- MEGA RENDERER ENGINE ---
export const RenderModuleContent = ({ module, themeColor, isMobile, isTablet, isDesktop }) => {
  const [activeTab, setActiveTab] = useState('sites');

  const cardPadding = isMobile ? '12px' : '18px';
  const titleSize = isMobile ? '14px' : '16px';

  switch(module.id) {
    case 'u_profile': return (
      <div style={s.deepPage}>
        <div style={{...s.profileUpload, width: isMobile ? '70px' : '80px', height: isMobile ? '70px' : '80px'}}>
          <Camera size={isMobile ? 20 : 24} color={themeColor}/>
        </div>
        <input style={{...s.input, padding: isMobile ? '12px' : '15px'}} placeholder="Full Name" />
        <input style={{...s.input, padding: isMobile ? '12px' : '15px'}} placeholder="Email" />
        <ActionRow icon={<Lock/>} label="Change Master Password" />
        <ActionRow icon={<ShieldCheck/>} label="Two-Factor Authentication" isToggle />
        <button style={{...s.dangerBtn, padding: isMobile ? '12px' : '14px'}}>Deactivate Account</button>
      </div>
    );
    case 'u_history': return (
      <div style={s.deepPage}>
        <div style={s.tabHeader}>
          <button style={activeTab === 'sites' ? s.tabOn : s.tabOff} onClick={()=>setActiveTab('sites')}>Recently Viewed</button>
          <button style={activeTab === 'search' ? s.tabOn : s.tabOff} onClick={()=>setActiveTab('search')}>Search History</button>
        </div>
        {activeTab === 'sites' ? (
          <div style={s.listArea}>
            <div style={{...s.historyCard, padding: cardPadding}}>
              <div style={{...s.siteThumb, width: isMobile ? '36px' : '40px', height: isMobile ? '36px' : '40px'}}>
                <img src={Mainlogo} width="20" alt="logo"/>
              </div>
              <div style={{flex:1}}>
                <b style={{fontSize: titleSize}}>Global Web Guru</b>
                <p style={{fontSize: isMobile ? '10px' : '12px'}}>E-Commerce • Today 10:20 AM</p>
              </div>
              <button style={s.miniBtn}>Visit Again</button>
              <Trash2 size={16} color="#cbd5e1"/>
            </div>
            <div style={s.sectionHeader}>Clear History Options</div>
            <div style={s.btnRow}>
              <button style={s.outlineBtn}>Last 24h</button>
              <button style={s.outlineBtn}>Last 7 Days</button>
              <button style={s.clearBtnFull}>Clear All</button>
            </div>
          </div>
        ) : (
          <div style={s.listArea}>
            <div style={{...s.searchLogItem, padding: cardPadding}}><Search size={14}/> <span>React Infrastructure Templates</span> <small>Today</small></div>
            <button style={s.clearBtnFull}>Clear All Search Logs</button>
          </div>
        )}
      </div>
    );
    case 'u_saved': return (
      <div style={s.deepPage}>
        <div style={{...s.folderGrid, gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr 1fr'}}>
          <div style={{...s.folder, padding: isMobile ? '15px' : '20px'}}><Heart fill={themeColor} color={themeColor}/> Favorites</div>
          <div style={{...s.folder, padding: isMobile ? '15px' : '20px'}}><Briefcase color={themeColor}/> Work</div>
          <div style={{...s.folder, padding: isMobile ? '15px' : '20px'}}><PlusCircle color="#999"/> New Category</div>
        </div>
        <div style={{...s.historyCard, padding: cardPadding}}>
          <div style={{flex:1}}><b style={{fontSize: titleSize}}>React-Silk-UI.com</b><p style={{fontSize: isMobile ? '10px' : '12px'}}>Category: Dev Tools</p></div>
          <ExternalLink size={18} color={themeColor}/>
        </div>
      </div>
    );
    case 'u_notify': return (
      <div style={s.deepPage}>
        <div style={{...s.notifyCard, padding: cardPadding}}>
          <div style={s.pulseDot}></div>
          <div style={{flex:1}}><b style={{fontSize: titleSize}}>Website Approved</b><p style={{fontSize: isMobile ? '10px' : '12px'}}>Infrastructure deployment successful.</p></div>
          <Check size={16} color={colors.success}/>
        </div>
        <div style={s.sectionHeader}>System Alert Controls</div>
        <ActionRow icon={<BadgeCheck/>} label="Approval Alerts" isToggle />
        <ActionRow icon={<RotateCw/>} label="Renewal Reminders" isToggle />
        <ActionRow icon={<Zap/>} label="Ads Performance alert" isToggle />
      </div>
    );
    case 'u_refer': case 'd_refer': case 'c_refer': return (
      <div style={s.deepPage}>
        <div style={{...s.walletCard, background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}CC 100%)`, padding: isMobile ? '20px' : '30px'}}>
          <p style={{fontSize: isMobile ? '12px' : '14px', opacity: 0.9}}>Withdrawable Balance</p>
          <h1 style={{fontSize: isMobile ? '32px' : '40px'}}>$124.50</h1>
          <div style={{...s.linkCopy, background: 'rgba(255,255,255,0.2)'}}><span style={{fontSize: isMobile ? '11px' : '12px'}}>wgg.io/ref/USER7X2</span> <Copy size={16} /></div>
        </div>
        <div style={{...s.statGrid, gap: isMobile ? '8px' : '10px'}}>
          <div style={{...s.statCard, padding: isMobile ? '12px' : '15px'}}><h4 style={{fontSize: isMobile ? '18px' : '20px'}}>24</h4><p style={{fontSize: isMobile ? '10px' : '12px'}}>Total Ref</p></div>
          <div style={{...s.statCard, padding: isMobile ? '12px' : '15px'}}><h4 style={{fontSize: isMobile ? '18px' : '20px'}}>18</h4><p style={{fontSize: isMobile ? '10px' : '12px'}}>Active</p></div>
        </div>
        <button style={{...s.mainBtnFull, background: themeColor, padding: isMobile ? '14px' : '15px'}}>Request Withdraw</button>
      </div>
    );
    case 'u_feed': case 'd_feed': return (
      <div style={s.deepPage}>
        <div style={s.ratingRow}>{[1,2,3,4,5].map(i => <Star key={i} size={isMobile ? 24 : 30} color={i <= 4 ? "#FFD700" : "#ddd"} fill={i <= 4 ? "#FFD700" : "none"} />)}</div>
        <select style={{...s.input, padding: isMobile ? '12px' : '15px'}}><option>Select Category</option><option>Bug Report</option><option>Suggestion</option></select>
        <textarea style={{...s.inputArea, padding: isMobile ? '12px' : '15px', height: isMobile ? '80px' : '100px'}} placeholder="How can we improve?"></textarea>
        <button style={{...s.mainBtnFull, background: themeColor, padding: isMobile ? '14px' : '15px'}}>Submit Feedback</button>
      </div>
    );
    case 'd_profile': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Developer Identity</div>
        <div style={{...s.profileHeader, flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left'}}>
          <div style={{...s.profileUpload, width: isMobile ? '70px' : '80px', height: isMobile ? '70px' : '80px', margin: isMobile ? '0 auto 15px' : '0 20px 0 0'}}>
            <Terminal size={isMobile ? 24 : 30} color={themeColor}/>
          </div>
          <div>
            <h3 style={{margin: 0, fontSize: titleSize}}>John Doe</h3>
            <p style={{margin: 0, color: colors.gray, fontSize: isMobile ? '10px' : '12px'}}>Verified Developer</p>
          </div>
        </div>
        <input style={{...s.input, padding: isMobile ? '12px' : '15px'}} placeholder="Full Name" defaultValue="John Doe" />
        <input style={{...s.input, padding: isMobile ? '12px' : '15px'}} placeholder="Email" defaultValue="john@example.com" />
        <button style={{...s.mainBtnFull, background: themeColor, marginTop: '15px', padding: isMobile ? '14px' : '15px'}}>Save Profile</button>
      </div>
    );
    case 'd_publish': return <PublishWebsiteForm themeColor={themeColor} isMobile={isMobile} />;
    case 'd_buy_domain': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Buy Global Domain</div>
        <div style={{...s.searchContainer, padding: isMobile ? '8px 12px' : '10px 15px'}}>
          <Search size={18} color={colors.gray}/>
          <input style={{...s.searchInput, padding: isMobile ? '8px' : '10px'}} placeholder="Search domain" />
          <button style={{...s.searchBtn, padding: isMobile ? '8px 12px' : '10px 16px'}}>Search</button>
        </div>
        <div style={{...s.tableCard, padding: isMobile ? '8px' : '10px'}}>
          <div style={{...s.tableRow, padding: isMobile ? '12px 8px' : '15px 10px'}}><div><b style={{fontSize: isMobile ? '12px' : '14px'}}>myapp.com</b><p style={{color: colors.success, fontSize: isMobile ? '10px' : '12px'}}>Available</p></div><button style={s.buyBtn}>$12.99 / yr</button></div>
        </div>
      </div>
    );
    case 'd_buy_ssl': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Secure Your App (SSL)</div>
        <div style={{...s.planGrid, flexDirection: isMobile ? 'column' : 'row'}}>
          <div style={{...s.planCard, padding: isMobile ? '15px' : '20px'}}><h4 style={{fontSize: titleSize}}>Basic SSL</h4><h2 style={{margin: '10px 0', fontSize: isMobile ? '20px' : '24px'}}>$9.99<small>/yr</small></h2><button style={s.outlineBtn}>Select</button></div>
          <div style={{...s.planCard, padding: isMobile ? '15px' : '20px', border: `2px solid ${themeColor}`}}><h4 style={{fontSize: titleSize}}>Wildcard SSL</h4><h2 style={{margin: '10px 0', fontSize: isMobile ? '20px' : '24px'}}>$45.00<small>/yr</small></h2><button style={{...s.mainBtnFull, background: themeColor, padding: isMobile ? '8px' : '10px'}}>Select</button></div>
        </div>
      </div>
    );
    case 'd_status': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Publish Status</div>
        <div style={{...s.tableCard, padding: isMobile ? '8px' : '10px'}}>
          <div style={{...s.tableRow, padding: isMobile ? '12px 8px' : '15px 10px'}}><div><b style={{fontSize: isMobile ? '12px' : '14px'}}>E-Commerce Pro v2</b><p style={{fontSize: isMobile ? '10px' : '12px'}}>Updated: Today</p></div><span style={{color: colors.warning, fontWeight: 'bold'}}><Activity size={14}/> Pending</span></div>
          <div style={{...s.tableRow, padding: isMobile ? '12px 8px' : '15px 10px'}}><div><b style={{fontSize: isMobile ? '12px' : '14px'}}>Admin Console UI</b><p style={{fontSize: isMobile ? '10px' : '12px'}}>Updated: 10 Feb</p></div><span style={{color: colors.success, fontWeight: 'bold'}}><CheckCircle size={14}/> Approved</span></div>
        </div>
      </div>
    );
    case 'd_renewal_website': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Website Hosting Renewal</div>
        <div style={{...s.walletCard, background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}CC 100%)`, padding: isMobile ? '20px' : '30px'}}>
          <p style={{fontSize: isMobile ? '12px' : '14px', opacity: 0.9}}>E-Commerce Pro Server</p>
          <h1 style={{fontSize: isMobile ? '28px' : '36px'}}>18 Days Left</h1>
        </div>
        <button style={{...s.mainBtnFull, background: themeColor, marginTop: '15px', padding: isMobile ? '14px' : '15px'}}>Renew Now</button>
      </div>
    );
    case 'd_seo': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>SEO & Ads Campaign</div>
        <input style={{...s.input, padding: isMobile ? '12px' : '15px'}} placeholder="Campaign Name" />
        <input style={{...s.input, padding: isMobile ? '12px' : '15px'}} placeholder="Target Keywords" />
        <div style={{...s.statGrid, gap: isMobile ? '8px' : '10px'}}>
          <div style={{...s.statCard, padding: isMobile ? '12px' : '15px'}}><h4 style={{fontSize: isMobile ? '18px' : '20px'}}>1.4k</h4><p style={{fontSize: isMobile ? '10px' : '12px'}}>Total Clicks</p></div>
          <div style={{...s.statCard, padding: isMobile ? '12px' : '15px'}}><h4 style={{fontSize: isMobile ? '18px' : '20px'}}>3.4%</h4><p style={{fontSize: isMobile ? '10px' : '12px'}}>CTR</p></div>
        </div>
        <button style={{...s.mainBtnFull, background: themeColor, marginTop: '15px', padding: isMobile ? '14px' : '15px'}}>Start Campaign</button>
      </div>
    );
    case 'd_project_list': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>My Projects</div>
        <button style={{...s.outlineBtn, width: '100%', marginBottom: '15px', padding: isMobile ? '12px' : '14px'}}><Plus size={16}/> Create New Project</button>
        <div style={{...s.tableCard, padding: isMobile ? '8px' : '10px'}}>
          <div style={{...s.tableRow, padding: isMobile ? '12px 8px' : '15px 10px'}}><div><b style={{fontSize: isMobile ? '12px' : '14px'}}>E-Commerce Platform</b><p style={{fontSize: isMobile ? '10px' : '12px'}}>Team: 3 Members</p></div><span style={{color: colors.success}}>Active</span></div>
        </div>
      </div>
    );
    case 'c_profile': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Business Profile</div>
        <input style={{...s.input, padding: isMobile ? '12px' : '15px'}} placeholder="Company Name" />
        <input style={{...s.input, padding: isMobile ? '12px' : '15px'}} placeholder="Contact Person" />
        <div style={{...s.statusBanner, padding: isMobile ? '10px' : '12px'}}>Status: <b>ACTIVE CLIENT</b></div>
      </div>
    );
    case 'c_performance': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Traffic & Engagement</div>
        <div style={{...s.statGrid, gap: isMobile ? '8px' : '10px'}}>
          <div style={{...s.statCard, padding: isMobile ? '12px' : '15px'}}><h4 style={{fontSize: isMobile ? '18px' : '20px'}}>12k</h4><p style={{fontSize: isMobile ? '10px' : '12px'}}>Visitors</p></div>
          <div style={{...s.statCard, padding: isMobile ? '12px' : '15px'}}><h4 style={{fontSize: isMobile ? '18px' : '20px'}}>4.2%</h4><p style={{fontSize: isMobile ? '10px' : '12px'}}>Conversion</p></div>
        </div>
      </div>
    );
    case 'c_status': return (
      <div style={s.deepPage}>
        <div style={{...s.walletCard, background: `linear-gradient(135deg, ${colors.success} 0%, ${colors.success}CC 100%)`, padding: isMobile ? '20px' : '30px'}}>
          <p style={{fontSize: isMobile ? '12px' : '14px', opacity: 0.9}}>Infrastructure Health</p>
          <h1 style={{fontSize: isMobile ? '24px' : '32px'}}>OPERATIONAL</h1>
        </div>
        <button style={{...s.mainBtnFull, background: themeColor, marginTop: '20px', padding: isMobile ? '14px' : '15px'}}>Renew Infrastructure</button>
      </div>
    );
    case 'a_profile': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Admin Master Console</div>
        <div style={{...s.profileUpload, width: isMobile ? '70px' : '80px', height: isMobile ? '70px' : '80px'}}>
          <ShieldCheck size={isMobile ? 24 : 28} color={themeColor}/>
        </div>
        <ActionRow icon={<Lock/>} label="Password Verification" />
        <ActionRow icon={<Activity/>} label="Master Activity Log" />
        <div style={{...s.enterpriseBadge, padding: isMobile ? '10px' : '12px'}}>ADMIN PRIVILEGES GRANTED</div>
      </div>
    );
    case 'a_listing': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Global Listings</div>
        <div style={{...s.tableCard, padding: isMobile ? '8px' : '10px'}}>
          <div style={{...s.tableRow, padding: isMobile ? '12px 8px' : '15px 10px'}}><div><b style={{fontSize: isMobile ? '12px' : '14px'}}>MarketNode.io</b><p style={{fontSize: isMobile ? '10px' : '12px'}}>Category: E-Comm</p></div><b style={{color: colors.success}}>$1,240</b></div>
        </div>
      </div>
    );
    case 'a_approve': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Website Approval Queue</div>
        <div style={{...s.tableCard, padding: isMobile ? '8px' : '10px'}}>
          <div style={{...s.tableRow, padding: isMobile ? '12px 8px' : '15px 10px'}}><div><b style={{fontSize: isMobile ? '12px' : '14px'}}>TechStart.io</b></div><button style={s.miniBtn}>Approve</button></div>
        </div>
      </div>
    );
    case 'a_profit': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Global Profit Checker</div>
        <div style={{...s.walletCard, background: `linear-gradient(135deg, ${colors.success} 0%, ${colors.success}CC 100%)`, padding: isMobile ? '20px' : '30px'}}>
          <p style={{fontSize: isMobile ? '12px' : '14px', opacity: 0.9}}>Total Revenue</p>
          <h1 style={{fontSize: isMobile ? '28px' : '40px'}}>$12,450</h1>
        </div>
        <div style={{...s.statGrid, gap: isMobile ? '8px' : '10px'}}>
          <div style={{...s.statCard, padding: isMobile ? '12px' : '15px'}}><h4 style={{fontSize: isMobile ? '18px' : '20px'}}>$8,200</h4><p style={{fontSize: isMobile ? '10px' : '12px'}}>Net Profit</p></div>
          <div style={{...s.statCard, padding: isMobile ? '12px' : '15px'}}><h4 style={{fontSize: isMobile ? '18px' : '20px'}}>65%</h4><p style={{fontSize: isMobile ? '10px' : '12px'}}>Margin</p></div>
        </div>
      </div>
    );
    case 'a_payments': return (
      <div style={s.deepPage}>
        <div style={s.sectionHeader}>Global Payments</div>
        <div style={{...s.tableCard, padding: isMobile ? '8px' : '10px'}}>
          <div style={{...s.tableRow, padding: isMobile ? '12px 8px' : '15px 10px'}}><div><b>Payment #1001</b></div><b style={{color: colors.success}}>$45.00</b></div>
        </div>
      </div>
    );
    default: return <div style={{...s.placeholder, padding: isMobile ? '20px' : '40px'}}>System node for {module?.title} active.</div>;
  }
};

// --- CORE UI HELPERS ---
export const RoleGateway = ({ onSelect, theme }) => (
  <div style={s.verticalList}>
    <RoleCard icon={<User/>} title="User Settings" desc="Personal data & History" onClick={() => onSelect('user')} color={theme} />
    <RoleCard icon={<Terminal/>} title="Developer Settings" desc="Publishing & SEO Ads" onClick={() => onSelect('developer')} color={theme} />
    <RoleCard icon={<Briefcase/>} title="Website Client" desc="Analytics & Status" onClick={() => onSelect('client')} color={theme} />
    <RoleCard icon={<ShieldAlert/>} title="Admin Control" desc="Approvals & Profits" onClick={() => onSelect('admin')} color={theme} />
  </div>
);

const RoleCard = ({ icon, title, onClick, color, desc }) => (
  <div onClick={onClick} style={s.clickableRowCard}>
    <div style={{...s.iconBox, background: `${color}11`}}>{React.cloneElement(icon, {size: 24, color: color})}</div>
    <div style={{flex:1}}><h3 style={s.rowTitle}>{title}</h3><p style={s.mSub}>{desc}</p></div>
    <ChevronRight size={20} color="#cbd5e1" />
  </div>
);

const ActionRow = ({ icon, label, isToggle }) => {
    const [on, setOn] = useState(false);
    return (<div style={s.detailRow}><div style={{display:'flex', alignItems:'center', gap:'15px'}}>{React.cloneElement(icon, {size: 18, color: colors.gray})} <span>{label}</span></div>{isToggle ? (<div onClick={()=>setOn(!on)} style={{...s.toggle, background: on ? colors.primary : '#ccc'}}><div style={{...s.toggleCircle, transform: on ? 'translateX(18px)' : 'translateX(0)'}}></div></div>) : <ChevronRight size={16} color="#ccc"/>}</div>);
};

// --- STYLES OBJECT (s = settings) ---
const s = {
  deepPage: { animation: 'fadeIn 0.4s' },
  tabHeader: { display: 'flex', gap: '10px', marginBottom: '20px' },
  tabOn: { background: colors.primary, color: '#fff', border:'none', padding: '8px 20px', borderRadius:'10px', fontWeight:'700', cursor:'pointer' },
  tabOff: { background: colors.lightest, color: colors.gray, border:'none', padding: '8px 20px', borderRadius:'10px', cursor:'pointer' },
  historyCard: { padding: '15px', background: colors.lightest, borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', border: '1px solid colors.lightGray' },
  siteThumb: { width: '40px', height: '40px', background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  miniBtn: { padding: '5px 12px', background: colors.primary, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: '700', cursor:'pointer' },
  btnRow: { display: 'flex', gap: '10px', marginBottom: '15px' },
  outlineBtn: { flex: 1, padding: '10px', background: '#fff', border: '1px solid colors.lightGray', borderRadius: '12px', fontSize: '12px', cursor:'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' },
  clearBtnFull: { width: '100%', padding: '12px', background: '#fee2e2', color: colors.danger, border: 'none', borderRadius: '12px', fontWeight: '800', marginTop: '10px', cursor:'pointer' },
  folderGrid: { display: 'grid', gap: '10px', marginBottom: '20px' },
  folder: { padding: '20px', background: colors.lightest, borderRadius: '18px', textAlign: 'center', fontWeight: '700', border: '1px solid colors.lightGray', display:'flex', flexDirection:'column', alignItems:'center', gap:'10px' },
  walletCard: { padding: '30px', background: colors.primary, borderRadius: '25px', color: '#fff', textAlign: 'center', marginBottom: '20px' },
  linkCopy: { marginTop: '15px', padding: '10px', background: 'rgba(0,0,0,0.1)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '12px' },
  statGrid: { display: 'flex', gap: '10px', marginBottom: '20px' },
  statCard: { flex: 1, padding: '15px', background: colors.lightest, borderRadius: '15px', textAlign: 'center' },
  notifyCard: { padding: '15px', background: colors.lightest, borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', borderLeft: `4px solid ${colors.primary}` },
  pulseDot: { width: '10px', height: '10px', background: colors.primary, borderRadius: '50%' },
  ratingRow: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '25px' },
  uploadBox: { padding: '20px', border: '2px dashed colors.lightGray', borderRadius: '15px', textAlign: 'center', color: colors.gray, marginBottom: '15px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' },
  legalRow: { padding: '18px', borderBottom: `1px solid ${colors.lightGray}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  acceptBox: { marginTop: '20px', fontSize: '12px', color: colors.gray, display:'flex', gap:'10px', alignItems:'center' },
  input: { width: '100%', padding: '15px', borderRadius: '12px', border: `1px solid ${colors.lightGray}`, marginBottom: '15px', fontFamily: 'inherit', boxSizing: 'border-box', background: '#fff' },
  inputArea: { width: '100%', height: '100px', padding: '15px', borderRadius: '12px', border: `1px solid ${colors.lightGray}`, marginBottom: '15px', fontFamily: 'inherit', boxSizing: 'border-box', background: '#fff' },
  sectionHeader: { fontSize: '14px', fontWeight: '800', color: colors.dark, margin: '20px 0 10px 5px', textAlign: 'left', textTransform: 'uppercase' },
  detailRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', borderBottom: `1px solid ${colors.lightGray}` },
  toggle: { width: '36px', height: '18px', borderRadius: '10px', padding: '2px', cursor: 'pointer' },
  toggleCircle: { width: '14px', height: '14px', background: '#fff', borderRadius: '50%', transition: '0.3s' },
  profileUpload: { width: '80px', height: '80px', borderRadius: '50%', background: colors.lightest, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px dashed ${colors.primary}`, flexDirection: 'column', gap: '5px' },
  inputRow: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' },
  statusBanner: { padding: '12px', background: '#e6f3ef', borderRadius: '10px', textAlign: 'center', color: colors.success, fontSize: '13px' },
  mainBtnFull: { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', color: '#fff', fontWeight: '800', cursor: 'pointer', boxSizing: 'border-box' },
  tableCard: { background: colors.lightest, borderRadius: '15px', padding: '10px', marginBottom: '15px' },
  tableRow: { display: 'flex', justifyContent: 'space-between', padding: '15px 10px', borderBottom: '1px solid #f1f1f1', fontSize: '14px', alignItems: 'center' },
  rejectionBox: { padding: '10px', background: '#fee2e2', borderRadius: '10px', color: colors.danger, fontSize: '12px', marginTop: '10px' },
  infoRow: { display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: `1px solid ${colors.lightGray}` },
  infoBanner: { padding: '12px', background: colors.lightest, borderRadius: '10px', color: colors.gray, fontSize: '13px', textAlign: 'center', marginBottom: '15px' },
  chartMock: { height: '100px', background: colors.lightest, borderRadius: '20px', display: 'flex', alignItems: 'flex-end', gap: '5px', padding: '10px' },
  bar: { flex: 1, borderRadius: '3px 3px 0 0' },
  dangerBtn: { width: '100%', padding: '14px', background: '#fee2e2', color: colors.danger, border: 'none', borderRadius: '12px', fontWeight: '800', marginTop: '10px', cursor: 'pointer' },
  placeholder: { padding: '40px', textAlign: 'center', color: colors.gray },
  enterpriseBadge: { marginTop: '20px', padding: '10px', background: colors.dark, color: '#fff', textAlign: 'center', borderRadius: '10px', fontSize: '12px', fontWeight: '700' },
  filterBar: { padding: '10px', background: '#f9f9f9', borderRadius: '8px', marginBottom: '10px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '10px' },
  profileHeader: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' },
  searchContainer: { display: 'flex', gap: '10px', background: '#f5f5f5', padding: '5px', borderRadius: '8px', alignItems: 'center' },
  searchInput: { flex: 1, border: 'none', background: 'transparent', outline: 'none', padding: '8px' },
  searchBtn: { background: colors.dark, color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer' },
  buyBtn: { background: colors.success, color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' },
  planGrid: { display: 'flex', gap: '15px', marginTop: '10px' },
  planCard: { flex: 1, background: '#fff', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center', border: `1px solid ${colors.lightGray}` },
  actionRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '12px 15px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '15px' },
  searchLogItem: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: colors.lightest, borderRadius: '10px', marginBottom: '10px', color: colors.gray },
  listArea: { marginBottom: '15px' },
  verticalList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  clickableRowCard: { background: colors.lightest, border: `1px solid ${colors.lightGray}`, borderRadius: '25px', padding: '18px 25px', display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', transition: '0.3s' },
  iconBox: { width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  iconBoxSmall: { width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  rowTitle: { flex: 1, fontSize: '17px', fontWeight: '800', color: colors.dark, margin: 0 },
  mTitle: { fontSize: '15px', fontWeight: '700', color: colors.dark },
  mSub: { fontSize: '12px', color: colors.gray },
};

export default { RenderModuleContent, RoleGateway };
