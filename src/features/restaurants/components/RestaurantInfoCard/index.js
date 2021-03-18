import React from 'react';

import {RestaurantCard, RestaurantCardCover, Title} from './styles';

export const RestaurantInfoCard = () => {
  const restaurant = {
    name: 'Some Restaurant',
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
      <Title>{restaurant.name}</Title>
    </RestaurantCard>
  );
};
