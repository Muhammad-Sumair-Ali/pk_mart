import { MagnifyingGlassIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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




  const [isMobile, setIsMobile] = useState(false);

//   const { allCustomersData:data, isError, isLoading } = useCustomerActions(customerActive);

  const handleResize = () => setIsMobile(window.innerWidth < 720);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCustomerClick = (user) => {
    if (isMobile) {
      navigate(`/chat/user/${user.id}`);
    } else {
      setActiveUser(user);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full bg-white border-r shadow-lg flex flex-col px-2">
        {/* Search Bar */}
        <div className="my-2 bg-gray-100 border-b rounded-md p-2 px-3 flex items-center">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search user..."
            className="ml-2 flex-1 px-2 py-2 bg-transparent border-none focus:outline-none text-sm"
          />
        </div>

        {/* Users List */}
        <ul className="space-y-2 overflow-y-scroll max-h-screen mb-4">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className={`flex items-center p-3 rounded-lg mb-2 shadow-md cursor-pointer bg-gray-100 hover:bg-gray-200 transition ${
                id === String(user.id) ? "bg-blue-300 " : ""
              }`}
              onClick={() => handleCustomerClick(user)}
            >
              <img
                src={user.image}
                alt={user.firstName}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <span className="text-sm font-medium">
                  {user.firstName} {user.lastName}
                </span>
                <p className="text-xs text-gray-500">{user.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Message Panel */}
      <div className="hidden sm:block flex-1 md:flex flex-col bg-gray-50">
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
  );
};

export default ChatPage;
