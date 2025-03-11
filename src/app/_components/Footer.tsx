import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white">
    <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        <div className='-mt-12'>
            <div className="flex flex-col items-center text-orange-500 sm:items-start">
                <img 
                    src="./assets/new-logo-brandbuild.png" 
                    alt="" 
                    className="object-contain h-32 w-32"
                />
                <p className="-mt-4 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                We are committed to delivering top-notch services
                hinged on the following core values
                </p>
            </div>


            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                    <a
                    href="https://www.facebook.com/brandbuild.ng"
                    rel="noreferrer"
                    target="_blank"
                    className="text-orange-500 transition hover:text-teal-700/75"
                    >
                    <span className="sr-only">Facebook</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>

                <li>
                    <a
                    href="https://www.instagram.com/brandbuild.ng"
                    rel="noreferrer"
                    target="_blank"
                    className="text-orange-500 transition hover:text-teal-700/75"
                    >
                    <span className="sr-only">Instagram</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="mailto:brandbuildnglimited@email.com"
                        rel="noreferrer"
                        target="_blank"
                        className="text-orange-500 transition hover:text-teal-700/75"
                    >
                        <span className="sr-only">Email</span>
                        <svg
                        className="size-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        >
                        <path
                            d="M12 12.713L0 5.1V19a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5.1l-12 7.613zm11.99-11.403A2 2 0 0 0 22 1H2a2 2 0 0 0-1.99 1.31L12 9.885l11.99-7.575z"
                        />
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                          href="https://api.whatsapp.com/send?phone=%2B2349038940088"
                        rel="noreferrer"
                        target="_blank"
                        className="text-orange-500 transition hover:text-teal-700/75"
                    >
                        <span className="sr-only">WhatsApp</span>
                        <svg
                        className="size-6"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M16.04 0C7.17 0 .03 7.14.03 15.98c0 3.14.91 6.16 2.66 8.8L0 32l7.37-2.62c2.47 1.36 5.29 2.07 8.06 2.07h.01c8.88 0 16.04-7.13 16.04-15.98C32.08 7.14 24.92 0 16.04 0zm8.37 23.84c-.35.98-2.04 1.88-2.82 1.99-.73.1-1.68.13-2.71-.16-.63-.16-1.44-.46-2.5-.89-4.38-1.91-7.22-6.3-7.43-6.6-.21-.29-1.77-2.35-1.77-4.48s1.12-3.18 1.52-3.62c.38-.41 1.03-.6 1.64-.6h.56c.47 0 .73.03 1.05.8.41 1.01 1.39 3.46 1.5 3.7.12.23.21.53.04.85-.18.34-.27.55-.52.85-.26.31-.5.54-.76.88-.24.3-.48.63-.2 1.13.28.5 1.26 2.08 2.7 3.38 1.86 1.66 3.36 2.19 3.89 2.43.51.23.81.2 1.1-.12.29-.32 1.26-1.47 1.6-1.98.34-.52.68-.43 1.17-.26.48.16 3.06 1.45 3.59 1.72.53.26.88.38 1.01.6.13.22.13 1.28-.22 2.27z"
                        />
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="https://twitter.com/brandbuildng"
                        rel="noreferrer"
                        target="_blank"
                        className="text-orange-500 transition hover:text-teal-700/75"
                        >
                        <span className="sr-only">Twitter</span>
                        <svg
                            className="size-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 0h7l4 8 4-8h7l-9 12 9 12h-7l-4-8-4 8H3l9-12L3 0z" />
                        </svg>
                    </a>

                </li>


            </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-orange-500">About Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="/about">
                            Company History
                        </a>
                    </li>

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="/about">
                            Meet the Team
                        </a>
                    </li>

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="/about"> Testimonials </a>
                    </li>
                </ul>
            </div>

            <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-orange-500">Our Services</p>

                <ul className="mt-8 space-y-4 text-sm">
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/services">
                        Strategy Development
                    </a>
                    </li>

                    <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/services"> Creative Design </a>
                    </li>

                    <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/services"> Web Development </a>
                    </li>

                    <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/services"> Event Branding </a>
                    </li>
                </ul>
            </div>

            <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-orange-500">Helpful Links</p>

                <ul className="mt-8 space-y-4 text-sm">
                    <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/contact"> FAQs </a>
                    </li>

                    <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/contact"> Support </a>
                    </li>

                   
                </ul>
            </div>

            <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-orange-500">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                    <li>
                        <a
                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            href="mailto:brandbuildnglimited@gmail.com"
                            >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                            </svg>

                            <span className="flex-1 text-gray-700"> brandbuildnglimited@gmail.com</span>
                        </a>
                    </li>

                    <li>
                        <a
                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            href="https://wa.me/2349038940088"
                            >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                            </svg>

                            <span className="flex-1 text-gray-700">0903 894 0088</span>
                        </a>
                    </li>

                    <li
                    className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>

                    <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                        Abuja, Nigeria
                    </address>
                    </li>
                </ul>
            </div>
        </div>
    </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; {currentYear} BrandBuild.ng</p>
        </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer