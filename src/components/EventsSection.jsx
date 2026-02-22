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
          marginBottom: '80px',
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
          {/* Decorative label — outside the bordered box so it's never clipped */}
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