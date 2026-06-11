import "./globals.css";

export const metadata = {
  title: "JJ Marine Logistics & HR Solutions",
  description: "Global maritime logistics and human resource solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
