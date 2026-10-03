export default function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-brand">
            Maruf<b>.dev</b>
          </span>
          <p className="footer-tagline muted">
            Senior Mobile Application Engineer • React Native & Android
          </p>
        </div>

        <div className="footer-center">
          <p className="muted">
            Crafted with Next.js 15, React 19 & Three.js 3D Engine.
          </p>
        </div>

        <div className="footer-right">
          <a href="#top" className="back-to-top" aria-label="Scroll back to top">
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="muted">
          © {new Date().getFullYear()} Md Maruf Hasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
