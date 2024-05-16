import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="font-semibold italic text-2xl text-purple-400 mb-5">Sebuah Lingkaran</h1>
        <Link href='/group' className='px-5 py-2 w-max mt-5 flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 transition-all border-purple-600 rounded-xl bg-purple-400 text-white font-semibold'>
            Buat Sirkel
        </Link>
       <Link href='/join' className='px-5 py-2 w-max mt-5 flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 transition-all border-purple-300 rounded-xl bg-purple-200 text-purple-400 font-semibold'>
            Join Sirkel
        </Link>
   </div>
  );
}
