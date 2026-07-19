import "./Competitions.css";

function PastWinners(){

const winners=[

{
name:"Sophia Carter",
story:"Whispers of the Night",
medal:"🥇"
},

{
name:"Emma Watson",
story:"Echoes of Tomorrow",
medal:"🥈"
},

{
name:"Daniel Grey",
story:"Kingdom of Ash",
medal:"🥉"
},

];

return(

<section className="competition-section">

<h2>🏆 Past Winners</h2>

<div className="winner-grid">

{winners.map((winner,index)=>(

<div
className="winner-card"
key={index}
>

<div className="winner-medal">

{winner.medal}

</div>

<h3>{winner.name}</h3>

<p>{winner.story}</p>

</div>

))}

</div>

</section>

);

}

export default PastWinners;