import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto w-full border-t border-gray-200 bg-[#FAFCFA]">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-6 gap-2 text-sm text-gray-600">
                <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </footer>
    );
};

export default Footer;