import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fantasy Author",
    review:
      "Inkwell transformed my writing journey. I've connected with amazing readers and even found co-authors for my novels.",
    image: "https://i.pravatar.cc/150?img=48",
  },
  {
    name: "Michael Adams",
    role: "Sci-Fi Writer",
    review:
      "The competitions and community feedback helped me improve faster than I ever imagined. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Emily Carter",
    role: "Reader",
    review:
      "I've discovered countless incredible stories here. Every visit introduces me to talented writers from around the world.",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonial-heading">

        <p>TESTIMONIALS</p>

        <h2>Loved By Writers & Readers</h2>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item) => (

          <div className="testimonial-card" key={item.name}>

            <img src={item.image} alt={item.name} />

            <p className="review">
              "{item.review}"
            </p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;