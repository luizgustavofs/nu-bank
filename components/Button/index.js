import React from 'react';

import { 
  Container,
  Image,
  Title,
} from './styles';

const Button = ({text, image}) => {
  return (
    <Container>
      <Image source={image}/>
      <Title>{text}</Title>
    </Container>
  );
}

export default Button;