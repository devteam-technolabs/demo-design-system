import React from 'react';
import { render , document } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Button } from '../components/Button';

// Renders a button element with default props when no props are passed
    test('should render a button element with default props when no props are passed', () => {
        const { getByRole } = render(<Button />);
        const button = getByRole('button');
        expect(button).toHaveAttribute('data-button', 'kind:primary');
  
      });

          // Renders a button element with null kind when 'kind' prop is null
    test('should render a button element with null kind when prop is null', () => {
      const { getByRole } = render(<Button kind={null} />);
      const button = getByRole('button');
      expect(button).toHaveAttribute('data-button', 'kind:null');
    });