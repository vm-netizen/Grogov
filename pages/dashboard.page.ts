import { Page } from '@playwright/test';

export default class DashboardPage {
  constructor(private page: Page) {}

  async goToBulkUpload() {
    await this.page.getByText('Create e-Filing').click();
  }

  async goToBatchHistory() {
    await this.page.getByText('Batch History').click();
  }

  async logout() {
    await this.page.getByText('Log Out').click();
  }
}