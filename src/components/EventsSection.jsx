import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { offlineEvents, onlineEvents } from '../data/events';

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
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px'
    }}>
      {/* Offline Events */}
      <section style={{ marginBottom: '100px' }}>
        <SectionTitle>
           Offline Events 
        </SectionTitle>
        <div>
          {offlineEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* Online Events */}
      <section style={{ marginBottom: '80px' }}>
        <SectionTitle delay={0.2}>
           Online Events 
        </SectionTitle>
        <div>
          {onlineEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* Single Register Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '60px',
          marginBottom: '40px'
        }}
      >
        <motion.a
          href="YOUR_GOOGLE_FORM_LINK_HERE"
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