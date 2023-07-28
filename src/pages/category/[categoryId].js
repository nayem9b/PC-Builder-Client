import RootLayout from "@/Layouts/RootLayout";
import ProductInfoCard from "@/components/categoryPage/productInfoCard";
import React from "react";

const CategoryPage = ({ singleCategory }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {singleCategory.map((product) => (
        <ProductInfoCard product={product}></ProductInfoCard>
      ))}
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/api/category`);
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { categoryId: category.category },
  }));
  console.log(categories, paths);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `http://localhost:5000/api/category/${params.categoryId}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      singleCategory: data,
    },
    revalidate: 30,
  };
};
