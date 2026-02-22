import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Countdown from './components/Countdown';
import EventsSection from './components/EventsSection';
import VideoIntro from './components/VideoIntro';
import './App.css';

const GMAIL_LINK = "https://mail.google.com/mail/?view=cm&fs=1&to=doulos.smcy@gmail.com";

const DoulosMeaning = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    style={{
      padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px)',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    }}
  >
    <div style={{
      maxWidth: '900px',
      width: '100%',
      background: 'linear-gradient(135deg, rgba(244,228,193,0.97) 0%, rgba(232,212,168,0.97) 100%)',
      border: '3px solid #8b2500',
      borderRadius: '16px',
      padding: 'clamp(30px, 5vw, 60px)',
      boxShadow: '0 15px 50px rgba(139,37,0,0.25), inset 0 2px 12px rgba(255,255,255,0.4)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {[
        { top: '12px', left: '12px' },
        { top: '12px', right: '12px' },
        { bottom: '12px', left: '12px' },
        { bottom: '12px', right: '12px' }
      ].map((posStyle, i) => (
        <span key={i} style={{
          position: 'absolute',
          ...posStyle,
          fontSize: '22px',
          color: '#c65d21',
          opacity: 0.5,
          lineHeight: 1
        }}>✦</span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '8px' }}
      >
        <span style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(13px, 2.2vw, 17px)',
          color: '#c65d21',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontWeight: 600
        }}>
          Ancient Greek
        </span>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(36px, 7vw, 72px)',
          fontWeight: 900,
          color: '#8b2500',
          textAlign: 'center',
          margin: '0 0 4px',
          letterSpacing: '3px',
          textShadow: '0 3px 12px rgba(139,37,0,0.2)',
          WebkitTextStroke: '1px #c65d21'
        }}
      >
        δοῦλος
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          fontFamily: "'Old Standard TT', serif",
          fontSize: 'clamp(15px, 2.5vw, 20px)',
          color: '#c65d21',
          textAlign: 'center',
          fontStyle: 'italic',
          fontWeight: 700,
          marginBottom: '28px',
          letterSpacing: '2px'
        }}
      >
        — Doulos —
      </motion.p>

      <div style={{
        width: '80px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #c65d21, transparent)',
        margin: '0 auto 28px'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          background: 'rgba(198,93,33,0.08)',
          border: '1px solid rgba(198,93,33,0.3)',
          borderRadius: '10px',
          padding: 'clamp(18px, 3vw, 30px)',
          marginBottom: '28px'
        }}
      >
        <p style={{
          fontFamily: "'IM Fell English', serif",
          fontSize: 'clamp(15px, 2.5vw, 20px)',
          color: '#2c1810',
          lineHeight: '1.9',
          textAlign: 'center',
          margin: 0,
          fontStyle: 'italic'
        }}>
          <span style={{
            color: '#8b2500',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: 'clamp(17px, 2.8vw, 22px)'
          }}>
            "A servant — not by force, but by choice."
          </span>
          <br /><br />
          It represents a life surrendered to Christ, driven by faith and purpose. DOULOS calls us to rise beyond comfort,
          drop every chain, and live fully for Christ — with fire in our hearts and faith in our actions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <span style={{
          display: 'inline-block',
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(11px, 1.8vw, 14px)',
          color: '#8b2500',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontWeight: 700,
          marginBottom: '16px',
          borderBottom: '1px solid rgba(198,93,33,0.4)',
          paddingBottom: '8px'
        }}>
           Our Legacy 
        </span>
        <p style={{
          fontFamily: "'Old Standard TT', serif",
          fontSize: 'clamp(14px, 2.2vw, 17px)',
          color: '#3d2817',
          lineHeight: '1.9',
          margin: 0
        }}>
          DOULOS was first ignited on <strong>April 14th, 2007</strong>. After a season of stillness,
          we return to rekindle the same flame — unchanged in spirit, renewed in passion.
          <br /><br />
          <span style={{ color: '#8b2500', fontWeight: 600, fontStyle: 'italic' }}>
            We are delighted to announce that DOULOS will henceforth be organized every alternate year.
          </span>
        </p>
      </motion.div>

      <div style={{
        textAlign: 'center',
        marginTop: '28px',
        fontSize: '22px',
        color: '#c65d21',
        opacity: 0.5,
        letterSpacing: '12px'
      }}>
        ✦ ✦ ✦
      </div>
    </div>
  </motion.section>
);

