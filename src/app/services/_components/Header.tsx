// "use client"

// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import 'bootstrap-icons/font/bootstrap-icons.css';


// function Header() {

//     const [isScrolled, setIsScrolled] = useState(false);
//         const [isMenuOpen, setIsMenuOpen] = useState(false);
    
//         useEffect(() => {
//             const handleScroll = () => {
//                 setIsScrolled(window.scrollY > 50)
//             };
    
//             window.addEventListener("scroll", handleScroll);
//             return () => window.removeEventListener("scroll", handleScroll);
//         }, [])
//   return (
//    <>
//         <header
//             className={`fixed top-0 z-20 w-full px-8 md:px-16 lg:px-32 transition-all duration-300 ${
//                 isScrolled ? "bg-white shadow-lg" : "bg-white"
//             }`}
//             >
//                 <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
//                     {/* Logo */}
//                     <div className="h-[60px] w-[120px]">
//                         <Link href="/">
//                         <img
//                             src="./assets/new-logo-brandbuild.png"
//                             alt="logo"
//                             className="h-full w-full object-contain"
//                         />
//                         </Link>
                   
//                     </div>

//                     {/* Navigation Links */}
//                     <nav
//                         className={`hidden md:flex items-center gap-8 ${
//                             isScrolled ? "text-black" : "text-black"
//                         }`}
//                     >
//                         <Link href="/about" className="text-base font-medium transition-colors duration-300 hover:text-gray-500" >
//                             About us
//                         </Link>
//                         <Link href="/services" className="text-base font-medium transition-colors duration-300 hover:text-gray-500" >
//                             Our Services
//                         </Link>
//                         <Link href="/contact" className="text-base font-medium transition-colors duration-300 hover:text-gray-500">
//                             Contact us
//                         </Link>
//                     </nav>

//                     {/* Social Media Icons */}
//                     <div className="hidden md:flex items-center gap-4">
//                         <a
//                             href="https://www.facebook.com/brandbuild.ng"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label="facebook"
//                             className={`transition-colors duration-300 hover:text-orange-500 ${
//                             isScrolled ? "text-black" : "text-black"
//                             }`}
//                         >
//                             <i className="bi bi-facebook text-xl"></i>
//                         </a>
//                         <a
//                             href="https://www.instagram.com/brandbuild.ng"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label="instagram"
//                             className={`transition-colors duration-300 hover:text-orange-500 ${
//                             isScrolled ? "text-black" : "text-black"
//                             }`}
//                         >
//                             <i className="bi bi-instagram text-xl"></i>
//                         </a>
//                         <a
//                             href="https://api.whatsapp.com/send?phone=+2349038940088"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label="whatsapp"
//                             className={`transition-colors duration-300 hover:text-orange-500 ${
//                             isScrolled ? "text-black" : "text-black"
//                             }`}
//                         >
//                             <i className="bi bi-whatsapp text-xl"></i>
//                         </a>
//                     </div>

//                     {/* Mobile Menu Toggle */}
//                     <button
//                         className={`md:hidden text-3xl transition-colors duration-300 ${
//                             isScrolled ? "text-black" : "text-black"
//                         }`}
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         aria-label="menu"
//                         >
//                         <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
//                     </button>

//                     {isMenuOpen && (
//                         <nav
//                             className={`absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4 text-black`}
//                         >
//                             <Link className="text-base font-medium hover:text-gray-500" href="/about">
//                             About us
//                             </Link>

//                             <Link className="text-base font-medium hover:text-gray-500" href="/services">
//                             Our Services
//                             </Link>
                            
//                             <Link className="text-base font-medium hover:text-gray-500" href="/contact">
//                             Contact us
//                             </Link>

//                             <div className="flex items-center gap-4">
//                                 <Link
//                                     href="https://www.facebook.com/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     aria-label="facebook"
//                                     className="text-black"
//                                 >
//                                     <i className="bi bi-facebook text-xl"></i>
//                                 </Link>
                                
//                                 <Link
//                                     href="https://www.instagram.com/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     aria-label="instagram"
//                                     className="text-black"
//                                 >
//                                     <i className="bi bi-instagram text-xl"></i>
//                                 </Link>

//                                 <Link
//                                     href="https://api.whatsapp.com/send?phone=%2B2349038940088"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     aria-label="whatsapp"
//                                     className="text-black"
//                                 >
//                                     <i className="bi bi-whatsapp text-xl"></i>
//                                 </Link>
//                             </div>
//                         </nav>
//                     )}
//                 </div>
//         </header>

//         <section
//             className="relative flex h-[60vh] w-full max-w-[100vw] flex-col overflow-hidden max-md:h-[100dvh]"
//             id="hero-section"
//             >
//             <img
//                 src="./assets/images/corporate-branding.webp"
//                 alt="Hero"
//                 className="h-full w-full object-cover"
//             />
//             <div className="absolute h-full w-full bg-[#0000007d]"></div>

//             <div
//                 className="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col place-content-center gap-4 p-8 text-white max-w-screen-xl"
//             >
//                 <h1 className="text-7xl font-semibold text-left max-md:text-5xl animate-fadeIn">
//                 Creating a Unique <span>PERSONA</span>
//                 </h1>

//                 <div className="mt-3 place-content-start gap-4 max-md:gap-2 animate-slideIn">
//                 <div>
//                     <a
//                     href="/contact"
//                     rel="noreferrer"
//                     className="text-lg font-bold rounded-full bg-orange-500 p-4 px-[45px] text-white transition-colors duration-[0.3s] hover:bg-white hover:text-orange-500"
//                     >
//                     Work with us!
//                     </a>
//                 </div>
//                 </div>
//             </div>
//         </section>

//    </>
//   )
// }

// export default Header