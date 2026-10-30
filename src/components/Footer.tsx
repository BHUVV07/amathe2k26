import { Globe, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#F2F0E8] text-[#252451] border-t-4 border-[#252451]">
      {/* Primary Poster-Inspired Footer Row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Column 1: Visit / Official Website */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#DAD9E8] flex items-center justify-center text-[#C8102E] flex-shrink-0">
              <Globe className="w-6 h-6 text-[#C8102E]" />
            </div>
            <div>
              <span className="font-script text-2xl sm:text-3xl text-[#C8102E] block leading-none mb-1">
                Visit
              </span>
              <a
                href="https://www.amathe.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-lg sm:text-xl font-black text-[#252451] hover:text-[#C8102E] transition-colors tracking-tight focus:outline-none focus:ring-2 focus:ring-[#C8102E] rounded"
              >
                <span>www.amathe.in</span>
                <ExternalLink className="w-4 h-4 text-[#C8102E]" />
              </a>
            </div>
          </div>

          {/* Column 2: Organizers */}
          <div className="text-left md:text-center space-y-1.5 py-1 md:border-x border-[#DAD9E8]/80 md:px-4">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#C8102E]">
              Organizers
            </p>
            <p className="text-sm sm:text-base font-bold text-[#252451] leading-snug">
              Organised by: Dept of AIML &amp; Dept of EEE
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#252451]/80">
              An initiative of AI Task Force
            </p>
          </div>

          {/* Column 3: Contact */}
          <div className="flex items-start gap-4 md:justify-end">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#DAD9E8] flex items-center justify-center text-[#C8102E] flex-shrink-0 md:order-last">
              <Phone className="w-6 h-6 text-[#C8102E]" />
            </div>
            <div className="text-left md:text-right space-y-0.5">
              <span className="font-script text-2xl sm:text-3xl text-[#C8102E] block leading-none mb-1">
                Contact
              </span>
              <p className="text-base sm:text-lg font-black text-[#252451] leading-tight">
                Mr. Vinay S K
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#252451]/85">
                Prof., Dept. of ISE &amp; Conference Co-Chair
              </p>
              <div className="pt-1">
                <a
                  href="tel:9886664050"
                  className="inline-block text-base sm:text-lg font-black text-[#252451] hover:text-[#C8102E] transition-colors tracking-wider focus:outline-none focus:ring-2 focus:ring-[#C8102E] rounded px-1"
                >
                  98866 64050
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Navy Bottom Bar */}
      <div className="bg-[#1b1a3d] text-[#DAD9E8] py-4 border-t border-[#3b3970]/50 text-center text-xs tracking-wider">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>AMATHE 2026 • PES Institute of Technology and Management, Shivamogga</span>
          <span className="text-white/60">AICTE Sponsored 3rd International Conference</span>
        </div>
      </div>
    </footer>
  );
}
