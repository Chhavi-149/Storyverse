import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Common/BackButton";

import StoryHero from "../../components/Story/StoryHero";
import StoryInfo from "../../components/Story/StoryInfo";
import RelatedStories from "../../components/Story/RelatedStories";

import "../../components/Story/Story.css";

function StoryPage() {
  return (
    <>
      <Navbar />

      <main className="story-page">

        <div className="page-top">
          <BackButton />
        </div>

        <StoryHero />

        <StoryInfo />

        <RelatedStories />

      </main>

      <Footer />
    </>
  );
}

export default StoryPage;