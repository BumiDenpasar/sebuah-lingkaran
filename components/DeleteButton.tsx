"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function DeleteButton(props: any) {
    const router = useRouter();
    const id = parseInt(props.id, 10);

    async function submitData() {
        const { error } = await supabase
            .from('group')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error deleting data:", error);
        } else {
            router.push('/');
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await submitData();
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className='px-5 py-2 w-full flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4  border-red-600 rounded-xl bg-red-400 text-white font-semibold'>
                <RiDeleteBin2Fill />
                <p>Hapus Sirkel</p>
            </button>
        </form>
    );
}
