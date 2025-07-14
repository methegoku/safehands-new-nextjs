'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from '../../../components/Footer';
import RatingStars from '../../../components/RatingStars';
import { CheckCircle } from 'lucide-react';

const childCareServices = [
    {
        id: 1,
        title: 'Professional Babysitting',
        description: 'Experienced and caring babysitters for your little ones.',
        price: '₹500/hour',
        rating: 4.9,
        features: [
            'Age-appropriate Activities',
            'Meal Preparation',
            'Basic First Aid',
            'Regular Updates'
        ]
    },
    {
        id: 2,
        title: 'Child Healthcare',
        description: 'Specialized healthcare services for children.',
        price: '₹1000/visit',
        rating: 4.8,
        features: [
            'Regular Check-ups',
            'Vaccination Support',
            'Growth Monitoring',
            'Nutrition Guidance'
        ]
    },
    {
        id: 3,
        title: 'Baby Massage',
        description: 'Therapeutic massage for babies and toddlers.',
        price: '₹800/session',
        rating: 4.7,
        features: [
            'Infant Massage',
            'Developmental Support',
            'Sleep Improvement',
            'Bonding Activities'
        ]
    },
    {
        id: 4,
        title: 'Specialized Care',
        description: 'Expert care for children with special needs.',
        price: '₹1200/hour',
        rating: 4.9,
        features: [
            'Special Needs Support',
            'Therapeutic Activities',
            'Behavioral Support',
            'Family Guidance'
        ]
    }
];

export default function ChildCareDetail() {
    const router = useRouter();
    const params = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const found = childCareServices.find((s) => s.id === Number(params.id));
        setService(found);
    }, [params.id]);

    if (!service) return <div className="p-10 text-center text-gray-500">Loading service details...</div>;

    return (
        <div className="min-h-screen bg-white">
            <section className="py-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 mb-6">
                    <RatingStars rating={service.rating} />
                    <span className="text-sm text-gray-600">{service.rating}</span>
                </div>
                <p className="text-xl font-semibold mb-6">{service.price}</p>

                <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="flex gap-4">
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        onClick={() => router.push('/booking')}
                    >
                        Book Now
                    </button>
                    <button
                        className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition"
                        onClick={() => router.back()}
                    >
                        ← Go Back
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
