import RootLayout from "@/Layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = ({ productDetails }) => {
  const sigleProductDetails = productDetails[0];
  return (
    <div className="h-screen">
      <article itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div class="order-2 h-64 md:order-1 md:h-full">
            <img
              src="/brand/og.png"
              class="object-cover w-full h-full bg-center"
              alt="Kutty"
            />
          </div>
          <div class="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
            <p class="mb-3 text-gray-500">
              <time
                itemprop="datePublished dateModified"
                datetime="2010-08-07 11:11:03-0400"
                pubdate
              >
                Jan 02 2021
              </time>
            </p>
            <h1
              class="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
              itemprop="headline"
              title="Rise of Tailwind - A Utility First CSS Framework"
            >
              Rise of Tailwind - A Utility First CSS Framework
            </h1>
            <a class="flex items-center text-gray-700" href="#">
              <div class="avatar">
                <img src="/placeholder.jpg" alt="Photo of Praveen Juge" />
              </div>
              <div class="ml-2">
                <p class="text-sm font-semibold text-gray-800">Praveen Juge</p>
                <p class="text-sm text-gray-500">Swell Guy</p>
              </div>
            </a>
          </div>
        </div>

        <div class="px-4 py-20 mx-auto prose">
          <p>
            What if there is an easy way to achieve responsive UI without using
            any UI kit? Can we create new and fresh designs for every project
            with a CSS framework? Enter Tailwind CSS, will this be the perfect
            CSS framework, well let’s find out.
          </p>
          <p>
            Tailwind is a utility-first CSS framework, the keyword being
            ‘utility’. It is basically a set of classes that you can use in your
            HTML.
          </p>

          <p>
            Therefore, we don’t have to write any custom CSS to get this button.
            This can be heavily extended to build whole web applications without
            the need for any other styles apart from a tailwind.
          </p>
          <p>...</p>
        </div>
      </article>
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
