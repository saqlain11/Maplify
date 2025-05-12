import Dropdown from '@Maplify/component/molecule/Dropdown'; // Import the Dropdown component
import { APP_TEXT } from '@Maplify/constant';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Dropdown Component', () => {
  const mockOnChange = jest.fn();
  const mockData = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
  ];

  it('should render the dropdown correctly', () => {
    const { getByText } = render(
      <Dropdown data={mockData} value={0} onChange={mockOnChange} />,
    );

    // Check if the placeholder is rendered correctly
    expect(getByText(APP_TEXT.SELECT_ITEM)).toBeTruthy();
  });
});
