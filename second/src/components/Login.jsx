import { Button, Container, Heading, Input, VStack ,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={'100vh'} p={'16'}>
        <form action="">
            <VStack align-items={'strech'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading> Welcome back</Heading>
                <Input placeholder='Enter email' type='email' required focusBorderColor={'purple.500'}/>

                <Input placeholder='password' type='password' required focusBorderColor={'purple.500'}/>

                <Button  variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/Forgetpassword'}  > Forget password</Link>
                </Button>
                
                <Button colorScheme='purple' type='sumbit' >Login</Button>

                <Text   textAlign={'right'}>
                     New User? {' '}
                    <Button  variant={'link'}  colorScheme={'purple'}> 
                    <Link to={'/Signup'}  > Sign Up</Link>
                    </Button>
                     
                </Text>

                
            </VStack> 
        </form>

    </Container>
  )
}

export default Login