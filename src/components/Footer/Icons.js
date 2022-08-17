import { Stack, Button, Image } from '@chakra-ui/react';
import fbIcon from '../../assets/icon-facebook.svg';
import insIcon from '../../assets/icon-instagram.svg';
import twIcon from '../../assets/icon-twitter.svg';

const Icons = () => {
  return (
    <Stack
      direction={['row']}
      spacing="24px"
      h={['60px', '60px', '190px', '70px', '70px']}
      mt={['5px', '5px', '-65px', '0px', '0px']}
    >
      <Button _hover={{ bg: 'brand.box2' }} p={0} bg="transparent">
        <Image src={fbIcon} boxSize="30px"></Image>
      </Button>
      <Button _hover={{ bg: 'brand.box2' }} p={0} bg="transparent">
        <Image src={insIcon} boxSize="30px"></Image>
      </Button>
      <Button _hover={{ bg: 'brand.box2' }} p={0} bg="transparent">
        <Image src={twIcon} boxSize="30px"></Image>
      </Button>
    </Stack>
  );
};

export default Icons;
