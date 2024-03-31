import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, Window, MessageList, MessageInput } from 'stream-chat-react';
// import 'stream-chat-react/dist/css/index.css';

const ChatComponent = ({user}) => {
  const [chatClient, setChatClient] = useState(null);
  useEffect(() => {
    const initializeChat = async () => {
      const apiKey = '5ttvz9utwxgt';
      const apiSecret = 'yw5h9rzkrn7ay9hmepau7vuk967pxma6x7fn5khrb5yaswg2qdjs8whk9su755bx'; // Assuming user object has an 'id' property
      
      const client = new StreamChat(apiKey,apiSecret)
      await client.connectUser({ id: user.id }, token);
      
      setChatClient(client);
    };

    initializeChat();
  }, [user]);

  return (
    <div className="App">
      {chatClient && (
        <Chat client={chatClient} theme="messaging light">
          <Channel channel={{ type: 'messaging', id: 'general' }}>
            <Window>
              <ChannelHeader />
              <MessageList // Custom MessageList component to display sender names
                Message={(props, index, messages) => {
                  const message = messages[index];
                  const senderName = message.user && message.user.name;
                  return <MessageList.Message {...props}>{senderName ? senderName + ': ' : ''}{props.message.text}</MessageList.Message>;
                }}
              />
              <MessageInput />
            </Window>
          </Channel>
        </Chat>
      )}
    </div>
  );
};

export default ChatComponent;
