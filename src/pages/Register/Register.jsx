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
import { signup } from '../../firebase/utils';

const Register = () => {
    const emailRef = useRef();
    const passwdRef = useRef();

    const handleRegister = () => {
        signup(emailRef.current.value, passwdRef.current.value);
    }
    return (
        <Container maxW='container.md'>
            <Box className='vertical-center'>
                <FormControl>
                    <Text fontSize={['2xl', '3xl']} fontWeight='bold'>
                        Registeration via firebase
                    </Text>
                    <FormLabel mt={2} htmlFor='email'>Email address</FormLabel>
                    <Input id='email' ref={emailRef} required type='email' />
                    <FormLabel mt={2} htmlFor='password'>Password</FormLabel>
                    <Input id='password' ref={passwdRef} required type='password' />
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                        onClick={handleRegister}>
                        Sign Up
                    </Button>
                </FormControl>
            </Box>
        </Container>
    )
}

export default Register