import React from "react";
import { Card, Col, Text } from "@nextui-org/react";
const FeaturedCategory = ({ featuredCategory }) => {
  return (
    <div>
      <Card css={{ w: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            ></Text>
            <Text h4 color="white">
              {featuredCategory.name}
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src={featuredCategory.image}
          width="100%"
          height={340}
          objectFit="cover"
          alt="Card image background"
        />
      </Card>
    </div>
  );
};

export default FeaturedCategory;
