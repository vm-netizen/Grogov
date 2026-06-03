import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import BulkUploadPage from '../pages/bulkUpload.page';
console.log("LoginPage import:", LoginPage);

test('User should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("vm@connexlabs.dev", "Vasudevan24*");

  await expect(page).toHaveURL(/login/);
});

test('@smoke Bulk Upload Happy Path', async ({ page }) => {

  const login = new LoginPage(page);
  const bulk = new BulkUploadPage(page);

  await login.goto();
  await login.login(
  'vm@connexlabs.dev',
  'Vasudevan24*'
);

  await expect(page).toHaveURL(/dashboard/);

  await bulk.uploadBatch(
  'C:/Sample XML files/XML Files/TestDismissal(1).xml'
);
  await expect(bulk.getValidationHeader()).toBeVisible();
  await expect(
  bulk.getUploadedFile('TestDismissal(1).xml')).toBeVisible();
  await bulk.filesSelection();
});
