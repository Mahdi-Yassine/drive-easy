import { useState } from "react";
import "../styles/Contact.css";

const emptyForm = { name: "", email: "", subject: "", message: "" };

const branches = [
  { city: "Beirut (Main)", address: "Hamra Street, Beirut", phone: "+961 1 234 567", hours: "Mon–Sat, 8:00–20:00" },
  { city: "Jounieh", address: "Main Highway, Jounieh", phone: "+961 9 876 543", hours: "Mon–Sat, 9:00–18:00" },
];

const faqs = [
  { q: "What do I need to rent a car?", a: "A valid driving licence, an ID or passport, and you must be at least 21 years old." },
  { q: "How do I reserve a car?", a: "Find the car you like on the Cars page, then call us or visit one of our branches." },
  { q: "How is the price calculated?", a: "The total is the number of rental days multiplied by the car's daily price." },
  { q: "Is insurance included?", a: "Basic insurance is included with every rental. Full coverage can be added at the branch." },
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Please enter a subject.";
  if (form.message.trim().length < 10) errors.message = "Your message must be at least 10 characters.";
  return errors;
}

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Save the message in the browser's localStorage under "messages"
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({ ...form, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem("messages", JSON.stringify(messages));

    setForm(emptyForm);
    setSent(true);
  };

  return (
    <main className="page-full">
      <section className="page-header">
        <h1>
          Contact <span>Us</span>
        </h1>
        <p>Questions about a rental? We're happy to help.</p>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* Contact form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h2>Send us a message</h2>

            {sent && (
              <p className="form-success">Thank you! Your message has been sent.</p>
            )}

            <div className="form-row">
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </label>

              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </label>
            </div>

            <label>
              Subject
              <input name="subject" value={form.subject} onChange={handleChange} />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </label>

            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </label>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>

          {/* Branch info */}
          <div className="contact-branches">
            <h2>Our Branches</h2>
            {branches.map((branch) => (
              <div key={branch.city} className="branch">
                <h3>{branch.city}</h3>
                <p>📍 {branch.address}</p>
                <p>📞 {branch.phone}</p>
                <p>🕒 {branch.hours}</p>
              </div>
            ))}
            <div className="branch">
              <h3>Email</h3>
              <p>✉️ info@driveeasy.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container contact-faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common questions.</p>

          {faqs.map((faq) => (
            <details key={faq.q} className="faq">
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contact;
