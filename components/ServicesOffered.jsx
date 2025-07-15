"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import servicesImage from "../public/service-image.png"; // Use your own image path

export default function ServicesOffered() {
    const router = useRouter();

    const handleExplore = () => {
        router.push("/services");
    };

    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Text Block */}
                <div>
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Comprehensive Family Services You Can Trust
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        At SafeHands, we are committed to delivering compassionate, professional, and personalized care for every
                        stage of life. Whether it's trusted childcare, home healthcare, or elder support, our verified experts ensure
                        your loved ones are always in good hands.
                    </p>
                    <button
                        onClick={handleExplore}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Explore Our Services
                    </button>
                </div>

                {/* Right Image Block */}
                <div className="flex justify-center">
                    <Image
                        src={servicesImage}
                        alt="Service Illustration"
                        className="w-full max-w-md rounded-lg shadow-md"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
