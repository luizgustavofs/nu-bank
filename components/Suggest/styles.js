import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  padding: 15px;
  margin-right: 15px;
`;

export const Suggest1 = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  margin-right: 15px;
  width: 360px;
  background: #F1F2F5;
  padding: 20px;

  border-radius: 8px;

`;


export const Text1 = styled.Text`
  font-size: 16px;
`;

export const Text2 = styled.Text`
  color: #9247B1;
  font-size: 16px;

`;

export const Text3 = styled.Text`
  font-size: 16px;
`;
export const Box = styled.View`
  flex-direction: row;
`;
