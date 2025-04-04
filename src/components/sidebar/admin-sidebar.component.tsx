import type React from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  BarChart3,
  Image,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from "lucide-react";

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

interface NavItem {
  title: string;
  icon: React.ElementType;
  to: string;
  badge?: number;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const AdminSidebar = () => {
  const location = useLocation();

  const navItems: NavGroup[] = [
    {
      title: "Main Menu",
      items: [
        {
          title: "Dashboard",
          icon: LayoutDashboard,
          to: "/admin",
        },
        {
          title: "Designs",
          icon: Image,
          to: "/admin/designs",
        },
        {
          title: "Chat",
          icon: MessageSquare,
          to: "/admin/chat",
          badge: 3,
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          title: "Settings",
          icon: Settings,
          to: "/admin/settings",
        },
      ],
    },
  ];

  return (
    <div>
      <SidebarComponent>
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2 px-2 py-3">
            <BarChart3 className="h-6 w-6" />
            <span className="text-lg font-semibold">
              ANIMOC<sup>™</sup> Studio
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {navItems.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === item.to}
                      >
                        <NavLink
                          to={item.to}
                          className="flex items-center gap-2"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          {item.badge && (
                            <Badge
                              className="ml-auto bg-primary text-primary-foreground"
                              variant="secondary"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Top Magar</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
          </div>
        </SidebarFooter>
      </SidebarComponent>
    </div>
  );
};

export default AdminSidebar;
