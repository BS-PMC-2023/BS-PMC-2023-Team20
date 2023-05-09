import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Order from './Order';

const { Builder, By, until, Actions } = require('selenium-webdriver');
const assert = require('assert');


describe('Order component', () => {
    let driver;
    afterAll(async () => {
      await driver.quit();
    });
  
    test('should allow users to sign in with valid credentials', async () => {
      driver = await new Builder().forBrowser('chrome').build();
      await driver.get('http://localhost:3000/Sing-in');
      await driver.findElement(By.css('input[type="text"]')).sendKeys('admin@gmail.com');
      await driver.findElement(By.css('input[type="password"]')).sendKeys('123456');
      await driver.findElement(By.css('span[type="submit"]')).click();
    });

    test('clicking the Order button should navigate to the Order page', async () => {
       const orderButton = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/section[2]/div[2]/div/div[2]/button')));
       await driver.wait(until.elementIsVisible(orderButton));
       await driver.executeScript('arguments[0].click();', orderButton);
     
       const url = await driver.getCurrentUrl();
       expect(url).toContain("/Order"); 
    });

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

