import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="py-16 bg-[#F6F1EB] text-center text-[#5A4636]"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-serif text-[#C7A24C] mb-4">Thank You</h3>
        <p className="mb-8 text-lg font-light">
          Your presence at our wedding is the greatest gift of all.
        </p>
        <div className="text-2xl font-serif text-[#C7A24C]">~ Pooja & Somesh ~</div>
        <p className="mt-8 text-xs text-[#8C7B6E]">Developed by Pooja Mandale</p>
      </div>
    </motion.footer>
  );
};

export default Footer;