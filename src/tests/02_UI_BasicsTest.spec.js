import { test, expect } from '@playwright/test';

test.skip('First test case', async ({ browser }) => {
  // Chrome- Plugings/cookeies (implement here if needed)

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://company.evluate.com/en/company-login");
  await context.close();
});

test('Page fixtures', async ({ page }) => {
  await page.goto("https://company.evluate.com/en/company-login");
  console.log("This is the Evluate tilte: ", await page.title());
  await expect(page).toHaveTitle('Evluate::Company');
  //await expect(page.locator('Evluate::Company')).toHaveText('Evluate::Company');
});




