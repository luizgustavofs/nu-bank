import React from 'react';

import { 
  Container,
  BillBox,
  Icon,
  BoxTitle,
  Title,
  ArrowIcon,
  Bill,
  Value,
  Limit,
} from './styles';

const Credit = ({openEye}) => {
  return (
    <Container>
      <BillBox>
        <Icon/>
        <BoxTitle>
          <Title>Cartão de Crédito</Title>
          <ArrowIcon/>
        </BoxTitle>
        <Bill>Fatura Aberta</Bill>
        {openEye ? <Value>R$ 113,00</Value> : <Value>R$ 0,00</Value> }
        {openEye ? <Limit>Limite Disponivel de R$ 7.887,00</Limit> : <Limit>Limite Disponivel de R$ 0,00</Limit>}
      </BillBox>
    </Container>
  );
}

export default Credit;