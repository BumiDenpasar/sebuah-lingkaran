'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

export default function Join() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e:any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const url = '/group/'+inputValue
    router.push(url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center max-w-sm mx-auto mb-16"
    >
      <div className="relative w-full">
        <input
          type="text"
          className="bg-gray-50 border placeholder-purple-200 text-purple-500 font-semibold border-gray-300 rounded-full focus:ring-neutral-500 focus:border-neutral-500 block w-full ps-5 p-2.5 py-4 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
          placeholder="Masukkan Kode Sirkelmu..."
          required
          id="url"
          name="url"
          value={inputValue}
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
