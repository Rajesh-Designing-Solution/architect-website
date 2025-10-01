// import Hero from "./components/Hero"
import Hero from "@/components/Hero";
import BigImage from "../components/BigImage"
import HospitalityProjects from "../components/HospitalityProjects"
import LatestProject from "@/components/LatestProject";
import SoftMinimal from "@/components/SoftMinimal";
import InResidence from "@/components/InResidence";
import InteriorDesignVideo from "@/components/InteriorDesignVideo";
function page() {
  return (
    <div>
      <main>
        <Hero></Hero>
        <LatestProject></LatestProject>
        <BigImage></BigImage>
        <HospitalityProjects/>
        <SoftMinimal/>
        <InResidence/>
        <InteriorDesignVideo/>
      </main>
    </div>
  );
}

export default page;
