import "./About.css";
import { Link } from "react-router-dom";

function AboutCTA(){

return(

<section className="about-cta">

<h2>

Ready To Tell Your Story?

</h2>

<p>

Join thousands of writers and readers building the future of storytelling.

</p>

<Link
to="/signup"
className="about-btn"
>

Start Your Journey

</Link>

</section>

);

}

export default AboutCTA;