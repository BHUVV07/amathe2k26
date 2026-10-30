import { CalendarClock } from "lucide-react";

interface ImportantDateItem {
  label: string;
  date: string;
  highlight?: boolean;
}

const importantDates: ImportantDateItem[] = [
  { label: "LAST DATE FOR PAPER SUBMISSION", date: "15-NOV-2026" },
  { label: "NOTIFICATION OF ACCEPTANCE", date: "20-NOV-2026" },
  { label: "REGISTRATION COMMENCING", date: "20-NOV-2026" },
  { label: "REGISTRATION DEADLINE", date: "25-NOV-2026" },
  { label: "CAMERA READY PAPER SUBMISSION", date: "25-NOV-2026" },
  { label: "RELEASE OF CONFERENCE SCHEDULE", date: "01-DEC-2026" },
  { label: "CONFERENCE DATE", date: "10 - 11 / DEC / 2026", highlight: true },
];

export default function ImportantDates() {
  return (
    <section id="important-dates" className="w-full bg-[#252451] text-white py-12 sm:py-16 border-b border-[#3b3970]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-[#48C7E8] uppercase">
            IMPORTANT DATES
          </h2>
          <div className="w-20 h-1 bg-[#48C7E8] mt-2 rounded-full mx-auto sm:mx-0" />
        </div>

        {/* Dates Table / Card Container */}
        <div className="bg-[#1b1a3d]/80 rounded-2xl border border-[#3b3970] shadow-xl overflow-hidden backdrop-blur-sm">
          <div className="divide-y divide-[#3b3970]/70">
            {importantDates.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center justify-between px-5 sm:px-7 py-4 sm:py-4.5 gap-2 transition-colors duration-150 ${
                  item.highlight
                    ? "bg-[#323168]/70 border-l-4 border-l-[#F3E52B]"
                    : "hover:bg-[#252451]/60"
                }`}
              >
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider text-white uppercase">
                  {item.label}
                </span>
                <span className="text-base sm:text-lg md:text-xl font-black tracking-widest text-[#F3E52B] whitespace-nowrap self-start sm:self-auto font-mono sm:font-sans">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
