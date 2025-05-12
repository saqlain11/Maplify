import { render } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

describe('App Suite', () => {
  test('renders correctly', async () => {
    render(<App />);
  });
});
