"use client";
import { useRouter } from "next/navigation";

export default function GroupId(props: any) {
  const router = useRouter();

  if (!props.valid) {
    router.push('error/Sirkel yang kamu cari gak ada :(');
    return null;
  }
}
