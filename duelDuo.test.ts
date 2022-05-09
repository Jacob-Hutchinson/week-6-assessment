
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

})
//scotts exapmles for the assessment 

test('check that the draw button displays the dive with id = choices', async () => {
    await driver.findElement(By.id('draw')).click()
    
    const choices = await driver.findElement(By.id('choices'))
    
    const displayed = await choices.isDisplayed()
    
    expect(displayed).toBe(true)
})
test('check the clicking an "add to duo" button displays to the player-duo', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.findElement(By.xpath('(//button[text()="add to duo])[1]')).click()

    const playerDuo = await driver.findElement(By.id('player-duo'))

    const displayed = await playerDuo.isDisplayed()

    expect(displayed).toBe(true)



})




// test('see if the draw button will be clicked', async () => {
//     const drawButton = await driver.findElement(By.id('Draw'))
// })