import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-[#C7A24C] font-bold text-xl">॥ नमो बुद्धाय ॥</span>
        <span className="text-xs md:text-sm text-[#5A4636] uppercase tracking-widest">Wedding Invitation</span>
      </div>
    </motion.nav>
  )
}

export default Navbar