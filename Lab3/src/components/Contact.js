import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">📧 Contact Us</h1>
        <p className="contact-subtitle">
          Have questions about orchids? We'd love to hear from you!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="info-box">
            <div className="info-icon-wrapper">
              <span className="info-icon">📍</span>
            </div>
            <div className="info-text">
              <h3>Location</h3>
              <p>123 Orchid Garden Street</p>
              <p>Ho Chi Minh City, Vietnam</p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon-wrapper">
              <span className="info-icon">📞</span>
            </div>
            <div className="info-text">
              <h3>Phone</h3>
              <p>+84 123 456 789</p>
              <p>Mon-Fri: 8AM - 6PM</p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon-wrapper">
              <span className="info-icon">✉️</span>
            </div>
            <div className="info-text">
              <h3>Email</h3>
              <p>info@orchidscollection.com</p>
              <p>support@orchidscollection.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-icon-wrapper">
              <span className="info-icon">🌐</span>
            </div>
            <div className="info-text">
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="#facebook" className="social-link">Facebook</a>
                <a href="#instagram" className="social-link">Instagram</a>
                <a href="#twitter" className="social-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-card">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h2>Message Sent Successfully!</h2>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <span>Send Message</span>
                  <span className="button-icon">🚀</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="contact-map-section">
        <h2 className="map-title">🗺️ Find Us</h2>
        <div className="map-placeholder">
          <iframe
            title="Orchid Garden Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4245274181365!2d106.69522731533422!3d10.776619192321546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0xd9d7d394d5f052fc!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
