export const metadata = {
  title: "Doctor's Note",
  description: "Login and Signup App with Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
