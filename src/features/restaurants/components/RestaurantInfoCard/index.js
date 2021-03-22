import React from 'react';
import {SvgXml} from 'react-native-svg';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Title,
  Rating,
  SectionEnd,
  Spacer,
  RestaurantStatus,
  CategoryImage,
  Adress,
} from './styles';

import star from '../../../../../assets/icons/star';
import open from '../../../../../assets/icons/open';

export const RestaurantInfoCard = () => {
  const restaurant = {
    name: 'Some Restaurant 1',
    icon:
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  };

  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{uri: restaurant.photos[0]}} />
      <Info>
        <Title>{restaurant.name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {restaurant.isClosedTemporarily && (
              <RestaurantStatus variant="label">
                CLOSED TEMPORARILY
              </RestaurantStatus>
            )}

            <Spacer />

            {restaurant.isOpenNow && (
              <SvgXml xml={open} width={20} height={20} />
            )}

            <Spacer />

            <CategoryImage source={{uri: restaurant.icon}} />
          </SectionEnd>
        </Section>
        <Adress>{restaurant.address}</Adress>
      </Info>
    </RestaurantCard>
  );
};
