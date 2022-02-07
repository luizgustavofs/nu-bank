import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


export const Container = styled.View`
  padding: 15px;
`;

export const BillBox = styled.TouchableOpacity`

`;

export const Icon = styled(Feather).attrs({
  name: 'credit-card',
  size: 24,
  color: '#000',
})``;

export const BoxTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-right',
  size: 24,
  color: '#7C7D8B'
})`

`;

export const Bill = styled.Text`
  color: #7C7D8B;
  font-size: 16px;
  font-weight: 500;

  margin-top: 10px;
`;

export const Value = styled.Text`
  font-size: 24px;
  margin-top: 5px;

`;

export const Limit = styled.Text`
  color: #7C7D8B;
  font-size: 14px;
  font-weight: 500;

  margin-top: 5px;
`;


