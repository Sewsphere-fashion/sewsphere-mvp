"use client";

const collections = [
  {
    id: 1,
    price: "₦15K",
    image: "/images/image-1.png", 
    alt: "Beige wool coat on mannequin",
    large: true,
  },
  {
    id: 2,
    price: "₦15K",
    image: "/images/image-2.png", 
    alt: "Grey suit on mannequin",
    large: false,
  },
  {
    id: 3,
    price: "₦15K",
    image: "/images/image-3.png", 
    alt: "Colourful African print dress",
    large: false,
  },
];

export default function ExclusiveCollections() {
  return (
    <section className="w-full rgb(250,250,250) py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* ── Left copy ── */}
        <div className="flex-shrink-0 lg:w-1/3 flex flex-col gap-5 text-left">
          {/* Badge */}
          <span className="self-start text-xs font-medium text-[#c4684a] border border-[#c4684a] rounded-full px-3 py-1">
            Ready-To-Wear
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
            Exclusive Designers Collections
          </h2>

          {/* Body */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Shop unique, ready-to-wear pieces crafted by our talented designers.
            Each item is a work of art, ready to elevate your wardrobe.
          </p>

          {/* CTA */}
          <button className="bg-[#c4684a] hover:bg-[#b05a3e] transition-colors text-white text-sm sm:text-base font-medium rounded-xl px-6 py-4 leading-tight w-fit text-left">
  Explore Marketplace
</button>
        </div>

        {/* ── Right image grid ── */}
        <div className="flex-1 grid grid-cols-2 gap-3 w-full">
          {/* Large card – spans 2 rows */}
          <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-sm">
            <img
              src={collections[0].image}
              alt={collections[0].alt}
              className="w-full h-full object-cover"
              style={{ minHeight: "380px" }}
            />
            <PriceBadge price={collections[0].price} />
          </div>

          {/* Top-right card */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm h-44">
            <img
              src={collections[1].image}
              alt={collections[1].alt}
              className="w-full h-full object-cover"
            />
            <PriceBadge price={collections[1].price} />
          </div>

          {/* Bottom-right card */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm h-44">
            <img
              src={collections[2].image}
              alt={collections[2].alt}
              className="w-full h-full object-cover"
            />
            <PriceBadge price={collections[2].price} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceBadge({ price }: { price: string }) {
  return (
    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full px-3 py-1 shadow-sm">
      {price}
    </span>
  );
}