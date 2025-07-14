'use client';

import { useState } from 'react';
import Link from 'next/link';
import services from '../data/servicesData';
import {
    Baby,
    Stethoscope,
    Home,
    HeartPulse
} from 'lucide-react';

const iconMap = {
    baby: <Baby className="w-6 h-6 mr-2 text-blue-600" />,
    stethoscope: <Stethoscope className="w-6 h-6 mr-2 text-blue-600" />,
    home: <Home className="w-6 h-6 mr-2 text-blue-600" />,
    heartpulse: <HeartPulse className="w-6 h-6 mr-2 text-blue-600" />
};

export default function ServicesOffered({ previewMode = false }) {
    const [selected, setSelected] = useState(services[0]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Explore Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 border rounded-lg shadow-lg overflow-hidden">
                    {/* List */}
                    <div className="bg-gray-50 border-r">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setSelected(service)}
                                className={`w-full text-left px-6 py-5 flex items-center gap-2 border-b hover:bg-blue-50 transition ${
                                    selected.id === service.id
                                        ? 'bg-blue-100 font-semibold text-blue-700'
                                        : 'text-gray-800'
                                }`}
                            >
                                {iconMap[service.icon]}
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Detail */}
                    <div className="md:col-span-2 p-8">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">
                            {selected.title}
                        </h3>
                        <p className="text-gray-700 text-lg mb-6">{selected.description}</p>

                        {selected.image && (
                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="max-h-60 w-full object-cover rounded-lg shadow mb-6"
                            />
                        )}

                        <Link
                            href={`/${selected.id}`}
                            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Explore {selected.title}
                        </Link>
                    </div>
                </div>

                {/* Optional full services button in preview mode */}
                {previewMode && (
                    <div className="text-center mt-10">
                        <Link
                            href="/services"
                            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                        >
                            View All Services →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
