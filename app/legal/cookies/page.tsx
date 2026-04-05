"use client";

import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";
import { MobileMenuButton } from "@/components/ui/mobile-menu";
import { Globe } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-600 font-sans selection:bg-indigo-500/20 selection:text-indigo-900 relative overflow-hidden">
      <GlassFilter />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl">
          <GlassEffect className="rounded-full px-8 py-3 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <a href="/">
                  <span
                    className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
                  >
                    Iakuban
                  </span>
                </a>
              </div>
              <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
                <a href="/#specialist" className="hover:text-slate-900 transition-colors">
                  Найти специалиста
                </a>
                <a href="/about" className="hover:text-slate-900 transition-colors">
                  О нас
                </a>
                <a href="/academy" className="hover:text-slate-900 transition-colors">
                  Академия
                </a>
                <a href="/academy#free" className="hover:text-slate-900 transition-colors">
                  Учиться бесплатно
                </a>
                <a href="#login" className="hover:text-slate-900 transition-colors">
                  Войти
                </a>
              </div>
              <button
                type="button"
                className="text-white border border-white/20 px-6 py-2.5 rounded-full text-[13px] font-semibold hover:opacity-90 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e40af 100%)" }}
              >
                Начать
              </button>
              <MobileMenuButton />
            </div>
          </GlassEffect>
        </div>
      </div>

      {/* Content */}
      <section className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 mb-10">
            Политика файлов cookie
          </h1>
          <div className="prose prose-slate prose-sm max-w-none space-y-4 text-slate-600 font-light leading-relaxed">
              <p>Last updated: 23.02.2026</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">1. WHAT ARE COOKIES</h2>
              <p>Cookies are small text files that websites store on your device (computer, smartphone, tablet) when you visit them. Cookies allow the website to remember your actions and preferences for a certain period of time, so you don&apos;t have to re-enter them each time you return to the site or navigate between pages.</p>
              <p>Cookies may contain various information: session identifiers, user preferences, analytics data, but do not contain viruses or malware.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">2. LEGAL BASIS</h2>
              <p>The use of cookies in Spain and the European Union is regulated by:</p>
              <p>Ley 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI)</p>
              <p>Regulation (EU) 2016/679 (GDPR)</p>
              <p>ePrivacy Directive 2002/58/EC as amended by 2009/136/EC</p>
              <p>AEPD (Agencia Española de Protección de Datos) guidelines on the use of cookies</p>
              <p>Under these rules, your explicit and informed consent is required for the installation of non-essential cookies.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">3. WHAT COOKIES WE USE</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.1 By Purpose</h3>
              <p>A) Strictly Necessary Cookies (Technical) These cookies are essential for the basic functioning of the site and cannot be disabled in our systems. They are usually only set in response to your actions, such as logging in, setting privacy preferences or filling out forms.</p>
              <p>Name</p>
              <p>Purpose</p>
              <p>Duration</p>
              <p>Domain</p>
              <p>Type</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">PHPSESSID</h2>
              <p>User session management on the server</p>
              <p>Session</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>csrf_token</p>
              <p>Protection against CSRF attacks</p>
              <p>Session</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>auth_token</p>
              <p>User authentication after login</p>
              <p>30 days</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>cookie_consent</p>
              <p>Storing cookie consent settings</p>
              <p>1 year</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>session_secure</p>
              <p>Session security flag (HTTPS)</p>
              <p>Session</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>Legal basis: These cookies do not require consent pursuant to Article 22.2 LSSI, as they are strictly necessary for the provision of services explicitly requested by the user.</p>
              <p>B) Functional Cookies These cookies allow the site to remember your preferences (e.g., language, region, time zone) and provide enhanced features and personalization.</p>
              <p>Name</p>
              <p>Purpose</p>
              <p>Duration</p>
              <p>Domain</p>
              <p>Type</p>
              <p>language_pref</p>
              <p>Selected interface language (Russian/English)</p>
              <p>1 year</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>timezone</p>
              <p>User time zone for correct session time display</p>
              <p>1 year</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>ui_preferences</p>
              <p>Interface settings (theme, font size, layout)</p>
              <p>6 months</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>last_search</p>
              <p>Last coach search parameters</p>
              <p>7 days</p>
              <p>app.iakuban.com</p>
              <p>First-party</p>
              <p>Legal basis: Your consent is required. These cookies improve user experience but are not strictly necessary.</p>
              <p>C) Analytical Cookies These cookies help us understand how visitors use the site by collecting anonymous or aggregated information. We use this information to improve the site and user experience.</p>
              <p>Name</p>
              <p>Provider</p>
              <p>Purpose</p>
              <p>Duration</p>
              <p>Type</p>
              <p>_ga</p>
              <p>Google Analytics</p>
              <p>Distinguishing unique users (anonymous identifier)</p>
              <p>2 years</p>
              <p>Third-party</p>
              <p>_gid</p>
              <p>Google Analytics</p>
              <p>Distinguishing users for short-term statistics</p>
              <p>24 hours</p>
              <p>Third-party</p>
              <p>_gat</p>
              <p>Google Analytics</p>
              <p>Request rate limiting to Google servers</p>
              <p>1 minute</p>
              <p>Third-party</p>
              <p>_ga_XXXXXXXXXX</p>
              <p>Google Analytics 4</p>
              <p>Maintaining session state for GA4</p>
              <p>2 years</p>
              <p>Third-party</p>
              <p>Legal basis: Your consent is required.</p>
              <p>Additional information:</p>
              <p>Google Analytics Privacy Policy: https://policies.google.com/privacy</p>
              <p>Google Analytics Terms of Use: https://marketingplatform.google.com/about/analytics/terms/</p>
              <p>Opt out of Google Analytics: https://tools.google.com/dlpage/gaoptout</p>
              <p>IP Anonymization: We use the IP anonymization (anonymizeIP) feature in Google Analytics, which means your full IP address is not stored.</p>
              <p>D) Marketing Cookies (Advertising) IMPORTANT: We currently do NOT use marketing or advertising cookies on our Platform.</p>
              <p>If we decide to use such cookies in the future (e.g., for retargeting or personalized advertising), we will:</p>
              <p>Update this Policy</p>
              <p>Request your explicit consent via a cookie banner</p>
              <p>Provide full information about the marketing cookies used</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.2 By Duration</h3>
              <p>Session Cookies Deleted automatically after closing the browser. Used for:</p>
              <p>Session management (PHPSESSID)</p>
              <p>CSRF protection (csrf_token)</p>
              <p>Temporary form data storage</p>
              <p>Persistent Cookies Remain on your device for a specified time (from 1 day to 2 years). Used for:</p>
              <p>Remembering language and preferences</p>
              <p>Analytics (Google Analytics)</p>
              <p>Storing cookie consent</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.3 By Origin</h3>
              <p>First-Party Cookies Set directly by our domain app.iakuban.com. We have full control over these cookies and can delete or modify them at any time.</p>
              <p>Third-Party Cookies Set by third-party services integrated on our site:</p>
              <p>Google Analytics — for web analytics</p>
              <p>Stripe / PayPal — for payment processing (only on payment pages)</p>
              <p>We do not directly control these cookies. They are governed by the privacy policies of the respective services.</p>
              <p>Standard Contractual Clauses pursuant to European Commission Decision 2021/914/EU of 4 June 2021.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">4. HOW WE USE COOKIES</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.1 Core Functions (Technical Cookies)</h3>
              <p>Authentication: Maintaining your login between pages</p>
              <p>Security: Protection against CSRF attacks, verification of request authenticity</p>
              <p>Session management: Remembering your actions during the current visit</p>
              <p>Cart/Booking: Saving selected sessions until payment is completed</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.2 Improving Experience (Functional Cookies)</h3>
              <p>Personalization: Remembering selected language, time zone, theme</p>
              <p>Convenience: Saving last coach search parameters</p>
              <p>Functionality: Ensuring correct operation of interactive elements (calendar, filters)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.3 Analysis and Improvement (Analytical Cookies)</h3>
              <p>Usage understanding: Which pages are most popular, where users come from</p>
              <p>Statistics: Number of visits, average session duration, bounce rate</p>
              <p>Optimization: Identifying problem areas on the site, improving navigation</p>
              <p>A/B testing: Comparing different page versions to improve conversion</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.4 Payment Processing (Third-Party Technical Cookies)</h3>
              <p>When making a payment through Stripe or PayPal, technical cookies from these payment systems may be set on the payment pages for:</p>
              <p>Processing the transaction</p>
              <p>Fraud prevention</p>
              <p>Compliance with PSD2 requirements (Strong Customer Authentication)</p>
              <p>These cookies are strictly necessary for making a payment and do not require separate consent.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">5. MANAGING COOKIES</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.1 Consent Settings on the Site</h3>
              <p>On your first visit to https://app.iakuban.com, you will see a cookie consent banner. You may:</p>
              <p>✓ Accept all cookies — including functional and analytical ✓ Accept only necessary — only technical cookies ✓ Configure by category — choose which categories to allow ✗ Reject all optional — only technical cookies</p>
              <p>You can change your settings at any time:</p>
              <p>Through the &quot;Cookie Settings Panel&quot; (link in the site footer: &quot;Cookie Settings&quot;)</p>
              <p>Through your account settings (for registered users)</p>
              <p>By deleting cookies through your browser settings (see Section 5.2)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.2 Browser Settings</h3>
              <p>You can also manage cookies through your browser settings. Below are instructions for the most popular browsers:</p>
              <p>Google Chrome</p>
              <p>Open Chrome → Menu (three dots) → Settings</p>
              <p>At the bottom of the page → Privacy and security</p>
              <p>→ Cookies and other site data</p>
              <p>Choose the desired level</p>
              <p>To delete specific cookies: Cookies and other site data → All cookies and site data → find app.iakuban.com → Delete</p>
              <p>Guide: https://support.google.com/chrome/answer/95647</p>
              <p>Mozilla Firefox</p>
              <p>Open Firefox → Menu (three lines) → Settings</p>
              <p>→ Privacy &amp; Security</p>
              <p>In the &quot;Cookies and Site Data&quot; section, choose your preferred option</p>
              <p>To delete cookies: &quot;Manage Data&quot; → find app.iakuban.com → Remove Selected</p>
              <p>Guide: https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop</p>
              <p>Safari (macOS)</p>
              <p>Open Safari → Preferences</p>
              <p>→ Privacy tab</p>
              <p>In the &quot;Cookies and website data&quot; section, choose your preferred option</p>
              <p>To delete cookies: &quot;Manage Website Data&quot; → find app.iakuban.com → Remove</p>
              <p>Guide: https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac</p>
              <p>Microsoft Edge</p>
              <p>Open Edge → Menu (three dots) → Settings</p>
              <p>→ Cookies and site permissions</p>
              <p>→ Manage and delete cookies and site data</p>
              <p>To delete cookies: &quot;See all cookies and site data&quot; → find app.iakuban.com → Delete</p>
              <p>Guide: https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</p>
              <p>Safari (iOS — iPhone/iPad)</p>
              <p>Open Settings → Safari</p>
              <p>Scroll down → Advanced</p>
              <p>→ Website Data</p>
              <p>→ Remove All Website Data or select a specific site</p>
              <p>Guide: https://support.apple.com/HT201265</p>
              <p>Important: Fully disabling cookies may cause some site features (such as logging in) to stop working.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.3 Opt-Out Tools</h3>
              <p>Google Analytics — Browser Opt-out Add-on Install a browser extension that blocks data transmission to Google Analytics:</p>
              <p>Download: https://tools.google.com/dlpage/gaoptout</p>
              <p>Available for: Chrome, Firefox, Safari, Edge, Opera</p>
              <p>Do Not Track (DNT) Most modern browsers support the &quot;Do Not Track&quot; signal.</p>
              <p>Our DNT policy: We respect the Do Not Track signal and do not set analytical cookies if we receive this signal from your browser (only technical cookies continue to function).</p>
              <p>Incognito / Private Browsing Mode In private browsing mode, cookies are automatically deleted after closing the browser window.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">6. THIRD-PARTY COOKIES</h2>
              <p>Our site contains integrated third-party services that set their own cookies. We do not directly control these cookies.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.1 Analytics Services</h3>
              <p>Google Analytics (Google LLC / Google Ireland Limited)</p>
              <p>Purpose: Web analytics, visit statistics</p>
              <p>Cookies: _ga, _gid, _gat, _ga_XXXXXXXXXX</p>
              <p>Retention: Up to 2 years</p>
              <p>Data transfer: May include transfer to the USA (using Standard Contractual Clauses)</p>
              <p>Privacy Policy: https://policies.google.com/privacy</p>
              <p>Opt-out: https://tools.google.com/dlpage/gaoptout</p>
              <p>Legal basis: Your consent (Art. 6.1.a GDPR)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.2 Payment Systems</h3>
              <p>These services use cookies only on payment pages and only for processing transactions.</p>
              <p>Stripe (Stripe Payments Europe Ltd., Ireland)</p>
              <p>Purpose: Payment processing, fraud protection</p>
              <p>Cookies: __stripe_mid, __stripe_sid (technical, for payment processing)</p>
              <p>Retention: 1 year (__stripe_mid), 30 minutes (__stripe_sid)</p>
              <p>Privacy Policy: https://stripe.com/privacy</p>
              <p>Cookie Policy: https://stripe.com/cookies-policy/legal</p>
              <p>Legal basis: Necessity for contract performance (Art. 6.1.b GDPR)</p>
              <p>PayPal (PayPal Europe S.à r.l. et Cie, S.C.A., Luxembourg)</p>
              <p>Purpose: Payment processing via PayPal</p>
              <p>Cookies: Various technical cookies on PayPal&apos;s page</p>
              <p>Retention: Depends on cookie type</p>
              <p>Privacy Policy: https://www.paypal.com/privacy</p>
              <p>Cookie Policy: https://www.paypal.com/webapps/mpp/ua/cookie-full</p>
              <p>Legal basis: Necessity for contract performance (Art. 6.1.b GDPR)</p>
              <p>Important: When you choose to pay via Stripe or PayPal, you are redirected to their secure pages, where their own privacy and cookie policies apply.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.3 We Do NOT Use</h3>
              <p>We currently do NOT use or set cookies from the following categories of services:</p>
              <p>❌ Social networks (Facebook, LinkedIn, Twitter)</p>
              <p>❌ Advertising networks (Google Ads, Facebook Ads)</p>
              <p>❌ Retargeting (remarketing/retargeting pixels)</p>
              <p>❌ Third-party chatbots or live support widgets</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">7. UPDATES TO COOKIE DATA</h2>
              <p>Cookies used on our site may change over time — when new features are added, new services integrated, or technologies change.</p>
              <p>We commit to regularly updating cookie tables in this Policy, notifying you of material changes, and requesting new consent if cookies requiring consent are added.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">8. ADDITIONAL PRIVACY INFORMATION</h2>
              <p>This Cookie Policy is part of our overall data protection policy.</p>
              <p>For detailed information on how we process your personal data (beyond cookies), please refer to our Privacy Policy.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">9. YOUR RIGHTS REGARDING COOKIES</h2>
              <p>In accordance with GDPR and LSSI, you have the following rights:</p>
              <p>✓ Right to be informed — receive clear information about cookies (this Policy) ✓ Right to consent — give or withhold consent to optional cookies ✓ Right to withdraw consent — withdraw cookie consent at any time ✓ Right of access — find out which cookies are installed in your browser ✓ Right to deletion — delete cookies through site or browser settings ✓ Right to object — object to data processing via cookies</p>
              <p>To exercise these rights:</p>
              <p>Use the cookie settings panel on the site</p>
              <p>Configure your browser (see Section 5.2)</p>
              <p>Contact us: info@iakuban.com</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">10. IMPACT OF DISABLING COOKIES</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.1 Disabling All Cookies</h3>
              <p>If you fully disable cookies, the following features will stop working:</p>
              <p>❌ Login (authentication)</p>
              <p>❌ Saving items in cart / bookings</p>
              <p>❌ Remembering language and preferences</p>
              <p>❌ Secure form operation (CSRF protection)</p>
              <p>Conclusion: Fully disabling cookies will make the site virtually unusable.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.2 Disabling Only Analytical Cookies</h3>
              <p>If you disable only analytical cookies (Google Analytics):</p>
              <p>✓ All core site features will continue to work normally</p>
              <p>✓ You can log in, book sessions, pay</p>
              <p>ℹ️ We will not be able to collect statistics on your site usage</p>
              <p>Conclusion: You can safely disable analytical cookies without loss of functionality.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.3 Disabling Functional Cookies</h3>
              <p>If you disable functional cookies:</p>
              <p>⚠️ The site will reset the language to English (default) each time</p>
              <p>⚠️ Time zone will need to be specified each time</p>
              <p>⚠️ Interface settings will not be saved</p>
              <p>Conclusion: Disabling functional cookies will reduce convenience but will not break the site.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">11. COOKIES AND CHILDREN</h2>
              <p>Our Platform is intended exclusively for persons over 18 years of age. We do not knowingly collect data from minors through cookies or otherwise.</p>
              <p>If you believe we have unintentionally collected data from a minor, contact us immediately: info@iakuban.com</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">12. INTERNATIONAL DATA TRANSFERS VIA COOKIES</h2>
              <p>Some cookies (such as Google Analytics) may transfer data outside the European Economic Area (EEA), in particular to the USA.</p>
              <p>How we protect your data:</p>
              <p>We use Standard Contractual Clauses (SCC) approved by the European Commission</p>
              <p>We work only with certified providers</p>
              <p>We apply IP address anonymization</p>
              <p>We request your consent before setting such cookies</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">13. CONTACT INFORMATION</h2>
              <p>For questions about cookies and data protection: Email: info@iakuban.com Subject: &quot;Cookie question&quot;</p>
              <p>Postal address: IAKUBAN COACHING ACADEMY, SOCIETAT LIMITADA Avinguda Pau Casals, 4 A 08513-Prats de Lluçanès (Barcelona), España Phone: +34 614 206 809 Business hours: Monday – Friday, 09:00 – 18:00 (CET/CEST)</p>
              <p>Supervisory Authority: Agencia Española de Protección de Datos (AEPD) Address: C/ Jorge Juan, 6, 28001 Madrid, España Phone: +34 901 100 099 / +34 912 663 517 Website: https://www.aepd.es</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">14. CHANGES TO THE COOKIE POLICY</h2>
              <p>We reserve the right to modify this Cookie Policy to reflect changes in technologies, legislation, site functionality, or integrated services.</p>
              <p>For material changes, we will publish the updated Policy, update the date, notify you via a cookie banner or email, and request new consent if required.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">SUMMARY</h2>
              <p>Cookie Category</p>
              <p>Do We Use?</p>
              <p>Consent Required?</p>
              <p>Can Be Disabled?</p>
              <p>Technical (strictly necessary)</p>
              <p>✅ Yes</p>
              <p>❌ No</p>
              <p>❌ No</p>
              <p>Functional</p>
              <p>✅ Yes</p>
              <p>✅ Yes</p>
              <p>✅ Yes</p>
              <p>Analytical (Google Analytics)</p>
              <p>✅ Yes</p>
              <p>✅ Yes</p>
              <p>✅ Yes</p>
              <p>Marketing / Advertising</p>
              <p>❌ No</p>
              <p>—</p>
              <p>—</p>
              <p>Payment (Stripe, PayPal)</p>
              <p>✅ Yes (payment pages only)</p>
              <p>❌ No (technical)</p>
              <p>❌ No</p>
              <p>Date of last update: 23.02.2026</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-[#fafafa]">
        <div
          className="max-w-7xl mx-auto h-px mb-16"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.6) 30%, rgba(99,102,241,0.5) 70%, transparent 100%)" }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="rounded-2xl px-8 py-10 mb-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(219,234,254,0.35) 0%, rgba(238,242,255,0.25) 50%, rgba(219,234,254,0.2) 100%)",
              border: "1px solid rgba(147,197,253,0.3)",
            }}
          >
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Iakuban</h3>
                <div className="space-y-2 text-xs text-slate-500 font-light leading-relaxed">
                  <p className="font-medium text-slate-700">Iakuban Coaching Academy, S.L.</p>
                  <p>
                    Avda Pau Casals, Num 4, Portal A,
                    <br />
                    08513 Prats de Lluçanès (Barcelona)
                  </p>
                  <p className="pt-2">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">
                      info@iakuban.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+34641461550" className="hover:text-slate-900 transition-colors">
                      +34 641 461 550
                    </a>
                  </p>
                  <p>NIF B22895676</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Правовая информация</h3>
                <ul className="space-y-3 text-xs text-slate-500 font-light">
                  <li>
                    <a href="/legal/privacy" className="hover:text-slate-900 transition-colors">
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href="/legal/terms" className="hover:text-slate-900 transition-colors">
                      Условия использования платформы
                    </a>
                  </li>
                  <li>
                    <a href="/legal/legal-notice" className="hover:text-slate-900 transition-colors">
                      Правовая информация (Aviso Legal)
                    </a>
                  </li>
                  <li>
                    <a href="/legal/offer" className="hover:text-slate-900 transition-colors">
                      Договор оферты на предоставление услуг платформы
                    </a>
                  </li>
                  <li>
                    <a href="/legal/code-of-conduct" className="hover:text-slate-900 transition-colors">
                      Кодекс поведения для коучей
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-slate-900 mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-light">
                    <a href="mailto:info@iakuban.com" className="hover:text-slate-900 transition-colors">
                      info@iakuban.com
                    </a>
                  </div>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/[0.05] pt-8 pb-2 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] tracking-[0.15em] uppercase text-slate-400">
              &copy; 2026 iakuban. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <button type="button" className="font-medium text-slate-900 hover:text-indigo-600 transition-colors">
                RU
              </button>
              <span className="text-slate-300">/</span>
              <button type="button" className="text-slate-400 hover:text-indigo-600 transition-colors">
                EN
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
