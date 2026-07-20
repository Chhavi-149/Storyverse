import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./BackButton.css";

function BackButton() {

  const navigate = useNavigate();

  return (

    <button
      className="back-icon"
      onClick={() => navigate(-1)}
      aria-label="Go Back"
    >

      <ArrowLeft size={26} />

    </button>

  );

}

export default BackButton;