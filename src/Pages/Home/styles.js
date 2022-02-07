import styled from 'styled-components/native';

export const Container = styled.View` 
 background: #830AD1;
 flex: 1;
`;
export const FloatingContainer = styled.View` 
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;
export const BoxWhite = styled.View` 
 background: #fff;
 margin-top: 100%;
 flex: 1;
`;
export const Container2 = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle:{backgroundColor: '#fff', paddingBottom: 25} 
})`
  flex: 1;
`;

export const AllButtons = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-left: 15px;
  margin-top: 15px;

  font-weight: 500;
`;
export const BoxFind = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  border-radius: 8px;

`;

export const Space = styled.View`
  width: 100%;
  height: 1.5px;
  background: #F0EFF3;
`;