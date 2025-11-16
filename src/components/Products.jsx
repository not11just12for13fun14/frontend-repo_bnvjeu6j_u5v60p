export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A3E2B]">Our Product</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-[#FFF7EA] rounded-2xl p-8 border border-[#E8D9C5]">
            <h3 className="text-2xl font-bold text-[#5A3E2B]">Bheli Sugar-Free Gud Laddu</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[#6B4E34]">
              <li>100% natural and chemical-free</li>
              <li>No refined sugar — sweetened with pure jaggery</li>
              <li>Healthy alternative to chocolates & toffees for kids</li>
              <li>Suitable for every age group</li>
              <li>Traditional recipe with modern hygiene standards</li>
              <li>Rich in iron, minerals, and natural sweetness</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-[#5A3E2B]">Ingredients</h4>
              <p className="text-[#6B4E34]">Pure jaggery (gud), roasted gram flour, ghee, dry fruits, natural spices.</p>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-[#E8D9C5]">
                <h4 className="font-semibold text-[#5A3E2B]">Nutrition</h4>
                <ul className="mt-2 text-sm text-[#6B4E34] space-y-1">
                  <li>Iron-rich for daily energy</li>
                  <li>Minerals that support growth</li>
                  <li>Natural carbs for sustained energy</li>
                  <li>No artificial preservatives</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#E8D9C5]">
                <h4 className="font-semibold text-[#5A3E2B]">Shelf Life</h4>
                <p className="mt-2 text-sm text-[#6B4E34]">Best before 60 days from manufacture. Store in a cool, dry place.</p>
              </div>
            </div>
          </div>

          <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#EFD9B3] to-[#F7E8CD] border border-[#E8D9C5] flex items-center justify-center text-[#5A3E2B]">
            <div className="text-center p-8">
              <div className="text-7xl">🍯</div>
              <p className="mt-4 font-semibold">High-quality product image placeholder</p>
              <p className="text-sm text-[#6B4E34]">(Replace with real product photo)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