/* ── Flash Through Time ── */
const FlashThroughTime = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    style={{
      padding: 'clamp(50px, 7vw, 90px) clamp(20px, 5vw, 60px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      style={{ textAlign: 'center', marginBottom: '50px', position: 'relative' }}
    >
      <p style={{
        fontFamily: "'Old Standard TT', serif",
        fontSize: 'clamp(12px, 1.8vw, 15px)',
        color: '#c65d21',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        marginBottom: '8px',
        fontWeight: 600
      }}>A Journey Through The Years</p>
      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(28px, 5vw, 52px)',
        fontWeight: 800,
        color: '#3d2817',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        margin: '0 0 20px',
        textShadow: '0 2px 8px rgba(139,37,0,0.2)'
      }}>Flash Through Time</h2>
      <div style={{
        width: '200px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #c65d21, transparent)',
        margin: '0 auto'
      }} />
    </motion.div>

    {/* Two photos — Then & Now */}
    <div style={{
      display: 'flex',
      gap: 'clamp(20px, 4vw, 60px)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: '1100px'
    }}>
      {[
        { src: '/group.jpeg', label: 'Then', year: '2007', tag: 'Doulos 2007' },
        { src: '/group1.jpeg', label: 'Now', year: '2026', tag: 'SMCY 2025' }
      ].map((photo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.7 }}
          whileHover={{ y: -6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1 1 320px',
            maxWidth: '480px'
          }}
        >
          {/* Label badge */}
          <div style={{
            background: 'linear-gradient(135deg, #c65d21, #8b2500)',
            color: '#f4e4c1',
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(13px, 2vw, 16px)',
            fontWeight: 700,
            letterSpacing: '3px',
            padding: '8px 28px',
            borderRadius: '30px',
            marginBottom: '16px',
            boxShadow: '0 4px 12px rgba(139,37,0,0.35)',
            textTransform: 'uppercase'
          }}>
            {photo.label} · {photo.year}
          </div>

          {/* Photo frame */}
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '3px solid #8b2500',
            boxShadow: '0 12px 40px rgba(139,37,0,0.3), inset 0 2px 8px rgba(255,255,255,0.2)'
          }}>
              <img
              src={photo.src}
              alt={`Doulos ${photo.label}`}
              style={{
                width: '100%',
                height: 'clamp(200px, 30vw, 320px)',
                objectFit: 'cover',
                display: 'block',
                filter: photo.label === 'Then'
                  ? 'sepia(30%) contrast(1.05) brightness(0.95)'
                  : 'contrast(1.05) brightness(1.02) saturate(1.05)'
              }}
            />
            {/* Parchment overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: photo.label === 'Then'
                ? 'linear-gradient(180deg, rgba(139,37,0,0.08) 0%, transparent 40%, rgba(61,40,23,0.15) 100%)'
                : 'linear-gradient(180deg, rgba(139,37,0,0.05) 0%, transparent 40%, rgba(61,40,23,0.1) 100%)',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Creative tag — outside below the photo frame */}
          <div style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            justifyContent: 'center'
          }}>
            <div style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #c65d21)'
            }} />
            <div style={{
              background: 'linear-gradient(135deg, rgba(244,228,193,0.97), rgba(232,212,168,0.97))',
              border: '1.5px solid #c65d21',
              borderRadius: '20px',
              padding: '6px 18px',
              boxShadow: '0 3px 10px rgba(139,37,0,0.15)'
            }}>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(11px, 1.6vw, 14px)',
                color: '#8b2500',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                margin: 0,
                lineHeight: 1.4
              }}>
                 {photo.tag} 
              </p>
            </div>
            <div style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, #c65d21, transparent)'
            }} />
          </div>

        </motion.div>
      ))}
    </div>
  </motion.section>
);

