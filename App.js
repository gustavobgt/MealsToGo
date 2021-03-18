/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {theme} from './src/infrastructure/theme';
import {RestaurantsScreen} from './src/features/restaurants/screens';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
    <StatusBar />
  </>
);

export default App;
