import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const MessagePanel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch users from API
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
        setActiveUser(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  // Update active user when ID changes
  useEffect(() => {
    if (id && users.length > 0) {
      const selectedUser = users.find((user) => String(user.id) === id);
      setActiveUser(selectedUser || null);
    }
  }, [id, users]);

  // Function to handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      { userId: id, text: currentMessage, fromMe: true, timestamp: new Date() },
    ]);
    setCurrentMessage("");
  };


  // Format time
  const formatTime = (timestamp) => {
    const timeDifference = Math.floor(
      (new Date() - new Date(timestamp)) / 1000 / 60
    );
    if (timeDifference < 60) return `${timeDifference} min ago`;
    if (timeDifference < 1440)
      return `${Math.floor(timeDifference / 60)} hours ago`;
    return `${Math.floor(timeDifference / 1440)} days ago`;
  };
  const [showSuggestedMessages, setShowSuggestedMessages] = useState(true); // State to toggle visibility
  const [suggestedMessages] = useState([
    "Hello, how can I help you?",
    "Can you provide more details?",
    "Thank you for reaching out!",
    "Let me check that for you.",
    "Is there anything else I can assist with?"
  ]);


  // Handle sending a suggested message
  const handleSuggestedMessageClick = (message) => {
    setMessages((prev) => [
      ...prev,
      {
        userId: id,
        text: message,
        fromMe: true,
        timestamp: new Date(),
      },
    ]);
  };
  // console.log(suggestedMessages)

  return (
    <div>
      {/* Message Panel */}
      <div className="flex-1 flex flex-col bg-gray-100 h-screen">
        {/* Chat Header */}
        <div className="p-4 bg-white border-b shadow-sm flex items-center justify-between">
          {activeUser ? (
            <>
              <div className="flex items-center">
                <img
                  src={activeUser.image}
                  alt={activeUser.firstName}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm">
                    {activeUser.firstName} {activeUser.lastName}
                  </p>
                  <p className="text-xs text-gray-500">{activeUser.phone}</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 inline-block text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  {activeUser.address?.city}
                </p>
                <p> {activeUser.address?.address}</p>
              </div>
            </>
          ) : (
            <h2 className="text-lg font-semibold text-gray-500">
              Select a user to start chatting
            </h2>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {id || activeUser?.id ? (
            messages
              .filter((msg) => msg.userId === id)
              .map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.fromMe ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-2 px-4 xl:px-6 rounded-xl max-w-sm text-sm shadow-md ${
                      msg.fromMe
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs text-gray-300 mt-1">
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))
          ) : (
            <p className="text-center text-gray-500">
              No messages yet. Start a conversation!
            </p>
          )}
        </div>

        {activeUser && (
        <div className="p-2 bg-gray-100 border-t">
          {/* Button to toggle show/hide */}
          <button
            onClick={() => setShowSuggestedMessages(prev => !prev)}
            className="mb-2 px-2 py-2 bg-blue-300 text-gray-700 rounded-lg text-sm hover:bg-blue-400 transition"
          >
            {showSuggestedMessages ? 'Hide Suggestions' : 'Show Suggestions'}
          </button>

          {/* Conditionally render the suggested messages */}
          {showSuggestedMessages && (
            <div className="flex gap-2 flex-wrap">
              {suggestedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedMessageClick(msg)}
                  className="px-4 py-2 whitespace-nowrap bg-blue-100 text-blue-700 border border-blue-300 rounded-full text-sm hover:bg-blue-200 hover:border-blue-400 transition shadow-sm"
                >
                  {msg}
                </button>
              ))}
            </div>
          )}
        </div>
      )}


        {/* Message Input */}
        {activeUser && (
          <div className="p-4 bg-white border-t shadow-sm">
            <form
              onSubmit={handleSendMessage}
              className="flex items-center space-x-3"
            >
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition flex items-center space-x-1"
              >
                <PaperAirplaneIcon className="w-5 h-5 transform rotate-90" />
                <span>Send</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagePanel;
