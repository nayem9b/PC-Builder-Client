import Image from "next/image";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RootLayout from "@/Layouts/RootLayout";

export default function HomePage() {
  return (
    <div>
      <h1>This is a text</h1>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
