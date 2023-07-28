import RootLayout from "@/Layouts/RootLayout";
import React from "react";

const ProductDetailsPage = () => {
  return (
    <div className="h-screen">
      <h1>This is product details page</h1>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
