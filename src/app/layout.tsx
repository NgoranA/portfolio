import Header from "@/components/Header";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import LittleNav from "@/components/LittleNav";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "500", "400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio Home  ",
  description: "This is Ngoran aritide Portfolio home page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-neutral-950")}>
        <Header />
        {children}
        <LittleNav />
      </body>
    </html>
  );
}
