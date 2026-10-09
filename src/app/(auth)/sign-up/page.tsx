import Link from 'next/link';
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Pagemarquee from '@/components/marquee';

const SignUpPage = () => {
  return (
    <div>
      <Pagemarquee />
      <div className="flex flex-col items-center justify-center bg-base-100 p-4">
        {/* হেডার অংশ */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="text-sm text-gray-500 mt-1">বিনামূল্যে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
        </div>

        {/* ফর্ম ফিল্ডসেট */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-96 border p-6 shadow-sm">
          <label className="label">নাম</label>
          <input type="text" className="input w-full" placeholder="যেমন: রহিম উদ্দিন" />

          <label className="label mt-2">ইমেইল</label>
          <input type="email" className="input w-full" placeholder="you@example.com" />

          <label className="label mt-2">পাসওয়ার্ড</label>
          <input type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />

          <label className="label mt-2">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input type="password" className="input w-full" placeholder="আবার লিখুন" />

          <button className="btn bg-green-700 hover:bg-green-800 text-white border-none w-full mt-6">
            অ্যাকাউন্ট তৈরি করুন
          </button>

          <div className="divider my-4 text-xs text-gray-400">অথবা</div>


          <div className="flex gap-2 w-full">
            <button className="btn btn-outline bg-white hover:bg-gray-50 text-black border-base-300 flex-1 flex items-center justify-center gap-2">
              <FcGoogle className="text-lg" /> Google
            </button>
            <button className="btn btn-outline bg-white hover:bg-gray-50 text-black border-base-300 flex-1 flex items-center justify-center gap-2">
              <FiGithub className="text-lg" /> GitHub
            </button>
          </div>


          <div className="text-center mt-4 text-sm">
            <span className="text-gray-500">অ্যাকাউন্ট আছে? </span>
            <a href="/log-in" className="text-green-700 hover:underline font-medium">সাইন ইন করুন</a>
          </div>
        </fieldset>


        <div className="mt-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">← হোম পেজে ফিরে যান</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage