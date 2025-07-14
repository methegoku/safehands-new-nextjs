export default function HeroSection() {
    const handleScroll = () => {
        const section = document.getElementById("services-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="p-5 relative py-40 bg-blue-600 text-white text-center shadow-md">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Trusted Care, Right at Your Doorstep
                </h1>
                <p className="mt-6 text-lg text-blue-100">
                    Connect with verified healthcare professionals for home care, medical services, and child care.
                </p>
                <div className="mt-10">
                    <button
                        onClick={handleScroll}
                        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
                    >
                        Explore Services
                    </button>
                </div>
            </div>

            <div className="absolute right-0 bottom-0 w-48 h-48 bg-blue-300 opacity-30 rounded-full blur-2xl hidden md:block"></div>
        </section>
    );
}
