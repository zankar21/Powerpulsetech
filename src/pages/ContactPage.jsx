import { useState } from "react";

export default function ContactPage() {
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
    setTimeout(() => setShow(false), 3000); // Hide after 3s
    // Here, you’d send form data to your API/email.
  }

  return (
    <section className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Contact Us</h1>
      {show && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 animate-bounce">
          Your message has been sent!
        </div>
      )}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          placeholder="Your Message"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded transition"
        >
          Send Message
        </button>
      </form>
      <div className="text-sm text-gray-500 mt-4 text-center">
        Or email us at <a href="mailto:info@powerpulsetech.in" className="text-blue-700 underline">info@powerpulsetech.in</a>
      </div>
    </section>
  );
}
