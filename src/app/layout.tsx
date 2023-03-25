import "./globals.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="m-0 h-screen">{children}</body>
    </html>
  );
}
