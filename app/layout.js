import { Cairo } from "next/font/google";
import "./globals.css";
import './css/all.min.css'

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "مدارس واحة الغد",
  description: "في مدارس واحة الغد نواكب تنوع وسائل التعليم المشجع لتحقيق التفوق التعليمي والتربوي الذي يسهم في تميز قدرات الأجيال القادمة، نعمل على اكتشاف الموهبة في المراحل المبكرةوتشجيع أساليب ومناهج التعليم المبتكرة لإيجاد المهارات ونقاط القوة التي تميز كل طالب/ة وبناء شخصية قادة الغد.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
