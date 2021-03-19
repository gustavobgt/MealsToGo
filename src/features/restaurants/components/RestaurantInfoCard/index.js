import React from 'react';
import {SvgXml} from 'react-native-svg';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Adress,
  Title,
} from './styles';

import star from '../../../../../assets/icons/star';

export const RestaurantInfoCard = () => {
  const restaurant = {
    name: 'Some Restaurant 1',
    icon: 'ICON',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  };

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{uri: restaurant.photos[0]}} />
      <Info>
        <Title>{restaurant.name}</Title>
        <SvgXml xml={star} width={20} height={20} />
        <Adress>{restaurant.address}</Adress>
      </Info>
    </RestaurantCard>
  );
};
