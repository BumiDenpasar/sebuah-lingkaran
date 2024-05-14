import Input from "@/components/Input";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
        <Link href='/' className="text-3xl mb-5">Sebuah Lingkaran.</Link>
        <Input/>
    </div>
  )
}
