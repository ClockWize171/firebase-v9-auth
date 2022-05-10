import {
  Container,
  Text,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { useRef } from 'react';
import './App.css';

function App() {

  const emailRef = useRef();
  const passwdRef = useRef();

  return (
    <Container maxW='container.md'>
      <Box className='vertical-center'>
        <FormControl>
          <Text fontSize={['2xl','3xl']} fontWeight='bold'>
            Firebase v9 Basic Authentication
          </Text>
          <FormLabel mt={2} htmlFor='email'>Email address</FormLabel>
          <Input id='email' ref={emailRef} isRequired type='email' />
          <FormLabel mt={2} htmlFor='password'>Password</FormLabel>
          <Input id='password' ref={passwdRef} isRequired type='password' />
          <Button
            onClick={()=> console.log(emailRef, passwdRef)}
            mt={4}
            colorScheme='teal'
            type='submit'>
            Login
          </Button>
          <Button
            mt={4}
            ml={3}
            colorScheme='blue'
            type='submit'>
            Register
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}

export default App;
