export const metadata = {
  title: "Server Streaming",
  description: "Server streaming example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
