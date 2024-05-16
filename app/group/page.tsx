import Input from "@/components/Input";
import LogoLarge from "@/components/LogoLarge";
import Transition from "@/components/Transition";
import Watermark from "@/components/Watermark";

export default function page() {
  return (
    <Transition>
      {
      <div className="w-screen h-screen flex flex-col items-center justify-center">
          <LogoLarge />
          <Input/>
          <Watermark />
      </div>
      }
    </Transition>
  )
}
