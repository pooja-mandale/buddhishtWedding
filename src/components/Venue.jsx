import React from 'react'
import { motion } from 'framer-motion'

const Venue = () => {
  return (
    <section className="py-20 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-serif text-[#C7A24C] mb-8">The Venue</h2>

        <div className="bg-[#F9F9F9] p-8 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-xl text-[#5A4636] font-medium mb-2">
            Buddha Vihar Hall, Chhatrapati Sambhajinagar
          </p>
          <p className="text-[#8C7B6E] mb-8 font-light">
            21 April 2026 • 11:30 AM
          </p>

          <div className="w-full h-72 rounded-2xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Buddha%20Vihar%20Sambhajinagar&output=embed"
              title="Venue Map"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Venue