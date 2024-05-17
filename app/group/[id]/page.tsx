import ChatInput from "@/components/ChatInput";
import Chats from "@/components/Chats";
import GroupId from "@/components/GroupId";
import Navbar from "@/components/Navbar";
import { checkGroupID } from "@/lib/groupUtils";
import { supabase } from "@/lib/supabase";

export default async function page({ params }: any) {
  // Buat ngambil id dari params
  const { id } = params;
  // Ngecek apakah id dari params itu ada di databasenya
  const isGroupValid = await checkGroupID(id);

  // Dapetin data chats berdasarkan group id
  const { data: chats, error } = await supabase
    .from("chats")
    .select(
      `
        created_at, 
        chat, 
        id, 
        group:group_id (
        name
        )
    `
    )
    .eq("group_id", id);

  if (error) {
    return <div>Error loading chats</div>;
  }

  return (
    <div className="px-8 max-w-xl w-screen py-7">
      <GroupId valid={isGroupValid} />

      <Navbar name="Sebuah Lingkaran" group_id={id} />

      <Chats serverChats={chats} group_id={id} />
      <ChatInput id={id} />
    </div>
  );
}
