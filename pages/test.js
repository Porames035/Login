import { AspectRatio, Box, Grid, Image, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


export default function Home() {

    
  return (
    <div>
        <SimpleGrid  columns={{base: 1, sm: 2, md: 3, lg: 4}}>
  

        <AspectRatio ratio={1} bg={'red.100'}>
            <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>

        <AspectRatio ratio={1} bg={'red.100'}>
            <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>

        <AspectRatio ratio={1} bg={'red.100'}>
            <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>

        <AspectRatio ratio={1} bg={'red.100'}>
            <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>

        <AspectRatio ratio={1} bg={'red.100'}>
            <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>

        </SimpleGrid>

        <AspectRatio maxH={100} ratio={2} bg={'red.100'}>
            <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>

        <AspectRatio maxH={100} ratio={3} bg={'red.100'}>
            <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>

    </div>
  )

}
