// import Hero from "./components/Hero"
import Hero from "@/components/Hero";
import BigImage from "../components/BigImage"
import HospitalityProjects from "../components/HospitalityProjects"
import LatestProject from "@/components/LatestProject";
function page() {
  return (
    <div>
      <main>
        <Hero></Hero>
        <LatestProject></LatestProject>
        <BigImage></BigImage>
        <HospitalityProjects/>
      </main>
    </div>
  );
}

export default page;
