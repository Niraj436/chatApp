import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div
      className="flex flex-col flex-1 py-2 overflow-auto divide-y-2"
      style={{ maxHeight: "400px" }}
    >
      {conversations.map((conversation) => {
        return (
          <Conversation key={conversation._id} conversation={conversation} />
        );
      })}
    </div>
  );
};

export default Conversations;
