import { Stack, Button, Input, InputGroup, InputRightElement, FormLabel, FormControl, FormHelperText, FormErrorMessage, Square, Flex    } from "@chakra-ui/react"
import { useState } from "react"


const login = () => {
   return (

    <div>
        <form action="/api/login" method="post">
            <Flex  h="100vh" justifyContent={"center"} alignItems={"center"}  bg={'red.50'} >
                <Stack spacing={4}>
                    <UsernameInput></UsernameInput>
                    <PasswordInput></PasswordInput>
                    <Button 
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                        >
                        Submit
                    </Button>
                </Stack>
            </Flex>
        </form>
    </div>

   )
}

const UsernameInput = ()  => {
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    return (
        <div>
            <FormControl isInvalid={isError}>
                <FormLabel>Username</FormLabel>
                <Input name="username" value={input} onChange={handleInputChange} placeholder="Username" border='2px' borderColor='black.200' />
                {!isError ? (
                <FormHelperText>
                    {/* Enter the username you'd like to receive the newsletter on. */}
                </FormHelperText>
                    ) : (
                <FormErrorMessage>Username is required.</FormErrorMessage>
                    )}
            </FormControl>
        </div>
    )
}

const PasswordInput = () => {

    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  
    return (

        <FormControl isInvalid={isError}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
            <InputRightElement right={2}>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
        <Input name="password" type={show ? 'text' : 'password'} value={input} onChange={handleInputChange} placeholder="Password" border='2px' borderColor='black.200' />
        {!isError ? (
          <FormHelperText>
            {/* Enter the password you'd like to receive the newsletter on. */}
          </FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
        </FormControl>

    )
}

export default login