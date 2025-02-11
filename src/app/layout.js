import "./globals.css";
import Sidebar from "./components/Siderbar";
import Navbar from "./components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Skill College UI",
  description: "Frontend Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Sidebar />
          <div className="gruopIcon">
            <Image
              src="/Groups.png"
              alt="Skill.College Logo"
              width={39}
              height={34}
              className="profileImage"
            />
          </div>
          <main className="content">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
