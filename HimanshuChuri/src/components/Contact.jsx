// src/components/Contact.jsx
import React ,{ useState } from "react";
import { collection , addDoc} from "firebase/firestore";
import { db } from "../firebase.js";

const initialFormData = {
  name: "",
  email: "",
  message: ""
}

export default function Contact() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!db) {
      setStatus(
        "Contact form is not configured yet. Please email me directly at himanshu.churi244@gmail.com."
      );
      return;
    }
    
    try {
      const hostmail = "himanshu.churi244@gmail.com"      
      // Add document to Firestore
      await addDoc(collection(db, "mail"), {
        "from": formData.email,
        "to": [hostmail],
        "message": {
          "subject": `New portfolio contact from ${formData.name}`,
          "text": `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
        }
      });
      
      setStatus("Message sent! I'll get back to you soon.");
      setFormData(initialFormData);
      e.target.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message. Please try again.");
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="section-header" style={{ textAlign: "center" }}>
        <p className="section-kicker">Contact</p>
        <h2>Let's talk</h2>
        <p className="section-lead">
          Whether you're building cloud, data, or analytics systems — reach out anytime.
        </p>
      </div>

      <div className="contact-center">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required  />
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} rows={4} required />
          </label>

          <button type="submit" className="btn primary full">
            Send message
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
