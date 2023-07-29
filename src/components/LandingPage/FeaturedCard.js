import React from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
const FeaturedCard = ({ product }) => {
  return (
    <div className="border rounded-2xl">
      <Link
        href={`/productdetails/${product._id}`}
        class="group block overflow-hidden mx-3 my-3"
      >
        <div class="relative h-[350px] sm:h-[450px]">
          <img
            src={product?.image}
            alt=""
            class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src={product?.image}
            alt=""
            class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>

        <div class="relative bg-white pt-3">
          <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {product.productName}
          </h3>
          <div class=" flex items-center justify-between text-gray-900">
            <p class="tracking-wide">{product.status}</p>

            <p class="text-xs uppercase tracking-wide">
              Category: {product?.category}
            </p>
          </div>
          <div class="mt-1.5 flex items-center justify-between text-gray-900">
            <p class="tracking-wide">${product.price}</p>

            <p class="text-xs uppercase tracking-wide">
              Rating: {product?.rating} ⭐
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;
