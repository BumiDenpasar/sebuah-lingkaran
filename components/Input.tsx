"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  name: string;
}

export default function Input() {
  const router = useRouter();

  async function submitData(formData: FormData) {
    const { data, error } = await supabase.from("group").insert(formData);
    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
      const url = "group/" + formData.name;
      router.push(url);
    }
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitData(formData);
    setFormData({ name: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center max-w-sm mx-auto"
    >
      <label htmlFor="name" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-neutral-500 focus:border-neutral-500 block w-full ps-5 p-2.5  dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
          placeholder="Buat nama sirkel..."
          required
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="p-2 ms-2 text-sm font-medium text-white bg-neutral-700 rounded-full w-auto h-full aspect-square border border-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
      >
        <p className="font-mono font-semibold text-lg">{">"}</p>
      </button>
    </form>
  );
}
