import { useState, useEffect } from 'react';
import './App.css';
import { type Language, translations } from './i18n';
import { 
  AndroidIcon, 
  WindowsIcon, 
  MacOSIcon, 
  LinuxIcon, 
  GlobeIcon, 
  ArrowRightIcon, 
  GitHubIcon 
} from './Icons';

interface NavigatorUAData {
  userAgentData?: {
    platform?: string;
    getHighEntropyValues: (hints: string[]) => Promise<{ architecture?: string }>;
  };
}

type OS = 'android' | 'windows' | 'macos' | 'linux';

const detectOS = (): OS | null => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return null;
  }

  const nav = navigator as Navigator & NavigatorUAData;
  const platformHint = nav.userAgentData?.platform?.toLowerCase() || '';
  if (platformHint === 'windows') return 'windows';
  if (platformHint === 'macos') return 'macos';
  if (platformHint === 'android') return 'android';
  if (platformHint === 'linux') return 'linux';

  const ua = (navigator.userAgent || '').toLowerCase();
  const platform = (navigator.platform || '').toLowerCase();

  // Android check (must precede Linux because Android UA contains 'linux')
  if (ua.includes('android')) return 'android';

  // Windows check
  if (ua.includes('windows') || ua.includes('win32') || platform.includes('win')) return 'windows';

  // macOS check (excluding iPhone / iPad)
  if ((ua.includes('macintosh') || ua.includes('mac os x') || platform.includes('mac')) && !ua.includes('iphone') && !ua.includes('ipad')) {
    return 'macos';
  }

  // Linux check
  if (ua.includes('linux') || platform.includes('linux')) return 'linux';

  return null;
};

const detectSystemArch = async (): Promise<'arm64' | 'x64' | null> => {
  try {
    const nav = typeof navigator !== 'undefined' ? (navigator as Navigator & NavigatorUAData) : null;
    if (nav?.userAgentData?.getHighEntropyValues) {
      const hints = await nav.userAgentData.getHighEntropyValues(['architecture']);
      const arch = String(hints?.architecture || '').toLowerCase();
      if (arch.includes('arm') || arch.includes('aarch')) return 'arm64';
      if (arch.includes('x86') || arch.includes('amd64') || arch.includes('x64')) return 'x64';
    }

    const ua = navigator.userAgent || '';
    if (/arm64|aarch64/i.test(ua)) return 'arm64';
    if (/x86_64|x86-64|Win64|x64|WOW64|amd64/i.test(ua)) return 'x64';

    const platform = (navigator.platform || '').toLowerCase();
    if (platform.includes('aarch64') || platform.includes('arm')) return 'arm64';
    if (platform.includes('x86_64') || platform.includes('x86-64') || platform.includes('win64') || platform.includes('x64')) return 'x64';

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const ext = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
      if (ext) {
        const renderer = (gl as WebGLRenderingContext).getParameter(ext.UNMASKED_RENDERER_WEBGL);
        if (typeof renderer === 'string') {
          if (/Apple M|Apple GPU|Adreno|Mali|Immortalis/i.test(renderer)) return 'arm64';
          if (/Intel|AMD|Radeon|Nvidia|GeForce/i.test(renderer)) return 'x64';
        }
      }
    }
  } catch {
    // Fail silently
  }
  return null;
};

