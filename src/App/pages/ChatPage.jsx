import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([]); // Initialize as an array
  const [currentMessage, setCurrentMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [isMobile, setIsMobile] = useState(false);
  const [showSuggestedMessages, setShowSuggestedMessages] = useState(true); // State to toggle visibility
  const [suggestedMessages] = useState([
    "Hello, how can I help you?",
    "Can you provide more details?",
    "Thank you for reaching out!",
    "Let me check that for you.",
    "Is there anything else I can assist with?",
  ]);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/users");
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Update active user when ID changes
  useEffect(() => {
    if (id && users.length > 0) {
      const selectedUser = users.find((user) => String(user.id) === id);
      setActiveUser(selectedUser || null);
    } else {
      setActiveUser(null);
    }
  }, [id, users]);

  // Handle window resize for mobile responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 720);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

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

  // Handle clicking a user
  const handleUserClick = (user) => {
    if (isMobile) {
      navigate(`/chat/user/${user.id}`);
    } else {
      setActiveUser(user);
      navigate(`/chat/${user.id}`);
    }
  };

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

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="md:w-1/4 lg:w-1/4 w-full bg-white border-r shadow-lg flex flex-col">
        <h2 className="text-center w-full px-4 py-3 text-md bg-blue-500 text-white">
          JZ Mart Messages
        </h2>

        {/* Search Bar */}
        <div className="mt-2 mb-1 bg-gray-100 border-b rounded-md p-2 px-3 flex items-center mx-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-blue-600" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search user..."
            className="ml-2 flex-1 px-2 py-2 bg-transparent border-none focus:outline-none text-sm"
          />
        </div>

        {/* Users List */}
        <ul className="space-y-3 overflow-y-scroll max-h-screen mb-4 px-2">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className={`flex items-center justify-between p-2 rounded-lg mb-2 shadow-md cursor-pointer py-4 h-20
                 ${
                   String(activeUser?.id) === String(user.id)
                     ? "bg-blue-300"
                     : "bg-gray-100 hover:bg-gray-200"
                 }`}
              onClick={() => handleUserClick(user)}
            >
              <div className="flex items-center">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-gray-500">{user.phone}</p>
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
                  {user.address?.city}
                </p>
                <p> {user.address?.address}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Panel */}
      <div className="flex-1 flex flex-col bg-gray-100">
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
              onClick={() => setShowSuggestedMessages((prev) => !prev)}
              className="mb-2 px-2 py-2 bg-blue-300 text-gray-700 rounded-lg text-sm hover:bg-blue-400 transition"
            >
              {showSuggestedMessages ? "Hide Suggestions" : "Show Suggestions"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5  inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
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
      </div>
    </div>
  );
};

export default ChatPage;
