import './globals.css'
import Navbar from '../components/Navbar'
import {Toaster} from "react-hot-toast";

export const metadata = {
    title: 'SafeHands',
    description: 'Trusted Healthcare Services at Your Fingertips',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <Toaster position="top-right" />
        <main>{children}</main>
        </body>
        </html>
    )
}
