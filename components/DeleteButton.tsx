"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Button from "./Button";

export default function DeleteButton(props: any) {
  const router = useRouter();
  const id = parseInt(props.id, 10);

  async function submitData() {
    const { error } = await supabase.from("group").delete().eq("id", id);

    if (error) {
      console.error("Error deleting data:", error);
    } else {
      router.push("/");
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitData();
    localStorage.removeItem("isAdmin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button name="Hapus Sirkel" icon={<RiDeleteBin2Fill />} color="red"/>
    </form>
  );
}
