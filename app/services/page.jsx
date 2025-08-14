"use client";

import Link from "next/link";
import { Baby, Stethoscope, Home, HeartHandshake } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            id: "child-care",
            title: "Child Care",
            description:
                "Trusted care solutions for your children including babysitting, child healthcare, and more.",
            icon: <Baby className="w-10 h-10 text-blue-600" />,
            link: "/child-care",
        },
        {
            id: "medical-services",
            title: "Medical Services",
            description:
                "Access a wide range of home medical services by trained professionals.",
            icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
            link: "/medical-services",
        },
        {
            id: "home-care",
            title: "Home Care",
            description:
                "Compassionate home care for seniors, individuals with special needs, and more.",
            icon: <Home className="w-10 h-10 text-blue-600" />,
            link: "/home-care",
        },
        {
            id: "elderly-care",
            title: "Elderly Care",
            description:
                "Supportive and respectful care services tailored for the elderly, ensuring dignity and comfort.",
            icon: <HeartHandshake className="w-10 h-10 text-blue-600" />,
            link: "/elderly-care",
        },
    ];

    return (
        <div className="min-h-screen bg-white" id="services-section">
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h1>
                    <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                        Explore the services we provide for your family's health and well-being.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-xl transition duration-300 ease-in-out"
                            >
                                <div className="flex justify-center mb-5">{service.icon}</div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h2>
                                <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                                <Link href={service.link}>
                  <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
                    Explore Services
                  </span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Go Home Button */}
                    <Link href="/">
            <span className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition cursor-pointer">
              Go to Home
            </span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
