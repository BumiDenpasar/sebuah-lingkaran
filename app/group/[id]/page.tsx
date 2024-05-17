import ChatInput from "@/components/ChatInput";
import Chats from "@/components/Chats";
import GroupId from "@/components/GroupId";
import Navbar from "@/components/Navbar";
import Tutorial from "@/components/Tutorial";
import { checkGroupID } from "@/lib/groupUtils";
import { supabase } from "@/lib/supabase";

export default async function page({ params }: any) {
  const { id } = params;

  const isGroupValid = await checkGroupID(id);

  
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
    <div className="px-8 max-w-xl w-screen py-7">
      <GroupId valid={isGroupValid} />

      <Navbar name='Sebuah Lingkaran' group_id={id}/>
      <Tutorial />
      
      <Chats serverChats={chats} group_id={id} />
      <ChatInput id={id} />
    </div>
  )


}
