import React from 'react';
import Link from 'next/link';
import { BiErrorCircle } from 'react-icons/bi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-6 text-center">
      
      
      <BiErrorCircle className="text-green-700 text-8xl md:text-9xl mb-2" strokeWidth={1} />
      <h1 className="text-8xl md:text-9xl font-black text-green-700 tracking-tight">404</h1>
      
    
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mt-4">
        দুঃখিত, পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
      </h2>
      <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto mt-2 leading-relaxed">
        আপনি যে URL-টি খুঁজছেন সেটি ভুল বা পরিবর্তিত হয়েছে। অনুগ্রহ করে হোম পেজে ফিরে যান।
      </p>

     
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none">
          <Link href="/" className="btn bg-green-700 hover:bg-green-800 text-white border-none text-base px-8 py-3 rounded-full w-full sm:w-auto">
            হোম পেজে ফিরে যান
          </Link>
      </div>
      
    </div>
  );
};

export default NotFoundPage;