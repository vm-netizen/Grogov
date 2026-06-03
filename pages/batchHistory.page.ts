import { Page } from '@playwright/test';

export default class BatchHistoryPage {
  constructor(private page: Page) {}

  getBatch(batchName: string) {
    return this.page.getByText(batchName);
  }
}