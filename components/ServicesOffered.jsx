'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Baby, Stethoscope, Home, HeartPulse } from 'lucide-react';

const services = [
    {
        id: 'child-care',
        title: 'Child Care',
        description:
            'Our child care professionals provide a safe, nurturing environment right at home. Services include babysitting, pediatric support, and early learning activities.',
        icon: <Baby className="w-6 h-6 mr-2 text-blue-600" />,
        image: '/child-care.jpg',
    },
    {
        id: 'medical-services',
        title: 'Medical Services',
        description:
            'From injections to wound dressings, our trained nurses deliver essential medical services at your doorstep — with professionalism and care.',
        icon: <Stethoscope className="w-6 h-6 mr-2 text-blue-600" />,
        image: '/medical-care.jpg',
    },
    {
        id: 'home-care',
        title: 'Home Care',
        description:
            'We provide daily assistance for individuals recovering post-surgery, elderly patients, or people with disabilities. Reliable support tailored to your needs.',
        icon: <Home className="w-6 h-6 mr-2 text-blue-600" />,
        image: '/home-care.jpg',
    },
    {
        id: 'elderly-care',
        title: 'Elderly Care',
        description:
            'Give your loved ones the attention they deserve. Our elderly care includes companionship, help with daily routines, and emotional support.',
        icon: <HeartPulse className="w-6 h-6 mr-2 text-blue-600" />,
        image: '/elderly-care.jpg',
    },
];

export default function ServiceSelector() {
    const [selected, setSelected] = useState(services[0]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Explore Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 border rounded-lg shadow-lg overflow-hidden">
                    {/* Left side: list */}
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
                                {service.icon}
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Right side: detail */}
                    <div className="md:col-span-2 p-8">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">{selected.title}</h3>
                        <p className="text-gray-700 text-lg mb-6">{selected.description}</p>

                        {selected.image && (
                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="max-h-50 object-cover rounded-lg shadow mb-6"
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
            </div>
        </section>
    );
}
