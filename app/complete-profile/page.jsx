// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/utils/supabaseClient";
// import toast from "react-hot-toast";
//
// export default function CompleteRegistrationPage() {
//     const router = useRouter();
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         phone: "",
//     });
//
//     const [userId, setUserId] = useState(null);
//
//     useEffect(() => {
//         const getCurrentUser = async () => {
//             const {
//                 data: { user },
//                 error,
//             } = await supabase.auth.getUser();
//
//             if (user) {
//                 setUserId(user.id);
//             } else {
//                 toast.error("User not found");
//                 router.push("/login");
//             }
//         };
//
//         getCurrentUser();
//     }, []);
//
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         if (!formData.firstName || !formData.lastName || !formData.phone) {
//             toast.error("Please fill all fields");
//             return;
//         }
//
//         const { error } = await supabase.from("user_profiles").insert([
//             {
//                 id: userId,
//                 name: `${formData.firstName} ${formData.lastName}`,
//                 phone: formData.phone,
//                 email: (await supabase.auth.getUser()).data.user.email,
//             },
//         ]);
//
//         if (error) {
//             toast.error("Failed to save details");
//             console.error(error);
//         } else {
//             toast.success("Registration complete!");
//             router.push("/dashboard");
//         }
//     };
//
//     return (
//         <div className="max-w-md mx-auto mt-16 p-6 border rounded-xl shadow">
//             <h2 className="text-2xl font-bold mb-4">Complete Registration</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded"
//                 />
//                 <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded"
//                 />
//                 <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Mobile Number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded"
//                 />
//                 <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// }
