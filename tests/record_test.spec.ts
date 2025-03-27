import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigate to Github URL', () => { })
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('rohitdongare');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('rohit123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});

test('test with Steps to show in report', async ({ page }) => {

  await test.step('Navigate to Github URL', async () => {
    await page.goto('https://github.com/');
  })

  await test.step('Click on Sign in Button', async () => {
    await page.getByRole('link', { name: 'Sign in' }).click();
    
  })


  await test.step('Enter username And Password', async () => {
    await page.locator('#login_field').fill('rohitdongare');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('rohit123');
    
  })


  await test.step('Click on Sign In', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })


  await 
  
  
  
  
  test.step(' validate error Message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })


});