import "../styles/About.css";

const reasons = [
  { icon: "💲", title: "Fair Prices", text: "Clear daily rates with no hidden fees." },
  { icon: "🚗", title: "Wide Selection", text: "From small city cars to family SUVs, vans and luxury models." },
  { icon: "⚡", title: "Fast Service", text: "Find a car online, contact us, and you're on the road the same day." },
  { icon: "🛠️", title: "Well Maintained", text: "Every car is cleaned and checked before each rental." },
];

function About() {
  return (
    <main className="page-full">
      <section className="page-header">
        <h1>
          About <span>DriveEasy</span>
        </h1>
        <p>Making car rental simple, fast and affordable.</p>
      </section>

      {/* Our story */}
      <section className="section">
        <div className="container about-story">
          <div>
            <h2 className="section-title about-left">Our Story</h2>
            <p>
              DriveEasy started with a simple idea: renting a car should be as easy as
              ordering a meal online. Too many rental services hide their prices, make
              you call to check availability and fill in long paper forms.
            </p>
            <p>
              We built DriveEasy so you can browse real cars and see clear daily prices
              before you contact us. Whether you need a small car for the city, an SUV for
              a family trip or something special for an occasion, we have a ride for you.
            </p>
          </div>

          <div className="about-mission">
            <h3>Our Mission</h3>
            <p>
              To give every driver a reliable car at a fair price, with service
              that is quick, transparent and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">What makes renting with DriveEasy different.</p>

          <div className="about-reasons">
            {reasons.map((reason) => (
              <div key={reason.title} className="reason">
                <span className="reason-icon">{reason.icon}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
