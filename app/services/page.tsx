import Link from 'next/link'
import styles from './services.module.css'

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.servicesHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="animate-fade-in-up">Our Services</h1>
            <p className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Comprehensive solutions for every stage of your startup journey
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className={styles.mainServices}>
        <div className="container">
          <div className="section-title">
            <h2>End-to-End Startup Support</h2>
            <p className="section-subtitle">Everything you need to start, grow, and scale your business</p>
          </div>

          {/* Company Registration */}
          <div className={styles.serviceDetail}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className={styles.serviceText}>
                <h3>Company Registration</h3>
                <p>
                  Get your business legally registered with minimal hassle. We handle all paperwork, filings, and follow-ups with government authorities to ensure a smooth registration process.
                </p>
                <div className={styles.serviceFeatures}>
                  <h4>What's Included:</h4>
                  <ul>
                    <li>Name availability check and reservation</li>
                    <li>Digital Signature Certificate (DSC) for directors</li>
                    <li>Director Identification Number (DIN) acquisition</li>
                    <li>Drafting of Memorandum and Articles of Association</li>
                    <li>Filing with Ministry of Corporate Affairs (MCA)</li>
                    <li>Certificate of Incorporation</li>
                    <li>PAN and TAN registration</li>
                  </ul>
                </div>
                <div className={styles.serviceTypes}>
                  <h4>Business Types We Register:</h4>
                  <div className={styles.typeGrid}>
                    <div className={styles.typeCard}>Private Limited Company</div>
                    <div className={styles.typeCard}>Limited Liability Partnership (LLP)</div>
                    <div className={styles.typeCard}>One Person Company (OPC)</div>
                    <div className={styles.typeCard}>Partnership Firm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GST Registration */}
          <div className={`${styles.serviceDetail} ${styles.reverse}`}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <div className={styles.serviceText}>
                <h3>GST Registration</h3>
                <p>
                  Ensure your business complies with GST regulations from day one. We simplify the complex GST registration process and provide ongoing compliance support.
                </p>
                <div className={styles.serviceFeatures}>
                  <h4>What's Included:</h4>
                  <ul>
                    <li>GST registration application filing</li>
                    <li>GSTIN (GST Identification Number) acquisition</li>
                    <li>Selection of appropriate GST scheme</li>
                    <li>State-wise registration for inter-state businesses</li>
                    <li>Digital signature integration</li>
                    <li>Compliance calendar and reminders</li>
                    <li>First-year filing support</li>
                  </ul>
                </div>
                <div className={styles.serviceBenefits}>
                  <h4>Benefits:</h4>
                  <div className={styles.benefitGrid}>
                    <div className={styles.benefitCard}>Legal compliance assurance</div>
                    <div className={styles.benefitCard}>Input tax credit eligibility</div>
                    <div className={styles.benefitCard}>Enhanced business credibility</div>
                    <div className={styles.benefitCard}>Smooth inter-state trade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trademark Registration */}
          <div className={styles.serviceDetail}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className={styles.serviceText}>
                <h3>Trademark Registration</h3>
                <p>
                  Protect your brand identity and intellectual property with comprehensive trademark registration services. Secure your brand name, logo, and tagline legally.
                </p>
                <div className={styles.serviceFeatures}>
                  <h4>What's Included:</h4>
                  <ul>
                    <li>Comprehensive trademark search and availability check</li>
                    <li>Class selection and application strategy</li>
                    <li>Trademark application filing</li>
                    <li>Response to examination reports</li>
                    <li>Publication and opposition handling</li>
                    <li>Registration certificate acquisition</li>
                    <li>Renewal reminders and support</li>
                  </ul>
                </div>
                <div className={styles.protectionTypes}>
                  <h4>We Protect:</h4>
                  <div className={styles.protectionGrid}>
                    <div className={styles.protectionCard}>
                      <span>📝</span>
                      <p>Brand Names</p>
                    </div>
                    <div className={styles.protectionCard}>
                      <span>🎨</span>
                      <p>Logos & Designs</p>
                    </div>
                    <div className={styles.protectionCard}>
                      <span>💬</span>
                      <p>Taglines & Slogans</p>
                    </div>
                    <div className={styles.protectionCard}>
                      <span>📦</span>
                      <p>Product Names</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Incubation Support */}
          <div className={`${styles.serviceDetail} ${styles.reverse}`}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div className={styles.serviceText}>
                <h3>Incubation Support</h3>
                <p>
                  Accelerate your startup growth with access to premium incubation facilities, mentorship programs, and a thriving entrepreneurial community.
                </p>
                <div className={styles.serviceFeatures}>
                  <h4>What's Included:</h4>
                  <ul>
                    <li>Co-working space in premium locations</li>
                    <li>One-on-one mentorship from industry experts</li>
                    <li>Networking events and startup meetups</li>
                    <li>Access to business resources and tools</li>
                    <li>Legal and accounting advisory</li>
                    <li>Product development support</li>
                    <li>Marketing and branding guidance</li>
                    <li>Technology infrastructure access</li>
                  </ul>
                </div>
                <div className={styles.incubationPrograms}>
                  <h4>Program Tiers:</h4>
                  <div className={styles.programGrid}>
                    <div className={styles.programCard}>
                      <h5>Early Stage</h5>
                      <p>3-6 months program for ideation and MVP development</p>
                    </div>
                    <div className={styles.programCard}>
                      <h5>Growth Stage</h5>
                      <p>6-12 months for scaling and market expansion</p>
                    </div>
                    <div className={styles.programCard}>
                      <h5>Advanced</h5>
                      <p>12+ months for mature startups seeking next level</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Funding Support */}
          <div className={styles.serviceDetail}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className={styles.serviceText}>
                <h3>Funding Support</h3>
                <p>
                  Connect with the right investors and secure funding through our extensive network of VCs, angel investors, and funding institutions.
                </p>
                <div className={styles.serviceFeatures}>
                  <h4>What's Included:</h4>
                  <ul>
                    <li>Investor database access</li>
                    <li>Pitch deck creation and refinement</li>
                    <li>Financial modeling and projections</li>
                    <li>Valuation assistance</li>
                    <li>Investor matchmaking</li>
                    <li>Pitch practice sessions</li>
                    <li>Due diligence support</li>
                    <li>Term sheet negotiation guidance</li>
                    <li>Post-funding compliance support</li>
                  </ul>
                </div>
                <div className={styles.fundingStages}>
                  <h4>Funding Stages We Support:</h4>
                  <div className={styles.stageGrid}>
                    <div className={styles.stageCard}>
                      <h5>Seed Round</h5>
                      <p>₹10L - ₹1Cr</p>
                    </div>
                    <div className={styles.stageCard}>
                      <h5>Pre-Series A</h5>
                      <p>₹1Cr - ₹5Cr</p>
                    </div>
                    <div className={styles.stageCard}>
                      <h5>Series A & Beyond</h5>
                      <p>₹5Cr+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <div className="container">
          <div className="section-title">
            <h2>Transparent Pricing</h2>
            <p className="section-subtitle">Choose the package that fits your needs</p>
          </div>
          
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Starter</h3>
              <div className={styles.price}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>9,999</span>
                <span className={styles.tnc}>*</span>
              </div>
              <p className={styles.pricingDesc}>Perfect for solo founders just starting out</p>
              <ul className={styles.pricingFeatures}>
                <li>Company Registration</li>
                <li>GST Registration</li>
                <li>Basic Legal Consultation</li>
                <li>Email Support</li>
              </ul>
              <Link href="/contact" className="btn btn-outline">
                Get Started
              </Link>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>Most Popular</div>
              <h3>Growth</h3>
              <div className={styles.price}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>24,999</span>
                <span className={styles.tnc}>*</span>
              </div>
              <p className={styles.pricingDesc}>For startups ready to scale quickly</p>
              <ul className={styles.pricingFeatures}>
                <li>Everything in Starter</li>
                <li>Trademark Registration</li>
                <li>3 months Incubation</li>
                <li>Funding Pitch Deck</li>
                <li>Priority Support</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>

            <div className={styles.pricingCard}>
              <h3>Enterprise</h3>
              <div className={styles.price}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>49,999</span>
                <span className={styles.tnc}>*</span>
              </div>
              <p className={styles.pricingDesc}>Complete support for ambitious startups</p>
              <ul className={styles.pricingFeatures}>
                <li>Everything in Growth</li>
                <li>6 months Incubation</li>
                <li>Investor Connections</li>
                <li>Dedicated Account Manager</li>
                <li>24/7 Support</li>
              </ul>
              <Link href="/contact" className="btn btn-outline">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Not Sure Which Service You Need?</h2>
            <p>Book a free consultation with our experts to discuss your requirements</p>
            <Link href="/contact" className="btn btn-primary">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section> 
    </main>
  )
}