import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCapabilities from "@/components/FeaturedCapabilities";
import AllFunctions from "@/components/AllFunctions";
import Coverage from "@/components/Coverage";
import GetBimmerX from "@/components/GetBimmerX";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <Header />
      <Hero />
      <FeaturedCapabilities />
      <AllFunctions />
      <Coverage />
      <GetBimmerX />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
