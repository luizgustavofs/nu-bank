import React from 'react';

import { 
  Container,
  Icon,
  Box,
  Title,
  ArrowIcon,
  Text,
} from './styles';

const LifeShop = ({title, text, image}) => {
  return (
    <Container>
      <Icon source={image}/>
      <Box>
      <Title>{title}</Title>
      <ArrowIcon/>
      </Box>
      <Text>{text}</Text>
    </Container>
  );
}

export default LifeShop;