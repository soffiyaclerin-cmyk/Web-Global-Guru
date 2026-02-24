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
  Headphones, ShoppingBag, Music, Gamepad2, Rocket
} from 'lucide-react';

import Mainlogo from './assets/Mainlogo.png';

// --- PUBLISH WEBSITE FORM COMPONENT ---
const PublishWebsiteForm = ({ themeColor }) => {
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
              background: currentStep >= step ? themeColor : '#e5e5e5',
              color: currentStep >= step ? '#fff' : '#999'
            }}
            onClick={() => setCurrentStep(step)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentStep > step ? <Check size={14} /> : step}
          </motion.div>
        ))}
      </div>

      <div style={publishStyles.stepLabels}>
        <span style={{ color: currentStep >= 1 ? themeColor : '#999' }}>Website Info</span>
        <span style={{ color: currentStep >= 2 ? themeColor : '#999' }}>Owner Details</span>
        <span style={{ color: currentStep >= 3 ? themeColor : '#999' }}>Publish</span>
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
            <label style={publishStyles.inputLabel}>Website URL <span style={{color: '#ff4444'}}>*</span></label>
            <div style={publishStyles.inputWrapper}>
              <Link size={16} color={themeColor} />
              <input style={publishStyles.formInput} name="websiteUrl" value={formData.websiteUrl} onChange={handleInputChange} placeholder="https://www.yourwebsite.com" />
            </div>
          </motion.div>

          <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Website Short Name <span style={{color: '#ff4444'}}>*</span></label>
            <div style={publishStyles.inputWrapper}>
              <Edit3 size={16} color={themeColor} />
              <input style={publishStyles.formInput} name="shortName" value={formData.shortName} onChange={handleInputChange} placeholder="MyApp" />
            </div>
          </motion.div>

          <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Website Type <span style={{color: '#ff4444'}}>*</span></label>
            <div style={publishStyles.selectWrapper}>
              <LayoutGrid size={16} color={themeColor} />
              <select style={publishStyles.formSelect} name="websiteType" value={formData.websiteType} onChange={handleInputChange}>
                <option value="">Select Website Type</option>
                {websiteTypes.map(type => (<option key={type} value={type}>{type}</option>))}
              </select>
            </div>
          </motion.div>

          <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Developer ID <span style={{color: '#ff4444'}}>*</span></label>
            <div style={publishStyles.inputWrapper}>
              <Code size={16} color={themeColor} />
              <input style={publishStyles.formInput} name="developerId" value={formData.developerId} onChange={handleInputChange} placeholder="DEV-XXXX-XXXX" />
            </div>
          </motion.div>

          {/* Logo Upload */}
          <motion.div style={publishStyles.uploadSection} whileHover={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Website Logo <span style={{color: '#ff4444'}}>*</span></label>
            <div style={publishStyles.logoUploadArea}>
              {formData.logo ? (
                <div style={publishStyles.logoPreview}>
                  <img src={formData.logo} alt="Logo" style={publishStyles.logoImage} />
                  <div style={publishStyles.removeLogoBtn} onClick={() => setFormData(prev => ({ ...prev, logo: null }))}>
                    <X size={14} color="#fff" />
                  </div>
                </div>
              ) : (
                <label style={publishStyles.uploadLabel}>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ display: 'none' }} />
                  <Camera size={24} color={themeColor} />
                  <span>Click to upload logo</span>
                  <small>PNG, JPG (Max 2MB)</small>
                </label>
              )}
            </div>
          </motion.div>

          {/* Screenshots Upload */}
          <motion.div style={publishStyles.uploadSection} whileHover={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Website Screenshots <span style={{color: '#999'}}>(Max 5)</span></label>
            <div style={publishStyles.screenshotsGrid}>
              {formData.screenshots.map((shot, index) => (
                <motion.div key={index} style={publishStyles.screenshotItem} initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <img src={shot} alt={`Screenshot ${index + 1}`} style={publishStyles.screenshotImage} />
                  <div style={publishStyles.removeScreenshotBtn} onClick={() => removeScreenshot(index)}>
                    <X size={12} color="#fff" />
                  </div>
                </motion.div>
              ))}
              {formData.screenshots.length < 5 && (
                <label style={publishStyles.addScreenshotBtn}>
                  <input type="file" accept="image/*" multiple onChange={handleScreenshotUpload} style={{ display: 'none' }} />
                  <Plus size={20} color={themeColor} />
                </label>
              )}
            </div>
          </motion.div>

          <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
            <label style={publishStyles.inputLabel}>Description</label>
            <textarea style={publishStyles.formTextarea} name="description" value={formData.description} onChange={handleInputChange} placeholder="Describe your website..." rows={4} />
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
              <label style={publishStyles.inputLabel}>Owner Name <span style={{color: '#ff4444'}}>*</span></label>
              <div style={publishStyles.inputWrapper}>
                <User size={16} color={themeColor} />
                <input style={publishStyles.formInput} name="ownerName" value={formData.ownerName} onChange={handleInputChange} placeholder="Full Name" />
              </div>
            </motion.div>
            <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
              <label style={publishStyles.inputLabel}>Aadhar Number <span style={{color: '#ff4444'}}>*</span></label>
              <div style={publishStyles.inputWrapper}>
                <CreditCard size={16} color={themeColor} />
                <input style={publishStyles.formInput} name="adharNumber" value={formData.adharNumber} onChange={handleInputChange} placeholder="XXXX XXXX XXXX XXXX" maxLength={16} />
              </div>
            </motion.div>
          </div>

          <div style={publishStyles.twoColumnGrid}>
            <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
              <label style={publishStyles.inputLabel}>Mobile Number <span style={{color: '#ff4444'}}>*</span></label>
              <div style={publishStyles.inputWrapper}>
                <Phone size={16} color={themeColor} />
                <input style={publishStyles.formInput} name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" type="tel" />
              </div>
            </motion.div>
            <motion.div style={publishStyles.inputGroup} whileFocus={{ scale: 1.01 }}>
              <label style={publishStyles.inputLabel}>Gmail ID <span style={{color: '#ff4444'}}>*</span></label>
              <div style={publishStyles.inputWrapper}>
                <Mail size={16} color={themeColor} />
                <input style={publishStyles.formInput} name="gmailId" value={formData.gmailId} onChange={handleInputChange} placeholder="yourname@gmail.com" type="email" />
              </div>
            </motion.div>
          </div>

          <div style={publishStyles.ownerInfoNote}>
            <ShieldCheck size={16} color={themeColor} />
            <span>Your information is secure and encrypted as per government regulations.</span>
          </div>

          <div style={publishStyles.buttonGroup}>
            <motion.button style={publishStyles.backBtn} onClick={() => setCurrentStep(1)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ArrowLeft size={18} /> Back
            </motion.button>
            <motion.button style={{...publishStyles.nextBtn, background: themeColor}} onClick={() => setCurrentStep(3)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={!formData.ownerName || !formData.adharNumber || !formData.mobileNumber || !formData.gmailId}>
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

          <motion.div style={publishStyles.summaryCard} initial={{ scale: 0.95 }} animate={{ scale: 1 }}>
            <div style={publishStyles.summaryHeader}>
              {formData.logo && <img src={formData.logo} alt="Logo" style={publishStyles.summaryLogo} />}
              <div>
                <h4 style={publishStyles.summaryTitle}>{formData.shortName || 'Your Website'}</h4>
                <p style={publishStyles.summaryUrl}>{formData.websiteUrl}</p>
              </div>
            </div>
            <div style={publishStyles.summaryDetails}>
              <div style={publishStyles.summaryRow}><span>Website Type</span><b>{formData.websiteType}</b></div>
              <div style={publishStyles.summaryRow}><span>Developer ID</span><b>{formData.developerId}</b></div>
              <div style={publishStyles.summaryRow}><span>Owner</span><b>{formData.ownerName}</b></div>
              <div style={publishStyles.summaryRow}><span>Contact</span><b>{formData.mobileNumber}</b></div>
            </div>
          </motion.div>

          <motion.div style={publishStyles.paymentCard} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <div style={publishStyles.paymentHeader}><CreditCard size={24} color={themeColor} /><h4>Publishing Fee</h4></div>
            <div style={publishStyles.pricingRow}>
              <div style={publishStyles.pricingItem}><span>Platform Fee</span><b>$9.99</b></div>
              <div style={publishStyles.pricingItem}><span>SSL Certificate</span><b>Free</b></div>
              <div style={publishStyles.pricingItem}><span>Hosting (1 year)</span><b>$24.99</b></div>
            </div>
            <div style={publishStyles.totalRow}><span>Total</span><b style={{ color: themeColor, fontSize: '24px' }}>$34.98</b></div>
            <motion.button style={{...publishStyles.payBtn, background: themeColor}} onClick={handleSubmit} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={isSubmitting}>
              {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} style={publishStyles.spinner} /> : (<><Wallet size={18} /> Pay & Publish Website</>)}
            </motion.button>
            <p style={publishStyles.paymentNote}><Lock size={12} /> Secure payment powered by Web Global Guru</p>
          </motion.div>

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
  stepItem: { width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', cursor: 'pointer', transition: '0.3s' },
  stepLabels: { display: 'flex', justifyContent: 'space-between', padding: '0 20px', marginBottom: '25px', fontSize: '12px', fontWeight: '600' },
  formSection: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #f0f0f0' },
  sectionIconBox: { width: '40px', height: '40px', borderRadius: '12px', background: '#FFF5F6', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  formSectionTitle: { fontSize: '18px', fontWeight: '800', color: '#4A1D1F', margin: 0 },
  inputGroup: { marginBottom: '16px' },
  inputLabel: { display: 'block', fontSize: '13px', fontWeight: '700', color: '#4A1D1F', marginBottom: '8px' },
  inputWrapper: { display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #E8E8E8', borderRadius: '12px', padding: '0 14px', transition: '0.3s' },
  selectWrapper: { display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #E8E8E8', borderRadius: '12px', padding: '0 14px' },
  formInput: { flex: 1, padding: '14px 0', border: 'none', outline: 'none', fontSize: '14px', color: '#4A1D1F', fontFamily: 'inherit', background: 'transparent' },
  formSelect: { flex: 1, padding: '14px 0', border: 'none', outline: 'none', fontSize: '14px', color: '#4A1D1F', fontFamily: 'inherit', background: 'transparent', cursor: 'pointer' },
  formTextarea: { width: '100%', padding: '14px', border: '1px solid #E8E8E8', borderRadius: '12px', fontSize: '14px', color: '#4A1D1F', fontFamily: 'inherit', resize: 'vertical', outline: 'none', boxSizing: 'border-box' },
  uploadSection: { marginBottom: '16px' },
  logoUploadArea: { border: '2px dashed #DD7A83', borderRadius: '16px', padding: '25px', textAlign: 'center', cursor: 'pointer', transition: '0.3s', background: '#FFF9FA' },
  uploadLabel: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#7D5A5C' },
  logoPreview: { position: 'relative', display: 'inline-block' },
  logoImage: { width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' },
  removeLogoBtn: { position: 'absolute', top: '-8px', right: '-8px', width: '24px', height: '24px', borderRadius: '50%', background: '#ff4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  screenshotsGrid: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  screenshotItem: { position: 'relative', width: '70px', height: '70px', borderRadius: '10px', overflow: 'hidden' },
  screenshotImage: { width: '100%', height: '100%', objectFit: 'cover' },
  removeScreenshotBtn: { position: 'absolute', top: '2px', right: '2px', width: '18px', height: '18px', borderRadius: '50%', background: '#ff4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  addScreenshotBtn: { width: '70px', height: '70px', borderRadius: '10px', border: '2px dashed #DD7A83', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#FFF9FA' },
  twoColumnGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
  ownerInfoNote: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#F0FFF4', borderRadius: '10px', fontSize: '12px', color: '#2E7D32', marginTop: '15px' },
  buttonGroup: { display: 'flex', gap: '12px', marginTop: '25px' },
  backBtn: { flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid #DD7A83', background: '#fff', color: '#DD7A83', fontWeight: '700', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: '0.3s' },
  nextBtn: { flex: 1, padding: '14px', borderRadius: '12px', border: 'none', color: '#fff', fontWeight: '700', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: '0.3s' },
  summaryCard: { background: '#fff', borderRadius: '16px', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
  summaryHeader: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #f0f0f0' },
  summaryLogo: { width: '50px', height: '50px', borderRadius: '10px', objectFit: 'cover' },
  summaryTitle: { fontSize: '16px', fontWeight: '800', color: '#4A1D1F', margin: '0 0 4px 0' },
  summaryUrl: { fontSize: '12px', color: '#7D5A5C', margin: 0 },
  summaryDetails: { marginBottom: '10px' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '13px', color: '#7D5A5C', borderBottom: '1px solid #f5f5f5' },
  paymentCard: { background: '#fff', borderRadius: '16px', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
  paymentHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #f0f0f0' },
  pricingRow: { marginBottom: '15px' },
  pricingItem: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '14px', color: '#7D5A5C' },
  totalRow: { display: 'flex', justifyContent: 'space-between', padding: '15px 0', marginBottom: '20px', borderTop: '2px solid #f0f0f0', fontSize: '16px', fontWeight: '800', color: '#4A1D1F' },
  payBtn: { width: '100%', padding: '16px', borderRadius: '12px', border: 'none', color: '#fff', fontWeight: '700', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: '0.3s' },
  spinner: { width: '20px', height: '20px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%' },
  paymentNote: { textAlign: 'center', fontSize: '11px', color: '#999', marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' },
};

// --- MEGA RENDERER ENGINE ---
export const RenderModuleContent = ({ module, themeColor }) => {
  const [activeTab, setActiveTab] = useState('sites');

  switch(module.id) {
    case 'u_profile': return (<div style={s.deepPage}><div style={s.profileUpload}><Camera size={24} color={themeColor}/></div><input style={s.input} placeholder="Full Name" /><input style={s.input} placeholder="Email" /><ActionRow icon={<Lock/>} label="Change Master Password" /><ActionRow icon={<ShieldCheck/>} label="Two-Factor Authentication" isToggle /><button style={s.dangerBtn}>Deactivate Account</button></div>);
    case 'u_history': return (<div style={s.deepPage}><div style={s.tabHeader}><button style={activeTab === 'sites' ? s.tabOn : s.tabOff} onClick={()=>setActiveTab('sites')}>Recently Viewed</button><button style={activeTab === 'search' ? s.tabOn : s.tabOff} onClick={()=>setActiveTab('search')}>Search History</button></div>{activeTab === 'sites' ? (<div style={s.listArea}><div style={s.historyCard}><div style={s.siteThumb}><img src={Mainlogo} width="24" alt="logo"/></div><div style={{flex:1}}><b>Global Web Guru</b><p>E-Commerce • Today 10:20 AM</p></div><button style={s.miniBtn}>Visit Again</button><Trash2 size={16} color="#ddd"/></div><div style={s.sectionHeader}>Clear History Options</div><div style={s.btnRow}><button style={s.outlineBtn}>Last 24h</button><button style={s.outlineBtn}>Last 7 Days</button><button style={s.clearBtnFull}>Clear All</button></div></div>) : (<div style={s.listArea}><div style={s.searchLogItem}><Search size={14}/> <span>React Infrastructure Templates</span> <small>Today</small></div><button style={s.clearBtnFull}>Clear All Search Logs</button></div>)}<div style={s.advancedBox}><ActionRow icon={<RotateCw/>} label="Auto delete after 30 days" isToggle /><ActionRow icon={<Clock/>} label="Pause Tracking" isToggle /></div></div>);
    case 'u_saved': return (<div style={s.deepPage}><div style={s.folderGrid}><div style={s.folder}><Heart fill={themeColor} color={themeColor}/> Favorites</div><div style={s.folder}><Briefcase color={themeColor}/> Work</div><div style={s.folder}><PlusCircle color="#999"/> New Category</div></div><div style={s.historyCard}><div style={{flex:1}}><b>React-Silk-UI.com</b><p>Category: Dev Tools</p></div><ExternalLink size={18} color={themeColor}/></div><div style={s.sectionHeader}>Share & Export</div><div style={s.btnRow}><button style={s.outlineBtn}><Share2 size={14}/> Share via Link</button><button style={s.outlineBtn}><Download size={14}/> Export (PDF)</button></div></div>);
    case 'u_notify': return (<div style={s.deepPage}><div style={s.notifyCard}><div style={s.pulseDot}></div><div style={{flex:1}}><b>Website Approved</b><p>Infrastructure deployment successful.</p></div><Check size={16} color="#10b981"/></div><div style={s.sectionHeader}>System Alert Controls</div><ActionRow icon={<BadgeCheck/>} label="Approval Alerts" isToggle /><ActionRow icon={<RotateCw/>} label="Renewal Reminders" isToggle /><ActionRow icon={<Zap/>} label="Ads Performance alert" isToggle /><div style={s.sectionHeader}>Channel Settings</div><ActionRow icon={<Globe/>} label="Email Notifications" isToggle /><ActionRow icon={<Smartphone/>} label="App Push Notifications" isToggle /><button style={s.clearBtnFull}>Clear All Notifications</button></div>);
    case 'u_refer': case 'd_refer': case 'c_refer': return (<div style={s.deepPage}><div style={s.walletCard}><p>Withdrawable Balance</p><h1>$124.50</h1><div style={s.linkCopy}><span>wgg.io/ref/USER7X2</span> <Copy size={16} /></div></div><div style={s.statGrid}><div style={s.statCard}><h4>24</h4><p>Total Ref</p></div><div style={s.statCard}><h4>18</h4><p>Active</p></div></div><div style={s.sectionHeader}>Withdrawal Banking</div><input style={s.input} placeholder="Bank Name / IFSC" /><input style={s.input} placeholder="Account Number" /><button style={{...s.mainBtnFull, background: themeColor}}>Request Withdraw</button></div>);
    case 'u_feed': case 'd_feed': return (<div style={s.deepPage}><div style={s.ratingRow}>{[1,2,3,4,5].map(i => <Star key={i} size={30} color={i <= 4 ? "#FFD700" : "#ddd"} fill={i <= 4 ? "#FFD700" : "none"} />)}</div><select style={s.input}><option>Select Category</option><option>Bug Report</option><option>Suggestion</option><option>Feature Request</option></select><textarea style={s.inputArea} placeholder="How can we improve?"></textarea><div style={s.uploadBox}><Image size={20}/> Attach Screenshot</div><button style={{...s.mainBtnFull, background: themeColor}}>Submit Feedback</button></div>);
    case 'd_profile': return (<div style={s.deepPage}><div style={s.sectionHeader}>Developer Identity</div><div style={s.profileHeader}><div style={s.profileUpload}><Terminal size={30} color={themeColor}/></div><div><h3 style={{margin: 0}}>John Doe</h3><p style={{margin: 0, color: '#666', fontSize: '12px'}}>Verified Developer at Web Global Guru</p></div></div><input style={s.input} placeholder="Full Name" defaultValue="John Doe" /><div style={s.inputRow}><input style={{...s.input, flex:1}} placeholder="Email" defaultValue="john@example.com" /><input style={{...s.input, flex:1}} placeholder="Phone" /></div><textarea style={s.inputArea} placeholder="Short Bio"></textarea><div style={s.statGrid}><input style={s.input} placeholder="Exp (Years)" /><input style={s.input} placeholder="Tech Stack" /></div><div style={s.inputRow}><input style={{...s.input, flex:1}} placeholder="GitHub Link" /><input style={{...s.input, flex:1}} placeholder="Portfolio Link" /></div><div style={s.sectionHeader}>Verification</div><div style={s.uploadBox}><UploadCloud size={20}/> ID Proof / Company Docs</div><div style={s.statusBanner}><CheckCircle size={16}/> Account Status: <b>VERIFIED</b></div><button style={{...s.mainBtnFull, background:themeColor, marginTop:'15px'}}>Save Profile</button></div>);
    case 'd_publish': return <PublishWebsiteForm themeColor={themeColor} />;
    case 'd_buy_domain': return (<div style={s.deepPage}><div style={s.sectionHeader}>Buy Global Domain</div><div style={s.searchContainer}><Search size={18} color="#666"/><input style={s.searchInput} placeholder="Search domain (e.g. myapp.com)" /><button style={s.searchBtn}>Search</button></div><div style={s.sectionHeader}>Available Domains</div><div style={s.tableCard}><div style={s.tableRow}><div><b>myapp.com</b><p style={{color:'green', fontSize:'12px'}}>Available</p></div><button style={s.buyBtn}>$12.99 / yr</button></div><div style={s.tableRow}><div><b>myapp.net</b><p style={{color:'green', fontSize:'12px'}}>Available</p></div><button style={s.buyBtn}>$10.99 / yr</button></div><div style={s.tableRow}><div><b>myapp.io</b><p style={{color:'red', fontSize:'12px'}}>Taken</p></div><button style={{...s.buyBtn, background:'#ccc', color:'#666'}} disabled>Unavailable</button></div></div></div>);
    case 'd_buy_ssl': return (<div style={s.deepPage}><div style={s.sectionHeader}>Secure Your App (SSL)</div><select style={s.input}><option>Select Domain to secure</option><option>myapp.com</option></select><div style={s.planGrid}><div style={s.planCard}><h4>Basic SSL</h4><h2 style={{margin:'10px 0'}}>$9.99<small>/yr</small></h2><p style={{fontSize:'12px', color:'#666'}}>Domain Validation</p><button style={s.outlineBtn}>Select</button></div><div style={{...s.planCard, border:`2px solid ${themeColor}`}}><h4>Wildcard SSL</h4><h2 style={{margin:'10px 0'}}>$45.00<small>/yr</small></h2><p style={{fontSize:'12px', color:'#666'}}>All Subdomains</p><button style={{...s.mainBtnFull, background:themeColor, padding:'8px'}}>Select</button></div></div><div style={s.infoBanner}><Lock size={16}/> SSL protects user data.</div></div>);
    case 'd_status': return (<div style={s.deepPage}><div style={s.sectionHeader}>Publish Status</div><div style={s.tableCard}><div style={s.tableRow}><div><b>E-Commerce Pro v2</b><p>Updated: Today</p></div><span style={{color:'orange', fontWeight:'bold'}}><Activity size={14}/> Pending</span></div><div style={s.tableRow}><div><b>Admin Console UI</b><p>Updated: 10 Feb</p></div><span style={{color:'green', fontWeight:'bold'}}><CheckCircle size={14}/> Approved</span></div><div style={s.tableRow}><div><b>Chat App Backend</b><p>Updated: 05 Feb</p></div><span style={{color:'red', fontWeight:'bold'}}><XCircle size={14}/> Rejected</span></div><div style={s.rejectionBox}><b>Admin Comment:</b> Please fix and resubmit.</div></div><div style={s.btnRow}><button style={s.outlineBtn}><Edit3 size={14}/> Edit App</button><button style={s.outlineBtn}><RotateCw size={14}/> Resubmit</button></div></div>);
    case 'd_renewal_website': return (<div style={s.deepPage}><div style={s.sectionHeader}>Website Hosting Renewal</div><div style={s.walletCard}><p>E-Commerce Pro Server</p><h1>18 Days Left</h1><small>Expires: 05 March 2026</small></div><div style={s.infoRow}><span>Renewal Cost</span><b>$45.00 / month</b></div><div style={s.actionRow}><span><RotateCw size={16} color={themeColor}/> Auto Renewal</span><input type="checkbox" defaultChecked /></div><button style={{...s.mainBtnFull, background:themeColor, marginTop:'15px'}}>Renew Now</button></div>);
    case 'd_renewal_domain': return (<div style={s.deepPage}><div style={s.sectionHeader}>Domain Renewal</div><div style={s.tableCard}><div style={s.tableRow}><div><b>myapp.com</b><p style={{color:'red'}}>Expiring in 5 days!</p></div><b>$12.99</b></div><button style={{...s.mainBtnFull, background:themeColor, margin:'10px 0'}}>Renew Domain</button><div style={s.tableRow}><div><b>webguru.net</b><p>Expires: Dec 2026</p></div><span style={{color:'green'}}>Active</span></div></div></div>);
    case 'd_seo': return (<div style={s.deepPage}><div style={s.sectionHeader}>SEO & Ads Campaign</div><input style={s.input} placeholder="Campaign Name" /><input style={s.input} placeholder="Target Keywords" /><div style={s.inputRow}><input style={{...s.input, flex:1}} placeholder="Daily Budget ($)" type="number" /><select style={{...s.input, flex:1}}><option>Target: Global</option><option>Target: Local</option></select></div><div style={s.sectionHeader}>Performance Analytics</div><div style={s.statGrid}><div style={s.statCard}><h4>1.4k</h4><p>Total Clicks</p></div><div style={s.statCard}><h4>3.4%</h4><p>CTR</p></div></div><div style={s.chartMock}>{[40, 70, 95, 60, 85, 100, 75].map((h,i) => <div key={i} style={{...s.bar, height:h+'%', background:themeColor}}></div>)}</div><button style={{...s.mainBtnFull, background:themeColor, marginTop:'15px'}}>Start Campaign</button></div>);
    case 'd_project_list': return (<div style={s.deepPage}><div style={s.sectionHeader}>My Projects</div><button style={{...s.outlineBtn, width:'100%', marginBottom:'15px'}}><Plus size={16}/> Create New Project</button><div style={s.tableCard}><div style={s.tableRow}><div><b>E-Commerce Platform</b><p>Team: 3 Members</p></div><span style={{color:'green'}}>Active</span></div><div style={s.tableRow}><div><b>CRM Dashboard</b><p>Team: 1 Member</p></div><span style={{color:'orange'}}>Development</span></div></div></div>);
    case 'd_performance': return (<div style={s.deepPage}><div style={s.sectionHeader}>Global Performance</div><select style={s.input}><option>All Projects</option><option>E-Commerce Platform</option></select><div style={s.statGrid}><div style={s.statCard}><TrendingUp size={20} color="green"/><h4>45K</h4><p>Monthly Traffic</p></div><div style={s.statCard}><Activity size={20} color="blue"/><h4>98/100</h4><p>Speed Score</p></div></div></div>);
    case 'd_invite': return (<div style={s.deepPage}><div style={s.sectionHeader}>Team Management</div><div style={s.inputRow}><input style={{...s.input, flex:2}} placeholder="Developer Email" /><select style={{...s.input, flex:1}}><option>Admin</option><option>Dev</option><option>Viewer</option></select></div><button style={{...s.mainBtnFull, background:themeColor}}>Send Invite</button><div style={{...s.sectionHeader, marginTop: '20px'}}>Pending Invites</div><div style={s.tableRow}><div><b>alex@webguru.com</b><p>Role: Dev</p></div><span style={{color:'orange'}}>Pending</span></div></div>);
    case 'd_legal': return (<div style={s.deepPage}><div style={s.sectionHeader}>Legal & Guidelines</div><div style={s.tableCard}><div style={s.legalRow}><div><FileText size={18} color={themeColor} style={{marginRight:'10px'}}/><b>Privacy Policy</b></div><Link size={16} color="#666"/></div><div style={s.legalRow}><div><FileText size={18} color={themeColor} style={{marginRight:'10px'}}/><b>Terms & Conditions</b></div><Link size={16} color="#666"/></div></div></div>);
    case 'c_profile': return (<div style={s.deepPage}><div style={s.sectionHeader}>Business Profile</div><div style={s.profileUpload}><UploadCloud size={24} color={themeColor}/><p>Upload Company Logo</p></div><input style={s.input} placeholder="Company Name" /><input style={s.input} placeholder="Contact Person" /><div style={s.inputRow}><input style={{...s.input, flex:1}} placeholder="Email" /><BadgeCheck size={20} color="green" /></div><div style={s.sectionHeader}>Billing & Industry</div><input style={s.input} placeholder="Business Type" /><input style={s.input} placeholder="GST Number" /><textarea style={s.inputArea} placeholder="Billing Address"></textarea><div style={s.statusBanner}>Status: <b>ACTIVE CLIENT</b></div></div>);
    case 'c_performance': return (<div style={s.deepPage}><div style={s.sectionHeader}>Traffic & Engagement</div><div style={s.statGrid}><div style={s.statCard}><h4>12k</h4><p>Visitors</p></div><div style={s.statCard}><h4>4.2%</h4><p>Conversion</p></div><div style={s.statCard}><h4>0.9s</h4><p>Avg Speed</p></div></div><div style={s.chartMock}>{[30, 60, 90, 45, 75, 55, 80].map((h,i) => <motion.div key={i} initial={{height:0}} animate={{height:h+'%'}} style={{...s.bar, background:themeColor}}></motion.div>)}</div></div>);
    case 'c_status': return (<div style={s.deepPage}><div style={s.walletCard}><p>Infrastructure Health</p><h1>OPERATIONAL</h1><small>99.9% Uptime Monitor</small></div><ActionRow icon={<Server/>} label="Hosting Node Status" /><ActionRow icon={<ShieldCheck/>} label="SSL Encryption" /><button style={{...s.mainBtnFull, background:themeColor, marginTop:'20px'}}>Renew Infrastructure</button></div>);
    case 'c_ads': return (<div style={s.deepPage}><div style={s.sectionHeader}>Ad Campaign ROI</div><div style={s.notifyCard}><div style={s.pulseDot}></div><div style={{flex:1}}><b>Winter Promo</b><p>Active • Target: Europe</p></div><button style={s.miniBtn}>Pause</button></div><input style={s.input} placeholder="Budget Increase ($)" type="number" /><button style={{...s.mainBtnFull, background:themeColor}}>Launch New Campaign</button></div>);
    case 'c_feedback': return (<div style={s.deepPage}><div style={s.statGrid}><div style={s.statCard}><h4>4.9/5</h4><p>Avg Rating</p></div><div style={s.statCard}><h4>142</h4><p>Reviews</p></div></div><div style={s.historyCard}><div style={{flex:1}}><b>Alice Johnson</b><p>"Great UI and performance."</p><small>Today 11:30 AM</small></div><MessageCircle size={18} color={themeColor}/></div><button style={s.clearBtnFull}>View Review History</button></div>);
    case 'c_renewal': return (<div style={s.deepPage}><div style={s.sectionHeader}>Website Renewal</div><div style={s.walletCard}><p>Your Website</p><h1>25 Days Left</h1><small>Expires: 30 March 2026</small></div><button style={{...s.mainBtnFull, background:themeColor}}>Renew Now</button></div>);
    case 'a_profile': return (<div style={s.deepPage}><div style={s.sectionHeader}>Admin Master Console</div><div style={s.profileUpload}><ShieldCheck size={28} color={themeColor}/><p>Alex Admin (Super)</p></div><ActionRow icon={<Lock/>} label="Password Verification" /><ActionRow icon={<Activity/>} label="Master Activity Log" /><div style={s.enterpriseBadge}>ADMIN PRIVILEGES GRANTED</div></div>);
    case 'a_listing': return (<div style={s.deepPage}><div style={s.filterBar}><Search size={14}/> <input placeholder="Search global sites..." style={{border:'none', background:'transparent', flex:1}} /></div><div style={s.tableCard}><div style={s.tableRow}><div><b>MarketNode.io</b><p>Category: E-Comm</p></div><b style={{color:'green'}}>$1,240</b></div><div style={s.tableRow}><div><b>DevDocs.com</b><p>Category: Tools</p></div><b>$0.00</b></div></div></div>);
    case 'a_approve': return (<div style={s.deepPage}><div style={s.sectionHeader}>Website Approval Queue</div><div style={s.tableCard}><div style={s.tableRow}><div><b>TechStart.io</b><p>Developer: John Doe</p></div><button style={s.miniBtn}>Approve</button></div><div style={s.tableRow}><div><b>MyShop.com</b><p>Developer: Jane Smith</p></div><button style={s.miniBtn}>Approve</button></div></div></div>);
    case 'a_renew_list': return (<div style={s.deepPage}><div style={s.sectionHeader}>Renewal Website List</div><div style={s.tableCard}><div style={s.tableRow}><div><b>E-Comm Pro</b><p>Expires: 15 Mar</p></div><b>$45.00</b></div><div style={s.tableRow}><div><b>Blog Master</b><p>Expires: 20 Mar</p></div><b>$25.00</b></div></div></div>);
    case 'a_ads_view': return (<div style={s.deepPage}><div style={s.sectionHeader}>Active Ad Campaigns</div><div style={s.statGrid}><div style={s.statCard}><h4>12</h4><p>Active</p></div><div style={s.statCard}><h4>$2,450</h4><p>Revenue</p></div></div></div>);
    case 'a_ads_set': return (<div style={s.deepPage}><div style={s.sectionHeader}>Ads Settings</div><ActionRow icon={<DollarSign/>} label="Global Ad Revenue Share" /><ActionRow icon={<Eye/>} label="Ad Visibility" isToggle /></div>);
    case 'a_payments': return (<div style={s.deepPage}><div style={s.sectionHeader}>Global Payments</div><div style={s.tableCard}><div style={s.tableRow}><div><b>Payment #1001</b><p>User: John</p></div><b style={{color:'green'}}>$45.00</b></div><div style={s.tableRow}><div><b>Payment #1002</b><p>User: Jane</p></div><b style={{color:'green'}}>$120.00</b></div></div></div>);
    case 'a_profit': return (<div style={s.deepPage}><div style={s.sectionHeader}>Global Profit Checker</div><div style={s.walletCard}><p>Total Revenue</p><h1>$12,450</h1></div><div style={s.statGrid}><div style={s.statCard}><h4>$8,200</h4><p>Net Profit</p></div><div style={s.statCard}><h4>65%</h4><p>Margin</p></div></div></div>);
    case 'a_legal': return (<div style={s.deepPage}><div style={s.sectionHeader}>Legal & Policy Management</div><div style={s.tableCard}><div style={s.legalRow}><span>Privacy Policy</span> <Edit3 size={16} color={themeColor}/></div><div style={s.legalRow}><span>Terms of Service</span> <Edit3 size={16} color={themeColor}/></div><div style={s.legalRow}><span>Refund Policy</span> <Edit3 size={16} color={themeColor}/></div></div></div>);
    case 'u_legal': case 'd_legal': case 'c_legal': return (<div style={s.deepPage}>{['Service Agreement', 'Privacy Policy', 'Refund Policy', 'Data Usage'].map(l => (<div key={l} style={s.legalRow}><span>{l}</span> <Download size={18} color={themeColor}/></div>))}<div style={s.acceptBox}><input type="checkbox" /> I accept global data guidelines</div></div>);
    default: return <div style={s.placeholder}>System node for {module.title} active.</div>;
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

const ModuleList = ({ modules, onSelect, theme }) => (
  <div style={s.verticalList}>
    {modules.map(mod => (
      <div key={mod.id} onClick={() => onSelect(mod)} style={s.clickableRowCard}>
         <div style={{...s.iconBoxSmall, background: `${theme}11`}}>{React.cloneElement(mod.icon, {size: 18, color: theme})}</div>
         <div style={{flex:1}}><div style={s.mTitle}>{mod.title}</div><div style={s.mSub}>{mod.sub}</div></div>
         <ChevronRight size={18} color="#cbd5e1" />
      </div>
    ))}
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
    return (<div style={s.detailRow}><div style={{display:'flex', alignItems:'center', gap:'15px'}}>{React.cloneElement(icon, {size: 18, color: '#7D5A5C'})} <span>{label}</span></div>{isToggle ? (<div onClick={()=>setOn(!on)} style={{...s.toggle, background: on ? '#DD7A83' : '#ccc'}}><div style={{...s.toggleCircle, transform: on ? 'translateX(18px)' : 'translateX(0)'}}></div></div>) : <ChevronRight size={16} color="#ccc"/>}</div>);
};

// --- STYLES OBJECT (s = settings) ---
const s = {
  deepPage: { animation: 'fadeIn 0.4s' },
  tabHeader: { display: 'flex', gap: '10px', marginBottom: '20px' },
  tabOn: { background: '#DD7A83', color: '#fff', border:'none', padding: '8px 20px', borderRadius:'10px', fontWeight:'700', cursor:'pointer' },
  tabOff: { background: '#FDF2F3', color: '#7D5A5C', border:'none', padding: '8px 20px', borderRadius:'10px', cursor:'pointer' },
  historyCard: { padding: '15px', background: '#FFF9F9', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px', border: '1px solid #FDF2F3' },
  siteThumb: { width: '40px', height: '40px', background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  miniBtn: { padding: '5px 12px', background: '#DD7A83', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: '700', cursor:'pointer' },
  btnRow: { display: 'flex', gap: '10px', marginBottom: '15px' },
  outlineBtn: { flex: 1, padding: '10px', background: '#fff', border: '1px solid #ddd', borderRadius: '12px', fontSize: '12px', cursor:'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' },
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
  uploadBox: { padding: '20px', border: '2px dashed #ddd', borderRadius: '15px', textAlign: 'center', color: '#999', marginBottom: '15px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' },
  legalRow: { padding: '18px', borderBottom: '1px solid #FDF2F3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  acceptBox: { marginTop: '20px', fontSize: '12px', color: '#7D5A5C', display:'flex', gap:'10px', alignItems:'center' },
  input: { width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #FDF2F3', marginBottom: '15px', fontFamily: 'inherit', boxSizing: 'border-box', background: '#fff' },
  inputArea: { width: '100%', height: '100px', padding: '15px', borderRadius: '12px', border: '1px solid #FDF2F3', marginBottom: '15px', fontFamily: 'inherit', boxSizing: 'border-box', background: '#fff' },
  sectionHeader: { fontSize: '14px', fontWeight: '800', color: '#4A1D1F', margin: '20px 0 10px 5px', textAlign: 'left', textTransform: 'uppercase' },
  detailRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid #FDF2F3' },
  toggle: { width: '36px', height: '18px', borderRadius: '10px', padding: '2px', cursor: 'pointer' },
  toggleCircle: { width: '14px', height: '14px', background: '#fff', borderRadius: '50%', transition: '0.3s' },
  profileUpload: { width: '80px', height: '80px', borderRadius: '50%', background: '#FDF2F3', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #DD7A83', flexDirection: 'column', gap: '5px' },
  inputRow: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' },
  statusBanner: { padding: '12px', background: '#e6f3ef', borderRadius: '10px', textAlign: 'center', color: '#01875f', fontSize: '13px' },
  mainBtnFull: { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', color: '#fff', fontWeight: '800', cursor: 'pointer', boxSizing: 'border-box' },
  tableCard: { background: '#FFF9F9', borderRadius: '15px', padding: '10px', marginBottom: '15px' },
  tableRow: { display: 'flex', justifyContent: 'space-between', padding: '15px 10px', borderBottom: '1px solid #f1f1f1', fontSize: '14px', alignItems: 'center' },
  rejectionBox: { padding: '10px', background: '#fee2e2', borderRadius: '10px', color: '#dc2626', fontSize: '12px', marginTop: '10px' },
  infoRow: { display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #FDF2F3' },
  infoBanner: { padding: '12px', background: '#FDF2F3', borderRadius: '10px', color: '#7D5A5C', fontSize: '13px', textAlign: 'center', marginBottom: '15px' },
  chartMock: { height: '100px', background: '#FFF9F9', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', gap: '5px', padding: '10px' },
  bar: { flex: 1, borderRadius: '3px 3px 0 0' },
  dangerBtn: { width: '100%', padding: '14px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '12px', fontWeight: '800', marginTop: '10px', cursor: 'pointer' },
  placeholder: { padding: '40px', textAlign: 'center', color: '#999' },
  enterpriseBadge: { marginTop: '20px', padding: '10px', background: '#4A1D1F', color: '#fff', textAlign: 'center', borderRadius: '10px', fontSize: '12px', fontWeight: '700' },
  filterBar: { padding: '10px', background: '#f9f9f9', borderRadius: '8px', marginBottom: '10px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '10px' },
  profileHeader: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' },
  searchContainer: { display: 'flex', gap: '10px', background: '#f5f5f5', padding: '5px', borderRadius: '8px', alignItems: 'center' },
  searchInput: { flex: 1, border: 'none', background: 'transparent', outline: 'none', padding: '8px' },
  searchBtn: { background: '#4A1D1F', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer' },
  buyBtn: { background: '#28a745', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' },
  planGrid: { display: 'flex', gap: '15px', marginTop: '10px' },
  planCard: { flex: 1, background: '#fff', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' },
  actionRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '12px 15px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '15px' },
  searchLogItem: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#FFF9F9', borderRadius: '10px', marginBottom: '10px', color: '#7D5A5C' },
  listArea: { marginBottom: '15px' },
  advancedBox: { marginTop: '20px', padding: '15px', background: '#FDF2F3', borderRadius: '15px' },
  verticalList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  clickableRowCard: { background: '#FFF9F9', border: '1px solid #FDF2F3', borderRadius: '25px', padding: '18px 25px', display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', transition: '0.3s' },
  iconBox: { width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  iconBoxSmall: { width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  rowTitle: { flex: 1, fontSize: '17px', fontWeight: '800', color: '#4A1D1F', margin: 0 },
  mTitle: { fontSize: '15px', fontWeight: '700', color: '#4A1D1F' },
  mSub: { fontSize: '12px', color: '#94a3b8' },
};

export default { RenderModuleContent, RoleGateway };