/* ── Esteemed Leadership ── */
const EsteemedLeadership = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    style={{
      padding: 'clamp(50px, 7vw, 90px) clamp(20px, 5vw, 60px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'linear-gradient(180deg, rgba(139,37,0,0.05) 0%, rgba(198,93,33,0.03) 100%)',
      borderTop: '2px solid rgba(198,93,33,0.25)',
      borderBottom: '2px solid rgba(198,93,33,0.25)'
    }}
  >
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      style={{ textAlign: 'center', marginBottom: '55px', position: 'relative' }}
    >
      <p style={{
        fontFamily: "'Old Standard TT', serif",
        fontSize: 'clamp(12px, 1.8vw, 15px)',
        color: '#c65d21',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        marginBottom: '8px',
        fontWeight: 600
      }}>Guided By Faith & Wisdom</p>
      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(24px, 4.5vw, 48px)',
        fontWeight: 800,
        color: '#3d2817',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        margin: '0 0 20px',
        textShadow: '0 2px 8px rgba(139,37,0,0.2)'
      }}>Under The Esteemed Leadership Of</h2>
      <div style={{
        width: '200px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #c65d21, transparent)',
        margin: '0 auto'
      }} />
    </motion.div>

    {/* Three leader photos */}
    <div style={{
      display: 'flex',
      gap: 'clamp(24px, 4vw, 60px)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: '1000px',
      marginBottom: '40px'
    }}>
      {[
        {
          src: '/presbyter.jpeg',
          name: 'Rev. C. Samuel Jebakumar',
          role: 'Presbyter In-Charge'
        },
        {
          src: '/pastoratesecretary.jpeg',
          name: 'Mr. S. Albert Kingsbell ',
          role: 'Pastorate Secretary'
        },
        {
          src: '/pastoratetreasurer.jpeg',
          name: 'Mr. P. Horsley Solomon',
          role: 'Pastorate Treasurer'
        }
      ].map((leader, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.7 }}
          whileHover={{ y: -6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1 1 220px',
            maxWidth: '260px'
          }}
        >
          {/* Round photo — always bright, no touch/hover dim effect */}
          <div style={{
            width: 'clamp(130px, 18vw, 180px)',
            height: 'clamp(130px, 18vw, 180px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #8b2500',
            boxShadow: '0 8px 30px rgba(139,37,0,0.35), 0 0 0 3px rgba(198,93,33,0.2)',
            marginBottom: '18px',
            flexShrink: 0,
            WebkitTapHighlightColor: 'transparent'
          }}>
            <img
              src={leader.src}
              alt={leader.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                filter: 'brightness(1.05) contrast(1.02)',
                WebkitFilter: 'brightness(1.05) contrast(1.02)',
                pointerEvents: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
            />
          </div>

          {/* Role */}
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(10px, 1.5vw, 12px)',
            color: '#c65d21',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '6px',
            textAlign: 'center'
          }}>
            {leader.role}
          </p>

          {/* Name */}
          <p style={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: '#2c1810',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: '1.4',
            margin: 0
          }}>
            {leader.name}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Gratitude line */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.7 }}
      style={{
        maxWidth: '700px',
        textAlign: 'center',
        padding: '20px 30px',
        background: 'linear-gradient(135deg, rgba(244,228,193,0.9) 0%, rgba(232,212,168,0.9) 100%)',
        border: '1.5px solid rgba(198,93,33,0.4)',
        borderRadius: '10px',
        boxShadow: '0 4px 16px rgba(139,37,0,0.1)'
      }}
    >
      <span style={{
        fontFamily: "'IM Fell English', serif",
        fontSize: 'clamp(14px, 2.2vw, 17px)',
        color: '#3d2817',
        fontStyle: 'italic',
        lineHeight: '1.7'
      }}>
        We express our gratitude to our respected church leaders for their encouragement and support.
      </span>
    </motion.div>
  </motion.section>
);

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {!showContent ? (
          <VideoIntro key="video" onComplete={() => setShowContent(true)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Hero Section */}
            <section className="hero-section">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="hero-content"
              >
                {/* Church Logo top */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
                >
                  <img
                    src="/churchlogo.jpeg"
                    alt="Church Logo"
                    style={{
                      width: 'clamp(70px, 10vw, 110px)',
                      height: 'clamp(70px, 10vw, 110px)',
                      objectFit: 'contain',
                      borderRadius: '50%',
                      border: '2px solid rgba(198,93,33,0.4)',
                      boxShadow: '0 4px 20px rgba(139,37,0,0.2)',
                      background: 'rgba(244,228,193,0.6)',
                      padding: '6px'
                    }}
                  />
                </motion.div>

                {/* Organization Name */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="organization"
                >
                  <p className="org-line">CSI MADRAS DIOCESE - PORUR PASTORATE</p>
                  <p className="church-name">CSI ST. MATTHEW'S CHURCH, PORUR</p>
                  <p className="fellowship">YOUTH FELLOWSHIP</p>
                  <p className="presents">PRESENTS</p>
                </motion.div>

                {/* Doulos Logo above title */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.9, ease: 'backOut' }}
                  style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop: '10px' }}
                >
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img
                      src="/douloslogo.jpeg"
                      alt="Doulos Logo"
                      style={{
                        width: 'clamp(100px, 16vw, 160px)',
                        height: 'clamp(100px, 16vw, 160px)',
                        objectFit: 'contain',
                        borderRadius: '50%',
                        border: '3px solid #c65d21',
                        boxShadow: '0 0 30px rgba(198,93,33,0.5), 0 0 60px rgba(139,37,0,0.2), inset 0 2px 8px rgba(255,255,255,0.3)',
                        background: 'rgba(244,228,193,0.85)',
                        padding: '8px',
                        filter: 'sepia(20%) contrast(1.1) brightness(1.05)'
                      }}
                    />
                    {/* Glow ring */}
                    <div style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '50%',
                      border: '1.5px solid rgba(198,93,33,0.3)',
                      pointerEvents: 'none'
                    }} />
                  </div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ scale: 0, rotateY: -180 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: "backOut" }}
                  className="main-title"
                >
                  δοῦλος '26
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="doulos-subtitle"
                >
                  Doulos '26
                </motion.p>

                {/* Event Details */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="event-details"
                >
                  <div className="date-time-container">
                    <div className="date-section">
                      <span className="label">TUESDAY</span>
                      <span className="date-number">14</span>
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
                    <p className="bible-reference">JOHN 8:36</p>
                  </div>
                </motion.div>

              </motion.div>
            </section>

            {/* Doulos Meaning Section */}
            <DoulosMeaning />

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
              <Countdown targetDate="2026-04-14T09:00:00" />
            </section>

            {/* Events Section */}
            <EventsSection />

            {/* Flash Through Time */}
            <FlashThroughTime />

            {/* Esteemed Leadership */}
            <EsteemedLeadership />

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
                    {/* Fixed: added missing <a> tag */}
                    <a
                      href={GMAIL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <span className="contact-icon">✉️</span>
                      <div>
                        <p className="contact-label">Email</p>
                        <p className="contact-value">doulos.smcy@gmail.com</p>
                      </div>
                    </a>
                    <a href="tel:+919789543227" className="contact-link">
                      <span className="contact-icon">📞</span>
                      <div>
                        <p className="contact-label">Youth Secretary</p>
                        <p className="contact-value">D. Immanuel Joseph</p>
                        <p className="contact-value">+91 97895 43227</p>
                      </div>
                    </a>
                    <a href="tel:+918939369392" className="contact-link">
                      <span className="contact-icon">📞</span>
                      <div>
                        <p className="contact-label">Youth Treasurer</p>
                        <p className="contact-value">L. Aneerben</p>
                        <p className="contact-value">+91 89393 69392</p>
                      </div>
                    </a>
                    <a href="tel:+919940518084" className="contact-link">
                      <span className="contact-icon">📞</span>
                      <div>
                        <p className="contact-label">Youth Convener</p>
                        <p className="contact-value">K. Rathinakumar</p>
                        <p className="contact-value">+91 99405 18084</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="footer-section">
                  <h3 className="footer-heading">Visit Us</h3>
                  {/* Fixed: added missing <a> tag */}
                  <a
                    href="https://maps.app.goo.gl/82trbc8tkGsa4AkA9?g_st=ic"
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
                    {/* Fixed: added missing <a> tag for Instagram */}
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
                    {/* Fixed: added missing <a> tag for YouTube */}
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
                <p>© 2026 St. Matthew's Church, Porur | Doulos '26 - Unchained</p>
              </div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;