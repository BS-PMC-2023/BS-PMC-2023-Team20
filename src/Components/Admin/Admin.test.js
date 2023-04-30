import React from 'react';
import Admin from './Admin';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import  'jest';
import * as functions from 'firebase-functions-test'
import * as admin from 'firebase-admin'
    

describe('Admin component', () => {
    const testEnv = functions({
        databaseURL:'https://warehouse-5997b.firebaseio.com',
        projectId:'warehouse-5997b'
    }, '')
   

    test('renders the Add button', () => {
      render(<Admin />);
      const addButton = screen.getByRole('button', { name: /add/i });
      expect(addButton).toBeInTheDocument();
    });

    test('adds a new item when the form is submitted', async () => {
        const alertMock = jest.fn();
        window.alert = alertMock;  
        render(<Admin />);
        const addButton = screen.getByRole('button', { name: /add/i });
        fireEvent.click(addButton);
        const select = screen.getByTestId('choose item type:');
        fireEvent.change(select, { target: { value: '1' } });
        const fileInput = screen.getByTestId('Choose image:');
        fireEvent.change(fileInput, { target: { files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })] } });
        const serialInput = screen.getByTestId('Enter item Serial number:');
        fireEvent.change(serialInput, { target: { value: '12345' } });
        const locationInput = screen.getByTestId('Enter item location:');
        fireEvent.change(locationInput, { target: { value: 'Office' } });
        const descriptionInput = screen.getByTestId('Enter your description:');
        fireEvent.change(descriptionInput, { target: { value: 'A cool camera' } });
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);
        
        await waitFor(() => expect(alertMock).toHaveBeenCalledWith("item added successfully"));
        expect(alertMock).toHaveBeenCalledWith("item added successfully");
      });

});