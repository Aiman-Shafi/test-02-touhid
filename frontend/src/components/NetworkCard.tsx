import {
  Box,
  Text,
  Image,
  HStack,
  Button,
  Spacer,
  Center,
  VStack,
  Flex,
} from "@chakra-ui/react";
import image from "../assets/image 2.png";

const NetworkCard = () => {
  return (
    <>
      <Flex wrap={"wrap"} justifyContent={"center"}>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Box
              key={i} // Don't forget to include a key when mapping in React
              // w={"125px"}
              // h={"165px"}
              padding={"20px 30px"}
              margin={"0px 10px"}
              borderRadius={"10px"}
              boxShadow={"0px 4px 15px 0px rgba(0, 0, 0, 0.07)"}
              position="relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="#ffff"
                color="brand.100"
                style={{
                  position: "absolute",
                  top: "3px",
                  right: "3px",
                }}
              >
                <path
                  d="M9.72266 17.8458L17.8466 9.72412M9.72266 9.72412L17.8466 17.8458"
                  stroke="purple"
                  strokeWidth="1.72312"
                  strokeLinecap="round"
                />
              </svg>

              <Center h="full">
                <VStack>
                  <Image
                    src={image}
                    boxSize="90px"
                    borderRadius="63px"
                    border="1px solid var(--main-purple, #9583F4)"
                    bg="lightgray"
                    objectFit="cover"
                    boxShadow="0px 4px 15px 0px rgba(0, 0, 0, 0.07)"
                  />
                  <Text fontSize={"20px"}>Barr Flinn</Text>
                  <Button
                    h={"30px"}
                    w={"100%"}
                    color={"white"}
                    bg={"brand.100"}
                  >
                    Accept
                  </Button>
                </VStack>
              </Center>
            </Box>
          ))}
      </Flex>
    </>
  );
};

export default NetworkCard;
