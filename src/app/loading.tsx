import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-6 text-center">

            <div className="relative flex items-center justify-center mb-6">
            
                <div className="w-20 h-20 border-4 border-green-100 rounded-full"></div>
                
                <div className="absolute w-20 h-20 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
            </div>

           
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
                লোড হচ্ছে...
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-sm mx-auto mt-2 leading-relaxed">
                অনুগ্রহ করে একটু অপেক্ষা করুন, তথ্যগুলো লোড করা হচ্ছে।
            </p>

        </div>
    );
};

export default loading;