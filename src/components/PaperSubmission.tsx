import { Mail } from "lucide-react";

export default function PaperSubmission() {
  const submissionEmail = "amathepesitm@pestrust.edu.in";

  return (
    <section id="paper-submission" className="w-full bg-[#252451] text-white py-12 sm:py-16 border-b border-[#3b3970]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-[#48C7E8] uppercase">
            PAPER SUBMISSION
          </h2>
          <div className="w-20 h-1 bg-[#48C7E8] mt-2 rounded-full mx-auto sm:mx-0" />
        </div>

        {/* Submission Instruction Banner */}
        <div className="bg-[#1b1a3d]/90 rounded-2xl p-6 sm:p-10 border border-[#3b3970] shadow-xl text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#C8102E]/20 border border-[#C8102E]/40 flex items-center justify-center flex-shrink-0 text-[#F3E52B]">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-[#F3E52B] leading-snug">
                Submit your article via email to{" "}
                <a
                  href={`mailto:${submissionEmail}`}
                  className="underline decoration-[#F3E52B]/60 hover:decoration-[#F3E52B] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#48C7E8] rounded px-1"
                >
                  {submissionEmail}
                </a>.
              </p>
              <p className="text-xs sm:text-sm text-[#DAD9E8] font-normal">
                Click the email address above to open your default email application and submit your paper manuscript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
