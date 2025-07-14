import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
    title: 'SafeHands',
    description: 'Trusted Healthcare Services at Your Fingertips',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main>{children}</main>
        </body>
        </html>
    )
}
