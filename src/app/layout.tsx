import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahid Zaman | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React.js, Next.js, .NET Core, Node.js, SQL Server, and modern web application development.",
  openGraph: {
    title: "Shahid Zaman | Full Stack Developer",
    description:
      "Building scalable, responsive, and real-time web applications.",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
