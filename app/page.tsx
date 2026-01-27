import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className="animate-fade-in-up">
                Empowering Your <span className="text-accent">Startup Journey</span>
              </h1>
              <p className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                From registration to funding, we provide comprehensive support to transform your startup vision into reality. Your growth partner at every milestone.
              </p>
              <div className={styles.heroCta} style={{animationDelay: '0.4s'}}>
                <Link href="/contact" className="btn btn-primary">
                  Get Started Today
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.heroImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80" 
                  alt="Startup Team Collaboration"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Startups Registered</p>
            </div>
            <div className={styles.statCard}>
              <h3>₹50Cr+</h3>
              <p>Funding Secured</p>
            </div>
            <div className={styles.statCard}>
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
            <div className={styles.statCard}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* We Are Offering Section */}
      <section className={styles.offerings}>
        <div className="container">
          <div className="section-title">
            <h2>What We're Offering</h2>
            <p className="section-subtitle">Comprehensive solutions for your startup's complete journey</p>
          </div>
          
          <div className={styles.offeringsGrid}>
            <div className={styles.offeringCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3>Company Registration</h3>
              <p>Complete assistance in registering your Private Limited, LLP, or Partnership firm with all legal compliances.</p>
              <ul className={styles.features}>
                <li>Name Approval</li>
                <li>Document Preparation</li>
                <li>Filing & Registration</li>
                <li>Digital Certificates</li>
              </ul>
            </div>

            <div className={styles.offeringCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3>GST Registration</h3>
              <p>Seamless GST registration process to ensure your business complies with tax regulations from day one.</p>
              <ul className={styles.features}>
                <li>GST Number Acquisition</li>
                <li>Filing Support</li>
                <li>Compliance Guidance</li>
                <li>Regular Updates</li>
              </ul>
            </div>

            <div className={styles.offeringCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3>Trademark Registration</h3>
              <p>Protect your brand identity with trademark registration services and comprehensive legal support.</p>
              <ul className={styles.features}>
                <li>Trademark Search</li>
                <li>Application Filing</li>
                <li>Legal Consultation</li>
                <li>Brand Protection</li>
              </ul>
            </div>

            <div className={styles.offeringCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3>Incubation Support</h3>
              <p>Access to premium incubation facilities with mentorship, workspace, and resources to accelerate growth.</p>
              <ul className={styles.features}>
                <li>Mentorship Programs</li>
                <li>Co-working Spaces</li>
                <li>Networking Events</li>
                <li>Technical Resources</li>
              </ul>
            </div>

            <div className={styles.offeringCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Funding Support</h3>
              <p>Connect with investors and secure funding through our extensive network and strategic pitch assistance.</p>
              <ul className={styles.features}>
                <li>Investor Connections</li>
                <li>Pitch Deck Creation</li>
                <li>Valuation Assistance</li>
                <li>Due Diligence Support</li>
              </ul>
            </div>

            <div className={styles.offeringCard}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3>End-to-End Support</h3>
              <p>Complete startup lifecycle management from ideation to scale-up with dedicated expert guidance.</p>
              <ul className={styles.features}>
                <li>Business Planning</li>
                <li>Legal Compliance</li>
                <li>Financial Advisory</li>
                <li>Growth Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChoose}>
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Empower Capital?</h2>
            <p className="section-subtitle">Your success is our mission</p>
          </div>
          
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>01</div>
              <h3>Expert Team</h3>
              <p>Our experienced professionals bring decades of combined expertise in startup ecosystem and business growth.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>02</div>
              <h3>One-Stop Solution</h3>
              <p>All services under one roof - no need to juggle multiple consultants or service providers.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>03</div>
              <h3>Fast Processing</h3>
              <p>Quick turnaround times on all registrations and applications with efficient workflow management.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>04</div>
              <h3>Affordable Pricing</h3>
              <p>Competitive pricing packages designed specifically for startups and early-stage companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Launch Your Startup?</h2>
            <p>Join hundreds of successful startups who trusted us with their journey. Let's build something amazing together.</p>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
