import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#E8D9C5] bg-[#FFF8F0]">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <p className="text-xl font-extrabold text-[#5A3E2B]">Bheli <span className="text-[#B08946]">Foods</span></p>
          <p className="text-sm text-[#6B4E34] mt-2">Healthy, pure, sugar-free jaggery sweets for modern families.</p>
        </div>
        <div className="flex items-center gap-4 text-[#5A3E2B]">
          <a href="#" aria-label="Instagram" className="hover:text-[#B08946]">
            <Instagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#B08946]">
            <Twitter />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#B08946]">
            <Facebook />
          </a>
        </div>
        <div className="text-right text-sm text-[#6B4E34]">
          <a href="#home" className="mr-3 hover:text-[#B08946]">Home</a>
          <a href="#products" className="mr-3 hover:text-[#B08946]">Products</a>
          <a href="#contact" className="hover:text-[#B08946]">Contact</a>
        </div>
      </div>
      <div className="bg-[#F3E6D6] text-[#5A3E2B] text-center py-3 text-sm">
        Copyright © Bheli Foods 2025
      </div>
    </footer>
  )
}
