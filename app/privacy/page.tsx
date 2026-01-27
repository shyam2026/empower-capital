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
            <p>
              At Empower Capital, we respect your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard information provided by users of our website.
            </p>
          </div>
        </div>
      </section>
    
    </main>
  );
}
