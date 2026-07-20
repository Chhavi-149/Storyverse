import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Common/BackButton";

import AboutHero from "../../components/About/AboutHero";
import OurStory from "../../components/About/OurStory";
import Mission from "../../components/About/Mission";
import Community from "../../components/About/Community";
import Team from "../../components/About/Team";
import AboutCTA from "../../components/About/AboutCTA";

import "../../components/About/About.css";

function AboutPage() {

  return (

    <>

      <Navbar />

      <main className="about-page">

        <div className="page-top">

          <BackButton />

        </div>

        <AboutHero />

        <OurStory />

        <Mission />

        <Community />

        <Team />

        <AboutCTA />

      </main>

      <Footer />

    </>

  );

}

export default AboutPage;