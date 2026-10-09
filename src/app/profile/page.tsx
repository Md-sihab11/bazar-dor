"use client";

import { useSession, signOut, updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import Pagemarquee from "@/components/marquee";

const ProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const [name, setName] = useState("");

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/log-in");
        }
        if (session?.user?.name) {
            setName(session.user.name);
        }
    }, [session, isPending, router]);

    const handleSignOut = async () => {
        await signOut();
        toast.success("সাইন আউট সফল হয়েছে!");
        router.push("/");
    };

    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error("নাম খালি রাখা যাবে না!");
            return;
        }
        setIsUpdating(true);
        try {
            const res = await updateUser({ name: name.trim() });
            if (res?.error) {
                toast.error(res.error.message || "নাম আপডেট করতে সমস্যা হয়েছে!");
            } else {
                toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
                router.refresh();
            }
        } catch {
            toast.error("কিছু ভুল হয়েছে!");
        } finally {
            setIsUpdating(false);
        }
    };

    if (isPending) {
        return (
            <div className="container mx-auto px-4 py-10 max-w-2xl">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mb-8" />
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
                    <div className="flex-1 space-y-2">
                        <div className="h-5 w-36 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>
            </div>
        );
    }

    if (!session) return null;

    return (
        <div>
            <Pagemarquee />
            <div className="container mx-auto px-4 py-10 max-w-2xl">

                {/* Page title */}
                <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
                <p className="text-sm text-gray-500 mt-1">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

                {/* Profile card */}
                <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4">

                    {/* Avatar */}
                    <div className="shrink-0">
                        {session.user?.image ? (
                            <Image
                                src={session.user.image}
                                alt={session.user.name || "User"}
                                width={72}
                                height={72}
                                className="w-18 h-18 rounded-full object-cover border-2 border-green-100"
                            />
                        ) : (
                            <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-white text-2xl font-bold">
                                {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                        <p className="text-lg font-bold text-gray-900">{session.user?.name}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{session.user?.email}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                        <button
                            onClick={handleSignOut}
                            className="flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            ↩ সাইন আউট
                        </button>
                    </div>
                </div>

                {/* Update form */}
                <div className="mt-5 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <h2 className="font-semibold text-gray-800 mb-4">তথ্য</h2>

                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">নাম</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input w-full border border-gray-200 rounded-lg"
                                placeholder="আপনার নাম"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isUpdating}
                            className="btn w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white border-none rounded-lg"
                        >
                            {isUpdating ? "আপডেট হচ্ছে..." : "আপডেট"}
                        </button>
                    </form>
                </div>

                {/* Back link */}
                <div className="mt-5 text-center">
                    <Link href="/" className="text-sm text-gray-500 hover:text-green-700 hover:underline transition-colors">
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
