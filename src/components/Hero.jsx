import { motion } from 'framer-motion'
import { ShoppingBag, Users, Phone } from 'lucide-react'

export default function Hero({ onBuy, onJoin, onContact }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#FFF1DB] to-[#F9E7C8]" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#5A3E2B]">
            Swad bhi, Sehat bhi — <span className="text-[#B08946]">Desh ka asli gud ka laddu.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#6B4E34]">
            Healthy, pure, sugar-free sweet option for kids & families.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onBuy} className="inline-flex items-center gap-2 bg-[#B08946] text-white px-6 py-3 rounded-full shadow hover:bg-[#9A793F] transition">
              <ShoppingBag size={20} /> Buy Now
            </button>
            <button onClick={onJoin} className="inline-flex items-center gap-2 bg-white text-[#5A3E2B] px-6 py-3 rounded-full shadow hover:bg-[#FFF2E0] transition">
              <Users size={20} /> Join Us
            </button>
            <button onClick={onContact} className="inline-flex items-center gap-2 bg-[#5A3E2B] text-white px-6 py-3 rounded-full shadow hover:bg-[#4B3425] transition">
              <Phone size={20} /> Contact
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#E7CFA3] rounded-full blur-3xl opacity-40" />
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#E9D7B5] rounded-full blur-3xl opacity-50" />
    </section>
  )
}
