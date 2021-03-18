import styled from 'styled-components/native';
import {SafeAreaView, View} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const SearchCointainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const ListCointainer = styled(View)`
  padding: ${props => props.theme.space[3]};
  flex: 1;
  background-color: ${props => props.theme.colors.bg.secondary};
`;
