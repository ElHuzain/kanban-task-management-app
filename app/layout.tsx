'use client';
import "./globals.css";
import useThemeInitialize from "@/hooks/useThemeInitialize";
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plus-jakarta-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useThemeInitialize()
  return (
    <html lang="en">
      <body
        className={`antialiased text-text-secondary ${plusJakartaSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
