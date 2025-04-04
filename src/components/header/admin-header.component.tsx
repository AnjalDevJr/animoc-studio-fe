import {
  Bell,
  ChevronDown,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

const AdminHeader = () => {
  return (
    <header className="flex h-17 items-center justify-between border-b px-6">
      <SidebarTrigger />

      <div className="flex w-full max-w-md items-center">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search designs, users, or orders..."
            className="w-full pl-8"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <NotificationsDropdown />
        <UserDropdown />
      </div>
    </header>
  );
};

const NotificationsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            3
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between p-2">
          <span className="text-sm font-medium">Notifications</span>
          <Button variant="ghost" size="sm" className="h-auto p-1 text-xs">
            Mark all as read
          </Button>
        </div>
        <DropdownMenuSeparator />
        <div className="max-h-80 overflow-y-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 p-3 hover:bg-muted">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={`/placeholder.svg?height=36&width=36`}
                  alt="User"
                />
                <AvatarFallback>U{i}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm">
                  <span className="font-medium">User {i}</span> purchased your
                  design
                </p>
                <span className="text-xs text-muted-foreground">
                  2 hours ago
                </span>
              </div>
            </div>
          ))}
        </div>
        <DropdownMenuSeparator />
        <div className="p-2 text-center">
          <Button variant="ghost" size="sm" className="w-full text-xs">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <span>Top Magar</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdminHeader;
