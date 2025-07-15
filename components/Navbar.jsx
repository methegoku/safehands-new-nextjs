'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
     
      <Link href="/" className="text-2xl font-bold text-blue-600">
        SafeHands
      </Link>

     
      <div className="space-x-6 hidden md:flex">
        <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
        <Link href="/careers" className="text-gray-700 hover:text-blue-600">Careers</Link>
        <Link href="/support" className="text-gray-700 hover:text-blue-600">Support</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </div>

      
      <div className="space-x-2 hidden md:flex">
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

      
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-3 p-4 md:hidden z-50">
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-blue-600">About Us</Link>
          <Link href="/careers" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-blue-600">Careers</Link>
          <Link href="/support" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-blue-600">Support</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/login" onClick={() => setMobileOpen(false)}>
            <button className="mt-2 w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">Login</button>
          </Link>
          <Link href="/register" onClick={() => setMobileOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
