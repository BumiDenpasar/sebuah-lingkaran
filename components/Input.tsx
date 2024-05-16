"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

interface FormData {
  name: string;
}

export default function Input() {
  const router = useRouter();

  async function submitData(formData: FormData) {
    const { data, error } = await supabase.from("group").insert(formData).select('id');
    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data[0].id);
      const url = "group/" + data[0].id;
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
      className="flex items-center max-w-sm mx-auto mb-16"
    >
      <label htmlFor="name" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          className="bg-gray-50 border placeholder-purple-200 text-purple-500 font-semibold border-gray-300 rounded-full focus:ring-neutral-500 focus:border-neutral-500 block w-full ps-5 p-2.5 py-4 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
          placeholder="Buat password sirkelmu..."
          required
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="ms-2 flex items-center justify-center font-medium text-white bg-purple-700 rounded-full w-12 h-12 aspect-square"
      >
        <div className="scale-125">
          <GrFormNextLink />
        </div>
      </button>
    </form>
  );
}
