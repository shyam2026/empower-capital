import Link from 'next/link'
import styles from './about.module.css'

const HIDE_SECTION = false;  {/* Set to true to unhide the hidden Section */}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="animate-fade-in-up">About Empower Capital</h1>
            <p className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Building bridges between startup dreams and business reality
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h2>Our Mission</h2>
              <p>
                To democratize entrepreneurship by providing accessible, comprehensive, and affordable support to startups at every stage of their journey. We believe every great idea deserves the opportunity to flourish, and we're committed to removing barriers that stand in the way of entrepreneurial success.
              </p>
            </div>

            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2>Our Vision</h2>
              <p>
                To be India's most trusted startup ecosystem partner, known for transforming innovative ideas into thriving businesses. We envision a future where every entrepreneur has access to the resources, guidance, and support they need to build sustainable, impactful companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyContent}>
            <div className={styles.storyImage}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaboration" />
            </div>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
              <p>
                Empower Capital was founded in 2020 by a team of entrepreneurs who experienced firsthand the challenges of starting a business in India. We noticed that brilliant minds with groundbreaking ideas often struggled with the administrative and regulatory complexities that come with launching a startup.
              </p>
              <p>
                What started as a small consulting firm has grown into a comprehensive startup support ecosystem. We've helped over 50+ startups navigate the intricate process of company formation, compliance, and growth. Our team combines deep expertise in legal, financial, and business development domains to provide holistic support.
              </p>
              <p>
                Today, we're proud to be the trusted partner for startups across India, from solo founders with an idea on a napkin to growing companies seeking their next round of funding. Our success is measured not in revenue, but in the number of successful businesses we've helped launch and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={styles.values}>
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Integrity First</h3>
              <p>We operate with complete transparency and honesty in all our dealings, ensuring our clients can trust us with their entrepreneurial dreams.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🚀</div>
              <h3>Innovation Driven</h3>
              <p>We constantly evolve our services and processes to stay ahead of the curve and provide cutting-edge solutions to our clients.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Partnership Mindset</h3>
              <p>We don't just provide services; we become partners in your journey, invested in your success as much as you are.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Excellence Always</h3>
              <p>We are committed to delivering exceptional quality in every interaction, document, and service we provide.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3>Client Empowerment</h3>
              <p>We educate and empower our clients, helping them understand the processes so they can make informed decisions.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌟</div>
              <h3>Impact Focus</h3>
              <p>We measure our success by the positive impact we create in the startup ecosystem and the businesses we help build.</p>
            </div>
          </div>
        </div>
      </section>

  {/* this hide_section and this <section>  for hiding  also a </section> )} below*/}
  
  {HIDE_SECTION && (     
    <section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Expert Team</h2>
            <p className="section-subtitle">Experienced professionals dedicated to your success</p>
          </div>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Team member" />
              </div>
              <h3>Deepak Gogal</h3>
              <p className={styles.teamRole}>Founder & CEO</p>
              <p className={styles.teamBio}>5+ years in startup consulting and venture capital</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Team member" />
                   {/*  "/images/hero.png"  insted of link*/}
              </div>
              <h3>Priya Sharma</h3>
              <p className={styles.teamRole}>Head of Legal</p>
              <p className={styles.teamBio}>Expert in corporate law and compliance management</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="Team member" />
              </div>
              <h3>Amit Patel</h3>
              <p className={styles.teamRole}>CFO</p>
              <p className={styles.teamBio}>Chartered Accountant with expertise in startup finance</p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Team member" />
              </div>
              <h3>Neha Verma</h3>
              <p className={styles.teamRole}>Head of Funding</p>
              <p className={styles.teamBio}>Connected with top VCs and angel investor networks</p>
            </div>
          </div>
        </div>
      </section> 

    </section>
  )}     {/* Hide section section */}

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Journey?</h2>
            <p>Let's work together to turn your startup vision into reality</p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}