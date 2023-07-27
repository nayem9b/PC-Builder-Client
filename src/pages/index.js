import Image from "next/image";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RootLayout from "@/Layouts/RootLayout";

export default function HomePage() {
  return (
    <div>
      <p className="text-red-400 text-3xl">This is a text</p>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
