import React from 'react';

import { 
  Container,
  Box2,
  Account,
  ArrowIcon,
  Cash,
} from './styles';

const Money = ({openEye}) => {
  return (
    <Container>
      <Box2>
        <Account>Account</Account>
        <ArrowIcon/>
      </Box2>
      {openEye ? <Cash>R$ 9.999,99</Cash> : <Cash>R$ 0,00</Cash>}
    </Container>
  );
}

export default Money;