import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { offlineEvents, onlineEvents } from '../data/events';

const onlineSubmissionGuidelines = [
  "Upload your files to Google Drive and share the Drive link with us.",
  "Name the files using your Church Name.",
  "Ensure the file access is unrestricted / accessible.",
  "Mail all submissions to doulos.smcy@gmail.com on or before April 7th."
];

const EventsSection = () => {
  const SectionTitle = ({ children, delay = 0 }) => (
    <motion.h2
      initial={{ opacity: 0, y: -30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(32px, 6vw, 56px)',
        fontWeight: 800,
        color: '#3d2817',
        textAlign: 'center',
        marginBottom: '50px',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        textShadow: '0 2px 8px rgba(139,37,0,0.2)',
        position: 'relative',
        paddingBottom: '20px'
      }}
    >
      {children}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #c65d21, transparent)',
          borderRadius: '2px'
        }}
      />
    </motion.h2>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>

      {/* General Rules Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          marginBottom: '40px',
          background: 'linear-gradient(135deg, rgba(139,37,0,0.08) 0%, rgba(198,93,33,0.05) 100%)',
          border: '3px solid #c65d21',
          borderRadius: '16px',
          padding: 'clamp(30px, 5vw, 50px)',
          boxShadow: '0 10px 30px rgba(139,37,0,0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            color: '#8b2500',
            textAlign: 'center',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '0 2px 8px rgba(139,37,0,0.2)',
            position: 'relative',
            zIndex: 1
          }}
        >
           General Rules 
        </motion.h2>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, position: 'relative', zIndex: 1 }}>
          {[
            "On the day of the event the registration will be open between 8:30 AM and 9:30 AM.",
            "The registration fee is Rs.2000 per church and Rs.100 for individual participants.",
            "Please take a moment to confirm your participation on or before April 5th through the online registration form.",
            "All online event submissions must be completed on or before April 7th.",
            "Any act of misconduct or malpractice results in disqualification. The Verdict of the Organizers shall be final."
          ].map((rule, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              style={{
                fontFamily: "'Old Standard TT', serif",
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                color: '#3d2817',
                marginBottom: '16px',
                paddingLeft: '40px',
                position: 'relative',
                lineHeight: '1.7',
                fontWeight: 500
              }}
            >
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '2px',
                  color: '#c65d21',
                  fontWeight: 700,
                  fontSize: '24px'
                }}
              >
               ✦ 
              </motion.span>
              {rule}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Instagram Live Moments Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          marginBottom: '80px',
          position: 'relative',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '2px solid rgba(198,93,33,0.5)',
          background: 'linear-gradient(135deg, rgba(61,40,23,0.97) 0%, rgba(139,37,0,0.95) 50%, rgba(61,40,23,0.97) 100%)',
          boxShadow: '0 10px 40px rgba(139,37,0,0.35), inset 0 1px 0 rgba(244,228,193,0.1)'
        }}
      >
        {/* Decorative corner marks */}
        {[
          { top: '10px', left: '14px' },
          { top: '10px', right: '14px' },
          { bottom: '10px', left: '14px' },
          { bottom: '10px', right: '14px' }
        ].map((pos, i) => (
          <span key={i} style={{
            position: 'absolute',
            ...pos,
            fontSize: '16px',
            color: 'rgba(198,93,33,0.6)',
            lineHeight: 1,
            pointerEvents: 'none'
          }}>✦</span>
        ))}

        {/* Top thin accent line */}
        <div style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #c65d21, #f4e4c1, #c65d21, transparent)'
        }} />

        <div style={{
          padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 50px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>

          {/* Tag line top */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '8px' }}
            whileInView={{ opacity: 1, letterSpacing: '4px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(10px, 1.6vw, 13px)',
              color: '#c65d21',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              fontWeight: 700,
              margin: 0
            }}
          >
            ✦ Live From The Ground ✦
          </motion.p>

          {/* Main message */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              fontFamily: "'Old Standard TT', serif",
              fontSize: 'clamp(14px, 2.4vw, 18px)',
              color: '#f4e4c1',
              textAlign: 'center',
              lineHeight: '1.8',
              margin: 0,
              maxWidth: '700px'
            }}
          >
            Tap <span style={{ color: '#c65d21', fontWeight: 700 }}>follow</span> on our Instagram and stay tuned for spontaneous Insta moments happening live.
            Charge up, stay sharp, and be ready to post!
          </motion.p>

          {/* Fire quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              background: 'rgba(198,93,33,0.15)',
              border: '1px solid rgba(198,93,33,0.4)',
              borderRadius: '8px',
              padding: '10px 24px',
            }}
          >
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(13px, 2vw, 17px)',
              color: '#f4e4c1',
              fontWeight: 700,
              letterSpacing: '1.5px',
              margin: 0,
              textAlign: 'center'
            }}>
              "On the spot. On the gram. On fire." 🔥📸
            </p>
          </motion.div>

          {/* Instagram Button */}
          <motion.a
            href="https://www.instagram.com/s_m_c_youth?igsh=MWh0cThkMTMxejR1ag=="
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{
              marginTop: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #c65d21 0%, #8b2500 100%)',
              color: '#f4e4c1',
              textDecoration: 'none',
              borderRadius: '50px',
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(13px, 2vw, 16px)',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              border: '2px solid rgba(244,228,193,0.25)',
              boxShadow: '0 6px 24px rgba(139,37,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
              cursor: 'pointer'
            }}
          >
            {/* Instagram SVG icon */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: '20px', height: '20px', flexShrink: 0 }}
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow Us on Instagram
          </motion.a>

        </div>

        {/* Bottom thin accent line */}
        <div style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #c65d21, #f4e4c1, #c65d21, transparent)'
        }} />
      </motion.div>

      {/* Offline Events */}
      <section style={{ marginBottom: '100px' }}>
        <SectionTitle> Offline Events </SectionTitle>
        <div>
          {offlineEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* Online Events */}
      <section style={{ marginBottom: '80px' }}>
        <SectionTitle delay={0.2}> Online Events </SectionTitle>

        {/* Online Submission Guidelines Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginBottom: '50px',
            marginTop: '40px',
            position: 'relative',
          }}
        >
          {/* Decorative label */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '-1px',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #c65d21, #8b2500)',
              color: '#f4e4c1',
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(12px, 1.8vw, 15px)',
              fontWeight: 700,
              letterSpacing: '2px',
              padding: '10px 28px',
              borderRadius: '10px 10px 0 0',
              whiteSpace: 'nowrap',
              boxShadow: '0 -4px 12px rgba(139,37,0,0.3)',
              border: '2px solid #8b2500',
              borderBottom: 'none',
              textTransform: 'uppercase'
            }}>
              📜 Online Submission Guidelines
            </div>
          </div>

          {/* Box content */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(139,37,0,0.08) 0%, rgba(198,93,33,0.05) 100%)',
            border: '2px solid #c65d21',
            borderRadius: '0 14px 14px 14px',
            padding: 'clamp(24px, 4vw, 40px)',
          }}>
            <p style={{
              fontFamily: "'Old Standard TT', serif",
              fontSize: 'clamp(13px, 2vw, 16px)',
              color: '#8b2500',
              fontWeight: 600,
              fontStyle: 'italic',
              textAlign: 'center',
              marginBottom: '20px',
              marginTop: '0'
            }}>
              Please follow these instructions carefully for all online event submissions:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {onlineSubmissionGuidelines.map((line, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  style={{
                    fontFamily: "'Old Standard TT', serif",
                    fontSize: 'clamp(13px, 2.2vw, 16px)',
                    color: '#3d2817',
                    marginBottom: '12px',
                    paddingLeft: '32px',
                    position: 'relative',
                    lineHeight: '1.7',
                    fontWeight: 500
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '3px',
                    color: '#c65d21',
                    fontWeight: 700,
                    fontSize: '18px'
                  }}>✦</span>
                  {line}
                </motion.li>
              ))}
            </ul>

            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(12px, 1.8vw, 14px)',
              color: '#8b2500',
              fontWeight: 700,
              textAlign: 'center',
              marginTop: '20px',
              marginBottom: '0',
              letterSpacing: '1px',
              borderTop: '1px solid rgba(198,93,33,0.3)',
              paddingTop: '16px'
            }}>
              ⚠️ Deadline: April 7th — Late submissions will not be accepted.
            </p>
          </div>
        </motion.div>

        <div>
          {onlineEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* Register Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', marginBottom: '40px' }}
      >
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSei4baC2PRMx4Q8xSTLtM0mDZEjFv-eEmNdH9pk-fuxXogQpQ/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block',
            padding: '20px 50px',
            background: 'linear-gradient(135deg, #c65d21 0%, #8b2500 100%)',
            color: '#f4e4c1',
            textDecoration: 'none',
            borderRadius: '12px',
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(18px, 3vw, 24px)',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            border: '3px solid #8b2500',
            boxShadow: '0 10px 30px rgba(139,37,0,0.5), inset 0 2px 8px rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            textAlign: 'center'
          }}
        >
          📝 Register Now →
        </motion.a>
      </motion.div>
    </div>
  );
};

export default EventsSection;