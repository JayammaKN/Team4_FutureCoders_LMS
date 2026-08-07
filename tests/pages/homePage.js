// Simple Page Object for the Home Page.
// It only stores the selectors and provides simple helper methods.
export default class HomePage {
  constructor(page) {
    this.page = page;

    // Selectors
    this.heading = 'text=LMS - Learning Management System';
    this.navLinks = 'mat-toolbar button';
    this.welcomeCard = 'figure:has(strong:has-text("Welcome"))';
    this.barChart = 'figure:has(canvas)';
    this.userCountCard = 'User';
    this.programCountCard = 'Programs';
    this.staffCountCard = 'Staff';
    this.batchCountCard = 'Batches';
    this.staffTable = 'text=Staff Data';
    this.staffTableHeaders = '[role=grid] [role=columnheader]';
  }

  // Reads the LMS heading text and removes extra spaces
  async getTitleText() {
    const text = await this.page.locator(this.heading).first().textContent();
    return text.trim();
  }

  // Reads all navigation bar texts
  async getNavTexts() {
    const texts = await this.page.locator(this.navLinks).allTextContents();
    return texts.map((t) => t.trim()).filter((t) => t !== '');
  }

  // Reads the welcome message
  async getWelcomeText() {
    const text = await this.page.locator(this.welcomeCard).first().innerText();
    return text.replace(/\s+/g, ' ').trim();
  }

  // Reads the staff table headers
  async getStaffHeaders() {
    const headers = await this.page.locator(this.staffTableHeaders).allTextContents();
    return headers.map((h) => h.trim()).filter((h) => h !== '');
  }

  // True when the title is in the top left corner
  async isTitleTopLeft() {
    const box = await this.page.locator(this.heading).first().boundingBox();
    return box !== null && box.x < 50 && box.y < 100;
  }

  // True when the navigation bar is on the top right side
  async isNavTopRight() {
    const box = await this.page.locator(this.navLinks).first().boundingBox();
    const viewport = this.page.viewportSize();
    return box !== null && box.y < 100 && box.x > viewport.width / 2;
  }

  // True when the bar chart is visible
  async isBarChartVisible() {
    return this.page.locator(this.barChart).first().isVisible();
  }

  // True when a count card is visible
  async isCountCardVisible(label) {
    return this.page.getByText(label, { exact: true }).first().isVisible();
  }

  // True when the staff table is visible
  async isStaffTableVisible() {
    return this.page.locator(this.staffTable).first().isVisible();
  }
}
