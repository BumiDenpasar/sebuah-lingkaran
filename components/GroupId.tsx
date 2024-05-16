'use client'
import { useRouter } from "next/navigation";

export default function GroupId(props:any) {
    const router = useRouter()

    if (!props.valid) {
        alert('Sirkel yang kamu cari gak ada')
        router.push('/'); // Redirect ke root jika ID grup tidak valid
        return null;
      }
    
}
