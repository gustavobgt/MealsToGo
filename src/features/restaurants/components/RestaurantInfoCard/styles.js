import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {Card} from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
`;

export const Info = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const Adress = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const Title = styled(Text)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`;
