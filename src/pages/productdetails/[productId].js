import RootLayout from "@/Layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { HeartIcon } from "@/shared/button/HeartIcon/HeartIcon";
import { Button } from "@nextui-org/react";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetailsPage = ({ productDetails }) => {
  const singleProductDetails = productDetails[0];
  const features = singleProductDetails.keyFeatures;
  console.log(features);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToBuilder = async () => {
    await dispatch(addToCart(singleProductDetails));
    router.push("/pcbuilder");
  };

  return (
    <div className="mx-5 lg:mx-28">
      <article itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <Image
            src={singleProductDetails?.image}
            width={600}
            height={800}
          ></Image>

          <div class="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
            <p class="mb-3 text-gray-500">
              <time
                itemprop="datePublished dateModified"
                datetime="2010-08-07 11:11:03-0400"
                pubdate
              >
                JULY 30 2023
              </time>
            </p>
            <h1
              class="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
              itemprop="headline"
              title="Rise of Tailwind - A Utility First CSS Framework"
            >
              {singleProductDetails.productName}
            </h1>
            <p className="text-2xl font-semibold">
              Price: ${singleProductDetails.price}
            </p>
            <p className="text-2xl font-semibold">
              Category: {singleProductDetails.category}
            </p>

            <p className="text-2xl font-semibold">
              Status: {singleProductDetails.status}
            </p>
            <p className="text-2xl font-semibold">
              Rating: {singleProductDetails.rating} ✨
            </p>
            <p>
              {features.map((feature) => (
                <div>
                  <p>{feature?.Model}</p>
                  <p>{feature?.Resolution}</p>
                  <p>{feature?.ClockSpeed}</p>
                  <p>{feature?.Frequency}</p>
                  <p>{feature?.Capacity}</p>
                  <p>{feature?.L1Cache}</p>
                  <p>{feature?.CPUSocket}</p>
                  <p>{feature?.MemoryArchitecture}</p>
                  <p>{feature?.Ports}</p>
                </div>
              ))}
            </p>
            <Button
              auto
              color="success"
              onClick={handleAddToBuilder}
              className="mr-3 mt-3"
            >
              Add to builder
            </Button>
          </div>
        </div>

        <div class=" mx-auto prose">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                Reviews ✨
              </h1>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-100 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">
                      This product impressed me from the moment I unboxed it.
                      Its sleek design and premium materials make it a stylish
                      addition to any setting. Functionally, it's versatile and
                      user-friendly, adapting to various tasks seamlessly. The
                      durability is exceptional, and the setup was quick and
                      hassle-free. I appreciated its energy efficiency and the
                      responsive customer support. While more color options
                      would be nice, this product is a reliable and stylish
                      solution. I highly recommend it.
                    </p>
                    <a class="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/106x106"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          Holden Caulfield
                        </span>
                        <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-100 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">
                      I'm thoroughly impressed with this product. The design is
                      sleek and modern, blending perfectly with any environment.
                      It performs exceptionally well, and setup was a breeze.
                      Its energy efficiency is a bonus. While more color options
                      would be great, this product is reliable and stylish.
                      Highly recommended!
                    </p>
                    <a class="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/107x107"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          Alper Kamu
                        </span>
                        <span class="text-gray-500 text-sm">DESIGNER</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
  const res = await fetch(`https://pcbuilderserver.vercel.app/api/products`);
  const productDetails = await res.json();
  const paths = productDetails.map((details) => ({
    params: { productId: details._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pcbuilderserver.vercel.app/api/products/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      productDetails: data,
    },
  };
};
