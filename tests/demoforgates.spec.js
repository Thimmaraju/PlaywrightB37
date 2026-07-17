const { test, expect } = require('@playwright/test');


test('should check box ', async ({ page }) => {

  await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

  //await page.locator('//input[@type="checkbox"]').check()

  // await page.waitForTimeout(3000)

  //ischecked() // true checked  // false // unchecked 

  const statusoftheCheckbox = await page.locator('//input[@type="checkbox"]').isChecked()

  console.log(statusoftheCheckbox)

  if (!statusoftheCheckbox) {

    await page.locator('//input[@type="checkbox"]').check()
  }


});


test('conditional testing ', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/disappearing_elements')


  const galerystaus = await page.locator('//a[@href="/gallery/"]').isVisible()

  console.log(galerystaus)

  if (galerystaus) {

    await page.locator('//a[@href="/gallery/"]').click()
  }
  else {

    await page.locator('//a[@href="/portfolio/"]').click()
  }


});


test('conditional test 2 ', async ({ page, browserName }) => {

  if (browserName == "chromium") {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    //await page.locator('//input[@type="checkbox"]').check()

    // await page.waitForTimeout(3000)

    //ischecked() // true checked  // false // unchecked 

    const statusoftheCheckbox = await page.locator('//input[@type="checkbox"]').isChecked()

    console.log(statusoftheCheckbox)

    if (!statusoftheCheckbox) {

      await page.locator('//input[@type="checkbox"]').check()
    }

  }

});
