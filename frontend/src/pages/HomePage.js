import React, { useEffect } from 'react';
import {Container,Box,Text, Tabs,TabList,TabPanel,TabPanels,Tab,} from "@chakra-ui/react";
import Login from '../component/Authentication/Login';
import SignUp from '../component/Authentication/SignUp';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const HomePage = () => {

  const history = useHistory();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user){
      history.push('/chats');
    }
  },[history])

  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0px 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
       <Text fontSize="4xl" fontFamily="work sans" color="black">Talk-A-Tive</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
      <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  )
}

export default HomePage