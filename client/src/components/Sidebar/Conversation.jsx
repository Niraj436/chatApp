import React from "react";
import useConversation from "../../zustand/useConverstion";

const Conversation = ({conversation}) => {
  const {selectedConversation , setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  return (
    <div className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer  ${isSelected ? "bg-sky-400": ""}`}
    onClick={()=>{setSelectedConversation(conversation)}}>
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={conversation.profilePic} alt="User Profile" />
        </div>
      </div>
      <div className="">
        <p className="font-bold text-white">{conversation.fullName}</p>

        <div></div>
      </div>
    </div>
  );
};

export default Conversation;
