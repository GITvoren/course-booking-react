import { useState } from 'react';
import Swal from 'sweetalert2';
import '../assets/css/contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    Swal.fire({
      title: 'Form demo only',
      text: 'The contact form is ready for a backend or email-service connection, but messages are not sent yet.',
      icon: 'info',
      confirmButtonColor: '#00B9F1',
    });
  };

  return (
    <main className="codelab-contact-page">
      <div className="codelab-contact-layout">
        <section className="codelab-contact-copy">
          <span className="codelab-page-eyebrow">
            <span className="codelab-eyebrow-dot" />
            GET IN TOUCH
          </span>

          <h1>
            Let’s talk<span>.</span>
          </h1>

          <p className="codelab-contact-intro">
            Have a question, suggestion, or feedback about CodeLab? Use the form
            to share your thoughts.
          </p>

          <div className="codelab-contact-small-note">
            <span className="codelab-contact-symbol" aria-hidden="true">&lt;/&gt;</span>
            <p>Built for learners. Always open to ideas.</p>
          </div>
        </section>

        <section className="codelab-contact-form-card">
          <h2>Send a message</h2>
          <p className="codelab-contact-form-subtitle">Fill out the fields below.</p>

          <form onSubmit={handleSubmit}>
            <div className="codelab-form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="codelab-form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="codelab-form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="How can we help?"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="codelab-contact-submit" type="submit">
              Send message <span aria-hidden="true">→</span>
            </button>
            <p className="codelab-contact-form-note">
              Demo form only - messages are not sent or stored yet.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
