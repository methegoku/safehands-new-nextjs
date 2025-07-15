'use client';

import { FaEnvelope, FaPhoneAlt, FaComments } from 'react-icons/fa';

export default function Support() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-blue-700 mb-6 text-center">Need Help?</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Our friendly support team is always ready to help. Contact us anytime via the options below:
      </p>

      <div className="grid sm:grid-cols-3 gap-8 text-center">
        <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaEnvelope className="text-3xl text-blue-600 mb-3 mx-auto" />
          <h2 className="text-lg font-semibold mb-1 text-blue-700">Email Us</h2>
          <p className="text-gray-600">support@safehands.com</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaPhoneAlt className="text-3xl text-blue-600 mb-3 mx-auto" />
          <h2 className="text-lg font-semibold mb-1 text-blue-700">Call Us</h2>
          <p className="text-gray-600">1800-123-456 (24/7)</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaComments className="text-3xl text-blue-600 mb-3 mx-auto" />
          <h2 className="text-lg font-semibold mb-1 text-blue-700">Live Chat</h2>
          <p className="text-gray-600">Available 9 AM – 9 PM IST</p>
        </div>
      </div>
    </div>
  );
}
