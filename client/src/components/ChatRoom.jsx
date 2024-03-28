import React, { useState, useEffect } from 'react';

const ChatRoom = () => {
    const [conversations, setConversations] = useState([]);

    // Function to fetch conversations from API or data source
    const fetchConversations = () => {
        // Example: Fetch conversations from an API
        // Replace this with actual logic to fetch conversations
        const fetchedConversations = [
            { id: 1, user: 'Client', designer: 'Fashion Designer', message: 'Hi, I need some help with my outfit for an event.' },
            { id: 2, user: 'Fashion Designer', designer: 'Fashion Designer', message: 'Sure, I can assist you with that. What kind of event is it?' },
            // Add more conversation messages as needed
        ];
        setConversations(fetchedConversations);
    }; 

    // Fetch conversations on component mount
    useEffect(() => {
        fetchConversations();
    }, []);

    return (
        <div className="chat-room">
            <h1>Chat Room</h1>
            <div className="conversation-list">
                {conversations.map((conversation) => (
                    <div key={conversation.id} className="conversation">
                        <div className="participant">{conversation.user}</div>
                        <div className="message">{conversation.message}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatRoom;
