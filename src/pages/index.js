import RootLayout from "@/Layouts/RootLayout";
import FeaturedCard from "../components/LandingPage/FeaturedCard";
import { useGetProductsQuery } from "./redux/api/api";
import FeaturedCategory from "@/components/LandingPage/FeaturedCategory";

export default function HomePage({ featured }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {featured?.map((product) => (
          <FeaturedCard key={product.image} product={product}></FeaturedCard>
        ))}
      </div>
      <FeaturedCategory></FeaturedCategory>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/featured");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      featured: data,
    },
  };
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
