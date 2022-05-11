import React, { useRef } from 'react'
import {
    Container,
    Text,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { useNavigate  } from 'react-router-dom';

const LogIn = () => {
    const emailRef = useRef();
    const passwdRef = useRef();
    let navigate = useNavigate();

    return (
        <Container maxW='container.md'>
            <Box className='vertical-center'>
                <form action="">
                    <FormControl>
                        <Text fontSize={['2xl', '3xl']} fontWeight='bold'>
                            Firebase v9 Basic Authentication
                        </Text>
                        <FormLabel mt={2} htmlFor='email'>Email address</FormLabel>
                        <Input id='email' ref={emailRef} required type='email' />
                        <FormLabel mt={2} htmlFor='password'>Password</FormLabel>
                        <Input id='password' ref={passwdRef} required type='password' />
                        <Button
                            onClick={() => console.log(emailRef, passwdRef)}
                            mt={4}
                            colorScheme='teal'
                            type='submit'>
                            Login
                        </Button>
                        <Button
                            mt={4}
                            ml={3}
                            onClick={()=> navigate('/register')}>
                            Register
                        </Button><br></br>
                        <Button
                            mt={4}
                            bg='blue.300'>
                            Login with Google
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </Container>
    )
}

export default LogIn