import { test, expect } from '@playwright/test';

test('Open Page go to My Info - Check Logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await expect(page.getByText('Personal Details')).toBeVisible;
  await page.locator('span').filter({ hasText: 'Paul Collings' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});