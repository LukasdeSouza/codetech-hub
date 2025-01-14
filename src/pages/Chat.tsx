import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const MOCK_GROUPS = [
  { id: 1, name: "React Development", topic: "Frontend" },
  { id: 2, name: "Node.js Discussions", topic: "Backend" },
  { id: 3, name: "DevOps Practices", topic: "Infrastructure" },
  { id: 4, name: "UI/UX Design", topic: "Design" },
  { id: 5, name: "Vagas de Emprego", topic: "Vagas" },
  { id: 6, name: "Dúvidas em Geral", topic: "Dúvidas Geral" },
];

const MOCK_MESSAGES = [
  { id: 1, user: "John", message: "Hey everyone!", timestamp: "10:00 AM" },
  { id: 2, user: "Alice", message: "Hi John!", timestamp: "10:01 AM" },
  { id: 3, user: "Bob", message: "How's everyone doing?", timestamp: "10:02 AM" },
];

const Chat = () => {
  const [selectedGroup, setSelectedGroup] = useState(MOCK_GROUPS[0]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // In a real app, this would send the message to a backend
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Groups List */}
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Chat Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {MOCK_GROUPS.map((group) => (
                    <div
                      key={group.id}
                      onClick={() => setSelectedGroup(group)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedGroup.id === group.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent"
                      }`}
                    >
                      <h3 className="font-medium">{group.name}</h3>
                      <p className="text-sm opacity-80">{group.topic}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="col-span-9">
            <Card className="h-[calc(100vh-12rem)]">
              <CardHeader>
                <CardTitle>{selectedGroup.name}</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col">
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {MOCK_MESSAGES.map((msg) => (
                      <div key={msg.id} className="bg-accent rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{msg.user}</span>
                          <span className="text-sm opacity-70">{msg.timestamp}</span>
                        </div>
                        <p>{msg.message}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2 mt-4">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage}>Send</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;