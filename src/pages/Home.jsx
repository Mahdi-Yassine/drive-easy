import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const steps = [
  { number: 1, title: "Choose", text: "Browse our fleet and pick the car that fits your trip and budget." },
  { number: 2, title: "Contact", text: "Call us or visit a branch to reserve the car for your dates." },
  { number: 3, title: "Drive", text: "Pick up your car from our branch and enjoy the road." },
  
];

const testimonials = [
  { name: "Rami K.", text: "Quick service and the car was spotless. Will rent again!" },
  { name: "Sara M.", text: "Great prices and friendly staff. The SUV was perfect for our family trip." },
  { name: "Omar H.", text: "Simple website, clear prices, no hidden fees. Exactly what I needed." },
];

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Send the search text to the Cars page (e.g. /cars?search=toyota)
  const handleSearch = (e) => {
    e.preventDefault();
    const term = search.trim();
    navigate(term ? `/cars?search=${encodeURIComponent(term)}` : "/cars");
  };

  return (
    <main className="page-full">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <h1>
            Rent your <span>perfect ride</span>
          </h1>
          <p>Affordable cars for every trip. Find your car, contact us and drive.</p>

          <form className="hero-search" onSubmit={handleSearch}>
            <label>
              Find a car
              <input
                type="search"
                placeholder="Brand, e.g. Toyota"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            <button type="submit" className="btn">
              Search Cars
            </button>
          </form>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Renting a car with DriveEasy takes three simple steps.</p>

          <div className="grid">
            {steps.map((step) => (
              <div key={step.number} className="step">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real feedback from drivers who rented with us.</p>

          <div className="grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial">
                <p className="testimonial-text">"{t.text}"</p>
                <p className="testimonial-name">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
