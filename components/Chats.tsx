"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import { useRef } from "react";

export default function Chats({ serverChats, group_id }: any) {
  // Dapetin data chat awal
  const [chats, setChats] = useState(serverChats ?? []);

  // Autoscroll ke paling bawah
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Dapetin data chat baru secara realtime dari supabase
  useEffect(() => {
    const channel = supabase
      .channel("chats")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chats",
          filter: `group_id=eq.${group_id}`,
        },
        (payload) => {
          setChats((prevChats: any) => [...prevChats, payload.new]);
        }
      )
      .subscribe();

    const fetchChats = async () => {
      const { data: latestChats, error } = await supabase
        .from("chats")
        .select("created_at, chat, id")
        .eq("group_id", group_id);

      if (error) {
        console.error("Error fetching chats:", error);
      } else {
        setChats(latestChats);
      }
    };

    fetchChats();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [group_id]);

  // Autoscroll setiap ada chat baru
  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  // Dapetin jamnya
  function getHourMinutes(datetimeStr: any) {
    const datetimeObj = new Date(datetimeStr);
    const hour = datetimeObj.getHours();
    const minutes = datetimeObj.getMinutes();

    const formattedTime = `${hour}:${minutes.toString().padStart(2, "0")}`;

    return formattedTime;
  }

  return (
    <div className="space-y-3 w-full mt-20 mb-16">
      {chats.map((chat: any) => (
        <Chat
          key={chat.id}
          time={getHourMinutes(chat.created_at)}
          chat={chat.chat}
        />
      ))}
      <div className="h-1" ref={messagesEndRef} />
    </div>
  );
}
