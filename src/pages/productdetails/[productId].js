import RootLayout from "@/Layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = ({ productDetails }) => {
  const sigleProductDetails = productDetails[0];
  return (
    <div className="h-screen">
      <h1>This is product details page of {sigleProductDetails.productName}</h1>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/api/products`);
  const productDetails = await res.json();
  const paths = productDetails.map((details) => ({
    params: { productId: details._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/products/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      productDetails: data,
    },
  };
};
