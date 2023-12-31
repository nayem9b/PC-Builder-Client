import RootLayout from "@/Layouts/RootLayout";
import FeaturedCard from "../components/LandingPage/FeaturedCard";
import FeaturedCategory from "@/components/LandingPage/FeaturedCategory";
import Link from "next/link";
import TrustedBy from "@/components/LandingPage/TrustedBy";
import Testimonial from "@/components/LandingPage/Testimonial";
import WatchCTA from "@/components/LandingPage/WatchCTA";

export default function HomePage({ featured, featuredCategories }) {
  return (
    <div>
      <WatchCTA></WatchCTA>
      <p className="text-center mb-10 text-4xl lg:text-6xl font-extrabold">
        Featured Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 lg:mx-32">
        {featured?.map((product) => (
          <FeaturedCard key={product.image} product={product}></FeaturedCard>
        ))}
      </div>
      <p className="text-center m-10 text-4xl lg:text-6xl font-extrabold">
        Featured Categories
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mx-5 lg:mx-32 gap-4">
        {featuredCategories.map((featuredCategory) => (
          <Link href={featuredCategory.route}>
            <FeaturedCategory
              featuredCategory={featuredCategory}
            ></FeaturedCategory>
          </Link>
        ))}
      </div>
      <TrustedBy></TrustedBy>
      <Testimonial></Testimonial>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pcbuilderserver.vercel.app/api/products");
  const data = await res.json();
  const response = await fetch(
    "https://pcbuilderserver.vercel.app/api/categories"
  );
  const featuredCategory = await response.json();
  const selectedData = data.slice(0, 6);
  console.log(featuredCategory);
  return {
    props: {
      featured: selectedData,
      featuredCategories: featuredCategory,
    },
  };
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
