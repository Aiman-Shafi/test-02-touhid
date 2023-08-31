import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import CompanyImg1 from "../assets/companyImg.png";
import CompanyImg2 from "../assets/companyImg2.png";
import CompanyImg3 from "../assets/companyImg3.png";
import userImg from "../assets/user.png";

const CardGrid = () => {
  const cards = [
    {
      imageSrc: CompanyImg1,
      logoSrc: userImg,
      userName: "https://via.placeholder.com/100",
      companyName: "Apple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae commodo augue.A.",
    },
    {
      imageSrc: CompanyImg2,
      logoSrc: userImg,
      userName: "https://via.placeholder.com/100",
      companyName: "Tesla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae commodo augue.B.",
    },
    {
      imageSrc: CompanyImg3,
      logoSrc: userImg,
      userName: "https://via.placeholder.com/100",
      companyName: "Meta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae commodo augue.C.",
    },
  ];

  return (
    <SimpleGrid columns={[1, null, 3]} spacing="40px">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </SimpleGrid>
  );
};

export default CardGrid;
