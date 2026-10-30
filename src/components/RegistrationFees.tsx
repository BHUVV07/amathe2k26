export default function RegistrationFees() {
  const fees = [
    {
      category: "FACULTY & INDUSTRY PROFESSIONAL",
      amount: "₹ 2000",
    },
    {
      category: "STUDENTS",
      amount: "₹ 1000",
    },
  ];

  return (
    <section id="registration" className="w-full bg-[#252451] text-white py-12 sm:py-16 border-b border-[#3b3970]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-[#48C7E8] uppercase">
            REGISTRATION FEES
          </h2>
          <div className="w-20 h-1 bg-[#48C7E8] mt-2 rounded-full mx-auto sm:mx-0" />
        </div>

        {/* Fees Cards / Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {fees.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1b1a3d]/90 rounded-2xl p-6 sm:p-8 border border-[#3b3970] shadow-lg flex flex-col justify-between hover:border-[#F3E52B]/40 transition-colors"
            >
              <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase mb-4 leading-snug">
                {item.category}
              </h3>
              <div className="pt-4 border-t border-[#3b3970]/60 flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-[#DAD9E8] font-medium">
                  Registration Amount
                </span>
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#F3E52B]">
                  {item.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
