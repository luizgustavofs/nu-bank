import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  height: 120px;

  padding: 15px;
  margin-top: 10px;

`;

export const Box2 = styled.View`

  flex-direction: row;

  justify-content: space-between;

`;

export const Account = styled.Text`
  font-size: 20px;
  font-weight: 500;

  
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-right',
  size: 24,
  color: '#7C7D8B'
})`

`;

export const Cash = styled.Text`
  font-size: 24px;
  font-weight: 500;

  margin-top: 20px;


`;

