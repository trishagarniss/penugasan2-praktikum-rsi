import type { Metadata } from "next";
import Link from "next/link"
import { Geist, Geist_Mono, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const interHeading = Inter({subsets:['latin'],variable:'--font-heading'});

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acara RSI",
  description: "Aplikasi manajemen pendaftaran acara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", dmSans.variable, interHeading.variable)}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b">
          <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <Link href="/" className="text-lg font-bold">Acara RSI</Link>
            <nav className="flex gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/register">Register</Link>
              </Button>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t">
          <div className="mx-auto flex max-w-5xl items-center justify-between p-4 text-sm text-muted-foreground">
            <span>&copy; 2026 Acara RSI</span>
            <nav className="flex gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/register">Register</Link>
              </Button>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
