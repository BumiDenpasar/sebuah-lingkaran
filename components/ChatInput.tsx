"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  chat: string;
}

export default function ChatInput() {
  const router = useRouter();

  async function submitData(formData: FormData) {
    const { data, error } = await supabase.from("chats").insert(formData);
    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
    }
  }

  const [formData, setFormData] = useState<FormData>({
    chat: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitData(formData);
    setFormData({ chat: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-screen items-center justify-between fixed bottom-[-1px] px-8 py-7 left-0 bg-neutral-200 rounded-t-3xl"
    >
      <div className="relative w-full">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-neutral-500 focus:border-neutral-500 block w-full ps-5 p-2.5  dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
          placeholder="Ssssttttt..."
          required
          id="chat"
          name="chat"
          value={formData.chat}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="ms-2 text-sm font-medium text-white bg-neutral-700 rounded-full w-10 h-10 aspect-square border border-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
      >
        <p className="font-mono font-semibold text-lg">{">"}</p>
      </button>
    </form>
  );
}
