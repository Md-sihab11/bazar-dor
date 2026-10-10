import Image from "next/image";
import BanglaDate from "@/components/date/bangla-date";

const Herosection = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm">

                {/* Decorative background */}
                <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-green-100/60 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-emerald-100/40 blur-3xl" />

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-6 sm:p-8 lg:p-10">

                    {/* Left Content */}
                    <div className="w-full md:w-3/5 text-center md:text-left">

                        <BanglaDate className="inline-block mb-3 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium" />

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            আজকের বাজারের দাম{" "}
                            <span className="text-green-700">
                                এক নজরে
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-gray-600">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                            <br className="hidden sm:block" />
                            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                            দামের পরিবর্তন এক জায়গায়।
                        </p>

                        <a
                            href="#সব-পণ্য"

                            className=" cursor-pointer mt-6 inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-md shadow-green-700/20 transition-all duration-300 hover:bg-green-800 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            সব পণ্য দেখুন
                            <span className="text-lg">→</span>
                        </a>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-2/5 flex justify-center md:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-green-100 blur-2xl scale-75" />

                            <Image
                                src="/bazar-hero.png"
                                alt="বাজারের পণ্যের ছবি"
                                width={260}
                                height={260}
                                priority
                                className="relative w-48 sm:w-56 md:w-60 lg:w-64 h-auto object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Herosection;