import {createLogger} from '../../utils/logger.js';
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
    // Bar chart (a <canvas> inside a <figure>) - XPath equivalent: //figure//canvas
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
  /* This function validates UI chart data(Active/Inactive) 
  async getBarChartLabels() {
  return await this.page.evaluate(() => {
    const canvas = document.querySelector('figure canvas');

    if (!canvas || !window.Chart) {
      return [];
    }

    const chart = Object.values(Chart.instances)
      .find(chart => chart.canvas === canvas);

    if (!chart) {
      return [];
    }

    return chart.data.datasets.map(dataset => dataset.label);
  });
} */

 // # chart.js data and verifies Active/Inactive values are present.
  async getBarChartData() {
    const chartData = await this.page.evaluate(() => {
      // Get our canvas element (the one inside the <figure>)
      const canvas = document.querySelectorAll('figure canvas')[0];
      //    Chart.instances holds every chart, so we look through them all.
      let chart = null;
      for (const key in window.Chart.instances) {
        const candidate = window.Chart.instances[key];
        const isOurCanvas = candidate.canvas === canvas;
        const isBarChart = candidate.config && candidate.config.type === 'bar';
        if (isOurCanvas && isBarChart) {
          chart = candidate;
          break; 
        }
      }
     // Chart not ready yet - the test will call us again
      if (chart === null) {
        return null;
      }
      // Read the datasets of the chart
      const datasets = chart.data.datasets || [];
      // Helper: return the first number of a dataset (0 when missing)
      const getNumber = (dataset) => {
        const number = dataset && dataset.data ? dataset.data[0] : undefined;
        return typeof number === 'number' ? number : 0;
      };
      //  The first dataset must have a label ("Active") and a number value.
      const firstLabel = datasets[0] && typeof datasets[0].label === 'string'? datasets[0].label.trim(): '';
      const firstNumber = datasets[0] && datasets[0].data
        ? datasets[0].data[0]
        : undefined;
      if (firstLabel === '' || typeof firstNumber !== 'number') {
        return null;
      }

      // Collect the data we need
      return {
        active: getNumber(datasets[0]),
        inactive: getNumber(datasets[1]),
        datasetCount: datasets.length,
        labels: datasets.map(dataset =>
          typeof dataset.label === 'string' ? dataset.label.trim() : ''
        ),
      };
    });
    if (chartData !== null) {
      logger.info(`Bar chart data: Active ${chartData.active}, ` +`Inactive ${chartData.inactive}, Labels: ${chartData.labels.join(', ')}`);
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
