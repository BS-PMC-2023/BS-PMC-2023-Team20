
const { Builder, By, until } = require('selenium-webdriver');

describe('Singin component', () => {

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
    await driver.wait(until.urlIs('http://localhost:3000/'), 5000);
    await driver.quit();
  });

  test('should not allow users to sign in with invalid credentials', async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/Sing-in');
    await driver.findElement(By.css('input[type="text"]')).sendKeys('invalid@gmail.com');
    await driver.findElement(By.css('input[type="password"]')).sendKeys('wrongpassword');
    await driver.findElement(By.css('span[type="submit"]')).click();
    await driver.wait(until.alertIsPresent());
    const alert = await driver.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).toContain('Error somthing went wrong please try again');
    await alert.accept();
  });

});



