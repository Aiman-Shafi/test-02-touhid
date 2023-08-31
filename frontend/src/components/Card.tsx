import { Box, Image, Flex, Text, Avatar, Button } from "@chakra-ui/react";

const Card = ({
  imageSrc,
  logoSrc,
  userName,
  companyName,
  description,
}: {
  imageSrc: any;
  logoSrc: any;
  userName: any;
  companyName: any;
  description: any;
}) => {
  return (
    <Box
      bg="white"
      rounded="md"
      boxShadow="md"
      overflow="hidden"
      sx={{
        ":hover": {
          boxShadow: "lg",
        },
      }}
    >
      <Image src={imageSrc} alt="card image" height="300px" width={"100%"} />
      <Flex justifyContent="space-between" p="4">
        <Flex alignItems="center">
          <Image
            src={logoSrc}
            alt="company logo"
            boxSize="70px"
            mr="1"
            color={"brand.100"}
          />
          <Text fontWeight="bold">{companyName}</Text>
        </Flex>
        <Avatar src={userName} />
      </Flex>
      <Box p="4">
        <Text>{description}</Text>
      </Box>
      <Box p="4">
        <Button bg={"brand.100"} color={"white"}>
          Starting From $100
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
