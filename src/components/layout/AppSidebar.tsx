"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ClipboardCheck,
  Home,
  LogIn,
  Milestone,
  Rocket,
  Shield,
  UserPlus,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/Logo";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/resources", label: "Resource Library", icon: BookOpen },
  { href: "/quizzes", label: "Interactive Quizzes", icon: ClipboardCheck },
  { href: "/career-roadmap", label: "Career Roadmap", icon: Milestone },
  { href: "/community", label: "Community & Mentors", icon: Users },
];

const adminMenuItems = [
    { href: "/admin", label: "Admin Panel", icon: Shield },
]

const authMenuItems = [
    { href: "/login", label: "Login", icon: LogIn },
    { href: "/signup", label: "Sign Up", icon: UserPlus },
]

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  const isActive = (path: string) => {
    if (path === "/dashboard") return pathname === path;
    return pathname.startsWith(path) && path !== "/";
  };
  
  if (pathname === '/') {
    return null;
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
                <Rocket className="text-primary-foreground" />
            </div>
            <div className={state === 'collapsed' ? 'hidden' : 'block'}>
                <Logo />
            </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={{ children: item.label }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <Separator className="my-4"/>
        <SidebarMenu>
          {adminMenuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={{ children: item.label }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="mb-2" />
        <div className="flex flex-col gap-2">
             {authMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                    isActive={isActive(item.href)}
                    tooltip={{ children: item.label }}
                    >
                    <item.icon />
                    <span>{item.label}</span>
                    </SidebarMenuButton>
                </Link>
                </SidebarMenuItem>
            ))}
        </div>
        <Separator className="my-2" />
        <div className={`flex items-center gap-3 ${state === "collapsed" ? "justify-center" : ""}`}>
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://placehold.co/100x100" alt="User" data-ai-hint="user avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className={`${state === "collapsed" ? "hidden" : "block"}`}>
            <p className="font-semibold text-sm">Guest User</p>
            <p className="text-xs text-muted-foreground">Student</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
