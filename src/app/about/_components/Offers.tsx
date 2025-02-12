import Link from 'next/link'
import React from 'react'

function Offers() {
  return (
    <div className='mx-auto max-w-screen-xl p-4 mt-10 mb-16'>
        <h2 className='mb-10 text-3xl md:text-5xl text-gray-500'>Hey Friend, Check out our Offers!</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 md:px-4'>

            {/* Gift-items card */}
            <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 10%
                </span>

                <img
                    src="./assets/images/Offer-image/packaged-item.JPG"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Gift-items </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    Our premium gift items are carefully curated to leave a lasting impression.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$30.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★★☆</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div>

            {/* Event branding card */}
            <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 11%
                </span>

                <img
                    src="./assets/images/Offer-image/Event-Branding.jpg"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Event Branding </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    We create eye-catching event branding that enhances visibility and engagement.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$110.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★★★</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div>

            {/* Zip-lock bag card */}
            <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 9%
                </span>

                <img
                    src="./assets/images/Offer-image/plastic-bag.jpg"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Zip-lock bags </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    Durable and reusable zip-lock bags, perfect for packaging and storage.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$20.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★★☆</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div>

            {/* Content Creation card */}
            <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 12%
                </span>

                <img
                    src="./assets/images/Offer-image/Content-creation-on-social-media.jpg"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Content Creation </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    Engaging and high-quality content tailored to captivate your audience.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$40.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★★☆</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div>

            {/* Waterproof bag card */}
            <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 3%
                </span>

                <img
                    src="./assets/images/Offer-image/transparent-bags.jpg"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Waterproof transparent bags </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    Durable and stylish waterproof bags designed to keep your essentials safe and visible.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$15.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★☆☆</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div>

            {/* Branded-shit card */}
            <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 8%
                </span>

                <img
                    src="./assets/images/Offer-image/shirt.jpg"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Branded Shirt </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    High-quality branded shirts designed for style, comfort, and a professional look.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$25.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★★★</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div>

            {/* Umbrella card */}
            {/* <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 2%
                </span>

                <img
                    src="./assets/images/Offer-image/branded-umbrella.jpg"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Max-size Branded Umbrella </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    Durable, wind-resistant umbrella designed for maximum coverage and brand visibility.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$120.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★★☆</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div> */}

            {/* Digital Marketing card */}
            {/* <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 13%
                </span>

                <img
                    src="./assets/images/Offer-image/best-digital-marketing.webp"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Digital Marketing </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    Boost your brand online presence with data-driven digital marketing strategies.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$70.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★★★</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div> */}

            {/* Brand Banner card */}
            {/* <div className="relative block rounded-tr-3xl border bg-slate-50 rounded-2xl border-gray-100">
                <span
                    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-orange-500 px-6 py-4 font-medium uppercase tracking-widest text-white"
                >
                    Save 7%
                </span>

                <img
                    src="./assets/images/Offer-image/kappframework-Jsgnic(1)(1).png"
                    alt="Packaged-item"
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className="text-xl font-medium text-gray-900"> Brand Banner Customization </strong>

                    <p className="mt-2 text-pretty text-gray-400">
                    Create custom banners that make your brand stand out and leave a lasting impression.
                    </p>

                    <p className='text-3xl text-orange-500 mt-4'>$50.99</p>
                    <p className='mt-2 text-yellow-400 text-xl'>★★★★☆</p>

                    <span
                    className="mt-4 block rounded-md border border-orange-900 bg-orange-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors"
                    >
                    LEARN MORE
                    </span>
                </div>
            </div> */}

        </div>

        <div className='flex justify-center mt-10'>
            <Link href="/offers" 
                rel="noreferrer"
                className="inline-flex items-center md:text-lg text-sm font-bold rounded-full bg-orange-500 py-2 px-4 md:py-3 md:px-6 text-white transition-colors duration-[0.3s] hover:bg-gray-200 hover:text-orange-500"
            >
                <span>VIEW MORE</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
            </Link>
        </div>
    </div>
  )
}

export default Offers