'use client';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions or feedback? Fill out the form below and we’ll get back to you within 1–2 working days.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
