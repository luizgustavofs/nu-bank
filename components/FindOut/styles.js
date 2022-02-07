import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  padding: 15px;

  margin-right: -10px;

  border-radius: 8px;

`;


export const Box = styled.View`
  background: #cecece;

  border-radius: 8px;

  overflow: hidden;

  width: 200px;
  height: 250px;
`;

export const BoxImage = styled.View`
`;

export const Image = styled.Image`
  width: 200px;
  height: 100px;


`;

export const BoxText = styled.View`
  padding: 10px;
  border-radius: 8px;

`;

export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #7c7d8b;

  text-align: left;
`; 

