import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.service
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("https://mpsr.vercel.app//api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      alert("Message sent!");

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__subtitle">
          Ready to schedule service or have questions? Fill out the form below.
        </p>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field-group">
            <div className="contact__field">
              <label htmlFor="firstName" className="contact__label">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder="Enter your first name"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="lastName" className="contact__label">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="contact__field">
            <label htmlFor="phone" className="contact__label">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="contact__input"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="contact__field">
            <label htmlFor="service" className="contact__label">
              Service Requested *
            </label>
            <div className="select-wrapper">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="contact__select"
              >
                <option value="">Select a service...</option>
                <option value="Weekly Pool Services">
                  Weekly Pool Services
                </option>
                <option value="Filter Cleaning">Filter Cleaning</option>
                <option value="Acid/Chlorine Bath">Acid/Chlorine Bath</option>
                <option value="Green Pool Makeover">Green Pool Makeover</option>
                <option value="Pool Tile Cleaning">Pool Tile Cleaning</option>
                <option value="Equipment Installation">
                  Equipment Installation
                </option>
                <option value="Custom Pool Consultation">
                  Custom Pool Consultation
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="contact__field">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="contact__textarea"
              placeholder="Tell us more about what you need..."
            ></textarea>
          </div>
          <button type="submit" className="contact__submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
