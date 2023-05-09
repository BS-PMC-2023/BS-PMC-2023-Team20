import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Order from './Order';

describe('Order component', () => {

    //added to check if there is ddl for the number that selected
    test('renders drop-down list on changing the number of group members', () => {
      render(<Order />);
  
      // Find the select element for the number of group members
      const groupMembersSelect = screen.getByLabelText(/Number of group members/i);
  
      // Change the value of the select element to 3
      userEvent.selectOptions(groupMembersSelect, '3');
  
      // Check if the drop-down list for the 2nd and 3rd members are visible
      expect(screen.getByLabelText(/Email of 2 member/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email of 3 member/i)).toBeInTheDocument();
    });
});

