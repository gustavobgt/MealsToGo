import styled from 'styled-components/native';
import {Text} from 'react-native';
import {Card} from 'react-native-paper';

export const Title = styled(Text)`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
`;
