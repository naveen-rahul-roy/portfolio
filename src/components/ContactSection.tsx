import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    if (!form.current) {
      setError(true);
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "your_service_id",     // Replace with EmailJS Service ID
        "your_template_id",    // Replace with EmailJS Template ID
        form.current,
        "your_public_key"      // Replace with EmailJS Public Key
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current?.reset();
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none h-32"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-white font-bold w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-400">Message sent successfully!</p>}
          {error && <p className="text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
