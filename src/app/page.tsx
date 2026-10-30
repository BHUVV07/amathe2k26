import Navbar from "@/components/Navbar";
import HeaderBranding from "@/components/HeaderBranding";
import ConferenceDetails from "@/components/ConferenceDetails";
import ImportantDates from "@/components/ImportantDates";
import Tracks from "@/components/Tracks";
import RegistrationFees from "@/components/RegistrationFees";
import PaperSubmission from "@/components/PaperSubmission";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="home" className="flex flex-col min-h-screen bg-[#252451]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Institutional Logos, Title & Branding */}
        <HeaderBranding />

        {/* Conference Dates, Location, Hybrid Mode & Publication Statement */}
        <ConferenceDetails />

        {/* Deep Navy Sections */}
        <div className="relative">
          {/* Important Dates */}
          <ImportantDates />

          {/* Conference Tracks */}
          <Tracks />

          {/* Registration Fees */}
          <RegistrationFees />

          {/* Paper Submission */}
          <PaperSubmission />
        </div>
      </main>

      {/* Footer & Contacts */}
      <Footer />
    </div>
  );
}
