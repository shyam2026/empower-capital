import styles from './legal.module.css'

export default function Terms() {
  return (
    <main>
      <section className={styles.legalHero}>
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Last updated: January 27, 2026</p>
        </div>
      </section>

      <section className={styles.legalContent}>
        <div className="container">
          <div className={styles.content}>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using Empower Capital's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the terms of this agreement, you are not authorized to use or access our services.
            </p>

            <h2>2. Services</h2>
            <p>
              Empower Capital provides startup support services including but not limited to company registration, GST registration, trademark registration, incubation support, and funding assistance. The specific terms and conditions for each service will be detailed in separate service agreements.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information during registration and service requests</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
            </ul>

            <h2>4. Fees and Payment</h2>
            <p>
              Service fees are as quoted on our website or as agreed in separate service agreements. All fees are in Indian Rupees (INR) unless otherwise stated. Payment terms will be specified in individual service agreements. We reserve the right to change our fees at any time, but changes will not affect services already paid for.
            </p>

            <h2>5. Service Delivery</h2>
            <p>
              We strive to complete all services within the timeframes indicated. However, timelines may vary based on government processing times, document completeness, and other factors beyond our control. We will keep you informed of any delays and work diligently to resolve issues.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of Empower Capital or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2>7. Confidentiality</h2>
            <p>
              We understand that you may share sensitive business information with us. We commit to maintaining the confidentiality of all information you provide, except as required by law or as necessary to provide our services. We will not disclose your information to third parties without your consent.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Empower Capital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul>
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or similar issues that may be transmitted through our services by any third party</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content</li>
            </ul>

            <h2>9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Empower Capital and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.
            </p>

            <h2>10. Dispute Resolution</h2>
            <p>
              Any disputes arising out of or relating to these Terms or our services shall be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through arbitration in Mumbai, India, in accordance with the Arbitration and Conciliation Act, 1996.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. The courts of Mumbai, India shall have exclusive jurisdiction over any disputes.
            </p>

            <h2>12. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use our services will immediately cease. Provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>Email: legal@empowercapital.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Business Tower, Mumbai, Maharashtra 400001, India</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}