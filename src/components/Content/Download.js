import {
  Box,
  Text,
  Image,
  Stack,
  Center,
  Heading,
  Button,
} from '@chakra-ui/react';
import appleIcon from '../../assets/icon-apple.svg';
import androidIcon from '../../assets/icon-android.svg';

const Download = () => {
  return (
    <Box
      position="absolute"
      bg="brand.box2"
      w="446px"
      h="625px"
      borderRadius="10px"
      right="100px"
      bottom="200px"
    >
      <Heading color="white" pl={16} pt={70} pb={5} fontSize="40px">
        Premium EQ
      </Heading>
      <Text color="white" pl={16} pr={16} pt={3} pb={15} fontSize={20}>
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
            <Box pb={3}>
              <Button
                bg="black"
                w="333px"
                h="61px"
                _hover={{ bg: 'brand.hover1' }}
              >
                <Image src={appleIcon} pr={2}></Image>
                <Text color="white" fontWeight="bold" fontSize="18px">
                  iOS Download
                </Text>
              </Button>
            </Box>
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
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};

export default Download;
