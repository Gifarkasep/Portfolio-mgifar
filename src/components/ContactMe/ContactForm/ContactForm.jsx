import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jmxj5m8", // Ganti dengan Service ID Anda
        "template_mntebas", // Ganti dengan Template ID Anda
        {
          name: formData.firstname,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "zEZ-6SBuZyWaARVl6" // Ganti dengan Public Key Anda
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ firstname: "", phone: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">SEND</button>
        {isSent && <p>Your message has been sent successfully!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
