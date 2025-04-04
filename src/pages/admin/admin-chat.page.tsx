import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

const AdminChatPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Chat</h1>
      <Card className="flex h-[calc(100vh-12rem)] flex-col">
        <div className="border-b p-4">
          <h2 className="font-semibold">Customer Support</h2>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-start gap-2">
                  <Avatar className="mt-1">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm">
                      Hello, I have a question about my order.
                    </p>
                    <span className="mt-1 text-xs text-muted-foreground">
                      10:30 AM
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-2">
                  <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                    <p className="text-sm">
                      Hi there! I'd be happy to help. What's your order number?
                    </p>
                    <span className="mt-1 text-xs text-primary-foreground/80">
                      10:32 AM
                    </span>
                  </div>
                  <Avatar className="mt-1">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Admin"
                    />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button>Send</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminChatPage;
