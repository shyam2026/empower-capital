'use client'

import { useState } from 'react'
import styles from './contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
      
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
    }, 1500)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="animate-fade-in-up">Get In Touch</h1>
            <p className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Let's discuss how we can help your startup succeed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards & Form Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Information Cards */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3>Address</h3>
                <p>C Block, Sector 63<br/>Noida, Uttar Pradesh<br/>201309</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3>Email</h3>
                <p><a href="mailto:info@empowercapital.co.in">info@empowercapital.co.in</a></p>
                {/*  <p><a href="mailto:support@empowercapital.com">support@empowercapital.com</a></p>   */}
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3>Contact No.</h3>
                <p><a href="tel:+917042478224">+91 70424 78224</a></p>
                {/*   <p><a href="tel:+919876543211">+91 98765 43211</a></p> */}
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
                {/*    <p className={styles.highlight}>We respond to all inquiries within one business day</p>   */}
              </div>
            </div>

            {/* Enquiry Form */}
            <div className={styles.formContainer}>
              <h2>Send Us a Message</h2>
              <p className={styles.formSubtitle}>Fill out the form below and we'll get back to you shortly</p>
              
              <form onSubmit={handleSubmit} className={styles.enquiryForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or startup name (optional)"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="company-registration">Company Registration</option>
                    <option value="gst-registration">GST Registration</option>
                    <option value="trademark">Trademark Registration</option>
                    <option value="incubation">Incubation Support</option>
                    <option value="funding">Funding Support</option>
                    <option value="end-to-end">End-to-End Support</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your startup and how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d707.1082568135436!2d77.38184001394448!3d28.61831384587088!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1769599365088!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, maxHeight: '300px' , minWidth: '600px'}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" 
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}