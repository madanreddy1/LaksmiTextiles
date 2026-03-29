import { useEffect, useState } from "react";
import "./ShowcaseSection.css";

import outfit1 from "../assets/111.jpeg";
import outfit2 from "../assets/33.jpg";
import outfit3 from "../assets/222.webp";
import outfit4 from "../assets/Ethnic-Wear-for-Men-VF-7.webp";
import outfit5 from "../assets/ALDINO1359.webp";
import outfit6 from "../assets/Can-Men-Wear-White-to-a-Wedding.webp";
import outfit7 from "../assets/Moss-suit.avif";

const outfits = [
  outfit1,
  outfit2,
  outfit3,
  outfit4,
  outfit5,
  outfit6,
  outfit7,
];

const availableItems = [
  "Linen Shirts",
  "Formal Shirts",
  "Striped Shirts",
  "Blazers",
  "Two-Piece Suits",
  "Wedding Wear",
  "Indo Western",
  "Casual Sets",
  "Resort Wear",
  "Party Wear",
  "Custom Styling",
];

function ShowcaseSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % outfits.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + outfits.length) % outfits.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % outfits.length);
  };

  return (
    <section id="products" className="showcase">
      <div className="showcase-container">
        <div className="outfit-card">
          <div className="slider-image-wrap">
            <img
              src={outfits[index]}
              alt={`Outfit ${index + 1}`}
              className="slider-image"
            />

            <button className="nav-btn prev-btn" onClick={prevSlide}>
              ‹
            </button>

            <button className="nav-btn next-btn" onClick={nextSlide}>
              ›
            </button>

            <div className="dots">
              {outfits.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

        <div className="story-content">
  <p className="tag">Our Story</p>
  <h3>Where heritage fabrics meet contemporary style.</h3>
  <p className="story-text">
    Every piece at <strong>Lakshmi Textiles</strong> reflects a balance of
    tradition and modern sophistication, crafted for those who value quality,
    character, and understated luxury.
  </p>
</div>
        </div>

        <div className="items-card">
          <p className="tag">Available Items</p>
          <h3>What We Offer</h3>

          <div className="items-list">
            {availableItems.map((item, i) => (
              <div key={i} className="item-pill">
                <span className="item-dot"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;