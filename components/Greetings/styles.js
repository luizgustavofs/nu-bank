import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



export const Container = styled.SafeAreaView`
  height: 180px;

  background: #830AD1;
`;

export const Box1 = styled.View`
  margin: 20px;
  
  height: 50px;


  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const Profile = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  width: 50px;
  height: 50px;

  border-radius: 50px;

  align-items: center;
  justify-content: center;
  
  background: #9C3ADA;
`;

export const ProfileIcon = styled(Feather).attrs({
  name: 'user',
  size: 30,
  color: '#fff',
})``;

export const BoxIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 130px;
`;

export const BoxEye = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})``;
export const BoxHelp = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})``;
export const BoxInvite = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})``;

export const Eye = styled(Feather).attrs({
  name: 'eye',
  size: 28,
  color: '#fff'
})``;
export const ClosedEye = styled(Feather).attrs({
  name: 'eye-off',
  size: 28,
  color: '#fff'
})``;

export const Help = styled(Feather).attrs({
  name: 'help-circle',
  size: 28,
  color: '#fff',
})``;

export const Invite = styled(MaterialCommunityIcons).attrs({
  name: 'email-plus-outline',
  size: 28,
  color: '#fff',
})``;

export const Name = styled.Text`
  margin-bottom: 20px;
  margin-left: 20px;
  
  font-size: 24px;

  color: #fff;

  font-weight: 500;
`;
