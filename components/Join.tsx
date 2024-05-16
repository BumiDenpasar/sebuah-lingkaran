'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

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
      className="flex items-center max-w-sm mx-auto"
    >
      <div className="relative w-full">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-neutral-500 focus:border-neutral-500 block w-full ps-5 p-2.5  dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
          placeholder="Masukkan URL..."
          required
          id="url"
          name="url"
          value={inputValue}
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
