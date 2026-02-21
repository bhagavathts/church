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

  const OrganiserBlock = ({ value }) => {
    const parts = value.split('—').map(p => p.trim());
    const name = parts[0] || value;
    const phone = parts[1] || null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ marginTop: '28px' }}
      >
        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '14px'
        }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #c65d21)' }} />
          <span style={{ color: '#c65d21', fontSize: '13px', letterSpacing: '4px' }}>✦ ✦ ✦</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #c65d21, transparent)' }} />
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(139,37,0,0.1) 0%, rgba(198,93,33,0.06) 100%)',
          border: '1.5px solid #c65d21',
          borderRadius: '10px',
          padding: '16px 20px',
          boxShadow: '0 4px 14px rgba(139,37,0,0.1), inset 0 1px 4px rgba(255,255,255,0.3)'
        }}>
          {/* Label */}
          <Typography sx={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(13px, 2.2vw, 16px)',
            color: '#8b2500',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            borderBottom: '1px solid rgba(198,93,33,0.3)',
            paddingBottom: '8px'
          }}>
            Event Organiser
          </Typography>

          {/* Name */}
          <Typography sx={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: 'clamp(13px, 2.2vw, 16px)',
            color: '#2c1810',
            fontWeight: 700,
            marginBottom: phone ? '6px' : '0'
          }}>
            {name}
          </Typography>

          {/* Phone */}
          {phone && (
            <Typography sx={{
              fontFamily: "'Old Standard TT', serif",
              fontSize: 'clamp(13px, 2.2vw, 16px)',
              color: '#3d2817',
              fontWeight: 600,
              letterSpacing: '1px'
            }}>
              {phone}
            </Typography>
          )}
        </div>
      </motion.div>
    );
  };

  const getOrganiser = () => {
    if (event.roundDetails && event.roundDetails.organiser) {
      return event.roundDetails.organiser;
    }
    if (event.details) {
      const org = event.details.find(d => d.label === 'Organiser');
      return org ? org.value : null;
    }
    return null;
  };

  const filteredDetails = event.details
    ? event.details.filter(d => d.label !== 'Organiser')
    : [];

  const organiser = getOrganiser();

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

                {/* Regular Details — Organiser filtered out */}
                {filteredDetails.length > 0 && (
                  <div style={{ marginBottom: '20px' }}>
                    {filteredDetails.map((detail, idx) => (
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
                    <RoundSection round={event.roundDetails.preliminary} />
                    <RoundSection round={event.roundDetails.mains} />
                    <div style={{
                      background: 'rgba(198,93,33,0.08)',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      border: '1px solid rgba(198,93,33,0.2)',
                      marginBottom: '16px'
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

                {/* Organiser Block — after rules */}
                {organiser && <OrganiserBlock value={organiser} />}

              </motion.div>
            )}
          </AnimatePresence>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
};

export default EventCard;