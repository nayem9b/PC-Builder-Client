import RootLayout from "@/Layouts/RootLayout";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { Button, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const pcbuilder = ({ pcBuilder, session }) => {
  const { products } = useSelector((state) => state.builder);
  const { total } = useSelector((state) => state.builder);
  const [areArraysEqual, setAreArraysEqual] = useState(false);
  console.log(areArraysEqual);
  const selectedProductcategories = [];
  const pcBuilderCategories = [];

  useEffect(() => {
    products.forEach((element) => {
      selectedProductcategories.push(element.category);
    });
    pcBuilder.forEach((element) => {
      pcBuilderCategories.push(element.category);
    });

    const compareArrays = (arr1, arr2) => {
      if (arr1.length !== arr2.length) {
        return false;
      }
      const sortedArr1 = arr1.slice().sort();
      const sortedArr2 = arr2.slice().sort();
      // Compare each element of the arrays
      for (let i = 0; i < arr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
          return false;
        }
      }

      return true;
    };
    if (compareArrays(selectedProductcategories, pcBuilderCategories)) {
      setAreArraysEqual(true);
    }
  }, [selectedProductcategories]);

  const handlePCBuild = () => {
    if (areArraysEqual) {
      toast.success("We will contact you soon");
    }
  };

  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 place-content-center justify-items-center">
      <h1 className="text-center mb-10">PC Builder</h1>
      {pcBuilder.map((item) => (
        <div className="bg-blue-50 rounded-3xl mx-8 border w-11/12 lg:w-5/12 m-5">
          <div className=" flex justify-between mt-3 mx-3">
            <p className="text-3xl mb-4">{item.itemName}</p>

            <Button flat color="secondary" auto>
              <Link href={item.route}> Choose</Link>
            </Button>
          </div>
          {products.map((product) => (
            <>
              {product.category === item.category && (
                <div className=" flex items-center justify-between mx-3 mb-3">
                  <div className="flex gap-4">
                    <Image
                      src={product.image}
                      height={60}
                      width={80}
                      alt="image"
                    ></Image>
                    <div className="flex items-center">
                      <div>
                        <p className="font-bold">{product.productName}</p>
                        <p>${product.price}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    flat
                    color="error"
                    auto
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </>
          ))}
        </div>
      ))}
      <button
        className={
          areArraysEqual
            ? "text-center flex justify-center items-center mx-auto bg-green-400 px-4 py-2 rounded-lg"
            : " text-center flex justify-center items-center mx-auto bg-gray-300 px-4 py-2 cursor-not-allowed rounded-lg"
        }
        onClick={handlePCBuild}
      >
        Confirm
      </button>
    </div>
  );
};

export default pcbuilder;

pcbuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://pcbuilderserver.vercel.app/api/pcbuilder`);
  const data = await res.json();
  const session = await getSession(context);
  console.log(data);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        parmanent: false,
      },
    };
  }
  return {
    props: {
      pcBuilder: data,
      session: session,
    },
  };
};