const CUK_WEB_URL = 'https://cukbab.github.io/CUK_Web';

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    if (saved && (saved === 'ko' || saved === 'en' || saved === 'ja' || saved === 'zh')) {
      return saved as Language;
    }
    const navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('ko')) return 'ko';
    if (navLang.startsWith('ja')) return 'ja';
    if (navLang.startsWith('zh')) return 'zh';
    return 'ko';
  });

  const [showMacModal, setShowMacModal] = useState(false);
  const [isMacClosing, setIsMacClosing] = useState(false);
  const [detectedArch, setDetectedArch] = useState<'arm64' | 'x64' | null>(null);

  const [detectedOS] = useState<OS | null>(() => detectOS());
  const defaultOrder: OS[] = ['android', 'windows', 'macos', 'linux'];
  const clientOrder = detectedOS
    ? [detectedOS, ...defaultOrder.filter(os => os !== detectedOS)]
    : defaultOrder;

  useEffect(() => {
    localStorage.setItem('app_language', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    let isMounted = true;
    detectSystemArch().then((arch) => {
      if (isMounted && arch) {
        setDetectedArch(arch);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!showMacModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMacModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showMacModal]);

  const openMacModal = () => {
    setIsMacClosing(false);
    setShowMacModal(true);
  };

  const closeMacModal = () => {
    setIsMacClosing(true);
    setTimeout(() => {
      setShowMacModal(false);
      setIsMacClosing(false);
    }, 280);
  };

  const t = (key: keyof typeof translations['en']) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="/" className="nav-brand">
            <img src="/favicon.png" alt="CUK밥 logo" className="nav-logo" />
            <span className="nav-title">{t('app_title')}</span>
          </a>
        </div>

        <div className="nav-right">
          <div className="lang-select-wrapper">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="lang-select"
              aria-label="Language selection"
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
            </select>
          </div>

          <a
            href="https://github.com/CUKbab"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github-btn"
            title="GitHub"
          >
            <GitHubIcon width={20} height={20} />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="portal-container">
        {/* Hero Section */}
        <section className="hero-card animate-slide-up stagger-1">
          <span className="hero-badge">{t('app_badge')}</span>
          <img src="/favicon.png" alt="CUK밥 Mascot" className="hero-avatar" />
          <h1 className="hero-title">{t('app_title')}</h1>
          <p className="hero-subtitle">{t('app_subtitle')}</p>
          <p className="hero-desc">{t('hero_description')}</p>
        </section>

        {/* Go to Web Section */}
        <section className="portal-section animate-slide-up stagger-2">
          <div className="section-header">
            <h2 className="section-title">{t('go_to_web_section_title')}</h2>
          </div>

          <a
            href={CUK_WEB_URL}
            className="web-card"
          >
            <div className="web-card-left">
              <div className="web-card-icon-wrap">
                <GlobeIcon width={32} height={32} />
              </div>
              <div className="web-card-info">
                <div className="web-card-title-row">
                  <h3 className="web-card-title">{t('go_to_web_title')}</h3>
                  <span className="web-card-tag">{t('go_to_web_tag')}</span>
                </div>
                <p className="web-card-desc">{t('go_to_web_desc')}</p>
                <span className="web-card-url">{t('go_to_web_url')}</span>
              </div>
            </div>

            <div className="web-card-action">
              <span>{t('go_to_web_btn')}</span>
              <ArrowRightIcon width={18} height={18} />
            </div>
          </a>
        </section>

        {/* Clients Section */}
        <section className="portal-section animate-slide-up stagger-3">
          <div className="section-header">
            <h2 className="section-title">{t('clients_title')}</h2>
            <p className="section-sub">{t('clients_desc')}</p>
          </div>

          <div className="clients-grid">
            {clientOrder.map((os) => {
              const isRecommended = detectedOS === os;
              switch (os) {
                case 'android':
                  return (
                    <a
                      key="android"
                      href="https://play.google.com/store/apps/details?id=com.cukbab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`client-item android ${isRecommended ? 'recommended' : ''}`}
                    >
                      {isRecommended && (
                        <span className="client-recommended-badge">{t('recommended')}</span>
                      )}
                      <AndroidIcon className="client-icon" />
                      <div className="client-info">
                        <span className="client-name">{t('android_name')}</span>
                        <span className="client-sub">{t('android_desc')}</span>
                      </div>
                      <span className="client-download-btn">{t('download_now')}</span>
                    </a>
                  );

                case 'windows':
                  return (
                    <a
                      key="windows"
                      href="https://github.com/CUKbab/CUK_PC/releases/latest/download/CUKbab-windows-x64.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`client-item windows ${isRecommended ? 'recommended' : ''}`}
                    >
                      {isRecommended && (
                        <span className="client-recommended-badge">{t('recommended')}</span>
                      )}
                      <WindowsIcon className="client-icon" />
                      <div className="client-info">
                        <span className="client-name">{t('windows_name')}</span>
                        <span className="client-sub">{t('windows_desc')}</span>
                      </div>
                      <span className="client-download-btn">{t('download_now')}</span>
                    </a>
                  );

                case 'macos':
                  return (
                    <div
                      key="macos"
                      className={`client-item macos ${isRecommended ? 'recommended' : ''}`}
                      onClick={openMacModal}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openMacModal();
                        }
                      }}
                    >
                      {isRecommended && (
                        <span className="client-recommended-badge">{t('recommended')}</span>
                      )}
                      <MacOSIcon className="client-icon" />
                      <div className="client-info">
                        <span className="client-name">{t('macos_name')}</span>
                        <span className="client-sub">{t('macos_desc')}</span>
                      </div>
                      <span className="client-download-btn">{t('download_now')}</span>
                    </div>
                  );

                case 'linux':
                  return (
                    <a
                      key="linux"
                      href="https://github.com/CUKbab/CUK_PC/releases/latest/download/CUKbab-linux-x64.tar.gz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`client-item linux ${isRecommended ? 'recommended' : ''}`}
                    >
                      {isRecommended && (
                        <span className="client-recommended-badge">{t('recommended')}</span>
                      )}
                      <LinuxIcon className="client-icon" />
                      <div className="client-info">
                        <span className="client-name">{t('linux_name')}</span>
                        <span className="client-sub">{t('linux_desc')}</span>
                      </div>
                      <span className="client-download-btn">{t('download_now')}</span>
                    </a>
                  );
              }
            })}
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="portal-section animate-slide-up stagger-4">
          <div className="section-header">
            <h2 className="section-title">{t('features_title')}</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">🍲 {t('feat_realtime_title')}</h3>
              <p className="feature-desc">{t('feat_realtime_desc')}</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">💻 {t('feat_crossplatform_title')}</h3>
              <p className="feature-desc">{t('feat_crossplatform_desc')}</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">🌐 {t('feat_multilingual_title')}</h3>
              <p className="feature-desc">{t('feat_multilingual_desc')}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="portal-footer animate-slide-up stagger-5">
          <div className="footer-links">
            <a href={CUK_WEB_URL} className="footer-link">CUK_Web</a>
            <a href="https://github.com/CUKbab/CUK_PC" target="_blank" rel="noopener noreferrer" className="footer-link">CUK_PC</a>
            <a href="https://github.com/CUKbab/CUK_Android" target="_blank" rel="noopener noreferrer" className="footer-link">CUK_Android</a>
            <a href="https://github.com/CUKbab/CUK_Menu" target="_blank" rel="noopener noreferrer" className="footer-link">CUK_Menu</a>
            <a href="https://github.com/CUKbab" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub Organization</a>
          </div>
          <p className="footer-text">{t('footer_text')}</p>
          <p className="footer-text">© {new Date().getFullYear()} CUK밥. {t('all_rights_reserved')}</p>
        </footer>
      </main>

      {/* macOS Architecture Modal */}
      {showMacModal && (
        <div
          className={`modal-overlay ${isMacClosing ? 'closing' : ''}`}
          onClick={(e) => e.target === e.currentTarget && closeMacModal()}
        >
          <div className={`modal-content ${isMacClosing ? 'closing' : ''}`}>
            <div className="mac-modal-header">
              <MacOSIcon className="mac-modal-icon" />
              <div>
                <h3 className="mac-modal-title">{t('macos_download_title')}</h3>
                <p className="mac-modal-desc">{t('macos_download_desc')}</p>
              </div>
            </div>

            <div className="mac-arch-list">
              {/* Apple Silicon (arm64) */}
              <a
                href="https://github.com/CUKbab/CUK_PC/releases/latest/download/CUKbab-macos-arm64.dmg"
                target="_blank"
                rel="noopener noreferrer"
                className={`mac-arch-card ${detectedArch === 'arm64' ? 'recommended' : ''}`}
                onClick={closeMacModal}
              >
                <div className="mac-arch-info">
                  <div className="mac-arch-title-row">
                    <span className="mac-arch-name">{t('mac_arm64_title')}</span>
                    <span className="mac-arch-tag">arm64</span>
                    {detectedArch === 'arm64' && (
                      <span className="mac-arch-badge">{t('recommended')}</span>
                    )}
                  </div>
                  <span className="mac-arch-sub">{t('mac_arm64_desc')}</span>
                </div>
                <span className="mac-arch-download-btn">{t('download_now')}</span>
              </a>

              {/* Intel (x64) */}
              <a
                href="https://github.com/CUKbab/CUK_PC/releases/latest/download/CUKbab-macos-x64.dmg"
                target="_blank"
                rel="noopener noreferrer"
                className={`mac-arch-card ${detectedArch === 'x64' ? 'recommended' : ''}`}
                onClick={closeMacModal}
              >
                <div className="mac-arch-info">
                  <div className="mac-arch-title-row">
                    <span className="mac-arch-name">{t('mac_x64_title')}</span>
                    <span className="mac-arch-tag">x64</span>
                    {detectedArch === 'x64' && (
                      <span className="mac-arch-badge">{t('recommended')}</span>
                    )}
                  </div>
                  <span className="mac-arch-sub">{t('mac_x64_desc')}</span>
                </div>
                <span className="mac-arch-download-btn">{t('download_now')}</span>
              </a>
            </div>

            <div className="modal-actions">
              <button type="button" className="cancel-btn" onClick={closeMacModal}>
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
