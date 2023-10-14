import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Visit page and Login - Check Dashboard Logout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.locator('.login-button').click;
  await expect(page.locator('.title')).toHaveText('Products');
  await page.locator('.react-burger-menu-btn').click;
  await page.getByText('Logout').click;
  await expect (page.locator('.login_wrapper-inner')).toBeVisible

  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('link', { name: 'Admin' }).click();
  // await page.getByRole('button', { name: ' Add' }).click();
  // await page.locator('form i').first().click();
  // await page.getByRole('option', { name: 'ESS' }).click();
  // await page.getByPlaceholder('Type for hints...').click();
  // await page.getByPlaceholder('Type for hints...').fill('Hint 01');
  // await page.getByText('-- Select --').click();
  // await page.getByRole('option', { name: 'Enabled' }).click();
  // await page.getByRole('textbox').nth(2).click();
  // await page.getByRole('textbox').nth(2).fill('Username 01');
  // await page.getByRole('textbox').nth(3).click();
  // await page.getByRole('textbox').nth(3).fill('Password01');
  // await page.getByRole('textbox').nth(4).click();
  // await page.getByRole('textbox').nth(4).fill('Password01');
  // await page.getByRole('button', { name: 'Save' }).click();
  // await page.getByPlaceholder('Type for hints...').click();
  // await page.getByPlaceholder('Type for hints...').click();
  // await page.getByPlaceholder('Type for hints...').fill('Hint');
  // await page.getByRole('button', { name: 'Save' }).click();
  // await page.getByPlaceholder('Type for hints...').click();
});