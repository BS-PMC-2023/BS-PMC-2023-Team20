


const { Builder, By, until } = require('selenium-webdriver');

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

    test('set dates should display number of rent days', async () => {
      await driver.findElement(By.css(".DepartInput input")).click()
      await driver.findElement(By.css(".DepartInput input")).sendKeys("06-09-2023")
      await driver.findElement(By.css(".ReturnInput input")).click()
      await driver.findElement(By.css(".ReturnInput input")).sendKeys("13-09-2023")
      // Wait for number of rent days to appear
      await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/section/div[2]/div[2]/div[3]/div/form/div[3]/p")), 1000);
      const rentDays = await driver.findElement(By.xpath("/html/body/div/div/section/div[2]/div[2]/div[3]/div/form/div[3]/p")).getText();
      expect(rentDays).toContain("7");
    });

    test('test that user have to check box before submit', async () => {
      const submitBtn = await driver.findElement(By.linkText('Submit'));
      await driver.executeScript('arguments[0].click()', submitBtn);
      await driver.wait(until.alertIsPresent());
      const alert = await driver.switchTo().alert();
      const alertText = await alert.getText();
      expect(alertText).toContain('Please accept the terms and conditions');
      await alert.accept();
    });

    // test('test that user reservation is sumbited', async () => {
    //   await driver.findElement(By.css("label > span")).click()
    //   await driver.sleep(100); // wait for 1 second
    //   const submitBtn = await driver.findElement(By.linkText('Submit'));
    //   await driver.executeScript('arguments[0].click()', submitBtn);
    //   await driver.sleep(3000); // wait for 3 second
    //   const url = await driver.getCurrentUrl();
    //   expect(url).toContain("/Myorders");  

    // });
});

