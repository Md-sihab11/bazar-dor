
import SortSelect from '@/components/SortSelect';
import { ProductMarquee } from '@/types/navtypes';
import Image from 'next/image'



const CategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`
    );
    const data: ProductMarquee[] = await res.json();
    const filterItem = data.length;


    return (
        <section className="mt-5 mb-5">

            {/* Category Header */}
            <div className="bg-[#FAFCFA] container mx-auto flex gap-3 p-5 rounded-2xl border border-gray-200">

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


