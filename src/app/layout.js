import "./globals.css";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Vyomkesh Hair Care | Home",
  description: "Landing page for Vyomkesh Hair care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Topbar />
        <Navbar />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
