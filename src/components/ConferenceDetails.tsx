import { Calendar, MapPin, BookOpen, Layers } from "lucide-react";

export default function ConferenceDetails() {
  return (
    <section className="w-full bg-[#F2F0E8] text-[#252451] py-8 sm:py-10 border-b-4 border-[#252451]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conference Key Meta: Date & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 my-4">
          {/* Dates Column */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-sm border border-[#DAD9E8] flex items-center justify-center text-[#252451] flex-shrink-0">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-[#252451]" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-[#252451]/80 tracking-wide">
                10–11, Dec
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#252451] tracking-tight leading-none">
                2026
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            className="hidden sm:block w-px h-16 bg-[#252451]/25 self-center"
            aria-hidden="true"
          />

          {/* Location Column */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-sm border border-[#DAD9E8] flex items-center justify-center text-[#252451] flex-shrink-0">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#252451]" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#252451] tracking-tight leading-none">
                PESITM
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#252451]/80 tracking-normal mt-1">
                Shivamogga, Karnataka, India
              </span>
            </div>
          </div>
        </div>

        {/* Conference Format: HYBRID MODE */}
        <div className="text-center my-6">
          <div className="inline-block bg-white px-6 py-2.5 rounded-full border-2 border-[#C8102E] shadow-sm">
            <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#C8102E] tracking-widest uppercase">
              HYBRID MODE
            </span>
          </div>
        </div>

        {/* Publication Statement */}
        <div className="mt-8">
          <div className="bg-white/95 rounded-xl p-5 sm:p-7 shadow-sm border border-[#DAD9E8] max-w-4xl mx-auto">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#F2F0E8] border border-[#DAD9E8] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#252451]">
                <BookOpen className="w-5 h-5 text-[#252451]" />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase font-extrabold tracking-wider text-[#C8102E]">
                  Publication &amp; Indexing Information
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#252451] font-medium leading-relaxed">
                  All accepted papers will be published in Conference Proceedings in Science and
                  Management (CPSM) with e-ISBN and DOI, and submitted for indexing in Google
                  Scholar, Crossref, OpenAlex, BASE, and CORE, subject to their respective policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
