'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1f3c88] text-white pt-14 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
                {/* Logo and Tagline */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <img src="/logo.png" alt="SafeHands Logo" className="w-8 h-8" />
                        <span className="font-bold text-xl tracking-wide">SafeHands</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Trusted Care, Right at Your Doorstep. Bringing healthcare and compassion home.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-gray-300">
                        <a href="#" aria-label="Facebook" className="hover:text-white transition">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-white transition">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-white transition">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-semibold mb-3 text-white">Services</h4>
                    <ul className="space-y-2 text-gray-300">
                        {["home-care", "medical-services", "child-care", "elderly-care"].map((path) => (
                            <li key={path}>
                                <Link
                                    href={`/${path}`}
                                    className="hover:underline hover:text-white transition capitalize"
                                >
                                    {path.replace("-", " ")}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold mb-3 text-white">Company</h4>
                    <ul className="space-y-2 text-gray-300">
                        {["about", "contact", "careers", "support"].map((page) => (
                            <li key={page}>
                                <Link
                                    href={`/${page}`}
                                    className="hover:underline hover:text-white transition capitalize"
                                >
                                    {page}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-3 text-white">Contact</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            Email:{" "}
                            <a href="mailto:support@safehands.com" className="hover:underline">
                                support@safehands.com
                            </a>
                        </li>
                        <li>
                            Phone:{" "}
                            <a href="tel:+919876543210" className="hover:underline">
                                +91 98765 43210
                            </a>
                        </li>
                        <li>Available 24/7</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-400 text-xs mt-12 border-t border-blue-800 pt-6">
                © {new Date().getFullYear()} SafeHands Healthcare. All rights reserved.
            </div>
        </footer>
    );
}
