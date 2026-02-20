import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const VideoIntro = ({ onComplete }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setIsMobile(true);
    } else if (width >= 768 && width < 1024) {
      setIsTablet(true);
    }
  }, []);

  // Mobile: play portrait video, then go to page
  useEffect(() => {
    if (!isMobile) return;
    // handled by render
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || isTablet) return;

    const video = videoRef.current;
    const container = containerRef.current;

    const requestFullscreen = async () => {
      try {
        if (container) {
          if (container.requestFullscreen) {
            await container.requestFullscreen();
          } else if (container.webkitRequestFullscreen) {
            await container.webkitRequestFullscreen();
          } else if (container.mozRequestFullScreen) {
            await container.mozRequestFullScreen();
          } else if (container.msRequestFullscreen) {
            await container.msRequestFullscreen();
          }
        }
      } catch (err) {
        console.log('Fullscreen request failed:', err);
      }
    };

    if (videoLoaded) {
      requestFullscreen();

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing with sound in fullscreen');
          })
          .catch(err => {
            console.log('Autoplay with sound failed, trying muted:', err);
            video.muted = true;
            video.play().catch(err2 => {
              console.log('Muted autoplay failed:', err2);
              setError(true);
              setTimeout(() => onComplete(), 500);
            });
          });
      }
    }
  }, [videoLoaded, onComplete, isMobile, isTablet]);

  useEffect(() => {
    if (isMobile) return;

    const exitFullscreen = () => {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    };

    const handleFullscreenChange = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.mozFullScreenElement &&
        !document.msFullscreenElement
      ) {
        onComplete();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      exitFullscreen();
    };
  }, [onComplete, isMobile]);

  // Mobile: show portrait video
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted={false}
          preload="auto"
          onEnded={() => setTimeout(() => onComplete(), 500)}
          onError={() => setTimeout(() => onComplete(), 500)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.12) brightness(1.05) saturate(1.08)',
          }}
        >
          <source src="/portrait.mp4" type="video/mp4" />
        </video>

        {/* Skip button for mobile */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => onComplete()}
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '20px',
            background: 'rgba(139,37,0,0.7)',
            color: '#f4e4c1',
            border: '2px solid #c65d21',
            borderRadius: '8px',
            padding: '10px 20px',
            fontFamily: "'Cinzel', serif",
            fontSize: '14px',
            letterSpacing: '2px',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          SKIP ▶
        </motion.button>
      </motion.div>
    );
  }

  const handleVideoEnd = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    setTimeout(() => onComplete(), 800);
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    setError(true);
    setTimeout(() => onComplete(), 500);
  };

  const handleCanPlay = () => {
    setVideoLoaded(true);

    if (isTablet && videoRef.current) {
      videoRef.current.play().catch(err => {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {
          setError(true);
          setTimeout(() => onComplete(), 500);
        });
      });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        overflow: 'hidden',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Cinematic Black Bars — desktop only */}
      {!isTablet && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.95) 100%)'
        }} />
      )}

      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
      }}>
        <video
          ref={videoRef}
          onEnded={handleVideoEnd}
          onError={handleVideoError}
          onCanPlay={handleCanPlay}
          playsInline
          autoPlay={!isTablet}
          muted={false}
          preload="auto"
          style={
            isTablet
              ? {
                  width: '70%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'contrast(1.15) brightness(1.08) saturate(1.1)',
                }
              : {
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'cover',
                  filter: 'contrast(1.15) brightness(1.08) saturate(1.1)',
                  imageRendering: '-webkit-optimize-contrast',
                  WebkitFilter: 'contrast(1.15) brightness(1.08) saturate(1.1)'
                }
          }
          className="cinematic-video"
        >
          <source src="/chain-break-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading Indicator */}
        {!videoLoaded && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 10
            }}
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                width: 'clamp(50px, 12vw, 80px)',
                height: 'clamp(50px, 12vw, 80px)',
                border: '5px solid rgba(198,93,33,0.2)',
                borderTop: '5px solid #c65d21',
                borderRadius: '50%',
                margin: '0 auto 25px',
                boxShadow: '0 0 30px rgba(198,93,33,0.5), inset 0 0 20px rgba(198,93,33,0.3)'
              }}
            />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: "'Cinzel', serif",
                color: '#f4e4c1',
                fontSize: 'clamp(16px, 3.5vw, 22px)',
                letterSpacing: '3px',
                padding: '0 20px',
                textTransform: 'uppercase',
                textShadow: '0 0 20px rgba(244,228,193,0.5)'
              }}
            >
              Experience Awaits...
            </motion.p>
          </motion.div>
        )}

        {/* Vignette — desktop only */}
        {!isTablet && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
            pointerEvents: 'none',
            zIndex: 1
          }} />
        )}
      </div>
    </motion.div>
  );
};

export default VideoIntro;