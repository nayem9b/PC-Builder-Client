import RootLayout from "@/Layouts/RootLayout";
import ProductInfoCard from "@/components/categoryPage/productInfoCard";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = ({ singleCategory }) => {
  const router = useRouter();

  return (
    <div>
      <div className="hidden lg:block">
        <div className="text-center justify-center flex mt-16 ">
          <h1>Available</h1>
          <h1 className="text-3xl lg:text-6xl p-4 -mt-5 from-black via-slate-500 to-black bg-gradient-to-r bg-clip-text text-transparent capitalize font-extrabold">
            {router.query.categoryId}'s
          </h1>
          <h2>in stock</h2>
        </div>
      </div>

      <h1 className="capitalize text-center lg:hidden">
        {router.query.categoryId}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 lg:mx-28">
        {singleCategory.map((product) => (
          <ProductInfoCard product={product}></ProductInfoCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://pcbuilderserver.vercel.app/api/category`);
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
    `https://pcbuilderserver.vercel.app/api/category/${params.categoryId}`
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
