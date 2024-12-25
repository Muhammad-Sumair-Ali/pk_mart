import { MagnifyingGlassIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
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
  
    // Filter users
    const filteredUsers = users.filter((user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Format time
    const formatTime = (timestamp) => {
      const timeDifference = Math.floor((new Date() - new Date(timestamp)) / 1000 / 60);
      if (timeDifference < 60) return `${timeDifference} min ago`;
      if (timeDifference < 1440) return `${Math.floor(timeDifference / 60)} hours ago`;
      return `${Math.floor(timeDifference / 1440)} days ago`;
    };
  
  return (
    <div>
       {/* Message Panel */}
      <div className="flex-1 flex flex-col bg-gray-100 h-[85vh]">
        {/* Chat Header */}
        <div className="p-4 bg-white border-b shadow-sm flex items-center">
          {activeUser ? (
            <>
              <img
                src={activeUser.image}
                alt={activeUser.firstName}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h2 className="text-md font-semibold">
                  {activeUser.firstName} {activeUser.lastName}
                </h2>
                <p className="text-xs text-gray-500">{activeUser?.phone}</p>
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
          {id ? (
            messages
              .filter((msg) => msg.userId === id)
              .map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
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

        {/* Message Input */}
        {id && (
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
  )
}

export default MessagePanel