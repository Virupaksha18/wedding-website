import React, { useState } from "react";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later connect to backend API
    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      guests: "",
      message: "",
    });
  };

  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#fffaf5",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          color: "#b8860b",
          marginBottom: "15px",
        }}
      >
        RSVP 💌
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Kindly confirm your presence and bless us on our special day.
      </p>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        {submitted && (
          <div
            style={{
              background: "#e8f5e9",
              color: "#2e7d32",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            🎉 Thank you! Your RSVP has been received.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Your Wishes / Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#d4af37",
              color: "#fff",
              border: "none",
              padding: "14px 35px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Confirm Attendance ✨
          </button>
        </form>
      </div>
    </section>
  );
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "1rem",
  boxSizing: "border-box",
};

export default RSVP;