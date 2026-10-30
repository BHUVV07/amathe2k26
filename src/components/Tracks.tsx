const tracks = [
  "TRACK 1: ARTIFICIAL INTELLIGENCE AND DATA SCIENCE IN HEALTHCARE",
  "TRACK 2: DIGITAL HEALTH AND TELEMEDICINE",
  "TRACK 3: ROBOTICS AND AUTOMATION IN HEALTHCARE",
  "TRACK 4: BIOMEDICAL ENGINEERING AND DEVICES",
  "TRACK 5: COMPUTER SCIENCE AND ENGINEERING",
  "TRACK 6: ELECTRONICS AND COMMUNICATION ENGINEERING",
  "TRACK 7: ELECTRICAL SCIENCES",
];

export default function Tracks() {
  return (
    <section id="tracks" className="w-full bg-[#252451] text-white py-12 sm:py-16 border-b border-[#3b3970]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center sm:text-left mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-[#48C7E8] uppercase">
            TRACKS
          </h2>
          <div className="w-20 h-1 bg-[#48C7E8] mt-2 rounded-full mx-auto sm:mx-0" />
        </div>

        {/* Introductory Sentence in decorative script */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#DAD9E8] font-normal tracking-wide italic">
            The following are the conference tracks, including but not limited to:
          </p>
        </div>

        {/* List of 7 Tracks with Yellow Diamonds */}
        <div className="space-y-3 sm:space-y-4">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#1b1a3d]/70 border border-[#3b3970]/60 hover:border-[#48C7E8]/40 hover:bg-[#1b1a3d] transition-all group"
            >
              {/* Yellow diamond-shaped marker */}
              <span
                className="inline-flex items-center justify-center text-[#F3E52B] text-lg sm:text-xl flex-shrink-0 mt-0.5 select-none"
                aria-hidden="true"
              >
                ♦
              </span>
              <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-white uppercase leading-snug group-hover:text-[#48C7E8] transition-colors break-words">
                {track}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
