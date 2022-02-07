import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


export const Container = styled.View`
  padding: 15px;
  border-radius: 8px;
`;

export const Box = styled.TouchableOpacity``;


export const Icon = styled(MaterialIcons).attrs({
  name: 'signal-cellular-alt',
  size: 24,
  color: '#000'
})``;

export const BoxTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-right',
  size: 24,
  color: '#7C7D8B'
})``;

export const Text = styled.Text`
 color: #7C7D8B;
 margin-bottom: 10px;

`;



export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #F1F2F5;
  padding: 15px;
  
  border-radius: 8px;

  margin-top: 10px;
`;

export const MoneyIcon = styled(FontAwesome).attrs({
  name: 'money',
  size: 24,
  color: '#000'
})`

`;

export const Consult = styled.Text`
  margin-right: 40px;
`;
