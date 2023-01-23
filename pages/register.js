import { Stack, Button, Input, FormLabel, Flex, Text } from "@chakra-ui/react"


const login = () => {
   return (

    <div>
        <form action="/api/create" method="post">
            <Flex  h="100vh" justifyContent={"center"} alignItems={"center"}  bg={'blue.100'} >
                <Flex w='400px' h='400px' border='2px' borderColor='blue' borderRadius='10px'  justifyContent={"center"} alignItems={"center"}  bg={'gray.50'} >
                <Stack spacing={4}>
                    <Text textAlign={'center'} fontWeight='bold' fontSize={'2xl'}>Register</Text>
                    <FormLabel>Username</FormLabel>
                    <Input name="username" type='text' variant='filled' placeholder='Username'/>
                    <FormLabel>Password</FormLabel>
                    <Input name="password" type='password' variant='filled' placeholder='Password'/>
                    <Button 
                        colorScheme='teal'
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





export default login