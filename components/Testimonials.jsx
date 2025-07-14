'use client';

import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Aryan Sakaria",
        city: "Mumbai",
        service: "Home Nursing",
        quote: "Excellent service! The nurse was very professional and caring.",
        rating: 5,
    },
    {
        name: "Meera Patel",
        city: "Delhi",
        service: "Child Care",
        quote: "Great experience with child care services. Highly recommended!",
        rating: 4,
    },
    {
        name: "Vinod Nair",
        city: "Bangalore",
        service: "Elderly Care",
        quote: "We hired a caregiver for my father and the support was amazing. Truly a life-saver!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#f9fbfc] py-20 px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg mb-10">
                Trusted by thousands of families across India
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white border border-blue-100 rounded-xl p-6 text-left w-full md:w-1/2 shadow-sm hover:shadow-md transition"
                    >
                        {/* ⭐ Star Rating */}
                        <div className="flex mb-2 text-yellow-400">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400" />
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="italic text-gray-800 mb-4">"{testimonial.quote}"</p>

                        {/* Name */}
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>

                        {/* City + Service */}
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <span>{testimonial.city}</span>
                            <span className="font-medium">{testimonial.service}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
