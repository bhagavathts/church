import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EventCard = ({ event, index }) => {
  const [expanded, setExpanded] = useState(false);

  const RoundSection = ({ round }) => (
    <div style={{
      marginBottom: '20px',
      background: 'rgba(198,93,33,0.08)',
      borderRadius: '8px',
      padding: '16px',
      border: '1px solid rgba(198,93,33,0.25)'
    }}>
      <Typography sx={{
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(13px, 2vw, 15px)',
        color: '#8b2500',
        fontWeight: 700,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '12px',
        borderBottom: '1px solid rgba(198,93,33,0.3)',
        paddingBottom: '8px'
      }}>
        {round.label}
      </Typography>
      {round.fields.map((field, idx) => (
        <div key={idx} style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '8px',
          alignItems: 'flex-start'
        }}>
          <Typography sx={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: 'clamp(13px, 2.2vw, 15px)',
            color: '#8b2500',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}>
            {field.label}:
          </Typography>
          <Typography sx={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: 'clamp(13px, 2.2vw, 15px)',
            color: '#3d2817',
            lineHeight: '1.6'
          }}>
            {field.value}
          </Typography>
        </div>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{ marginBottom: '20px' }}
    >
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{
          background: 'linear-gradient(135deg, rgba(244,228,193,0.95) 0%, rgba(232,212,168,0.95) 100%)',
          border: '2px solid #8b2500',
          borderRadius: '8px !important',
          boxShadow: expanded
            ? '0 15px 40px rgba(139,37,0,0.4), inset 0 2px 8px rgba(255,255,255,0.3)'
            : '0 8px 20px rgba(139,37,0,0.3), inset 0 2px 8px rgba(255,255,255,0.3)',
          transition: 'all 0.3s ease',
          overflow: 'hidden',
          position: 'relative',
          '&:before': { display: 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ExpandMoreIcon sx={{ color: '#8b2500', fontSize: '32px' }} />
            </motion.div>
          }
          sx={{
            padding: '16px 24px',
            '& .MuiAccordionSummary-content': { margin: '12px 0', alignItems: 'center' }
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
            <motion.span
              whileHover={{ scale: 1.2, rotate: 10 }}
              style={{ fontSize: 'clamp(32px, 5vw, 48px)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
            >
              {event.icon}
            </motion.span>
            <Typography sx={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(16px, 3vw, 22px)',
              fontWeight: 700,
              color: '#3d2817',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textShadow: '1px 1px 2px rgba(139,37,0,0.2)',
              flex: 1
            }}>
              {event.name}
            </Typography>
          </div>
        </AccordionSummary>

        <AccordionDetails sx={{
          padding: '24px',
          borderTop: '2px solid #c65d21',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)'
        }}>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtitle */}
                <Typography sx={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: '#8b2500',
                  marginBottom: '12px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}>
                  {event.subtitle}
                </Typography>

                {/* Tagline */}
                {event.tagline && (
                  <Typography sx={{
                    fontFamily: "'Old Standard TT', serif",
                    fontSize: 'clamp(14px, 2.3vw, 17px)',
                    color: '#2c1810',
                    marginBottom: '20px',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    lineHeight: '1.6'
                  }}>
                    {event.tagline}
                  </Typography>
                )}

                {/* Theme */}
                {event.theme && (
                  <div style={{
                    background: 'rgba(198,93,33,0.1)',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    marginBottom: '20px',
                    border: '1px solid rgba(198,93,33,0.3)'
                  }}>
                    <Typography sx={{
                      fontFamily: "'Old Standard TT', serif",
                      fontSize: 'clamp(13px, 2.2vw, 16px)',
                      color: '#3d2817',
                      fontWeight: 600
                    }}>
                      <span style={{ color: '#8b2500', fontWeight: 700 }}>Theme:</span> {event.theme}
                    </Typography>
                  </div>
                )}

                {/* Regular Details */}
                {event.details && event.details.length > 0 && (
                  <div style={{ marginBottom: '20px' }}>
                    {event.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        style={{
                          marginBottom: '12px',
                          paddingLeft: '8px',
                          borderLeft: '3px solid #c65d21'
                        }}
                      >
                        <Typography sx={{
                          fontFamily: "'Old Standard TT', serif",
                          fontSize: 'clamp(13px, 2.2vw, 16px)',
                          color: '#3d2817',
                          lineHeight: '1.6'
                        }}>
                          <span style={{ color: '#8b2500', fontWeight: 700 }}>{detail.label}:</span>{' '}
                          {detail.value}
                        </Typography>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Bible Quiz Special Round Details */}
                {event.roundDetails && (
                  <div style={{ marginBottom: '20px' }}>
                    {/* Participants */}
                    <div style={{ marginBottom: '16px', paddingLeft: '8px', borderLeft: '3px solid #c65d21' }}>
                      <Typography sx={{
                        fontFamily: "'Old Standard TT', serif",
                        fontSize: 'clamp(13px, 2.2vw, 16px)',
                        color: '#3d2817',
                        lineHeight: '1.6'
                      }}>
                        <span style={{ color: '#8b2500', fontWeight: 700 }}>Participants:</span>{' '}
                        {event.roundDetails.participants}
                      </Typography>
                    </div>

                    {/* Preliminary Round */}
                    <RoundSection round={event.roundDetails.preliminary} />

                    {/* Mains Round */}
                    <RoundSection round={event.roundDetails.mains} />

                    {/* Bible Version */}
                    <div style={{
                      background: 'rgba(198,93,33,0.08)',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      border: '1px solid rgba(198,93,33,0.2)',
                      marginBottom: '20px'
                    }}>
                      <Typography sx={{
                        fontFamily: "'Old Standard TT', serif",
                        fontSize: 'clamp(13px, 2.2vw, 15px)',
                        color: '#3d2817',
                        lineHeight: '1.6'
                      }}>
                        <span style={{ color: '#8b2500', fontWeight: 700 }}>Bible Version:</span>{' '}
                        {event.roundDetails.bibleVersion}
                      </Typography>
                    </div>
                  </div>
                )}

                {/* Rules */}
                <Typography sx={{
                  fontFamily: "'Old Standard TT', serif",
                  fontSize: 'clamp(15px, 2.5vw, 18px)',
                  color: '#2c1810',
                  marginBottom: '16px',
                  marginTop: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.5px'
                }}>
                  Rules & Regulations:
                </Typography>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {event.rules.map((rule, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      style={{
                        fontFamily: "'Old Standard TT', serif",
                        fontSize: 'clamp(13px, 2.2vw, 16px)',
                        color: '#3d2817',
                        marginBottom: '12px',
                        paddingLeft: '28px',
                        position: 'relative',
                        lineHeight: '1.6'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '4px',
                        color: '#c65d21',
                        fontWeight: 700,
                        fontSize: '18px'
                      }}>✦</span>
                      {rule}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
};

export default EventCard;