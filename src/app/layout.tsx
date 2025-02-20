"use client";
import "../styles/globals.css";
import GoogleOneTap from "@/components/GoogleOneTap"; // Import the component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleOneTap /> {/* Now it will work properly */}
        {children}
      </body>
    </html>
  );
}
