import Image from "next/image";

const DesignerHero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "500px",
        backgroundColor: "#18181b",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/hero.png"
        alt="Fashion Designer"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      />
      {/* Responsive Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 lg:px-24 z-20">
        {/* Headline */}
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
          Discover Designers
        </h1>
        {/* Subtext */}
        <p className="mt-4 max-w-md text-sm sm:text-base text-white">
          Browse our curated selection of verified African fashion designers.
          Each designer has been vetted for quality, reliability, and
          craftsmanship.
        </p>
      </div>
    </section>
  );
};

export default DesignerHero;
