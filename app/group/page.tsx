"use client";
import Input from "@/components/Input";
import LogoLarge from "@/components/LogoLarge";
import Transition from "@/components/Transition";
import Watermark from "@/components/Watermark";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <Transition>
        {
          <div className="w-screen h-screen flex flex-col items-center justify-center">
            <LogoLarge />
            <Input />
          </div>
        }
      </Transition>
      <Watermark />
    </>
  );
}
