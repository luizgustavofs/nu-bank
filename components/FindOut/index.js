import React from 'react';

import { 
  Container,
  Box,
  BoxImage,
  Image,
  BoxText,
  Title,
  Text, 
} from './styles';

const FindOut = ({title, text, image}) => {
  return (
    <Container>
      <Box>
        <BoxImage>
          <Image source={image}/>
        </BoxImage>
        <BoxText>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </BoxText>
      </Box>
    </Container>
  );
}

export default FindOut;