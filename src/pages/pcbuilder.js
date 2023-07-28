import RootLayout from "@/Layouts/RootLayout";
import { Button, Text } from "@nextui-org/react";

import React from "react";

const pcbuilder = () => {
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
      <Button flat color="secondary" auto>
        Primary
      </Button>
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
