import React, { useState } from 'react';
import Button from '../../../components/Button';
import Greetings from '../../../components/Greetings';
import Money from '../../../components/Money';
import { StatusBar } from 'react-native';

import Pix from '../../../assets/Pix.png';
import Pagar from '../../../assets/Pagar.png';
import Transfer from '../../../assets/Transfer.png';
import Deposit from '../../../assets/Deposit.png';
import Recharge from '../../../assets/Recharge.png';
import Cobrar from '../../../assets/Cobrar.png';
import Global from '../../../assets/Global.png';
import Life from '../../../assets/Life.png';
import Shop from '../../../assets/Shop.png';
import Indique from '../../../assets/Indique.png';
import Whats from '../../../assets/Whats.png';

import { 
  Container,
  AllButtons, 
  Container2, 
  Title, 
  BoxFind, 
  BoxWhite, 
  FloatingContainer,
  Space,
} from './styles';
import Cards from '../../../components/Cards';
import Suggest from '../../../components/Suggest';
import Credit from '../../../components/Credit';
import Investment from '../../../components/Investment';
import LifeShop from '../../../components/LifeShop';
import FindOut from '../../../components/FindOut';

const Home = () => {

  const [openEye, setOpenEye] = useState(true);

  return (
    <Container>
      <StatusBar barStyle="light-content"/>
      <FloatingContainer>
      <Container2>
        <Greetings openEye={openEye} setOpenEye={setOpenEye}/>
        <Money openEye={openEye}/>
        <AllButtons>
          <Button text="Pix Area" image={Pix}/>
          <Button text="Pay" image={Pagar}/>
          <Button text="Transfer" image={Transfer}/>
          <Button text="Deposit" image={Deposit}/>
          <Button text={"Cellphone \nRecharge"} image={Recharge}/>
          <Button text="Charge" image={Cobrar}/>
          <Button text={"Global \nTransfer"} image={Global}/>
        </AllButtons>
        <Cards/>
        <Suggest/>
        <Space/>
        <Credit openEye={openEye}/>
        <Space/>
        <Investment/>
        <Space/>
        <LifeShop title="Seguro de Vida" text="Conheça Nubank Vida: um seguro simples e que cabe no bolso" image={Life}/>
        <Space/>
        <LifeShop title="Shopping" text="Vantagens exclusivas das nossas marcas preferidas" image={Shop}/>
        <Space/>
        <Title>Descubra mais</Title>
        <BoxFind>
          <FindOut title="Indique seus amigos" text="Mostre aos seus amigos como é facil ter uma vida sem burocracia" image={Indique}/>
          <FindOut title="WhatsApp" text="Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank sem ..." image={Whats}/>
        </BoxFind>
      </Container2>
      </FloatingContainer>
      <BoxWhite/>
    </Container>
  );
}

export default Home;