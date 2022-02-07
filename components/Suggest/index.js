import React from 'react';

import { 
  Container,
  Suggest1,
  Text1,
  Text2,
  Text3,
  Box,

} from './styles';

const Suggest = () => {
  return (
    <Container>
      <Suggest1>
        <Box>
        <Text1>Conheça </Text1>
        <Text2>Nubank Vida: </Text2>
        </Box>
        <Text3>Um seguro simples e que cabe no bolso</Text3>
      </Suggest1>
      <Suggest1>
        <Text1>Salve seus amigos da burocracia.</Text1>
        <Text2>Faça um convite para o Nubank.</Text2>
      </Suggest1>
    </Container>
  );
}

export default Suggest;