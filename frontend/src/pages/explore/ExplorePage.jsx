import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Common/BackButton";

import ExploreHero from "../../components/Explore/ExploreHero";
import GenreFilter from "../../components/Explore/GenreFilter";
import StoryGrid from "../../components/Explore/StoryGrid";

import "../../components/Explore/Explore.css";

function ExplorePage() {
  return (
    <>
      <Navbar />

      <main className="explore-page">

        <div className="page-top">
          <BackButton />
        </div>

        <ExploreHero />

        <GenreFilter />

        <StoryGrid />

      </main>

      <Footer />
    </>
  );
}

export default ExplorePage;