import styled from 'styled-components/native';
import {Text, View, Image} from 'react-native';
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

export const Title = styled(Text)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`;

export const Section = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rating = styled(View)`
  display: flex;
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

export const SectionEnd = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Spacer = styled(View)`
  padding-left: 16px;
`;

export const RestaurantStatus = styled(Text)`
  color: red;
`;

export const CategoryImage = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const Adress = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;
