const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser(Browser.EDGE).build();
  await driver.get('http://localhost:3000');
  // Apply timeout for 10 seconds
  // await driver.manage().setTimeouts( { implicit: 3000 } );

});

afterEach(async () => {
  // console.log('do nothing')
  await driver.quit();
});

test("crossing off a movie", async () => {
  // add a movie
  await driver.findElement(By.name('movieTitle')).sendKeys("automation", Key.RETURN);
  // wait until movie appears in the list
  await driver.wait(until.elementLocated(By.id('movie-0')),1000);
  // cross it off
  await driver.findElement(By.id('movie-0')).click();
  
});

test("delete a movie", async () => {
  // add a movie
  await driver.findElement(By.name('movieTitle')).sendKeys("today is a good day", Key.RETURN);
  // wait until movie appears in the list
  await driver.wait(until.elementLocated(By.id('movie-0')),1000);
  // add one more movie
  await driver.findElement(By.name('movieTitle')).sendKeys("it is great", Key.RETURN);
  // wait until movie appears in the list
  await driver.wait(until.elementLocated(By.id('movie-1')),1000);
  
  // remove the second movie
  // var mvList = await driver.findElement(By.id('movies-list'));
  dltBtns = await driver.findElements(By.className('delete-btn'))
  dltBtns[1].click()
});

test("check if notification is displayed", async () => {
  // add a movie
  movieName = "today is a good day"
  await driver.findElement(By.name('movieTitle')).sendKeys(movieName, Key.RETURN);
  // wait until movie appears in the list
  await driver.wait(until.elementLocated(By.id('movie-0')),1000);
  
  // cross it off
  await driver.findElement(By.id('movie-0')).click();
  // check if deleted
  var watchedMessage = await driver.wait(
    until.elementLocated(By.id('message')),100);
  expect(await watchedMessage.getText()).toBe(`Watched ${movieName}`)

  // add it back
  await driver.findElement(By.id('movie-0')).click();
  // check if added
  var watchedMessage = await driver.wait(
    until.elementLocated(By.id('message')),100);
  expect(await watchedMessage.getText()).toBe(`Added back ${movieName}`)
});
