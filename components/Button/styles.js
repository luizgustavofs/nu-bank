import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  align-items: center;

  height: 150px;

  margin-right: 18px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;

  margin-bottom: 8px;

`;

export const Title = styled.Text`
  text-align: center;
`;