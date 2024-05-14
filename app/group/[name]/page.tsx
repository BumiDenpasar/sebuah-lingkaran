import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import Navbar from "@/components/Navbar";

export default function page({params}:any) {
    return(
        <div className="px-8 max-w-xl py-7">
             <Navbar name={params.name}/>

             <div className="space-y-3 mt-20 mb-20">
                <Chat time='10.30' chat='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis' />
               
             </div>
             <ChatInput />
        </div>
    )
}
