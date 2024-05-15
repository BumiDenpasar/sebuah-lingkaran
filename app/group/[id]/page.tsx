import ChatInput from "@/components/ChatInput";
import Chats from "@/components/Chats";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

export default async function page({ params }: any) {
  const { id } = params;
  if (!id) {
    return <div>Error: Group ID is required</div>;
  }


  const { data: chats, error } = await supabase
    .from('chats')
    .select(`
        created_at, 
        chat, 
        id, 
        group:group_id (
        name
        )
    `)
    .eq('group_id', id);

  if (error) {
    console.error(error);
    return <div>Error loading chats</div>;
  }

  
  return (
    <div className="px-8 max-w-xl w-full py-7">
      <Navbar name='lingkaran' />
      <Chats serverChats={chats} group_id={id} />
      <ChatInput id={id} />
    </div>
  )


}
