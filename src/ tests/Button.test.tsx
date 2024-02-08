import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from '../components/Button/Button';

// Renders a button element with default props when no props are passed
    test('should render a button element with default props when no props are passed', ({mount}) => {
        const button = getByRole('button');
        expect(button).toHaveAttribute('data-button', 'kind:primary');
  
      });

          // Renders a button element with null kind when 'kind' prop is null
    test('should render a button element with null kind when prop is null', ({mount}) => {
      const { getByRole } = mount(<Button kind={null} />);
      const button = getByRole('button');
      expect(button).toHaveAttribute('data-button', 'kind:null');
    });