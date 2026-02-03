import { motion } from 'framer-motion';
import Countdown from './components/Countdown';
import EventsSection from './components/EventsSection';
import './App.css';

function App() {
  // VIDEO INTRO DISABLED - Website shows directly
  // const [showContent, setShowContent] = useState(false);

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="hero-content"
          >
            {/* Organization Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="organization"
            >
              <p className="org-line">CSI MADRAS DIOCESE - PORUR PASTORATE</p>
              <p className="church-name">ST. MATTHEW'S CHURCH, PORUR</p>
              <p className="fellowship">YOUTH FELLOWSHIP</p>
              <p className="presents">PRESENTS</p>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "backOut" }}
              className="main-title"
            >
              DOULOUS '26
            </motion.h1>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="event-details"
            >
              <div className="date-time-container">
                <div className="date-section">
                  <span className="label">THURSDAY</span>
                  <span className="date-number">16</span>
                  <span className="label">APRIL 2026</span>
                </div>
                <div className="time-section">
                  <span className="label">AT</span>
                  <span className="time">9AM</span>
                </div>
              </div>
            </motion.div>

            {/* Theme Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="theme-section"
            >
              <div className="parchment-scroll">
                <p className="theme-label">THEME:</p>
                <motion.h2
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(198,93,33,0.5)',
                      '0 0 40px rgba(198,93,33,0.8)',
                      '0 0 20px rgba(198,93,33,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="theme-title"
                >
                  UNCHAINED
                </motion.h2>
               
                <p className="bible-verse">
                  "SO IF THE SON SETS YOU FREE, YOU<br />
                  WILL BE FREE INDEED"
                </p>
                <p className="bible-reference">JOHN 8:36 NIV</p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="contact-section"
            >
              <p className="contact-name">Rev. C. Samuel Jebakumar</p>
              <p className="contact-title">Presbyter In-Charge</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Countdown Section */}
        <section className="countdown-section">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="countdown-title"
          >
            Event Countdown
          </motion.h2>
          <Countdown targetDate="2026-04-16T09:00:00" />
        </section>

        {/* Events Section */}
        <EventsSection />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer"
        >
          <div className="footer-content">
            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-heading">Contact Us</h3>
              <div className="contact-links">
                <a href="tel:+919789543227" className="contact-link">
                  <span className="contact-icon">📞</span>
                  <div>
                    <p className="contact-label">Youth Secretary</p>
                    <p className="contact-value">+91 97895 43227</p>
                  </div>
                </a>
                <a href="tel:+918939369392" className="contact-link">
                  <span className="contact-icon">📞</span>
                  <div>
                    <p className="contact-label">Youth Treasurer</p>
                    <p className="contact-value">+91 89393 69392</p>
                  </div>
                </a>
                <a href="tel:+919940518084" className="contact-link">
                  <span className="contact-icon">📞</span>
                  <div>
                    <p className="contact-label">Youth Convener</p>
                    <p className="contact-value">+91 99405 18084</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="footer-section">
              <h3 className="footer-heading">Visit Us</h3>
              <a 
                href="https://maps.app.goo.gl/itbZtygmZLPE3ydu5?g_st=iw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="location-link"
              >
                <span className="contact-icon">📍</span>
                <p className="footer-address">
                  8, CSI Church St, Jaya Nagar,<br />
                  Porur, Chennai,<br />
                  Tamil Nadu 600116
                </p>
              </a>
            </div>

            {/* Social Media */}
            <div className="footer-section">
              <h3 className="footer-heading">Follow Us</h3>
              <div className="social-links">
                <a 
                  href="https://www.instagram.com/s_m_c_youth?igsh=MWh0cThkMTMxejR1ag==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@csist.matthewschurchyouth?si=4ADYx4HSBJS-Sahs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 St. Matthew's Church, Porur | Doulous '26 - Unchained</p>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;