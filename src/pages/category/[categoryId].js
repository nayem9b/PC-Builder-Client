import RootLayout from "@/Layouts/RootLayout";
import React from "react";

const CategoryPage = ({ singleCategory }) => {
  return (
    <div>
      {singleCategory.map((product) => (
        <div>
          <h1>{product.productName}</h1>
          <h1>{product.price}</h1>
        </div>
      ))}
      <h1>Hello</h1>
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
