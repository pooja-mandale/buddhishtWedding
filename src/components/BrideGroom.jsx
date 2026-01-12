import React from 'react'
import { motion } from 'framer-motion'

const BrideGroom = () => {
  return (
    <section className="py-20 bg-[#F6F1EB] text-center overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-serif text-[#C7A24C] mb-12"
      >
        Bride & Groom
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/3 border-t-4 border-[#C7A24C]"
        >
          <h3 className="text-2xl font-serif text-[#5A4636] mb-2">Ms. Pooja Mandale</h3>
          <p className="text-sm text-[#8C7B6E] uppercase tracking-wide">
            D/o Mr. & Mrs. Mandale
          </p>
        </motion.div>

        <div className="text-[#C7A24C] text-3xl font-serif">♥</div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/3 border-t-4 border-[#C7A24C]"
        >
          <h3 className="text-2xl font-serif text-[#5A4636] mb-2">Mr. Somesh Patil</h3>
          <p className="text-sm text-[#8C7B6E] uppercase tracking-wide">
            S/o Mr. & Mrs. Patil
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BrideGroom