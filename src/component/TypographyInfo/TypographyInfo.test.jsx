/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TypographyInfo from './TypographyInfo';

describe('TypographyInfo Component', () => {
  it('renders label and value when loading is false', () => {
    const label = 'Name';
    const value = 'John Doe';
    const loading = false;

    const { getByText, queryByTestId } = render(
      <TypographyInfo label={label} value={value} loading={loading} />
    );

    expect(getByText(/Name:/i)).toBeInTheDocument();
    expect(queryByTestId('skeleton')).toBeNull(); 
    expect(getByText('John Doe')).toBeInTheDocument(); 
  });
  it('renders Skeleton when loading is true', () => {
    const label = 'Name';
    const loading = true;

    const { getByTestId } = render(
      <TypographyInfo label={label} loading={loading} />
    );

    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument(); 
  });
});
