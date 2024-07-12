import Navbard from "@/components/shared/Navbar/Nav";

export default function RootLayout({ children }) {
  return (
    <html>      
      <body className="bg-primary">
        {children}
      </body>
    </html>
  );
}