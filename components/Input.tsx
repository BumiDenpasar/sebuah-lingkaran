"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import Loading from "./Loading";

interface FormData {
  name: string;
}

export default function Input() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });

  const [isLoading, setisLoading] = useState(false)

  async function submitData(formData: FormData) {
    const { data, error } = await supabase
      .from("group")
      .insert(formData)
      .select("id");
    if (error) {
      const url = "error/" + error.message
      router.push(url);
    } else {
      const url = "group/" + data[0].id;
      localStorage.setItem("isAdmin", JSON.stringify(true));
      router.push(url);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setisLoading(true)
    await submitData(formData);
    setFormData({ name: "" });
  };

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
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
              placeholder="Buat nama sirkelmu..."
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
      )}
    </>
  );
}