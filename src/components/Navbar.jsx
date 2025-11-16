import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#story', label: 'Our Story' },
    { href: '#mission', label: 'Mission' },
    { href: '#products', label: 'Products' },
    { href: '#join', label: 'Join Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#FFF8F0]/80 border-b border-[#E8D9C5]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-[#5A3E2B]">
          Bheli <span className="text-[#B08946]">Foods</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[#5A3E2B]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#B08946] transition">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-[#F3E6D6]">
          <Menu />
        </button>
      </div>
    </header>
  )
}
