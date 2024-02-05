import React, { useState } from "react";
import Button from "../components/Button";
import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "../styles/Contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when user starts typing again
    setErrors({ ...errors, [name]: "" });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const nameRegex = /^[a-zA-Z]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /^.{10,}$/;

    let errorMessage = "";
    if (name === "name" && !value.match(nameRegex)) {
      errorMessage = "Invalid name (at least 2 letters)";
    } else if (name === "email" && !value.match(emailRegex)) {
      errorMessage = "Invalid email";
    } else if (name === "message" && !value.match(messageRegex)) {
      errorMessage = "Invalid message (at least 10 characters)";
    }

    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Same validation logic as before

    // Check each field for errors on form submit
    const nameError = !formData.name.match(/^[a-zA-Z]{2,}$/)
      ? "Invalid name (at least 2 letters)"
      : "";
    const emailError = !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ? "Invalid email"
      : "";
    const messageError = !formData.message.match(/^.{10,}$/)
      ? "Invalid message (at least 10 characters)"
      : "";

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    if (!(nameError || emailError || messageError)) {
      // Form is valid, proceed with submission
      alert("Form submitted!");
    }
  };

  return (
    <div className="contactContainer" id="contact">
      <div className="mapLink">
        <iframe
          title="googlemaps"
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=1101 E University Ave, Fresno, CA 93741, United States&t=&z=16&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          // scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
      <div className="contactForm">
        <div className="heading">
          <h2>Keep in Touch</h2>
          <ShiftedDoubleLineBorder />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            className={errors.name ? "invalid" : ""}
          />
          {errors.name && <span className="error">*{errors.name}</span>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            className={errors.email ? "invalid" : ""}
          />
          {errors.email && <span className="error">*{errors.email}</span>}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            className={errors.message ? "invalid" : ""}
          ></textarea>
          {errors.message && <span className="error">*{errors.message}</span>}
          <Button
            type="submit"
            css={"basicButton formSubmitButton accentColor"}
            text={"SEND REQUEST"}
          />
        </form>
      </div>
    </div>
  );
}
