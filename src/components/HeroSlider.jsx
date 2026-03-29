import { useEffect, useState } from "react";
import "./HeroSlider.css";

import slide1 from "../assets/1.webp";
import slide2 from "../assets/2.webp";
import slide3 from "../assets/3.jpg";
import slide4 from "../assets/4.webp";
import slide5 from "../assets/5.webp";
import slide6 from "../assets/6.webp";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      {slides.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`hero-slide ${i === index ? "active" : ""}`}
          loading="eager"
          draggable="false"
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-sub">Lakshmi Textiles</p>
        <h1>Premium Fabrics Crafted For Timeless Style</h1>
        <p className="hero-brand">Natural textures. Elegant weaves. Modern tradition.</p>
      </div>
    </section>
  );
}

export default HeroSlider;