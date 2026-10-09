"use client";

import Link from "next/link";
import { useState } from "react";

const HeaderPage = () => {

    const [date] = useState(() =>
        new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
        })
    );

    return (
        <div className="flex justify-between w-full border-b border-gray-200 bg-white ">

            <div className="flex justify-between container mx-auto py-4">

                <div className=" flex items-center gap-4">
                    <div>
                        <Link href="/" className="text-center text-2xl bg-green-700 p-3 w-15 rounded-2xl">🛒</Link>
                    </div>
                    <div>
                        <Link href="/" className="text-3xl font-bold">বাজার দর</Link>
                        <h2 className="font-medium">{date} </h2>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <Link href="/log-in" className="cursor-pointer font-semibold p-5 border-0  bg-none">সাইন ইন</Link>
                    <Link href="/sign-up" className="btn text-white bg-green-700 rounded border-0">সাইন আপ</Link>
                </div>

            </div>


        </div>
    );
};

export default HeaderPage