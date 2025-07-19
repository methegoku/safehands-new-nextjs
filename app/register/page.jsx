"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import toast from "react-hot-toast";

export default function RegisterPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const { email, password, confirmPassword } = formData;

        if (!email || !password || !confirmPassword) {
            toast.error("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Registration successful! 🎉");
            router.push("/complete-profile");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleRegister}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full mb-6 p-3 border border-gray-300 rounded-md"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
                >
                    Register
                </button>

                <p className="mt-4 text-center text-sm">
                    Already a user?{" "}
                    <a href="/login" className="text-green-600 underline">
                        Login here
                    </a>
                </p>
            </form>
        </div>
    );
}
