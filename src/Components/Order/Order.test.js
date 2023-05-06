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

});

