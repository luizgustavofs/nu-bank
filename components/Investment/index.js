import React from 'react';

import { 
  Container,
  Icon,
  BoxTitle,
  Title,
  ArrowIcon,
  Text,
  Box,
  Button,
  MoneyIcon,
  Consult, 
} from './styles';

const Investment = () => {
  return (
    <Container>
      <Box>
      <Icon/>
      <BoxTitle>
        <Title>Investimentos</Title>
        <ArrowIcon/>
      </BoxTitle>
      <Text>O jeito Nu de investir: sem asteristicos, linguagem facil e a partir de R$1. Saiba Mais</Text>
      </Box>
      <Button>
        <MoneyIcon/>
        <Consult>Consultar saldo para transferência</Consult>
      </Button>
    </Container>
  );
}

export default Investment;