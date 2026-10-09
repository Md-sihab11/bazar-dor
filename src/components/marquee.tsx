import { ProductMarquee } from '@/types/navtypes';
import Marquee from "react-fast-marquee";

const toBnNum = (num: number | string) => {
  return new Intl.NumberFormat("bn-BD").format(Number(num));
};

const Pagemarquee = async () => {
    try {
        const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', { next: { revalidate: 300 } });

        
        if (!res.ok) {
            return null;
        }

        const data: ProductMarquee[] = await res.json();

        return (
            <div className="bg-white">
                <Marquee>
                    {
                        data.map((product: ProductMarquee) => {

                            const isUp = product.change?.dir === "up";
                            const isDown = product.change?.dir === "down";

                            return <div className=" text-black border border-gray-200 p-2" key={product.id}>
                                <span>{`${product.categoryIcon} ${product.nameBn} ${product.today} টাকা/কেজি `}</span>
                                {
                                    isUp && (<span className="text-center text-green-600"> ▲{toBnNum(product.change.pct)}%</span>)
                                }
                                {
                                    isDown && (<span className="text-center text-red-600"> ▼{toBnNum(product.change.pct)}%</span>)
                                }
                                {
                                    !isUp && !isDown && (
                                        <span className="text-xs text-gray-400">▬</span>
                                    )
                                }

                            </div>
                        })
                    }
                </Marquee>
            </div>
        );
    } catch {
        return null;
    }
};

export default Pagemarquee;