"use client";

import { GlassFilter, GlassEffect } from "@/components/ui/liquid-glass";
import { MobileMenuButton } from "@/components/ui/mobile-menu";
import { Globe } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";

export default function LegalNoticePage() {
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
            Юридическое уведомление
          </h1>
          <div className="prose prose-slate prose-sm max-w-none space-y-4 text-slate-600 font-light leading-relaxed">
              <p>Last updated: 23.02.2026</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">1. OWNER IDENTIFICATION</h2>
              <p>In accordance with the provisions of Article 10 of Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI), the following information is provided:</p>
              <p>Company name: IAKUBAN COACHING ACADEMY, SOCIETAT LIMITADA Legal form: Sociedad Limitada Tax number (CIF/NIF): B22895676 Address: Avinguda Pau Casals, 4 A, 08513-Prats de Lluçanès (Barcelona), España Commercial Registry: Registro Mercantil de Barcelona, Tomo (Volum): 1000457483278, Folio (Foli): 1, Hoja (Full): B 641593, Inscripción 1 Email: info@iakuban.com Phone: +34 614 206 809 Platform name: IAKUBAN Website: https://app.iakuban.com</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">2. DESCRIPTION OF ACTIVITIES</h2>
              <p>IAKUBAN is an online platform designed for finding and selecting professional coaches. The Platform acts as an intermediary between coaches (service providers) and clients wishing to receive coaching services.</p>
              <p>Core Platform services:</p>
              <p>Providing access to a database of professional coaches</p>
              <p>Organizing and coordinating coaching sessions</p>
              <p>Payment processing and financial operations between parties</p>
              <p>User support and Platform administration</p>
              <p>Quality control of services provided</p>
              <p>The Platform operates in accordance with Regulation (EU) 2022/2065 on the Digital Services Act (DSA). Users may send notifications of illegal content to: info@iakuban.com. The DSA supervisory authority in Spain: Comisión Nacional de los Mercados y la Competencia (CNMC).</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">3. TERMS OF ACCESS AND USE</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.1 General Terms</h3>
              <p>Access to the site and use of its content implies full and unconditional acceptance of this Legal Notice, Privacy Policy, Cookie Policy and Terms of Service.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.2 Age Restrictions</h3>
              <p>The Platform is intended exclusively for adult users. Users must be 18 years of age or older to register and use the services.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.3 Registration</h3>
              <p>Registration is required to use certain Platform features. The user undertakes to provide accurate, current and truthful information. The user is responsible for the confidentiality of their account credentials.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.4 Lawful Use</h3>
              <p>The user undertakes to use the Platform in accordance with the law, this Legal Notice, generally accepted moral standards and not to perform actions that may:</p>
              <p>Violate the rights of third parties</p>
              <p>Cause harm to the Platform or other users</p>
              <p>Distribute illegal, offensive, discriminatory or harmful content</p>
              <p>Use the Platform for illegal purposes</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">4. INTELLECTUAL AND INDUSTRIAL PROPERTY</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.1 Content Rights</h3>
              <p>All elements of the site, including but not limited to: texts, images, graphics, logos, icons, software, structure and design, are protected by intellectual and industrial property rights belonging to IAKUBAN COACHING ACADEMY, SOCIETAT LIMITADA or held by it on lawful grounds.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.2 Prohibition of Unauthorized Use</h3>
              <p>Copying, distributing, transmitting, reproducing, publishing or commercial use of site content is prohibited without prior written permission from the rights holder.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.3 User Content</h3>
              <p>Coaches who post their profiles and information on the Platform retain copyright to their content but grant the Platform a non-exclusive license to use such content for the purposes of operation and promotion of the service.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">5. LIABILITY</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.1 Limitation of Platform Liability</h3>
              <p>IAKUBAN acts as a technological intermediary between coaches and clients. The Platform:</p>
              <p>Is not a provider of coaching services</p>
              <p>Is not responsible for the quality of services provided by coaches</p>
              <p>Does not guarantee coaching session outcomes</p>
              <p>Is not responsible for the actions or inactions of coaches</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.2 Content Liability</h3>
              <p>The Platform is not responsible for:</p>
              <p>Content posted by users</p>
              <p>Availability and continuity of site operation</p>
              <p>Technical failures or errors</p>
              <p>Presence of viruses or malware on users&apos; devices</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.3 External Links</h3>
              <p>The site may contain links to third-party resources. The Platform does not control and is not responsible for the content, privacy policies or practices of such sites.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">6. PERSONAL DATA PROTECTION</h2>
              <p>The processing of personal data is governed by our Privacy Policy, developed in accordance with:</p>
              <p>Regulation (EU) 2016/679 (GDPR)</p>
              <p>Organic Law 3/2018 of 5 December on the Protection of Personal Data and Guarantee of Digital Rights (LOPDGDD)</p>
              <p>Detailed information is available in the Privacy Policy section.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">7. COOKIE POLICY</h2>
              <p>Our site uses cookies and similar technologies. Detailed information about cookies used, their purpose and management is available in the Cookie Policy section.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">8. PAYMENTS AND FINANCIAL OPERATIONS</h2>
              <p>The Platform uses third-party payment systems (Stripe, LavaTop and others) to process payments. Financial transactions are governed by:</p>
              <p>Platform Terms of Service</p>
              <p>Cancellation and Refund Policy</p>
              <p>Terms of use of the respective payment systems</p>
              <p>The Platform does not store complete bank card data.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">9. DISPUTE RESOLUTION</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.1 Applicable Law</h3>
              <p>This Legal Notice and all relationships arising from use of the Platform are governed by Spanish law.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.2 Pre-Trial Settlement</h3>
              <p>In accordance with Regulation (EU) No. 524/2013, consumer users may use the European Commission&apos;s online dispute resolution platform, available at: https://ec.europa.eu/consumers/odr/</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.3 Jurisdiction</h3>
              <p>For resolution of any disputes arising from use of the Platform, the parties submit to the jurisdiction of the courts of Barcelona province, Spain, except where the law provides otherwise.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">10. CHANGES TO THE LEGAL NOTICE</h2>
              <p>IAKUBAN COACHING ACADEMY, SOCIETAT LIMITADA reserves the right to modify this Legal Notice at any time. Any changes will be published on this page with the date of the last update.</p>
              <p>Continued use of the Platform after changes are made constitutes acceptance of the updated document.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">11. CONTACT INFORMATION</h2>
              <p>Email: info@iakuban.com Postal address: Avinguda Pau Casals, 4 A, 08513-Prats de Lluçanès (Barcelona), España Phone: +34 614 206 809</p>
              <p>Date of last update: 23.02.2026</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">PLATFORM TERMS OF USE</h2>
              <p>Last updated: 23.02.2026</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">1. GENERAL PROVISIONS</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">1.1 Subject Matter</h3>
              <p>These Terms of Use (hereinafter — &quot;Terms&quot;) govern access to and use of the IAKUBAN platform (hereinafter — &quot;Platform&quot;), owned and operated by IAKUBAN COACHING ACADEMY, SOCIETAT LIMITADA (hereinafter — &quot;Company&quot;, &quot;we&quot;).</p>
              <p>The Platform is an online service for finding and selecting professional coaches, as well as for organizing coaching sessions between coaches and clients.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">1.2 Acceptance of Terms</h3>
              <p>By using the Platform, you confirm that you:</p>
              <p>Have read, understood and agree to these Terms</p>
              <p>Have reached the age of majority (18 years or older)</p>
              <p>Have legal capacity to enter into a legally binding agreement</p>
              <p>If you do not agree with any part of these Terms, do not use the Platform.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">1.3 Applicability of Other Documents</h3>
              <p>These Terms are supplemented by the following documents:</p>
              <p>Legal Notice (Aviso Legal)</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Code of Conduct for Coaches</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">2. DEFINITIONS</h2>
              <p>Platform — the IAKUBAN website and mobile applications available at https://app.iakuban.com</p>
              <p>User — any person using the Platform</p>
              <p>Client — a user seeking coaching services</p>
              <p>Coach — a user providing coaching services through the Platform</p>
              <p>Session — a coaching meeting between a Coach and a Client</p>
              <p>Account — a user&apos;s personal profile on the Platform</p>
              <p>Content — any information, texts, images or materials posted on the Platform</p>
              <p>Consumer — a natural person acting for purposes unrelated to business activity (pursuant to RDL 1/2007)</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">3. REGISTRATION AND ACCOUNT</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.1 Creating an Account</h3>
              <p>To use certain Platform features, you must create an account. Upon registration you undertake to:</p>
              <p>Provide truthful, accurate and complete information</p>
              <p>Keep information current</p>
              <p>Not create an account on behalf of another person without permission</p>
              <p>Not create more than one account</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.2 Types of Accounts</h3>
              <p>Client Account:</p>
              <p>For searching and booking coaches</p>
              <p>Access to session history</p>
              <p>Ability to leave reviews</p>
              <p>Coach Account:</p>
              <p>Creating a professional profile</p>
              <p>Receiving requests from clients</p>
              <p>Managing schedules and sessions</p>
              <p>Receiving payments</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.3 Account Security</h3>
              <p>You bear full responsibility for:</p>
              <p>Maintaining password confidentiality</p>
              <p>All actions performed under your account</p>
              <p>Immediately notifying the Company of any unauthorized use</p>
              <p>The Company is not responsible for any losses arising from unauthorized use of your account.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">3.4 Suspension and Deletion of Account</h3>
              <p>The Company reserves the right to:</p>
              <p>Suspend or close your account for violation of these Terms</p>
              <p>Delete an account after 12 months of inactivity</p>
              <p>Decline to create an account without explanation</p>
              <p>You may delete your account at any time through profile settings or by contacting support.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">4. ROLE AND RESPONSIBILITY OF THE PLATFORM</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.1 Role of Intermediary</h3>
              <p>IMPORTANT: The Platform acts exclusively as a technological intermediary between Coaches and Clients. The Platform:</p>
              <p>✗ Is NOT a provider of coaching services ✗ Does NOT hire coaches as employees or contractors ✗ Does NOT guarantee the quality, results or outcomes of coaching services ✗ Is NOT responsible for the actions or inactions of coaches</p>
              <p>✓ Provides technological infrastructure ✓ Facilitates communication between coaches and clients ✓ Processes payments and financial transactions ✓ May conduct basic verification of coaches</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.2 Limitation of Liability</h3>
              <p>The Platform is liable to the extent provided by applicable Spanish law.</p>
              <p>The Platform is not responsible for:</p>
              <p>The quality, content or results of coaching services provided by the Coach</p>
              <p>Decisions made by the Client on the basis of consultations received</p>
              <p>Losses caused by actions or inactions of the Coach, if the Platform did not know and could not reasonably have known of the violation</p>
              <p>Technical failures caused by third parties or force majeure circumstances</p>
              <p>IMPORTANT: Nothing in these Terms limits or excludes the Platform&apos;s liability for:</p>
              <p>Willful misconduct (dolo) or gross negligence (culpa grave)</p>
              <p>Damage to life or health</p>
              <p>Cases where limitation of liability is prohibited by law</p>
              <p>Violations of consumer rights guaranteed by Real Decreto Legislativo 1/2007</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">4.3 Disclaimer of Warranties</h3>
              <p>The Platform is provided &quot;as is&quot; without any warranties, express or implied. The Company does not guarantee:</p>
              <p>Uninterrupted and error-free operation of the Platform</p>
              <p>Correction of all errors within specific timeframes</p>
              <p>Absence of viruses or malicious components</p>
              <p>Achievement of specific results from using the services</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">5. RULES FOR CLIENTS</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.1 Searching and Selecting a Coach</h3>
              <p>Clients have the right to:</p>
              <p>Browse coach profiles</p>
              <p>Read reviews and ratings</p>
              <p>Contact coaches through the Platform</p>
              <p>Book sessions</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.2 Booking and Payment</h3>
              <p>Booking process:</p>
              <p>Select a coach and desired date/time</p>
              <p>Confirm availability</p>
              <p>Pay through the Platform</p>
              <p>Receive booking confirmation</p>
              <p>Payment:</p>
              <p>All payments are processed through the Platform</p>
              <p>Accepted: Bank cards (Visa, Mastercard, American Express, MIR), LavaTop, Stripe</p>
              <p>Payment is charged upon booking confirmation</p>
              <p>The Platform retains a 50% commission on each transaction</p>
              <p>Payment transactions are processed through:</p>
              <p>Stripe Payments Europe Ltd. (Ireland) — authorized payment institution under PSD2</p>
              <p>LAVALANE LTD (Cyprus) is an authorized payment institution under PSD2 Directive (EU 2015/2366), licensed by the Central Bank of Cyprus.</p>
              <p>The Platform acts as a payment collection agent on behalf of coaches.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.3 Conducting Sessions</h3>
              <p>Client obligations:</p>
              <p>Attend the session on time</p>
              <p>Prepare for the session according to the coach&apos;s recommendations</p>
              <p>Ensure necessary technical equipment (for online sessions)</p>
              <p>Behave respectfully towards the coach</p>
              <p>Follow the coach&apos;s instructions and recommendations</p>
              <p>Session formats:</p>
              <p>Online (video call, phone call)</p>
              <p>Offline (where this option is available)</p>
              <p>Duration according to the rate</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">5.4 Reviews and Ratings</h3>
              <p>Clients may leave reviews after completing a session. When writing a review, it is prohibited to:</p>
              <p>Post false information</p>
              <p>Use offensive or indecent language</p>
              <p>Disclose confidential information</p>
              <p>Violate the rights of others</p>
              <p>The Company reserves the right to moderate and remove reviews that violate these Terms.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">6. RULES FOR COACHES</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.1 Requirements for Coaches</h3>
              <p>To register as a coach, you must:</p>
              <p>Be of legal age (18+)</p>
              <p>Have appropriate qualifications and experience</p>
              <p>Provide documents confirming qualifications</p>
              <p>Have the right to work as a coach in your jurisdiction</p>
              <p>Comply with the Code of Conduct for Coaches</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.2 Profile and Information</h3>
              <p>Coaches are required to:</p>
              <p>Provide accurate and complete information about qualifications</p>
              <p>Regularly update the profile</p>
              <p>Indicate current schedule and availability</p>
              <p>Use professional photos</p>
              <p>Honestly describe services and specialization</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.3 Service Provision</h3>
              <p>Coach obligations:</p>
              <p>Conduct sessions at the agreed time</p>
              <p>Ensure a professional level of services</p>
              <p>Maintain confidentiality of client information</p>
              <p>Treat clients with respect</p>
              <p>Follow coaching ethical standards</p>
              <p>Notify of schedule changes in advance</p>
              <p>Prohibited:</p>
              <p>Offering services outside the Platform to avoid commission</p>
              <p>Requesting additional direct payment from clients</p>
              <p>Transferring client contact details to third parties</p>
              <p>Using the Platform for illegal purposes</p>
              <p>Impersonating another specialist</p>
              <p>Providing medical, legal or financial advice (unless appropriately licensed)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.4 Financial Terms</h3>
              <p>Platform Commission:</p>
              <p>The Platform retains 50% from each paid session</p>
              <p>Commission covers: payment processing, technical infrastructure, support, marketing</p>
              <p>Payouts to Coaches:</p>
              <p>Payouts are made monthly</p>
              <p>Minimum withdrawal amount: 50 EUR</p>
              <p>Withdrawal methods: SEPA bank transfer / LavaTop</p>
              <p>Processing time: 5 business days after payout request</p>
              <p>Coach Tax Responsibility</p>
              <p>Coaches bear full and independent responsibility for paying all applicable taxes in accordance with the legislation of their jurisdiction.</p>
              <p>For coaches — Spanish residents (autónomos):</p>
              <p>Registration obligations:</p>
              <p>Mandatory registration with Agencia Tributaria (Hacienda)</p>
              <p>Registration with Seguridad Social (RETA — Régimen Especial de Trabajadores Autónomos)</p>
              <p>Obtaining a NIF (Spanish citizens) or NIE (foreign nationals)</p>
              <p>Quarterly obligations:</p>
              <p>Filing IRPF (income tax) declarations: forms 130 or 131</p>
              <p>Filing IVA (VAT) declarations: form 303 (quarterly) and form 390 (annual summary)</p>
              <p>IVA applies to all coaching services from the date of autónomo registration, regardless of turnover. There is no IVA exemption threshold in Spain. The standard IVA rate is 21%. Exceptions may apply to specific service categories — consult a tax advisor.</p>
              <p>Annual obligations:</p>
              <p>Annual IRPF declaration (modelo 100)</p>
              <p>Declaration of income from economic activity</p>
              <p>Reporting:</p>
              <p>The Platform provides detailed payout reports for the full year</p>
              <p>Reports are available in PDF/Excel format for submission to tax authorities</p>
              <p>For coaches — foreign residents:</p>
              <p>Must obtain NIE (Número de Identidad de Extranjero)</p>
              <p>International tax treaties on double taxation may apply</p>
              <p>Consultation with a tax advisor or asesoría fiscal is mandatory</p>
              <p>Registration as a non-resident taxpayer may be required</p>
              <p>Platform obligations regarding tax:</p>
              <p>The Platform:</p>
              <p>Does NOT withhold taxes automatically</p>
              <p>Is NOT a tax agent</p>
              <p>Provides payout information for tax reporting purposes</p>
              <p>The Platform may be required to apply IRPF withholding (retención) on payments to Spain-resident coaches in accordance with applicable tax legislation. Coaches must provide the Platform with up-to-date information about their tax status and any withholding exemptions (if applicable). Consultation with an asesoría fiscal regarding retención obligations is strongly recommended.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">6.5 Coach Session Cancellations</h3>
              <p>When cancellation is necessary:</p>
              <p>Notify the client at least 24 hours in advance</p>
              <p>Offer an alternative time</p>
              <p>Full refund to the client</p>
              <p>Systematic cancellations may lead to account suspension</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">7. PROHIBITED USE</h2>
              <p>Use of the Platform is prohibited for:</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">7.1 Illegal Activity</h3>
              <p>Any actions violating the law</p>
              <p>Money laundering</p>
              <p>Fraud or deception</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">7.2 Violation of Third-Party Rights</h3>
              <p>Violation of copyrights, trademarks or patents</p>
              <p>Defamation, libel, harassment</p>
              <p>Breach of confidentiality or privacy</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">7.3 Harmful Activity</h3>
              <p>Spreading viruses or malware</p>
              <p>Hacking or attempts at unauthorized access</p>
              <p>DDoS attacks or system overload</p>
              <p>Collecting other users&apos; data without permission</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">7.4 Unfair Commercial Practices</h3>
              <p>Spam or mass unsolicited mailing</p>
              <p>False advertising or deception</p>
              <p>Manipulation of reviews or ratings</p>
              <p>Creating fake accounts</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">7.5 System Circumvention</h3>
              <p>Attempts to avoid Platform commission</p>
              <p>Using the Platform to attract clients with subsequent transfer of the relationship outside the Platform</p>
              <p>Bypassing technical restrictions</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">8. INTELLECTUAL PROPERTY</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">8.1 Platform Rights</h3>
              <p>All intellectual property rights in the Platform, including design, graphics, logos, software, source code, texts and content, trademarks, belong to the Company or are used on lawful grounds.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">8.2 User Content</h3>
              <p>By uploading content to the Platform, you:</p>
              <p>Retain rights to your content</p>
              <p>Grant the Platform a non-exclusive, worldwide, royalty-free license to use, reproduce, modify and distribute your content for the purposes of Platform operation</p>
              <p>Guarantee that you hold the necessary rights to the uploaded content</p>
              <p>Bear responsibility for your content</p>
              <p>Prohibited uploads:</p>
              <p>Content infringing third-party rights</p>
              <p>Offensive, discriminatory or indecent content</p>
              <p>Harmful content</p>
              <p>False or misleading information</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">8.3 Content Moderation</h3>
              <p>The Company reserves the right (but not the obligation) to:</p>
              <p>Moderate user content</p>
              <p>Remove content violating these Terms</p>
              <p>Refuse to publish content without explanation</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">9. RIGHT OF WITHDRAWAL (DERECHO DE DESISTIMIENTO)</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.1 Consumer Right of Withdrawal</h3>
              <p>In accordance with Articles 68–79 of Real Decreto Legislativo 1/2007, if you are a consumer (a natural person acting for purposes unrelated to commercial activity), you have the right to withdraw from this agreement within 14 calendar days without stating any reasons.</p>
              <p>Withdrawal period: 14 days from the date of contract conclusion (registration on the Platform or first booking).</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.2 How to Exercise the Right of Withdrawal</h3>
              <p>Send a clear statement of your decision to withdraw to: Email: info@iakuban.com Postal address: Avinguda Pau Casals, 4 A, 08513-Prats de Lluçanès (Barcelona), España</p>
              <p>You may use the following optional form:</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">WITHDRAWAL FORM</h2>
              <p>To: IAKUBAN COACHING ACADEMY, SOCIETAT LIMITADA Address: Avinguda Pau Casals, 4 A, 08513-Prats de Lluçanès, Barcelona, España Email: info@iakuban.com</p>
              <p>I hereby notify you of my withdrawal from the contract for the provision of the following services:</p>
              <p>Date of contract conclusion: _____________</p>
              <p>Consumer name: _____________</p>
              <p>Email: _____________</p>
              <p>Date: _____________</p>
              <p>Signature (if sent in paper form): _____________</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.3 Consequences of Withdrawal</h3>
              <p>In the event of withdrawal within 14 days, we will refund all payments received from you, including the cost of services (excluding additional costs arising from your choice of a service delivery method other than the cheapest standard method).</p>
              <p>Refund period: No later than 14 calendar days from receipt of the withdrawal notice. Refund method: Using the same payment method unless otherwise expressly agreed.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.4 IMPORTANT EXCEPTION: Loss of Right of Withdrawal</h3>
              <p>Pursuant to Article 103(a) of Real Decreto Legislativo 1/2007, the right of withdrawal does NOT apply to services fully performed before the expiry of the withdrawal period, if:</p>
              <p>Performance commenced with your express prior consent</p>
              <p>You confirmed that you are aware of the loss of the right of withdrawal after full performance</p>
              <p>Practical application: If you book a coaching session scheduled within 14 days of booking, you will be asked to tick:</p>
              <p>☐ &quot;I give my express consent to the commencement of the service before the expiry of the 14-day withdrawal period and understand that after the session is fully conducted, I lose my right of withdrawal (derecho de desistimiento).&quot;</p>
              <p>If you ticked this box and the session took place — the right of withdrawal is forfeited.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.5 Partially Rendered Services</h3>
              <p>If service performance commenced during the withdrawal period with your express consent, but you withdraw before full performance, you are required to pay a proportionate part of the service for the volume already rendered (Article 108.3 RDL 1/2007).</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">9.6 Right of Withdrawal Does Not Apply to Coaches</h3>
              <p>Coaches act for commercial purposes and are not consumers. The 14-day right of withdrawal does not apply to them. Standard termination conditions described in Section 13 apply to coaches.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">10. CANCELLATION AND REFUND POLICY</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.1 Cancellation by CONSUMERS (Clients)</h3>
              <p>WITHIN 14 DAYS (right of withdrawal period):</p>
              <p>If the session has NOT taken place:</p>
              <p>Full refund under the right of desistimiento (without stating reasons)</p>
              <p>If the session HAS taken place within 14 days:</p>
              <p>The Client gave prior express consent to commence the service before the 14-day period</p>
              <p>The Client confirmed awareness of loss of the right of withdrawal</p>
              <p>No refund (loss of right of withdrawal per Art. 103(a) RDL 1/2007)</p>
              <p>AFTER 14 DAYS (standard cancellation policy):</p>
              <p>Cancellation 24+ hours before session: full refund minus payment processing fee (if applicable); no penalties</p>
              <p>Cancellation 24 hours before session: 50% refund; 50% retained for the coach</p>
              <p>Cancellation less than 24 hours before session: no refund; full cost retained</p>
              <p>No-show: no refund</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.2 Cancellation by Coach</h3>
              <p>For cancellations for any reason:</p>
              <p>Client receives a full refund (100%)</p>
              <p>Coach does not receive payment for the cancelled session</p>
              <p>Systematic cancellations may lead to a warning or account suspension.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.3 Technical Issues</h3>
              <p>If the session did not take place for technical reasons beyond the control of coach or client:</p>
              <p>Client receives full refund or option to reschedule</p>
              <p>The Platform makes reasonable efforts to resolve technical issues</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.4 Service Quality Disputes</h3>
              <p>If the client is dissatisfied with session quality:</p>
              <p>Contact support within 3 business days after the session: info@iakuban.com</p>
              <p>Describe the issue in as much detail as possible</p>
              <p>The Platform will review the request and make a decision within 5 business days</p>
              <p>Refund is possible in exceptional cases of gross violation of professional standards</p>
              <p>Important: Dissatisfaction with coaching results alone is not an automatic basis for a refund.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.5 Refund Process</h3>
              <p>Refunds are processed within 14 business days</p>
              <p>Funds are returned using the same payment method used for payment</p>
              <p>Payment system fees may not be refunded</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">10.6 Session Rescheduling</h3>
              <p>Rescheduling by Client:</p>
              <p>The Client may reschedule a booked session under the following conditions:</p>
              <p>24 or more hours before the session — rescheduling is free of charge and unlimited</p>
              <p>24 hours before the session — rescheduling is permitted once; a second reschedule of the same session is not allowed</p>
              <p>Less than 24 hours before the session — rescheduling is not permitted; cancellation rules under Section 10.1 apply</p>
              <p>Rescheduling is done through the personal account to a new date agreed with the Coach. The new date must be selected within 30 calendar days of the originally booked time. If no new date is selected within this period, the session is deemed cancelled and refund rules under Section 10.1 apply.</p>
              <p>Rescheduling by Coach:</p>
              <p>The Coach may propose rescheduling no later than 24 hours before the session by notifying the Client through the Platform. The Client may:</p>
              <p>Accept the proposed date</p>
              <p>Propose an alternative date</p>
              <p>Decline and receive a full refund under Section 10.2</p>
              <p>Systematic rescheduling by a Coach (more than 3 times within 30 days) constitutes a violation of these Terms and entails consequences under Section 14.2.</p>
              <p>General Rescheduling Terms:</p>
              <p>Rescheduling is not a cancellation and does not trigger a refund</p>
              <p>Payment is retained and applied to the rescheduled session</p>
              <p>The rescheduled session is subject to the same Terms as the original booking</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">11. CONFIDENTIALITY AND DATA PROTECTION</h2>
              <p>Data processing is governed by our Privacy Policy.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">11.1 Session Confidentiality</h3>
              <p>Coaches are required to:</p>
              <p>Maintain confidentiality of information received during sessions</p>
              <p>Not disclose client information to third parties</p>
              <p>Use information only for providing services</p>
              <p>Exceptions:</p>
              <p>If the client gave explicit consent to disclosure</p>
              <p>Where legal obligations exist (court order)</p>
              <p>To prevent harm to oneself or others</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">11.2 Data Responsibility</h3>
              <p>The Platform is not responsible for:</p>
              <p>Confidentiality of information shared by clients with coaches during sessions</p>
              <p>Use by coaches of client information outside the Platform (except in cases of gross violation)</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">12. LIABILITY AND INDEMNIFICATION</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">12.1 Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, the Company is not liable for:</p>
              <p>Indirect, incidental, punitive or consequential damages</p>
              <p>Lost profits</p>
              <p>Loss of data or information</p>
              <p>Business interruption</p>
              <p>Any damage arising from use or inability to use the Platform</p>
              <p>General liability cap: Unless otherwise required by mandatory law, the Platform&apos;s aggregate liability is limited to the amount actually paid by the User to the Platform in the 12 months preceding the claim, but not less than €100.</p>
              <p>This limitation does NOT apply to:</p>
              <p>Liability for willful misconduct or gross negligence</p>
              <p>Damage to life or health</p>
              <p>Cases where limitation is prohibited by mandatory law</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">12.2 Indemnification</h3>
              <p>You agree to indemnify the Company, its directors, employees and partners for any losses, claims, demands, damages and expenses (including reasonable attorney&apos;s fees) arising from:</p>
              <p>Your violation of these Terms</p>
              <p>Your violation of third-party rights</p>
              <p>Your unlawful use of the Platform</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">13. AMENDMENTS TO TERMS</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">13.1 Amendments to Terms and Conditions</h3>
              <p>The Company reserves the right to amend these Terms at any time.</p>
              <p>Notification of changes:</p>
              <p>Material changes: notification by email or through the Platform 14 days before taking effect</p>
              <p>Minor changes: publication on the site with date of change</p>
              <p>Acceptance of changes: Continued use of the Platform after changes take effect constitutes acceptance of the updated Terms. If you do not agree with the changes, you have the right to stop using the Platform and terminate the contract.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">13.2 Changes to Fees and Commission</h3>
              <p>The Company reserves the right to change the fee structure and commission rates at any time, subject to the following notice requirements:</p>
              <p>Changes to commission rates or fees: 30 calendar days notice before taking effect</p>
              <p>Notification is sent by email to the address registered on the Platform and published on the Platform</p>
              <p>Consequences of fee changes:</p>
              <p>Continued use of the Platform after the changes take effect constitutes acceptance of the new rates</p>
              <p>If you do not agree with the new rates, you have the right to terminate the agreement in accordance with Section 14.1 before the changes take effect</p>
              <p>Sessions booked and paid before the date of fee changes are not affected by the new rates</p>
              <p>Stability guarantee:</p>
              <p>Fee changes do not apply retroactively to already confirmed and paid bookings</p>
              <p>Coaches will be notified of any commission changes separately via email with a minimum of 30 calendar days notice</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">14. TERMINATION</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">14.1 Termination by User</h3>
              <p>You may stop using the Platform and delete your account at any time through profile settings or by contacting support.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">14.2 Termination by Platform</h3>
              <p>The Platform may suspend or terminate your access:</p>
              <p>For violation of these Terms</p>
              <p>For legal or regulatory requirements</p>
              <p>Upon suspicion of fraud or abuse</p>
              <p>In case of prolonged inactivity (more than 6 months)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">14.3 Consequences of Termination</h3>
              <p>After termination:</p>
              <p>Your access to the account will be blocked</p>
              <p>Unpaid funds (for coaches) will be paid in accordance with the terms, if there are no grounds for withholding</p>
              <p>Obligations to pay for scheduled sessions remain</p>
              <p>Some provisions of these Terms continue in force (sections on liability, confidentiality, applicable law)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">14.4 Penalties and Sanctions</h3>
              <p>Violations by Clients:</p>
              <p>Systematic no-shows: warning → temporary suspension → account blocking</p>
              <p>Disrespectful behaviour, insults towards coaches or Platform staff: warning or immediate blocking</p>
              <p>Attempted fraud or payment manipulation: immediate blocking and referral to law enforcement authorities</p>
              <p>Violation of these Terms: warning → temporary suspension (7–30 days) → permanent blocking</p>
              <p>Violations by Coaches:</p>
              <p>Systematic session cancellations: warning → temporary suspension of profile</p>
              <p>Gross violation of professional standards or Code of Conduct: profile suspension for 30 days to 6 months</p>
              <p>Circumventing Platform commission (directing clients to book outside the Platform): withholding of all accumulated funds + permanent blocking</p>
              <p>Providing false information about qualifications: immediate blocking</p>
              <p>Breach of client confidentiality: immediate blocking + possible referral to supervisory authorities</p>
              <p>General Provisions:</p>
              <p>Warnings are issued by email to the address registered on the Platform</p>
              <p>The User may appeal any sanction by contacting support at info@iakuban.com within 14 calendar days of notification</p>
              <p>The Platform reviews appeals within 5 business days</p>
              <p>The Platform reserves the right to apply sanctions immediately in cases of gross or repeated violations without prior warning</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">15. DISPUTE RESOLUTION</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">15.1 Pre-Trial Settlement</h3>
              <p>Before going to court, the parties undertake to attempt amicable resolution:</p>
              <p>Contact Platform support: info@iakuban.com</p>
              <p>Good-faith negotiations for 30 calendar days</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">15.2 Online Dispute Resolution (ODR) Platform</h3>
              <p>In accordance with EU Regulation 524/2013: ODR Platform: https://ec.europa.eu/consumers/odr/ Our email for ODR purposes: info@iakuban.com</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">15.3 Applicable Law</h3>
              <p>These Terms are governed by Spanish law, in particular:</p>
              <p>Código Civil</p>
              <p>Código de Comercio</p>
              <p>Real Decreto Legislativo 1/2007</p>
              <p>Ley 34/2002 (LSSI)</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">15.4 Jurisdiction</h3>
              <p>For consumer disputes: Per Article 54 RDL 1/2007, the consumer may choose:</p>
              <p>Court at their place of residence</p>
              <p>Court at defendant&apos;s location (Prats de Lluçanès, Barcelona province)</p>
              <p>Court at the place of performance of the obligation</p>
              <p>For disputes with coaches (commercial disputes): The parties submit to the jurisdiction of the courts of Barcelona province, Spain.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">15.5 Alternative Dispute Resolution</h3>
              <p>The parties may also use:</p>
              <p>Mediation (mediación)</p>
              <p>Arbitration (arbitraje)</p>
              <p>Other out-of-court dispute resolution methods</p>
              <p>In accordance with Spanish law, before going to court in civil or commercial disputes, parties are required to attempt an ADR procedure (mediación, arbitraje de consumo or other). Failure to do so may have procedural consequences.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">16. MISCELLANEOUS</h2>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">16.1 Entire Agreement</h3>
              <p>These Terms together with the Privacy Policy, Cookie Policy and other related documents constitute the entire agreement between you and the Company regarding use of the Platform.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">16.2 Severability</h3>
              <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions retain full force and effect.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">16.3 Waiver</h3>
              <p>Failure or delay by the Company to exercise any right does not constitute a waiver of such right in the future.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">16.4 Assignment</h3>
              <p>You may not transfer your rights or obligations under these Terms without the Company&apos;s prior written consent. The Company may freely transfer its rights and obligations to third parties with notification to you.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">16.5 Language</h3>
              <p>These Terms are drawn up in Russian and English.</p>
              <p>For consumers (Clients): the version in the consumer&apos;s language takes precedence. If you are a Russian-language consumer, the Russian version prevails in case of discrepancies.</p>
              <p>For commercial users (Coaches): in case of discrepancies, the English version prevails.</p>
              <h3 className="text-base font-medium text-slate-800 mt-6 mb-2">16.6 Notices</h3>
              <p>All official notices from the Company are sent:</p>
              <p>By email specified during registration</p>
              <p>Through the Platform notification system</p>
              <p>By publication on the site</p>
              <p>Notices are deemed received 24 hours after sending by email or publication on the site.</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">17. CONTACT INFORMATION</h2>
              <p>Email: info@iakuban.com Postal address: Avinguda Pau Casals, 4 A, 08513-Prats de Lluçanès (Barcelona), España Phone: +34 614 206 809 Website: https://app.iakuban.com Registro Mercantil de Barcelona Tomo 1000457483278, Folio 1, Hoja B 641593</p>
              <p>Support: Hours: Monday – Friday, 09:00 – 18:00 (CET) Support email: info@iakuban.com</p>
              <p>For data protection queries: Email: info@iakuban.com Subject: &quot;Personal Data Request&quot;</p>
              <p>Date of last update: 23.02.2026</p>
              <p>By accepting these Terms, you confirm that you:</p>
              <p>Have read and understood all provisions of this document</p>
              <p>Agree to comply with all terms</p>
              <p>Are aware of your rights, including the right of withdrawal (for consumers)</p>
              <p>Have legal capacity to enter into this agreement</p>
              <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-3">18. FORCE MAJEURE</h2>
              <p>The parties are released from liability for partial or complete failure to fulfil their obligations under these Terms if such failure results from force majeure circumstances beyond the reasonable control of the affected party, including but not limited to:</p>
              <p>Natural disasters (earthquakes, floods, hurricanes)</p>
              <p>Military actions, terrorist acts</p>
              <p>Actions of governmental authorities (prohibitions, restrictions)</p>
              <p>Epidemics, pandemics</p>
              <p>Large-scale technical failures (internet or power outages)</p>
              <p>Strikes beyond the control of the parties</p>
              <p>Other circumstances that could not have been reasonably foreseen or prevented</p>
              <p>Procedure in case of force majeure:</p>
              <p>The affected party must notify the other party within 3 business days of the occurrence</p>
              <p>Supporting evidence must be provided where reasonably possible</p>
              <p>The deadline for performance of obligations is extended for the duration of the force majeure circumstances</p>
              <p>If force majeure continues for more than 30 days, either party may terminate the agreement without penalty</p>
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
