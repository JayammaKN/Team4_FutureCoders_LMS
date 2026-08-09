import { createLogger } from '../../utils/logger.js';
const logger = createLogger('Home');

export class HomePage {

  constructor(page) {
    this.page = page;

    this.lmsTitle = page.getByText('LMS - Learning Management System', { exact: true });

    this.homeLink = page.getByText('Home', { exact: true });
    this.programLink = page.getByText('Program', { exact: true });
    this.batchLink = page.getByText('Batch', { exact: true });
    this.logoutLink = page.getByText('Logout', { exact: true });
    this.navLinks = page.locator('mat-toolbar button');

    this.welcomeMessage = page.locator('figure').filter({ hasText: 'Welcome' });
    this.barChart = page.locator('figure canvas').first();

    this.userCard = page.getByText('User', { exact: true });
    this.programCard = page.getByText('Programs', { exact: true });
    this.staffCard = page.getByText('Staff', { exact: true });
    this.batchCard = page.getByText('Batches', { exact: true });

    this.staffTable = page.getByRole('grid');
    this.staffTableHeaders = page.getByRole('columnheader');
  }

  async getTitleText() {
    const text = await this.lmsTitle.innerText();
    logger.info(`Home page title: ${text.trim()}`);
    return text.trim();
  }

  async isTitleTopLeft() {
    const box = await this.lmsTitle.boundingBox();
    if (!box) {
      return false;
    }
    return box.x < 500 && box.y < 200;
  }

  async getNavTexts() {
    const texts = await this.navLinks.allInnerTexts();
    const cleanTexts = texts.map(text => text.trim()).filter(text => text !== '');
    logger.info(`Navigation bar texts: ${cleanTexts.join(', ')}`);
    return cleanTexts;
  }

  async isNavTopRight() {
    const box = await this.navLinks.first().boundingBox();
    const viewport = this.page.viewportSize();
    if (!box || !viewport) {
      return false;
    }
    return box.y < 100 && box.x > viewport.width / 2;
  }

  async getWelcomeText() {
    const text = await this.welcomeMessage.innerText();
    logger.info(`Welcome message: ${text.replace(/\s+/g, ' ').trim()}`);
    return text.replace(/\s+/g, ' ').trim();
  }

  async isBarChartVisible() {
    return await this.barChart.isVisible();
  }

  async isUserCardVisible() {
    return await this.userCard.isVisible();
  }

  async isProgramCardVisible() {
    return await this.programCard.isVisible();
  }

  async isStaffCardVisible() {
    return await this.staffCard.isVisible();
  }

  async isBatchCardVisible() {
    return await this.batchCard.isVisible();
  }

  async isStaffTableVisible() {
    return await this.staffTable.isVisible();
  }

  async getStaffHeaders() {
    const headers = await this.staffTableHeaders.allInnerTexts();
    return headers.map(header => header.trim());
  }

  async getBarChartData() {
    const chartData = await this.page.evaluate(() => {
      const canvas = document.querySelectorAll('figure canvas')[0];
      const alreadyChecked = new Set();
      const chartsFound = [];

      function lookInside(object) {
        if (!object || typeof object !== 'object') {
          return;
        }
        if (alreadyChecked.has(object)) {
          return;
        }
        alreadyChecked.add(object);
        if (object.data && object.config && object.canvas) {
          chartsFound.push(object);
          return;
        }
        const parts = Object.keys(object).slice(0, 200);
        for (const part of parts) {
          const partValue = object[part];
          if (typeof partValue === 'object' && partValue !== null) {
            lookInside(partValue);
          }
        }
      }

      lookInside(canvas && canvas.__ngContext__);

      let barChartObject = null;
      for (const chart of chartsFound) {
        if (chart.config.type === 'bar') {
          barChartObject = chart;
          break;
        }
      }
      if (barChartObject === null && chartsFound.length > 0) {
        barChartObject = chartsFound[0];
      }
      if (barChartObject === null) {
        return null;
      }

      const datasets = barChartObject.data.datasets || [];
      if (datasets.length === 0) {
        return null;
      }

      const firstDataset = datasets[0];
      let firstLabel = '';
      if (typeof firstDataset.label === 'string') {
        firstLabel = firstDataset.label.trim();
      }
      let firstDataIsNumber = false;
      if (Array.isArray(firstDataset.data) && typeof firstDataset.data[0] === 'number') {
        firstDataIsNumber = true;
      }
      if (firstLabel === '' || firstDataIsNumber === false) {
        return null;
      }

      function getNumber(dataset) {
        if (!dataset) {
          return 0;
        }
        if (!Array.isArray(dataset.data)) {
          return 0;
        }
        const number = dataset.data[0];
        return typeof number === 'number' ? number : 0;
      }

      const labels = [];
      for (const dataset of datasets) {
        if (dataset && dataset.label) {
          labels.push(dataset.label);
        } else {
          labels.push('');
        }
      }

      return {
        active: getNumber(firstDataset),
        inactive: getNumber(datasets[1]),
        datasetCount: datasets.length,
        labels: labels,
      };
    });

    if (chartData !== null) {
      logger.info(
        `Bar chart data: Active ${chartData.active}, ` +
        `Inactive ${chartData.inactive}, Labels: ${chartData.labels.join(', ')}`
      );
    }

    return chartData;
  }

  getCardNumber(label) {
    const card = this.page.locator('.widget').filter({ hasText: label });
    const numberLocator = card.locator('.top').first();
    logger.info(`Reading count number for card: ${label}`);
    return numberLocator;
  }
}
