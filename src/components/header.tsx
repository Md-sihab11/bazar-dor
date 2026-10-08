

const HeaderPage = async () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    
    return (
        <div className="w-full border-b border-gray-200 bg-white ">
            <div className="container mx-auto py-4 flex items-center gap-4">
                <div>
                    <p className="text-center text-2xl bg-green-700 p-3 w-15 rounded-2xl">🛒</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">বাজার দর</h1>
                    <h2 className="font-medium">{date}</h2>
                </div>
            </div>
           
        </div>
    );
};

export default HeaderPage