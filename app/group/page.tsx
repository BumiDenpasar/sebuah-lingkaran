import Input from "@/components/Input";
import LogoLarge from "@/components/LogoLarge";
import Transition from "@/components/Transition";
import Watermark from "@/components/Watermark";
import { ThemeConfig } from "@/lib/ThemeConfig";

export default function page() {
  ThemeConfig()

  return (
    <>
      <Transition>
        {
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <LogoLarge />
            <Input/>
        </div>
        }
      </Transition>
      <Watermark />
    </>
  )
}
