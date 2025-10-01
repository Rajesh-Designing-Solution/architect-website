// import Hero from "./components/Hero"
import Hero from "./components/Hero"
import LatestProject from "./components/LatestProject"
import BigImage from "../components/BigImage"
import HospitalityProjects from "../components/HospitalityProjects"
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
