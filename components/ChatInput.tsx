"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

interface FormData {
  group_id: number;
  chat: string;
}

export default function ChatInput(id: any) {
  const router = useRouter()
  // form data
  const [formData, setFormData] = useState<FormData>({
    group_id: id.id,
    chat: "",
  });

  // state mengirim chat
  const [isSubmitting, setIsSubmitting] = useState(false);

  // proses masukin datanya ke supabase
  async function submitData(formData: FormData) {
    setIsSubmitting(true);
    const { data, error } = await supabase.from("chats").insert(formData);
    setIsSubmitting(false);
    if (error) {
      const url = "error/" + error.message
      router.push(url);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitData(formData);
    setFormData({ group_id: id.id, chat: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-screen transition-colors duration-500 items-center justify-center fixed bottom-[-1px] px-8 pb-7 pt-10 left-0 bg-gradient-to-t from-purple-100 via-purple-100 to-purple-100/0 dark:from-black dark:via-black dark:to-black/0"
    >
      <div className="max-w-xl w-full flex items-center justify-center">
        <div className="relative w-full">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:ring-neutral-500 focus:border-neutral-500 block w-full ps-5 p-2.5 py-4 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
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
          disabled={isSubmitting}
          className={`ms-2 flex items-center justify-center font-medium text-white rounded-full w-12 h-12 aspect-square ${
            isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-purple-700"
          }`}
        >
          <div className="scale-150">
            <GrFormNextLink />
          </div>
        </button>
      </div>
    </form>
  );
}
