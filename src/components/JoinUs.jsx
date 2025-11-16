import { useState } from 'react'

export default function JoinUs() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/supporters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus({ type: 'success', message: 'Thank you for joining! We will reach out soon.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <section id="join" className="py-20 bg-[#FFF3E0]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A3E2B]">Join Our Journey</h2>
        <p className="mt-4 text-lg text-[#6B4E34] max-w-3xl">
          Join Bheli Foods for only ₹250 and become a proud early supporter with <span className="font-semibold text-[#B08946]">0.2% equity</span>. Your belief helps us bring the real taste of Bharat to the world. Together, we’re building a healthier, happier future for our families.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-[#E8D9C5]">
            <h3 className="text-xl font-bold text-[#5A3E2B]">Become a Small Partner</h3>
            <ul className="mt-3 list-disc list-inside text-[#6B4E34] space-y-1">
              <li>Support a pure, chemical-free Indian food brand</li>
              <li>Help us reach more families with healthy sweets</li>
              <li>Be part of a local-to-global movement</li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input name="name" required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#B08946]" />
              <input type="email" name="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#B08946]" />
              <input name="city" placeholder="City / Location" className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#B08946]" />
              <input name="referral" placeholder="How did you hear about us?" className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#B08946]" />
              <textarea name="note" placeholder="Why do you want to join? (optional)" className="w-full px-4 py-3 rounded-xl border border-[#E8D9C5] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#B08946]" rows="4" />
              <button className="w-full bg-[#B08946] text-white px-6 py-3 rounded-xl shadow hover:bg-[#9A793F]">Join for ₹250</button>
            </form>

            {status && (
              <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>{status.message}</p>
            )}
          </div>

          <div className="bg-[#FFF7EA] rounded-2xl p-6 border border-[#E8D9C5]">
            <h3 className="text-xl font-bold text-[#5A3E2B]">Why Your Support Matters</h3>
            <p className="mt-3 text-[#6B4E34]">
              Every contribution helps us source better ingredients, improve packaging, and reach more families across India and beyond. This is more than an investment — it’s a shared dream to build a brand that represents purity, authenticity, and the real taste of Bharat.
            </p>
            <p className="mt-3 text-[#6B4E34]">
              Let’s create something big, together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
