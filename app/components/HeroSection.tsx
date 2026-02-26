import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full aspect-[9/16] md:aspect-[3/2] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Fashion Designer"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Responsive Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 lg:px-24">
        {/* Tagline */}
        <span className="inline-block text-xs sm:text-sm bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-1 rounded-full w-fit">
          Premium Fashion Connection
        </span>

        {/* Headline */}
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
          Verified Fashion <br />
          Designer. One Platform
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-md text-sm sm:text-base text-white/80">
          Discover trusted designers, explore real portfolios, and order custom
          or ready-to-wear fashion with confidence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center md:items-start">
          <button className="rounded-lg bg-[#C76B4A] px-8 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#b85f41] w-full sm:w-auto">
            Explore Designers
          </button>

          <button className="rounded-lg border border-white/60 bg-transparent px-8 py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 w-full sm:w-auto">
            Watch How It Works
          </button>
        </div>
      </div>
    </section>
  );
}
