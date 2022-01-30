import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import { Box, Flex, Text, Center, Image } from "@chakra-ui/react";
import CountUp from "react-countup";

// READ ME!
// Delete the lines that i marked as Delete
// num1, num2, num3 are the numbers of jackpots
// Replace setBackPic urls with your own website urls so the website can show them

function CarouselCover() {
  SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

  const [num1, setNum1] = useState({ start: 0, end: 32.23 }); // Jackpot 1
  const [num2, setNum2] = useState({ start: 0, end: 201.15 }); // Jackpot 2
  const [num3, setNum3] = useState({ start: 0, end: 799.65 }); // Jackpot 3

  const [goUp, setGoUp] = useState(true); // Delete

  useEffect(() => {
    HomeHeadlineImages();
  }, []);

  // Delete
  useEffect(() => {
    // Delete
    const increaseNum1 = () => {
      // Delete
      setTimeout(() => {
        // Delete
        setGoUp(!goUp); // Delete
      }, 20000); // Delete
    }; // Delete
    increaseNum1(); // Delete
  }, [goUp]); // Delete
  // Delete
  useEffect(() => {
    // Delete
    const increaseNum1 = () => {
      // Delete
      setTimeout(() => {
        // Delete
        setNum1({
          // Delete
          start: num1.end, // Delete
          end: goUp ? num1.end + 2.53 : num1.end - 2.53, // Delete
        }); // Delete
      }, 5000); // Delete
    }; // Delete
    increaseNum1(); // Delete
  }, [num1]); // Delete
  // Delete
  useEffect(() => {
    // Delete
    const increaseNum2 = () => {
      // Delete
      setTimeout(() => {
        // Delete
        setNum2({
          // Delete
          start: num2.end, // Delete
          end: goUp ? num2.end + 0.53 : num2.end - 0.53, // Delete
        }); // Delete
      }, 5000); // Delete
    }; // Delete
    increaseNum2();
  }, [num2]); // Delete
  // Delete
  // Delete
  useEffect(() => {
    // Delete
    const increaseNum3 = () => {
      // Delete
      setTimeout(() => {
        // Delete
        setNum3({
          // Delete
          start: num3.end, // Delete
          end: goUp ? num3.end + 5.53 : num3.end - 5.53, // Delete
        }); // Delete
      }, 10000); // Delete
    }; // Delete
    increaseNum3(); // Delete
  }, [num3]); // Delete
  // Delete
  // Delete

  const [backPic, setBackPic] = useState([]);

  const HomeHeadlineImages = async () => {
    setBackPic([
      "https://palmtreasures.net/assets/images/slides/7.jpg",
      "https://palmtreasures.net/assets/images/slides/6.jpg",
      "https://palmtreasures.net/assets/images/slides/1.jpg",
      "https://palmtreasures.net/assets/images/slides/8.jpg",
      "https://palmtreasures.net/assets/images/slides/2.jpg",
    ]);
  };

  const slides = [];
  backPic.slice(0, 5).map((cover, index) =>
    slides.push(
      <SwiperSlide key={index}>
        <Box
          backgroundImage={`url(${cover})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          h={{
            base: "350px",

            md: "500px",
          }}
          bgSize="cover"
        >
          <Flex
            h={{
              base: "350px",

              md: "600px",
            }}
            w="95%"
            justifyContent="space-between"
            mx="auto"
          ></Flex>
        </Box>
      </SwiperSlide>
    )
  );

  return (
    <div>
      <div className="headline-home">
        <Swiper
          id="headline"
          navigation
          pagination
          effect="coverflow"
          loop
          autoplay={{ delay: 3000 }}
        >
          {" "}
          {slides}
          <Center
            bottom="40px"
            left="0"
            w="100%"
            position="absolute"
            zIndex="10"
            textAlign="center"
          >
            <Center
              w={{ base: "100%", sm: "100%", md: "60%" }}
              justifyContent="space-evenly"
            >
              <Flex
                w={{ base: "30%", sm: "30%", md: "25%" }}
                h="3.5rem"
                border="0.12rem solid"
                borderColor="var(--mmibc)"
                alignItems="center"
                justifyContent="space-around"
                borderRadius="1rem"
                bg="var(--mmsb)"
                px="0.4rem"
                py="0.3rem"
              >
                <Image
                  w={{ base: "2rem", sm: "2.5rem", md: "3.5rem" }}
                  src="/images/cover/jackpot-icon-1.png"
                ></Image>
                <CountUp
                  start={num1.start}
                  end={num1.end}
                  duration={2.75}
                  separator=" "
                  decimals={2}
                  decimal=","
                />
              </Flex>
              <Flex
                w={{ base: "30%", sm: "30%", md: "25%" }}
                h="3.5rem"
                border="0.12rem solid"
                borderColor="var(--mmibc)"
                alignItems="center"
                justifyContent="space-around"
                borderRadius="1rem"
                bg="var(--mmsb)"
                px="0.4rem"
                py="0.3rem"
              >
                <Image
                  w={{ base: "2rem", sm: "2.5rem", md: "3.5rem" }}
                  src="/images/cover/jackpot-icon-2.png"
                ></Image>
                <CountUp
                  start={num2.start}
                  end={num2.end}
                  duration={2.75}
                  separator=" "
                  decimals={2}
                  decimal=","
                />
              </Flex>
              <Flex
                w={{ base: "30%", sm: "30%", md: "25%" }}
                h="3.5rem"
                border="0.12rem solid"
                borderColor="var(--mmibc)"
                alignItems="center"
                justifyContent="space-around"
                borderRadius="1rem"
                bg="var(--mmsb)"
                px="0.4rem"
                py="0.3rem"
              >
                <Image
                  w={{ base: "2rem", sm: "2.5rem", md: "3.5rem" }}
                  src="/images/cover/jackpot-icon-3.png"
                ></Image>
                <CountUp
                  start={num3.start}
                  end={num3.end}
                  duration={2.75}
                  separator=" "
                  decimals={2}
                  decimal=","
                />
              </Flex>
            </Center>
          </Center>
        </Swiper>
      </div>
    </div>
  );
}

export default CarouselCover;
