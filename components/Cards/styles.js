import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  padding: 15px;
  background: #F0F1F5;

  border-radius: 8px;
  margin: 0 15px;
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  width: 150px;
`;
export const Icon = styled(Feather).attrs({
  name: 'credit-card',
  size: 24,
  color: '#000',
})``;
export const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;