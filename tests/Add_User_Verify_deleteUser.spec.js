// @ts-check
const { test, expect } = require('@playwright/test');

test('Add User - Verify - Delete - Logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByText('User Management')).toBeVisible;
  await page.locator('.orangehrm-header-container .oxd-button--secondary').click();
  await page.locator('//div[@id=\'app\']/div[@class=\'oxd-layout\']/div[@class=\'oxd-layout-container\']/div[@class=\'oxd-layout-context\']//form[@class=\'oxd-form\']/div[@class=\'oxd-form-row\']/div/div[1]/div/div[2]/div[@class=\'oxd-select-wrapper\']/div//i').click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press('Enter');
  await page.locator('[placeholder=\'Type for hints\.\.\.\']').fill('Alice Duval');
  await page.locator('div:nth-of-type(3) > .oxd-input-field-bottom-space.oxd-input-group > div:nth-of-type(2) > .oxd-select-wrapper > .oxd-select-text  .bi-caret-down-fill.oxd-icon.oxd-select-text--arrow').click();
  await page.locator('.oxd-select-text.oxd-select-text--error > .oxd-select-text-input').click();
  await page.keyboard.down;
  await page.keyboard.down;
  await page.keyboard.press;
  await page.locator('.oxd-autocomplete-text-input > input[placeholder=\'Type for hints...\']').fill('Alice Duval');




  await page.locator('div:nth-of-type(2) > .oxd-input').fill('User-New')
  await page.locator('.orangehrm-left-space').click();
  await expect(page.locator('.oxd-table-card [role=\'cell\']:nth-of-type(4) div')).toHaveText('Odis Adalwin');
  await expect(page.locator('.oxd-table-card [role=\'cell\']:nth-of-type(5) div')).toHaveText('Enabled');
  await page.locator('.oxd-userdropdown-tab').click();
  await page.locator('li:nth-of-type(4) > a[role=\'menuitem\']').click();

});