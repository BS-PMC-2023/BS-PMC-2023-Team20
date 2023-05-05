import React from 'react';
import Admin from './Admin';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

const assert = require('assert');
const firebase = require('@firebase/testing');
const MY_PROJECT_ID = "warehouse-5997b";

  
describe('Admin component', () => {
    
    it("Can read items in the read-only collection",async()=>{
      const db = firebase.initializeTestApp({projectId:MY_PROJECT_ID}).firestore();
      const testDoc = db.collection("readonly").doc("testDoc");
      await firebase.assertSucceeds(testDoc.get());
    })
    

    test('render the component', async () => {
      const { getByTestId } = render(<Admin />);
      const chooseItemType = screen.getByTestId('choose item type:');
      const chooseImage = screen.getByTestId('Choose image:');
      const enterSerial = screen.getByTestId('Enter item Serial number:');
      const enterLocation = screen.getByTestId('Enter item location:');
      const addBtn = screen.getByText('ADD');
      const adminTitle = screen.getByText('items additing');
      expect(chooseItemType).toBeInTheDocument();
      expect(chooseImage).toBeInTheDocument();
      expect(enterSerial).toBeInTheDocument();
      expect(enterLocation).toBeInTheDocument();
      expect(addBtn).toBeInTheDocument();
      expect(adminTitle).toBeInTheDocument();
    });


    
   

});