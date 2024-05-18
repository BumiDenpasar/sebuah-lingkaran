'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page({params}:any) {
    const router = useRouter();

    useEffect(() => {
    setTimeout(() => {
        router.push('/')
    }, 3000);
  }, []);

    const {message} = params
    return (
        <>
            <section className="w-screen h-screen flex items-center justify-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">Error</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Somethings missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{decodeURIComponent(message)}</p>
                        <Link
                            href="/"
                            className="px-5 py-2 w-max flex items-center border-r-2 border-b-2 hover:border-r-4 hover:border-b-4  border-purple-600 rounded-xl bg-purple-400 text-white font-semibold"
                        >
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
