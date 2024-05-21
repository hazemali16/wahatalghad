import { Cairo } from "next/font/google";
import "./globals.css";
import './css/all.min.css'

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "مدارس واحة الغد",
  description: "مدارس واحة الغد",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
