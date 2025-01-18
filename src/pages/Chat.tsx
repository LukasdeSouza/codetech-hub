import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

const MOCK_GROUPS = [
  { id: 1, name: "React Development", topic: "Frontend" },
  { id: 2, name: "Node.js Discussions", topic: "Backend" },
  { id: 3, name: "DevOps Practices", topic: "Infrastructure" },
  { id: 4, name: "UI/UX Design", topic: "Design" },
  { id: 5, name: "Vagas de Emprego", topic: "Vagas" },
  { id: 6, name: "Dúvidas em Geral", topic: "Dúvidas Geral" },
];

// Mock user names for random selection
const MOCK_USERNAMES = ["João", "Maria", "Pedro", "Ana", "Carlos", "Lucia"];

const Chat = () => {
  const [selectedGroup, setSelectedGroup] = useState(MOCK_GROUPS[0]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{[key: number]: any[]}>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initialize messages for each group
  useEffect(() => {
    const initialMessages: {[key: number]: any[]} = {};
    MOCK_GROUPS.forEach(group => {
      initialMessages[group.id] = [];
    });
    setMessages(initialMessages);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: localStorage.getItem("userName") || "Usuário",
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => ({
      ...prev,
      [selectedGroup.id]: [...(prev[selectedGroup.id] || []), newMessage]
    }));

    setMessage("");

    // Simulate receiving a response after a random delay
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        user: MOCK_USERNAMES[Math.floor(Math.random() * MOCK_USERNAMES.length)],
        message: `Resposta automática para: ${message}`,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prev => ({
        ...prev,
        [selectedGroup.id]: [...(prev[selectedGroup.id] || []), botMessage]
      }));

      toast({
        title: "Nova mensagem",
        description: `${botMessage.user} respondeu no grupo ${selectedGroup.name}`,
      });
    }, Math.random() * 2000 + 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Groups List */}
          <div className="col-span-12 md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Grupos de Chat</CardTitle>
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
          <div className="col-span-12 md:col-span-9">
            <Card className="h-[calc(100vh-12rem)]">
              <CardHeader>
                <CardTitle>{selectedGroup.name}</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col">
                <ScrollArea className="flex-1 pr-4" ref={scrollRef}>
                  <div className="space-y-4">
                    {messages[selectedGroup.id]?.map((msg) => (
                      <div 
                        key={msg.id} 
                        className={`bg-accent rounded-lg p-3 ${
                          msg.user === (localStorage.getItem("userName") || "Usuário")
                            ? "ml-auto bg-primary text-primary-foreground max-w-[80%]"
                            : "mr-auto max-w-[80%]"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{msg.user}</span>
                          <span className="text-sm opacity-70">{msg.timestamp}</span>
                        </div>
                        <p className="break-words">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2 mt-4">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage}>Enviar</Button>
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