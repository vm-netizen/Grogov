import { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';

export default class BulkUploadPage {
  constructor(private page: Page) {}

  async uploadXML(filePath: string) {
    await this.page.setInputFiles(
  'input[type="file"]',
  'C:/Sample XML files/XML Files/SampleDispossessory_Bulk_10(1).xml'
);
  }

  async submit() {
    await this.page.check('input[type="checkbox"]');
    await this.page.getByText('Upload Files').click();
  }

  async validateSuccess() {
     await expect(this.page.getByText('Batch Upload:')).toBeVisible();
    const row = this.page.locator('tr', { hasText: 'SampleDispossessory_Bulk_10(1)' });
    await expect(row.getByText('Pending')).toBeVisible();
  }
}