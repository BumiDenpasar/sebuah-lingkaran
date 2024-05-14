import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Link className="rounded-full w-max h-auto aspect-square flex items-center justify-center p-10 border-2 border-black dark:border-white" href='/group'>
        <h5>Buat Lingkaran</h5>
      </Link>
      <ThemeToggle />
   </div>
  );
}
