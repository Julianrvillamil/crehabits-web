"use client";
import { metadata } from "./metadata";
import ThemeRegistry from "@/components/ThemeRegistry";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar"; 
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "CreHabits",
//   description: "App para mejorar hábitos",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname(); // Obtener la ruta actual
  const hideSidebarRoutes = ["/login", "/registrarse"]; // paginas donde no debe aparecer el navbar

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
        <div style={{ display: "flex" }}>
            {!hideSidebarRoutes.includes(pathname) && <Sidebar />}
            <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
