import RootLayout from "@/Layouts/RootLayout";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { Button, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const pcbuilder = ({ pcBuilder, session }) => {
  const { products } = useSelector((state) => state.builder);
  console.log(products);
  const dispatch = useDispatch();
  return (
    <div className="h-screen">
      <h1 className="text-center mb-10">PC Builder</h1>
      {pcBuilder.map((item) => (
        <div className="bg-blue-50 rounded-3xl mx-auto border w-8/12 m-7 p-3 ">
          <div className="w-2/6 flex  justify-between mx-auto ">
            <p className="text-3xl mb-4">{item.itemName}</p>

            <Button flat color="secondary" auto>
              <Link href={item.route}> Choose</Link>
            </Button>
          </div>
          {products.map((product) => (
            <>
              {product.category === item.itemName && (
                <div className="w-2/6 flex items-center  justify-between mx-auto">
                  <div className="flex gap-4">
                    <Image
                      src={product.image}
                      height={60}
                      width={80}
                      alt="image"
                    ></Image>
                    <div className="flex items-center">
                      <div>
                        <p>{product.category}</p>
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
    </div>
  );
};

export default pcbuilder;

pcbuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:5000/api/pcbuilder`);
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
