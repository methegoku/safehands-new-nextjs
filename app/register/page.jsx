'use client';

import { useForm } from "react-hook-form";
import { supabase } from "../../utils/supabaseClient"; 
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";




export default function Register() {
    const router = useRouter();
    const [uploading, setUploading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setUploading(true);

       
        let profilePhotoUrl = "";
        if (data.profilePhoto && data.profilePhoto[0]) {
            const file = data.profilePhoto[0];
            const fileExt = file.name.split(".").pop();
            const filePath = `${Date.now()}.${fileExt}`;

            const { error: uploadError } = await supabase.storage
                .from("profile-photos")
                .upload(filePath, file);

            if (uploadError) {
                toast.error("Image upload failed");
                setUploading(false);
                return;
            }

            const { data: urlData } = supabase.storage
                .from("profile-photos")
                .getPublicUrl(filePath);

            profilePhotoUrl = urlData.publicUrl;
        }

        
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        });

        if (signUpError) {
            toast.error(signUpError.message);
            setUploading(false);
            return;
        }

        const userId = signUpData.user.id;

       
        const { error: dbError } = await supabase.from("users").insert({
            id: userId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            profile_photo: profilePhotoUrl,
        });

        if (dbError) {
            toast.error("User created but failed to save profile data");
        } else {
            toast.success("Registration successful! Check your email to verify.");
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        }

        setUploading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="w-full max-w-md bg-white p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            {...register("phone")}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Re-enter Password</label>
                        <input
                            type="password"
                            {...register("confirmPassword", { required: "Please re-enter your password" })}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    {/* Profile Photo */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register("profilePhoto")}
                            className="w-full text-sm mt-1"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={uploading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-md transition"
                    >
                        {uploading ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Already a SafeHands user?{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="text-green-600 hover:underline cursor-pointer"
                    >
            Login
          </span>
                </p>
            </div>
        </div>
    );
}
