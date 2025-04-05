'use client';
import "./globals.css";
import useThemeInitialize from "@/hooks/useThemeInitialize";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useThemeInitialize()

  return (
    <html lang="en">
      <body
        className={`antialiased text-text-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
