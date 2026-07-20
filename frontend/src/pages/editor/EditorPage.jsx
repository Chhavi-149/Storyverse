import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Common/BackButton";

import EditorToolbar from "../../components/Editor/EditorToolbar";
import EditorSidebar from "../../components/Editor/EditorSidebar";
import EditorWorkspace from "../../components/Editor/EditorWorkspace";

import "../../components/Editor/Editor.css";

function EditorPage() {
  return (
    <>
      <Navbar />

      <main className="editor-page">

        <div className="page-top">
          <BackButton />
        </div>

        <EditorToolbar />

        <div className="editor-layout">

          <EditorSidebar />

          <EditorWorkspace />

        </div>

      </main>

      <Footer />

    </>
  );
}

export default EditorPage;