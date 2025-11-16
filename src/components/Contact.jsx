import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus({ type: 'success', message: 'Message sent! We will get back soon.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A3E2B]">Contact Us</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-[#FFF7EA] rounded-2xl p-6 border border-[#E8D9C5]">
            <h3 className="text-xl font-bold text-[#5A3E2B]">Reach Out</h3>
            <p className="mt-3 text-[#6B4E34]"><span className="font-semibold">Email:</span> thefuns87@gmail.com</p>
            <p className="text-[#6B4E34]"><span className="font-semibold">Address:</span> Uttar Pradesh, India</p>
            <p className="text-[#6B4E34]"><span className="font-semibold">Founder:</span> Sanket Singh</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-[#E8D9C5] space-y-4">
            <input name="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#B08946]" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#B08946]" />
            <textarea name="message" required placeholder="Your Message" rows="5" className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#B08946]" />
            <button className="w-full bg-[#5A3E2B] text-white px-6 py-3 rounded-xl shadow hover:bg-[#4B3425]">Send Message</button>
            {status && (
              <p className={`text-sm ${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
