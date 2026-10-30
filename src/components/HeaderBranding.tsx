import Image from "next/image";

export default function HeaderBranding() {
  return (
    <section className="w-full bg-[#F2F0E8] text-[#252451] pt-6 pb-2 sm:pt-8 sm:pb-4 border-b border-[#DAD9E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Institutional Logos Header Banner */}
        <div className="bg-white/95 rounded-xl p-3 sm:p-5 shadow-sm border border-[#DAD9E8]/70 mb-6 sm:mb-8">
          <div className="w-full max-w-4xl mx-auto flex items-center justify-center">
            <Image
              src="/header-logos-full.png"
              alt="PES Institute of Technology and Management, Shivamogga | Institution's Innovation Council | AICTE"
              width={1050}
              height={145}
              className="w-full h-auto object-contain max-h-16 sm:max-h-20 md:max-h-24"
              priority
            />
          </div>
        </div>

        {/* Conference Pre-title / Sponsorship line */}
        <div className="text-center mb-3 sm:mb-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider sm:tracking-widest text-[#252451] uppercase">
            3<sup className="text-[#C8102E] font-extrabold text-xs sm:text-sm md:text-base">RD</sup>{" "}
            INTERNATIONAL CONFERENCE &amp; AICTE SPONSORED
          </p>
        </div>

        {/* Main Conference Title: AMATHE */}
        <div className="text-center my-2 sm:my-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#C8102E] leading-none drop-shadow-sm select-none">
            AMATHE
          </h1>
        </div>

        {/* Red Banner for Full Conference Name */}
        <div className="mt-4 sm:mt-6 -mx-4 sm:mx-0">
          <div className="bg-[#C8102E] text-white py-3.5 sm:py-4 px-4 sm:px-8 sm:rounded-md shadow-md text-center">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider uppercase leading-snug">
              ADVANCES IN MODERN AGE TECHNOLOGIES FOR
              <br className="hidden sm:inline" />{" "}
              HEALTH AND ENGINEERING SCIENCE
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
