import React, { useRef, useState, useEffect } from 'react'
import music from "../assets/music.mp3";
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioPlaying = () => setPlaying(true);
    const setAudioPaused = () => setPlaying(false);

    audio.addEventListener('playing', setAudioPlaying);
    audio.addEventListener('pause', setAudioPaused);

    // Attempt to autoplay, which may be blocked by the browser.
    audio.play().catch(() => {
      // Autoplay was prevented. The user must click the button to start playback.
      setPlaying(false);
    });

    return () => {
      audio.removeEventListener('playing', setAudioPlaying);
      audio.removeEventListener('pause', setAudioPaused);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
  return (
    <>
      <audio ref={audioRef} loop src={music} autoPlay />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 bg-[#C7A24C] text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center z-50 hover:bg-[#b08d3e] transition-colors"
      >
        {playing ? (
          <span className="text-xl">❚❚</span>
        ) : (
          <span className="text-xl ml-1">▶</span>
        )}
      </motion.button>
    </>
  )
}

export default MusicPlayer