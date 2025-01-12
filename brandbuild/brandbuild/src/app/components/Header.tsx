"use client"


import React, { useEffect, useState } from "react";

const HomePage = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <>
            <header
            className={`fixed top-0 z-20 w-full px-8 md:px-16 lg:px-32 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-lg" : "bg-transparent"
            }`}
            >
                <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="h-[60px] w-[120px]">
                    <img
                        src="/assets/brandbuild-logo.png"
                        alt="logo"
                        className="h-full w-full object-contain"
                    />
                    </div>

                    {/* Navigation Links */}
                    <nav
                    className={`hidden md:flex items-center gap-8 ${
                        isScrolled ? "text-black" : "text-white"
                    }`}
                    >
                    <a
                        className="text-base font-medium transition-colors duration-300 hover:text-gray-500"
                        href="#about"
                    >
                        About us
                    </a>
                    <a
                        className="text-base font-medium transition-colors duration-300 hover:text-gray-500"
                        href="#services"
                    >
                        Our Services
                    </a>
                    <a
                        className="text-base font-medium transition-colors duration-300 hover:text-gray-500"
                        href="#contact"
                    >
                        Contact us
                    </a>
                    </nav>

                    {/* Social Media Icons */}
                    <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook"
                        className={`transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                        }`}
                    >
                        <i className="bi bi-facebook text-xl"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram"
                        className={`transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                        }`}
                    >
                        <i className="bi bi-instagram text-xl"></i>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=+2349038940088"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="whatsapp"
                        className={`transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                        }`}
                    >
                        <i className="bi bi-whatsapp text-xl"></i>
                    </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                    className={`md:hidden text-3xl transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="menu"
                    >
                    <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
                    </button>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                    <nav
                        className={`absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4 text-black`}
                    >
                        <a className="text-base font-medium hover:text-gray-500" href="#about">
                        About us
                        </a>
                        <a className="text-base font-medium hover:text-gray-500" href="#services">
                        Our Services
                        </a>
                        <a className="text-base font-medium hover:text-gray-500" href="#contact">
                        Contact us
                        </a>
                        <div className="flex items-center gap-4">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="facebook"
                            className="text-black"
                        >
                            <i className="bi bi-facebook text-xl"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="instagram"
                            className="text-black"
                        >
                            <i className="bi bi-instagram text-xl"></i>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=+2349038940088"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="whatsapp"
                            className="text-black"
                        >
                            <i className="bi bi-whatsapp text-xl"></i>
                        </a>
                        </div>
                    </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section
            className="relative flex h-[100vh] w-full max-w-[100vw] flex-col overflow-hidden max-md:h-[100dvh]"
            id="hero-section"
            >
                <img
                    src="./assets/images/rebrand.webp"
                    alt="Hero"
                    className="h-full w-full object-cover"
                />
                <div className="absolute h-full w-full bg-[#0000007d]"></div>

                <div
                    className="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col place-content-center gap-4 p-8 text-white max-w-screen-xl"
                >
                    <h1 className="text-7xl font-semibold text-left max-md:text-5xl">
                    Creating a Unique <span>BRAND</span>
                    </h1>
                    <div
                    className="mt-3 place-content-start gap-4 max-md:gap-2"
                    >
                    <p
                        className="text-left text-2xl"
                        style={{
                        marginBottom: "26px",
                        }}
                    >
                        Empowering brands to craft distinct identities with unparalleled
                        creativity, fostering meaningful connections through innovative
                        strategies. We blend professionalism with originality, ensuring every
                        brand stands out in the competitive market and resonates deeply with
                        its audience.
                    </p>
                    <div>
                        <a
                        href="https://5"
                        target="_blank"
                        rel="noreferrer"
                        className="flex text-lg font-bold w-auto rounded-full bg-white p-3 px-[20px] text-black transition-colors duration-[0.3s] hover:bg-primary hover:text-white"
                        style={{ maxWidth: "300px" }}
                        >
                        Let us build your brand today!
                        </a>
                    </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HomePage;
