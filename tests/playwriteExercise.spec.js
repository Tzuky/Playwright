// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
  
    // Expect a title "to contain" a substring.
    
  });