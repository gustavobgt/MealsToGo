import React from 'react';
import {Searchbar} from 'react-native-paper';
import {Container, SearchCointainer, ListCointainer} from './styles';
import {RestaurantInfoCard} from '../../components';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <Container>
      <SearchCointainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchCointainer>
      <ListCointainer>
        <RestaurantInfoCard />
      </ListCointainer>
    </Container>
  );
};
