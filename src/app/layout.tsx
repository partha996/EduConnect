import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { Literata, PT_Sans } from "next/font/google";

const literata = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-pt-sans",
});

export const metadata: Metadata = {
  title: "EduConnect India",
  description: "Empowering rural students with resources, guidance, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${literata.variable} ${ptSans.variable}`}>
      <body className="font-body antialiased">
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
          </div>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
