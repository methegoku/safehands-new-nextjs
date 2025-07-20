"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import toast from "react-hot-toast";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        displayName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    display_name: formData.displayName,
                    phone: formData.phone,
                },
            },
        });

        console.log("Sent metadata:", {
            display_name: formData.displayName,
            phone: formData.phone,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Registered successfully! Please check your email.");
            router.push("/login");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <input
                    type="text"
                    name="displayName"
                    placeholder="Full Name"
                    value={formData.displayName}
                    onChange={handleChange}
                    required
                    className="w-full mb-4 px-4 py-2 border rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mb-4 px-4 py-2 border rounded"
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full mb-4 px-4 py-2 border rounded"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full mb-4 px-4 py-2 border rounded"
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full mb-6 px-4 py-2 border rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Register
                </button>

                <p className="mt-4 text-sm text-center">
                    Already a SafeHands user?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}
