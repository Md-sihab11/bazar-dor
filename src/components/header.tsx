"use client";

import Link from "next/link";
import BanglaDate from "@/components/date/bangla-date";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const HeaderPage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSignOut = async () => {
        setDropdownOpen(false);
        await signOut();
        toast.success("সাইন আউট সফল হয়েছে!");
        router.push("/");
    };

    return (
        <div className="flex justify-between w-full border-b border-gray-200 bg-white">
            <div className="flex justify-between container mx-auto py-4 px-4">

                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-center text-2xl bg-green-700 p-3 rounded-2xl">🛒</Link>
                    <div>
                        <Link href="/" className="text-3xl font-bold">বাজার দর</Link>
                        <BanglaDate />
                    </div>
                </div>

                {/* Auth Section */}
                <div className="flex gap-2 items-center relative" ref={dropdownRef}>
                    {isPending ? (
                        <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />
                    ) : session ? (
                        <>
                            {/* Avatar + name button */}
                            <button
                                onClick={() => setDropdownOpen((prev) => !prev)}
                                className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors"
                            >
                                {session.user?.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt={session.user.name || "User"}
                                        width={36}
                                        height={36}
                                        className="w-9 h-9 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm">
                                        {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                                    </div>
                                )}
                                <span className="hidden sm:block text-sm font-medium text-gray-700 max-w-[120px] truncate">
                                    {session.user?.name}
                                </span>
                                <span className="text-gray-400 text-xs">▾</span>
                            </button>

                            {/* Dropdown */}
                            {dropdownOpen && (
                                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 py-2">
                                    {/* User info */}
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="font-bold text-gray-900 text-sm">{session.user?.name}</p>
                                        <p className="text-gray-500 text-xs mt-0.5 truncate">{session.user?.email}</p>
                                    </div>

                                    {/* Profile link */}
                                    <Link
                                        href="/profile"
                                        onClick={() => setDropdownOpen(false)}
                                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        <span>👤</span> আমার প্রোফাইল
                                    </Link>

                                    {/* Sign out */}
                                    <button
                                        onClick={handleSignOut}
                                        className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                    >
                                        <span>↩</span> সাইন আউট
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <Link href="/log-in" className="cursor-pointer font-semibold px-4 py-2 text-gray-700 hover:text-green-700 transition-colors">সাইন ইন</Link>
                            <Link href="/sign-up" className="btn text-white bg-green-700 hover:bg-green-800 rounded border-0">সাইন আপ</Link>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default HeaderPage;