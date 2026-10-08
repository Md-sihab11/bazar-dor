import Image from "next/image";

const HeaderPage = async () => {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data = await res.json()
    console.log(data)
    return (
        <div className="container mx-auto">
            <div>
                <Image src="/logo-icon.png"
                    alt="Description"
                    width={100}
                    height={100} />
            </div>
        </div>
    );
};

export default HeaderPage