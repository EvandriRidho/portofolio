import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Personal portfolio built with Next.js + TypeScript + Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex items-center justify-center gap-8 py-6 border-b border-gray-800">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>


        <main>
          {children}
        </main>

        <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Evandri Ridho Hasmono — Built with{" "}
          <span className="text-blue-400">Next.js</span> &{" "}
          <span className="text-blue-400">Tailwind CSS</span>
        </footer>
      </body>
    </html>
  );
}
