import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [socket, setSocket] = useState<any>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      console.log("Connection established");
      newSocket.send("Hello Server!");
      setSocket(newSocket);
    };
    newSocket.onmessage = (messageEvent) => {
      console.log("Message received:", messageEvent.data);
      setMessages((prevMessages) => [...prevMessages, messageEvent.data]); // Add new message to the list
    };

    return () => {
      newSocket.close();
    };
  }, []);

  // Render "connecting to server" message until the socket is initialized
  if (!socket) {
    return <div>Connecting to server...</div>;
  }

  return (
    <>
      <div className=" flex align-middle gap-6 justify-center mt-8">
        <Input
          className=" w-80 border-blue-400 border-2"
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
        <Button
          className=" "
          onClick={() => {
            socket.send(newMessage);
          }}
        >
          Send
        </Button>
      </div>
      <div className=" justify-center flex gap-5 mt-6">
        <li>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </li>
      </div>
    </>
  );
}

export default App;
