import React from 'react';
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.png';

const headingOptions = {
    pos : "absolute",
    left : "50%",
    top : "50%",
    transform : 'translate(-50%,-50%)',
    textTransform : "uppercase",
    p : '4',
    size : '4xl'
}

const Home = () => {
  return <Box>
    <MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading 
            textTransform={'uppercase'} 
            py={'2'} 
            w={'fit-content'} 
            borderBottom={'2px solid'}
            m={'auto'}
            >Services
        </Heading>
        <Stack 
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
            >
            <Image src={Img5} h={['40','300']} filter={'hue-rotate(-130deg)'} />
            <Text
                lineHeight={'190%'}
                letterSpacing={'widest'}
                p={['4','16']}
                textAlign={'center'}
                >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Cumque distinctio accusamus vitae. Eius voluptatibus obcaecati 
                error saepe ut, magni consequatur deserunt laborum earum blanditiis! 
                Quasi provident voluptatem excepturi voluptas? Quibusdam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque 
                minima ea! Ducimus temporibus nostrum ea nulla! Illo sed eligendi 
                accusantium voluptas odio nisi harum fuga, ratione consequuntur architecto quia?
                </Text>
        </Stack>
    </Container>
  </Box>
}

const MyCarousel = () => (
    <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false}
    showThumbs={false}
    showArrows={false} >
        <Box w={'full'} h={'100vh'}>
            <Image src={Img1} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOptions}>We Are Reality</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={Img2} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>Gaming is Life</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={Img3} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming Console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={Img4} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Moon Shine</Heading>
        </Box>
    </Carousel>
)

export default Home