
import Pagemarquee from '@/components/marquee';
import SortSelect from '@/components/SortSelect';
import { ProductMarquee } from '@/types/navtypes';
import Image from 'next/image'
import Link from 'next/link';


const CategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,

        { next: { revalidate: 300 } }
    );

    if (!res.ok) {
        return (
            <section className="min-h-[60vh] flex flex-col items-center justify-center gap-4 p-8 text-center">
                <p className="text-6xl">🛒</p>
                <h2 className="text-2xl font-bold text-gray-800">ক্যাটাগরি খুঁজে পাওয়া যায়নি</h2>
                <p className="text-gray-500">এই ক্যাটাগরির কোনো পণ্য নেই বা URL টি ভুল।</p>
                <Link href="/" className="btn bg-green-700 hover:bg-green-800 text-white border-none rounded-full px-8">
                    হোম পেজে ফিরে যান
                </Link>
            </section>
        );
    }

    const data: ProductMarquee[] = await res.json();
    const filterItem = data.length;

    // Empty state
    if (!data || data.length === 0) {
        return (
            <section className="min-h-[60vh] flex flex-col items-center justify-center gap-4 p-8 text-center">
                <p className="text-6xl">📦</p>
                <h2 className="text-2xl font-bold text-gray-800">এই ক্যাটাগরিতে কোনো পণ্য নেই</h2>
                <p className="text-gray-500">অন্য একটি ক্যাটাগরি দেখুন বা হোম পেজে ফিরে যান।</p>
                <Link href="/" className="btn bg-green-700 hover:bg-green-800 text-white border-none rounded-full px-8">
                    হোম পেজে ফিরে যান
                </Link>
            </section>
        );
    }

    return (
        <section className="">
            <Pagemarquee />

            {/* Category Header */}
            <div className="mt-5 mb-5 bg-[#FAFCFA] container mx-auto flex gap-3 p-5 rounded-2xl border border-gray-200">

                {data[0]?.image?.startsWith("http") ? (
                    <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                        <Image
                            src={data[0].image}
                            alt={data[0].categoryNameBn}
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ) : (
                    <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">
                            {data[0]?.image}
                        </span>
                    </div>
                )}

                <div>
                    <p className="font-bold text-2xl">
                        {data[0]?.categoryNameBn}
                    </p>

                    <p>
                        {filterItem}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>

            </div>


            {/* Sort */}

            <SortSelect data={data} />

        </section>
    );
};

export default CategoryPage;


