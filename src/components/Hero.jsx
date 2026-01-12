import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center text-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/bride-groom-praying-hand-holy-thread-blessing-happiness-their-new-family-life-thailand-traditional-wedding-178346999.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl z-10 max-w-xl mx-4"
      >
        {/* Marathi Blessing */}
        <p style={{ fontFamily: 'Tiro Devanagari Marathi, serif' }}
 className="text-[#6B5B4B] text-base italic tracking-wide mb-6">
          "आमच्या येथे तथागत गौतम बुद्ध यांच्या पवित्र मंगल कृपेने !!"
        </p>

        {/* Names */}
        <h1 className="text-4xl md:text-5xl font-serif text-[#B89B5E] mb-2">
          Pooja & Somesh
        </h1>

        <p className="text-[#5A4636] text-sm tracking-[0.3em] uppercase mb-5">
          Are getting married
        </p>

        <div className="h-px w-20 bg-[#D8C9A5] mx-auto mb-5"></div>

        <p className="text-[#5A4636] font-medium text-lg">
          21 April 2026
        </p>
        <p className="text-[#5A4636] text-sm mt-1">
          Sambhajinagar
        </p>
      </motion.div>
    </section>
  )
}

export default Hero
