import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  padding: 15px;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title =  styled.Text`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-right',
  size: 24,
  color: '#7C7D8B'
})``;

export const Text = styled.Text`
 color: #7C7D8B

`;