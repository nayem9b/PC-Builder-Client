import RootLayout from "@/Layouts/RootLayout";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { Button, Text } from "@nextui-org/react";
import Link from "next/link";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const pcbuilder = ({ pcBuilder }) => {
  const { products } = useSelector((state) => state.builder);
  console.log(products);
  const dispatch = useDispatch();
  return (
    <div className="h-screen">
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Let's
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        Make the Web
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        Prettier
      </Text>
      {pcBuilder.map((item) => (
        <div className="">
          <div className="w-2/6 flex justify-between mx-auto">
            <p className="text-green-300 -mt-7">{item.itemName}</p>
            <Link href={item.route}>
              <Button flat color="secondary" auto>
                choose
              </Button>
            </Link>
            {products.map((product) => (
              <div>
                {product.category === item.itemName && (
                  <div>
                    <h1>{product.category}</h1>
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default pcbuilder;

pcbuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:5000/api/pcbuilder`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      pcBuilder: data,
    },
  };
};
