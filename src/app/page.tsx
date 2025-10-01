// import Hero from "./components/Hero"
import Hero from "@/components/Hero";
import BigImage from "../components/BigImage";
import HospitalityProjects from "../components/HospitalityProjects";
import LatestProject from "@/components/LatestProject";
import SoftMinimal from "@/components/SoftMinimal";
import InResidence from "@/components/InResidence";
import InteriorDesignVideo from "@/components/InteriorDesignVideo";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
function page() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <LatestProject />
        <BigImage />
        <HospitalityProjects />
        <SoftMinimal />
        <InResidence />
        <InteriorDesignVideo />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default page;
