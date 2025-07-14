'use client';

import { useRouter } from 'next/navigation';
import RatingStars from '../../components/RatingStars';
import Footer from '../../components/Footer';
import { Stethoscope, Clock, Star, Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function MedicalServices() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    const services = [
        {
            id: 1,
            title: 'Doctor Home Visits',
            description: 'Professional medical consultations in the comfort of your home',
            icon: <Stethoscope className="w-6 h-6" />,
            priceLabel: '₹1500/visit',
            priceValue: 1500,
            rating: 4.8,
            features: ['General Health Checkup', 'Specialist Consultations', 'Prescription Services', 'Follow-up Care']
        },
        {
            id: 2,
            title: 'Physiotherapy',
            description: 'Expert physiotherapy services for rehabilitation and pain management',
            icon: <Stethoscope className="w-6 h-6" />,
            priceLabel: '₹1200/session',
            priceValue: 1200,
            rating: 4.9,
            features: ['Post-operative Rehabilitation', 'Sports Injury Recovery', 'Chronic Pain Management', 'Mobility Enhancement']
        },
        {
            id: 3,
            title: 'Medical Massage',
            description: 'Therapeutic massage services for pain relief and wellness',
            icon: <Stethoscope className="w-6 h-6" />,
            priceLabel: '₹2000/session',
            priceValue: 2000,
            rating: 4.7,
            features: ['Deep Tissue Massage', 'Sports Massage', 'Rehabilitation Massage', 'Wellness Therapy']
        },
        {
            id: 4,
            title: 'Health Monitoring',
            description: 'Regular health monitoring and vital signs tracking',
            icon: <Stethoscope className="w-6 h-6" />,
            priceLabel: '₹800/session',
            priceValue: 800,
            rating: 4.6,
            features: ['Vital Signs Monitoring', 'Health Reports', 'Regular Check-ups', 'Emergency Alerts']
        }
    ];

    // Filter based on search query
    const filteredServices = services
        .filter((service) =>
            service.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === 'rating') return b.rating - a.rating;
            if (sortOption === 'price') return a.priceValue - b.priceValue;
            if (sortOption === 'name') return a.title.localeCompare(b.title);
            return 0;
        });

    const handleServiceClick = (id) => {
        router.push(`/medical-services/${id}`);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">Professional Medical Services</h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Access quality healthcare services from the comfort of your home. Our verified medical professionals are ready to provide expert care.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search medical services..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded"
                        />
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="w-48 px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="">Sort By</option>
                            <option value="rating">Rating (High to Low)</option>
                            <option value="price">Price (Low to High)</option>
                            <option value="name">Name (A-Z)</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                    {filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <RatingStars rating={service.rating} />
                                            <span className="text-sm text-gray-600">{service.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full flex items-center">
                                    <Shield className="w-3 h-3 mr-1" />
                                    Verified
                                </span>
                            </div>

                            <p className="text-gray-600 mb-4">{service.description}</p>

                            <ul className="mb-6 space-y-2 text-sm text-gray-700">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">{service.priceLabel}</span>
                                <button
                                    onClick={() => handleServiceClick(service.id)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-16">
                <div className="text-center max-w-3xl mx-auto mb-12 px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Medical Services</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Experience healthcare excellence with our comprehensive medical services
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                    {[
                        {
                            icon: <Shield className="w-8 h-8" />,
                            title: 'Licensed Professionals',
                            description: 'All our medical professionals are fully licensed and certified'
                        },
                        {
                            icon: <Clock className="w-8 h-8" />,
                            title: '24/7 Availability',
                            description: 'Round-the-clock medical support for emergencies'
                        },
                        {
                            icon: <Star className="w-8 h-8" />,
                            title: 'Quality Care',
                            description: 'Consistently high-quality medical services'
                        },
                        {
                            icon: <CheckCircle className="w-8 h-8" />,
                            title: 'Verified Reviews',
                            description: 'Real feedback from satisfied patients'
                        }
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Back Button */}
            <div className="text-center py-10">
                <button
                    onClick={() => router.push('/?scroll=services')}
                    className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                    ← Back to Services
                </button>
            </div>

            <Footer />
        </div>
    );
}
