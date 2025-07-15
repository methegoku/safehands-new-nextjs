'use client';

import { FaHeartbeat, FaLightbulb, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-blue-700 mb-6 text-center">About SafeHands</h1>
      <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        At <strong>SafeHands</strong>, we're on a mission to humanize healthcare. 
        We believe every individual deserves fast, reliable, and compassionate medical support—powered by innovation.
      </p>

      <div className="mt-12 grid sm:grid-cols-3 gap-8">
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md text-center">
          <FaGlobe className="text-3xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Our Vision</h2>
          <p className="text-gray-600">Accessible healthcare for all, regardless of where you live or who you are.</p>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md text-center">
          <FaHeartbeat className="text-3xl text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Care First</h2>
          <p className="text-gray-600">Every decision we make centers around patient safety, dignity, and trust.</p>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md text-center">
          <FaLightbulb className="text-3xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Innovation</h2>
          <p className="text-gray-600">We embrace tech with empathy to solve real-world healthcare challenges.</p>
        </div>
      </div>
    </div>
  );
}
