import React, { useState } from 'react';

import { 
  Container,
  Box1,
  Profile,
  ProfileIcon,
  BoxIcon,
  BoxEye,
  Eye,
  Help,
  Invite,
  Name,
  ClosedEye,
} from './styles';



const Greetings = ({openEye, setOpenEye}) => {


  return (
    <Container>
      <Box1>
        <Profile>
          <ProfileIcon/>
        </Profile>
        <BoxIcon>
          <BoxEye onPress={() => setOpenEye(!openEye)}>
            {openEye ? <Eye/> : <ClosedEye/>}
          </BoxEye>
          <BoxEye>
            <Help/>
          </BoxEye>
          <BoxEye>
            <Invite/>
          </BoxEye>
        </BoxIcon>
      </Box1>
      <Name>Olá, Luiz</Name>
    </Container>
  );
}

export default Greetings;