'use client';

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Footer from "../../components/Footer";

export default function BookingConfirmation() {
    const [, setLocation] = useLocation();
    const [formData, setFormData] = useState(null);
    const [selectedService, setSelectedService] = useState("");

    useEffect(() => {
        const storedForm = localStorage.getItem("bookingFormData");
        const storedService = localStorage.getItem("selectedService");

        if (storedForm) {
            setFormData(JSON.parse(storedForm));
        }

        if (storedService) {
            setSelectedService(storedService);
        }
    }, []);

    if (!formData) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
                No booking information found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <main className="flex-grow max-w-2xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Booking Confirmed 🎉</h1>

                <div className="bg-blue-50 rounded-xl shadow-md p-8 space-y-4">
                    <p className="text-lg">
                        <span className="font-semibold text-gray-800">Service:</span>{" "}
                        {selectedService || "N/A"}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold text-gray-800">Name:</span>{" "}
                        {formData.name}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold text-gray-800">Date:</span>{" "}
                        {formData.date}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold text-gray-800">Time:</span>{" "}
                        {formData.time}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold text-gray-800">Duration:</span>{" "}
                        {formData.duration} hour(s)
                    </p>

                    {formData.notes && (
                        <p className="text-lg">
                            <span className="font-semibold text-gray-800">Notes:</span>{" "}
                            {formData.notes}
                        </p>
                    )}
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={() => setLocation("/")}
                        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                    >
                        Back to Home
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
