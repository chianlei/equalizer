import {
  Box,
  Text,
  Image,
  Stack,
  Center,
  Heading,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import appleIcon from '../../assets/icon-apple.svg';
import androidIcon from '../../assets/icon-android.svg';
import illApp from '../../assets/illustration-app.png';

const Download = () => {
  return (
    <Flex>
      <Box>
        <Image
          src={illApp}
          minW="250px"
          maxW="250px"
          mt={['-700px', '-700px', '-250px', '-250px']}
        ></Image>
      </Box>
      <Spacer mr={['none', 'none', '-180px', '80px']} />
      <Box
        bg="brand.box2"
        w="446px"
        borderRadius="10px"
        ml={['-290px', '0px', '80px', '80px']}
        mt={['20px', '20px', '20px', '40px']}
      >
        <Heading
          color="white"
          px={['5', '5', '5', '16']}
          pt={['30', '30', '50', '70']}
          pb={5}
          fontSize="40px"
          textAlign="left"
        >
          Premium EQ
        </Heading>
        <Text
          color="white"
          px={['5', '5', '5', '16']}
          pt={3}
          pb={15}
          fontSize={20}
          textAlign="left"
        >
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </Text>
        <Stack direction={['row']} spacing="24px">
          <Text
            color="white"
            fontSize={65}
            p={16}
            pt={0}
            pr={0}
            pb={5}
            fontWeight="bold"
          >
            $4
          </Text>
          <Box pt={9}>
            <Text color="white" fontSize={20}>
              / month
            </Text>
          </Box>
        </Stack>
        <Box>
          <Center>
            <Stack>
              <Box px={3}>
                <Button
                  bg="black"
                  w="100%"
                  h="61px"
                  _hover={{ bg: 'brand.hover1' }}
                >
                  <Image src={appleIcon} pr={2}></Image>
                  <Text color="white" fontWeight="bold" fontSize="18px">
                    iOS Download
                  </Text>
                </Button>
              </Box>
              <Box pb={3} px={3}>
                <Button
                  bg="white"
                  w="333px"
                  h="61px"
                  _hover={{ bg: 'brand.hover2' }}
                >
                  <Image src={androidIcon} pr={1}></Image>
                  <Text fontWeight="bold" fontSize="18px">
                    Android Download
                  </Text>
                </Button>
              </Box>
            </Stack>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
};

export default Download;
