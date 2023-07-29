import { HeartIcon } from "@/shared/button/HeartIcon/HeartIcon";
import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/router";
const ProductInfoCard = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToBuilder = async () => {
    await dispatch(addToCart(product));
    router.push("/pcbuilder");
  };
  return (
    <div>
      <Link
        href={`/productdetails/${product._id}`}
        class="block rounded-lg p-4 shadow-sm shadow-indigo-100"
      >
        <img
          alt="Home"
          src={product?.image}
          class="h-56 w-full rounded-md object-cover"
        />
      </Link>
      <div class="mt-2">
        <div className="flex justify-between">
          <div>
            <dd class="text-sm text-gray-500">${product.price}</dd>

            <dd class="font-medium">{product.productName}</dd>
          </div>

          <Button
            auto
            color="success"
            icon={<HeartIcon fill="currentColor" filled />}
            onClick={handleAddToBuilder}
          >
            Add to builder
          </Button>
        </div>

        <div class="mt-6 flex items-center gap-8 text-xs">
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Category</p>

              <p class="font-medium">{product.category}</p>
            </div>
          </div>

          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Rating</p>

              <p class="font-medium">{product.rating}</p>
            </div>
          </div>

          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Status</p>

              <p class="font-medium">{product.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
