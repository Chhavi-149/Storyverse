import { Link } from "react-router-dom";

function StoryHero(){

return(

<section className="story-hero">

<img
src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80"
alt="Story Cover"
/>

<div className="story-details">

<span className="story-genre">
Fantasy
</span>

<h1>
Whispers of the Night
</h1>

<p className="story-author">

by

<Link to="/profile">

Sophia Carter

</Link>

</p>

<p className="story-description">

A forgotten kingdom awakens after centuries,
forcing an unlikely heroine to uncover secrets
that could change the fate of the world forever.

</p>

<div className="story-buttons">

<Link
to="/reader"
className="read-btn"
>

Read Now

</Link>

<Link
to="/explore"
className="back-btn"
>

Back to Explore

</Link>

</div>

</div>

</section>

);

}

export default StoryHero;