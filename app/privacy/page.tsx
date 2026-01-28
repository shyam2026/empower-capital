import styles from './legal.module.css'

export default function PrivacyPage() {
  return (
    <main>
      <section className={styles.legalHero}>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 27, 2026</p>
        </div>
      </section>

      <section className={styles.legalContent}>
        <div className="container">
          <div className={styles.content}>
            <h2>1. Agreement to Privacy Policy</h2>
            <p>
              At Empower Capital, we respect your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard information provided by users of our website.
            </p>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and business details when you register on our site or use our services.
            </p>
            <h2>3. Use of Information</h2>
            <p>
              The information we collect is used to provide and improve our services, communicate with you, and comply with legal obligations.
            </p>
            <h2>4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or destruction. These measures include encryption, secure server environments, and access controls.
            </p>
            <h2>5. Sharing of Information</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and providing services, under strict confidentiality agreements.
            </p>
            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also withdraw your consent for data processing at any time. To exercise these rights, please contact us using the information provided below.
            </p>
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Email: info@empowercapital.co.in</li>
              <li>Phone: +91 7042478224</li>
              <li>Address: Sector 63, Noida, Uttar Pradesh 201309</li>
            </ul>
          </div>
        </div>
      </section>
    
    </main>
  );
}
