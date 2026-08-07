// Simple step definitions for the Home Page feature.
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const homeData = require('../../test-data/homeData.json');

const { Then } = createBdd(test);

// 1 - Title of the LMS
Then('Admin should see LMS - Learning management system as title', async ({ homeFixture }) => {
  await expect(await homeFixture.getTitleText()).toBe(homeData.title);
});

// 2 - Title alignment
Then('LMS title should be on the top left corner of page', async ({ homeFixture }) => {
  await expect(await homeFixture.isTitleTopLeft()).toBe(true);
});

// 3 - Navigation bar text spelling
Then('Admin should see correct spelling in navigation bar text', async ({ homeFixture }) => {
  await expect(await homeFixture.getNavTexts()).toEqual(homeData.navLinks);
});

// 4 - LMS title spelling and space
Then('Admin should see correct spelling and space in LMS title', async ({ homeFixture }) => {
  await expect(await homeFixture.getTitleText()).toBe(homeData.title);
});

// 5 - Navigation bar Alignment
Then('Admin should see the navigation bar text on the top right side', async ({ homeFixture }) => {
  await expect(await homeFixture.isNavTopRight()).toBe(true);
});

// 6 - Navigation bar order - 1st home
Then('Admin should see home in the 1st place', async ({ homeFixture }) => {
  const navTexts = await homeFixture.getNavTexts();
  await expect(navTexts[0]).toBe(homeData.navLinks[0]);
});

// 7 - Navigation bar order - 2nd Program
Then('Admin should see program in the 2nd place', async ({ homeFixture }) => {
  const navTexts = await homeFixture.getNavTexts();
  await expect(navTexts[1]).toBe(homeData.navLinks[1]);
});

// 8 - Navigation bar order - 3rd batch
Then('Admin should see batch in the 3rd place', async ({ homeFixture }) => {
  const navTexts = await homeFixture.getNavTexts();
  await expect(navTexts[2]).toBe(homeData.navLinks[2]);
});

// 9 - Navigation bar order - 4th logout
Then('Admin should see logout in the 4th place', async ({ homeFixture }) => {
  const navTexts = await homeFixture.getNavTexts();
  await expect(navTexts[3]).toBe(homeData.navLinks[3]);
});

// 10 - Welcome Message is displayed
Then('Admin should see welcome message with user name and role', async ({ envFixture, homeFixture }) => {
  const welcome = await homeFixture.getWelcomeText();
  await expect(welcome).toContain(homeData.welcome);
  await expect(welcome).toContain(envFixture.username);
  await expect(welcome.toLowerCase()).toContain(envFixture.role.toLowerCase());
});

// 11 - Bar chart presence
Then('Admin should see bar chart for Active and inactive user', async ({ homeFixture }) => {
  await expect(await homeFixture.isBarChartVisible()).toBe(true);
});

// 12 - User count card presence
Then('Admin should see user count', async ({ homeFixture }) => {
  await expect(await homeFixture.isCountCardVisible(homeFixture.userCountCard)).toBe(true);
});

// 13 - Program count card presence
Then('Admin should see Program count', async ({ homeFixture }) => {
  await expect(await homeFixture.isCountCardVisible(homeFixture.programCountCard)).toBe(true);
});

// 14 - Staff Count card presence
Then('Admin should see Staff count', async ({ homeFixture }) => {
  await expect(await homeFixture.isCountCardVisible(homeFixture.staffCountCard)).toBe(true);
});

// 15 - Batch count card presence
Then('Admin should see batch count', async ({ homeFixture }) => {
  await expect(await homeFixture.isCountCardVisible(homeFixture.batchCountCard)).toBe(true);
});

// 16 - Staff Table Presence
Then('Admin should see the Staff Data table', async ({ homeFixture }) => {
  await expect(await homeFixture.isStaffTableVisible()).toBe(true);
});

// 17 - Staff Table header Presence
Then('Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table', async ({ homeFixture }) => {
  await expect(await homeFixture.getStaffHeaders()).toEqual(homeData.staffHeaders);
});
