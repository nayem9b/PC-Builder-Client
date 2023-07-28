import RootLayout from "@/Layouts/RootLayout";
import FeaturedCard from "../components/LandingPage/FeaturedCard";
import FeaturedCategory from "@/components/LandingPage/FeaturedCategory";
import Link from "next/link";
import TrustedBy from "@/components/LandingPage/TrustedBy";
import Testimonial from "@/components/LandingPage/Testimonial";
import WatchCTA from "@/components/LandingPage/WatchCTA";

export default function HomePage({ featured }) {
  const featuredCategories = [
    { name: "Processor", route: "/category/processor" },
    { name: "Ram", route: "/category/ram" },
    { name: "Monitor", route: "/category/monitor" },
  ];
  return (
    <div>
      <WatchCTA></WatchCTA>
      <div className="grid grid-cols-3 gap-4">
        {featured?.map((product) => (
          <FeaturedCard key={product.image} product={product}></FeaturedCard>
        ))}
      </div>
      <div className="grid grid-cols-4">
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
  const res = await fetch("http://localhost:5000/api/products");
  const data = await res.json();
  const selectedData = data.slice(0, 3);
  console.log("selectedData:", selectedData);
  return {
    props: {
      featured: data,
    },
  };
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
