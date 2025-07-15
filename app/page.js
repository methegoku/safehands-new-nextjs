'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import HeroSection from '../components/HeroSection';
import ServicesOffered from '../components/ServicesOffered';
import Testimonials from '../components/Testimonials';
import TopProviders from '../components/TopProviders';
import Footer from '../components/Footer';

export default function Home() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const scrollTo = searchParams.get('scroll');
        if (scrollTo === 'services') {
            const el = document.getElementById('services-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchParams]);

    return (
        <div>
            <HeroSection />
            <ServicesOffered />
            <TopProviders />
            <Testimonials />
            <Footer />
        </div>
    );
}
