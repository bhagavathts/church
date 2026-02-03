import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <motion.div
      initial={{ scale: 0, rotateY: -180 }}
      animate={{ scale: 1, rotateY: 0 }}
      transition={{ duration: 0.6, ease: "backOut" }}
      style={{
        textAlign: 'center',
        minWidth: 'clamp(70px, 15vw, 120px)',
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(139,37,0,0.9) 0%, rgba(198,93,33,0.9) 100%)',
          border: '3px solid #8b2500',
          borderRadius: '12px',
          padding: 'clamp(15px, 3vw, 25px)',
          marginBottom: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
          pointerEvents: 'none'
        }} />
        <span style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(32px, 6vw, 56px)',
          fontWeight: 700,
          color: '#f4e4c1',
          textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 0 20px rgba(244,228,193,0.3)',
          display: 'block',
          position: 'relative',
          zIndex: 1
        }}>
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <span style={{
        fontFamily: "'Old Standard TT', serif",
        fontSize: 'clamp(14px, 2.8vw, 20px)',
        color: '#3d2817',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 700,
        textShadow: '0 1px 3px rgba(244,228,193,0.5)',
        display: 'block',
        padding: '5px',
        background: 'rgba(244,228,193,0.3)',
        borderRadius: '4px',
        border: '1px solid rgba(139,37,0,0.2)'
      }}>
        {label}
      </span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      style={{
        display: 'flex',
        gap: 'clamp(15px, 3vw, 30px)',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px'
      }}
    >
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </motion.div>
  );
};

export default Countdown;