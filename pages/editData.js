import { Stack, Button, Input, FormLabel, Flex, Text } from "@chakra-ui/react"
import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const editData = () => {

    // const [ name, setName ] = useState
    const name = null
    const event = []

    const updateName = async (ev) =>{
        console.log(ev);
        
    }

    updateName()

   return (

    <div>
        <form action="/api/edit">
            <Flex  h="100vh" justifyContent={"center"} alignItems={"center"}  bg={'purple.100'} >
                <Flex w='400px' h='400px' border='2px' borderColor='purple' borderRadius='10px'  justifyContent={"center"} alignItems={"center"} bg={'white'} >
                <Stack spacing={4}>
                    <Text textAlign={'center'} fontWeight='bold' fontSize={'2xl'}>Edit Data Account</Text>
                    <FormLabel>Username</FormLabel>
                    <Input name="username" type='text' variant='filled' placeholder='Username'/>
                    <FormLabel>Password</FormLabel>
                    <Input name="password" type='password' variant='filled' placeholder='Password'/>
                    <Button 
                        colorScheme='messenger'
                        type='submit'
                        >
                            Submit
                        </Button>
                </Stack>
                </Flex>
            </Flex>
        </form>
    </div>

   )
}





export default editData