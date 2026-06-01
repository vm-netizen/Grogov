import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import BulkUploadPage from '../pages/bulkUpload.page';
console.log("LoginPage import:", LoginPage);

test('User should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('your-email', 'your-password');

  await expect(page).toHaveURL(/dashboard/);
});

test('@smoke Bulk Upload Happy Path', async ({ page }) => {

  const login = new LoginPage(page);
  const bulk = new BulkUploadPage(page);

  await login.goto();
  await login.login('email', 'password');

  await expect(page).toHaveURL(/dashboard/);

  await bulk.uploadXML('path-to-xml');
  await bulk.submit();
  await bulk.validateSuccess();

});
