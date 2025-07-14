'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
            <Link href="/" className="text-2xl font-bold text-blue-600">
                SafeHands
            </Link>
            <div className="space-x-6 hidden md:flex">
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
                <Link href="/careers" className="text-gray-700 hover:text-blue-600">Careers</Link>
                <Link href="/support" className="text-gray-700 hover:text-blue-600">Support</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
            <div className="space-x-4">
                <Link href="/login">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
                        Login
                    </button>
                </Link>
                <Link href="/register">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Register
                    </button>
                </Link>
            </div>
        </nav>
    );
}
