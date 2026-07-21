import { useState } from "react";
import { Quote } from "lucide-react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote: "Inkwell gave me my first real audience. I posted my first chapter nervously at 11pm and woke up to 400 comments. This platform changed my life.",
    name: "Yara Mensah",
    role: "Author of 'The Glass Cartographer'",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "The collaborative continuation feature let total strangers help me finish a story I'd abandoned for two years. It's the most alive a community has ever felt.",
    name: "Callum Vance",
    role: "Author of 'Salt & Starlight'",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "I've entered three competitions on Inkwell and each one pushed my writing further than years of solo drafting ever did.",
    name: "Reza Tahir",
    role: "Author of 'The Hollow Parliament'",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <p className="testimonials-tag">TESTIMONIALS</p>
        <h2 className="testimonials-title">What Our Writers Say</h2>

        <Quote className="testimonials-quote-icon" size={40} />

        <p className="testimonials-quote-text">"{current.quote}"</p>

        <div className="testimonials-author">
          <img src={current.avatar} alt={current.name} />
          <h4>{current.name}</h4>
          <p>{current.role}</p>
        </div>

        <div className="testimonials-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonials-dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}