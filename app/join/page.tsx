"use client";
import Join from "@/components/Join";
import LogoLarge from "@/components/LogoLarge";
import Transition from "@/components/Transition";
import Watermark from "@/components/Watermark";
import { SetTheme } from "../page";

export default function Page() {
  SetTheme();

  return (
    <>
      <Transition>
        {
          <div className="w-screen h-screen flex flex-col items-center justify-center">
            <LogoLarge />
            <Join />
          </div>
        }
      </Transition>
      <Watermark />
    </>
  );
}
