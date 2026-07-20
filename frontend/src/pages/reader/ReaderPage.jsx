import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Common/BackButton";

import ReaderHero from "../../components/Reader/ReaderHero";
import ChapterNavigation from "../../components/Reader/ChapterNavigation";
import ReaderContent from "../../components/Reader/ReaderContent";

import "../../components/Reader/Reader.css";

function ReaderPage() {
  return (
    <>
      <Navbar />

      <main className="reader-page">

        <div className="page-top">
          <BackButton />
        </div>

        <ReaderHero />

        <ChapterNavigation />

        <ReaderContent />

      </main>

      <Footer />
    </>
  );
}

export default ReaderPage;