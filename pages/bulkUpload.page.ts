import { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';

export default class BulkUploadPage {
  constructor(private page: Page) {}

  async uploadXML(filePath: string) {
    await this.page.setInputFiles(
      'input[type="file"]',
      filePath
    );
  }

   async acceptDeclaration() {
    await this.page.check('input[type="checkbox"]');
  }

  async clickUpload() {
    await this.page.getByText('Upload File').click();
  }

  async uploadBatch(filePath: string) {
    await this.uploadXML(filePath);
    await this.acceptDeclaration();
    await this.clickUpload();
  }

  getValidationHeader() {
    return this.page.getByText('Batch Upload:');
  }

  getUploadedFile(fileName: string) {
   return this.page.getByText(fileName);
  }
  async filesSelection (){
   await this.page.locator('input[type="checkbox"]').nth(0).check();
  }
}
