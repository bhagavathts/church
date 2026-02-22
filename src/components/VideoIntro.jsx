import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const VideoIntro = ({ onComplete }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setIsMobile(true);
    } else if (width >= 768 && width < 1024) {
      setIsTablet(true);
    }

    // Detect Safari (includes iOS Safari and macOS Safari)
    const ua = navigator.userAgent;
    const safari =
      /Safari/.test(ua) &&
      !/Chrome/.test(ua) &&
      !/CriOS/.test(ua) &&
      !/FxiOS/.test(ua);
    setIsSafari(safari);
  }, []);

  // ── MOBILE: play portrait.mp4 ──
  useEffect(() => {
    if (!isMobile) return;
    const video = videoRef.current;
    if (!video || !videoLoaded) return;

    // On iOS, autoplay only works muted — we set muted via attribute already
    // Try to unmute after play starts (may silently fail on iOS, that's fine)
    const p = video.play();
    if (p !== undefined) {
      p.then(() => {
        // Try to unmute — will only work if user has interacted
        video.muted = false;
      }).catch(() => {
        // Stays muted and plays — acceptable on iOS
      });
    }
  }, [isMobile, videoLoaded]);

  // ── DESKTOP: fullscreen + play ──
  useEffect(() => {
    if (isMobile || isTablet) return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !videoLoaded) return;

    const playVideo = () => {
      // Remove muted attribute explicitly for non-Safari desktop
      if (!isSafari) {
        video.muted = false;
      }

      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {
          video.muted = true;
          video.play().catch(() => {
            setError(true);
            setTimeout(() => onComplete(), 500);
          });
        });
      }
    };

    const requestFullscreen = async () => {
      // iOS Safari does not support fullscreen API — skip entirely
      if (isSafari && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
        playVideo();
        return;
      }

      try {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
          await container.mozRequestFullScreen();
        } else if (container.msRequestFullscreen) {
          await container.msRequestFullscreen();
        } else {
          // Fullscreen not supported — just play inline
          playVideo();
          return;
        }
        playVideo();
      } catch (err) {
        console.log('Fullscreen failed, playing inline:', err);
        playVideo();
      }
    };

    requestFullscreen();
  }, [videoLoaded, isMobile, isTablet, isSafari, onComplete]);

  // ── DESKTOP: fullscreen exit listener ──
  useEffect(() => {
    if (isMobile) return;

    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (!isFullscreen) {
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

      // Exit fullscreen on cleanup
      try {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
      } catch (e) {}
    };
  }, [onComplete, isMobile]);

  // ── TABLET: play inline on canplay ──
  const handleCanPlayTablet = () => {
    setVideoLoaded(true);
    if (isTablet && videoRef.current) {
      videoRef.current.play().catch(() => {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {
          setError(true);
          setTimeout(() => onComplete(), 500);
        });
      });
    }
  };

  const handleVideoEnd = () => {
    try {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    } catch (e) {}
    setTimeout(() => onComplete(), 800);
  };

  const handleVideoError = () => {
    setError(true);
    setTimeout(() => onComplete(), 500);
  };

  // ── MOBILE RENDER ──
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
        {/* Loading spinner */}
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
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '60px',
                height: '60px',
                border: '5px solid rgba(198,93,33,0.2)',
                borderTop: '5px solid #c65d21',
                borderRadius: '50%',
                margin: '0 auto 20px',
              }}
            />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontFamily: "'Cinzel', serif",
                color: '#f4e4c1',
                fontSize: '16px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              Experience Awaits...
            </motion.p>
          </motion.div>
        )}

        {/* 
          IMPORTANT FOR IOS:
          - muted must be a boolean attribute present in HTML (not toggled via JS before play)
          - playsInline is required
          - autoPlay works on iOS only when muted
        */}
        <video
          ref={videoRef}
          playsInline
          muted
          autoPlay
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          onEnded={() => setTimeout(() => onComplete(), 500)}
          onError={() => {
            setError(true);
            setTimeout(() => onComplete(), 500);
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.12) brightness(1.05) saturate(1.08)',
            display: videoLoaded ? 'block' : 'none'
          }}
        >
          <source src="/portrait.mp4" type="video/mp4" />
        </video>
      </motion.div>
    );
  }

  // ── TABLET & DESKTOP RENDER ──
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
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
        {/*
          For Safari/macOS: muted is intentionally NOT set here as an attribute.
          We control muting via JS after play() resolves.
          autoPlay is set for desktop only (not tablet).
        */}
        <video
          ref={videoRef}
          onEnded={handleVideoEnd}
          onError={handleVideoError}
          onCanPlay={isTablet ? handleCanPlayTablet : () => setVideoLoaded(true)}
          playsInline
          autoPlay={!isTablet}
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
                rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
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
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
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