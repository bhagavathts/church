import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const VideoIntro = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video && videoLoaded) {
      video.play().catch(err => {
        console.log('Autoplay with sound failed, trying muted:', err);
        video.muted = true;
        video.play().catch(err2 => {
          console.log('Autoplay failed completely:', err2);
          setTimeout(() => onComplete(), 500);
        });
      });
    }
  }, [videoLoaded, onComplete]);

  const handleVideoEnd = () => {
    console.log('Video ended');
    onComplete();
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    onComplete();
  };

  const handleCanPlay = () => {
    console.log('Video can play');
    setVideoLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        overflow: 'hidden',
        background: `url('/parchment-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        onError={handleVideoError}
        onCanPlay={handleCanPlay}
        playsInline
        muted={false}
        preload="auto"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover'
        }}
      >
        <source src="/chain-break-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default VideoIntro;