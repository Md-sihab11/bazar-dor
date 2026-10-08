

const HeaderPage = async () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <div className="flex justify-between w-full border-b border-gray-200 bg-white ">

            <div className="flex justify-between container mx-auto py-4">

                <div className=" flex items-center gap-4">
                    <div>
                        <p className="text-center text-2xl bg-green-700 p-3 w-15 rounded-2xl">🛒</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">বাজার দর</h1>
                        <h2 className="font-medium">{date}</h2>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <button className="cursor-pointer font-semibold p-5 border-0 shadow-none bg-none">সাইন ইন</button>
                    <button className="btn text-white bg-green-500 rounded border-0">সাইন আপ</button>
                </div>

            </div>


        </div>
    );
};

export default HeaderPage