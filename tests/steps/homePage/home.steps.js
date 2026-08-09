import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

import { test } from '../../fixture/fixtures.js';

import homeData from '../../test-data/homeData.json' with { type: 'json' };

const { Then } = createBdd(test);


// =====================================================
// 1. TITLE OF LMS
// =====================================================

Then(
    'Admin should see LMS - Learning management system as title',
    async ({ homeFixture }) => {

        const actualTitle =
            await homeFixture.getTitleText();

        await expect(actualTitle)
            .toBe(homeData.title);
    }
);


// =====================================================
// 2. TITLE ALIGNMENT
// =====================================================

Then(
    'LMS title should be on the top left corner of page',
    async ({ homeFixture }) => {

        const isTopLeft =
            await homeFixture.isTitleTopLeft();

        await expect(isTopLeft)
            .toBe(true);
    }
);


// =====================================================
// 3. NAVIGATION BAR TEXT SPELLING
// =====================================================

Then(
    'Admin should see correct spelling in navigation bar text',
    async ({ homeFixture }) => {

        const actualNavTexts =
            await homeFixture.getNavTexts();

        await expect(actualNavTexts)
            .toEqual(homeData.navLinks);
    }
);


// =====================================================
// 4. LMS TITLE SPELLING AND SPACE
// =====================================================

Then(
    'Admin should see correct spelling and space in LMS title',
    async ({ homeFixture }) => {

        const actualTitle =
            await homeFixture.getTitleText();

        await expect(actualTitle)
            .toBe(homeData.title);
    }
);


// =====================================================
// 5. NAVIGATION BAR ALIGNMENT
// =====================================================

Then(
    'Admin should see the navigation bar text on the top right side',
    async ({ homeFixture }) => {

        const isTopRight =
            await homeFixture.isNavTopRight();

        await expect(isTopRight)
            .toBe(true);
    }
);


// =====================================================
// 6. HOME IS FIRST
// =====================================================

Then(
    'Admin should see home in the 1st place',
    async ({ homeFixture }) => {

        const navTexts =
            await homeFixture.getNavTexts();

        await expect(navTexts[0])
            .toBe(homeData.navLinks[0]);
    }
);


// =====================================================
// 7. PROGRAM IS SECOND
// =====================================================

Then(
    'Admin should see program in the 2nd place',
    async ({ homeFixture }) => {

        const navTexts =
            await homeFixture.getNavTexts();

        await expect(navTexts[1])
            .toBe(homeData.navLinks[1]);
    }
);


// =====================================================
// 8. BATCH IS THIRD
// =====================================================

Then(
    'Admin should see batch in the 3rd place',
    async ({ homeFixture }) => {

        const navTexts =
            await homeFixture.getNavTexts();

        await expect(navTexts[2])
            .toBe(homeData.navLinks[2]);
    }
);


// =====================================================
// 9. LOGOUT IS FOURTH
// =====================================================

Then(
    'Admin should see logout in the 4th place',
    async ({ homeFixture }) => {

        const navTexts =
            await homeFixture.getNavTexts();

        await expect(navTexts[3])
            .toBe(homeData.navLinks[3]);
    }
);


// =====================================================
// 10. WELCOME MESSAGE
// =====================================================

Then(
    'Admin should see welcome message with user name and role',
    async ({ homeFixture, envFixture }) => {

        const welcomeText =
            await homeFixture.getWelcomeText();

        await expect(welcomeText)
            .toContain(homeData.welcome);

        await expect(welcomeText)
            .toContain(envFixture.username);

        await expect(
            welcomeText.toLowerCase()
        ).toContain(
            envFixture.role.toLowerCase()
        );
    }
);

Then(
    'Admin should see bar chart for Active and inactive user',
    async ({ homeFixture }) => { 
        await expect(homeFixture.barChart).toBeVisible();
        let chartData = null;

        await expect.poll(async () => {
                chartData = await homeFixture.getBarChartData();
                return chartData;
            })
            .not.toBeNull();

        expect(chartData.datasetCount).toBe(2);

        expect(chartData.labels)
            .toContain('Active');

        expect(chartData.labels)
            .toContain('Inactive');
    }
);
Then(
    'Admin should see user count',
    async ({ homeFixture }) => {
        await expect(homeFixture.userCard).toBeVisible();
        await expect(homeFixture.getCardNumber('User')).toHaveText(/\d+/); //Make sure the User card's number box has some number in it//EX:text like "0", "42", or "1,234" passes; empty text or "N/A" fails
    }
);
Then(
    'Admin should see Program count',
    async ({ homeFixture }) => {
        await expect(homeFixture.programCard).toBeVisible();
        await expect(homeFixture.getCardNumber('Programs')).toHaveText(/\d+/);
    }
);
Then(
    'Admin should see Staff count',
    async ({ homeFixture }) => {

        await expect(homeFixture.staffCard).toBeVisible();
        await expect(homeFixture.getCardNumber('Staff')).toHaveText(/\d+/);
    }
);
Then(
    'Admin should see batch count',
    async ({ homeFixture }) => {

        await expect(homeFixture.batchCard).toBeVisible();
        await expect(homeFixture.getCardNumber('Batches')).toHaveText(/\d+/);
    }
);
Then(
    'Admin should see the Staff Data table',
    async ({ homeFixture }) => {

        await expect(homeFixture.staffTable).toBeVisible();
    }
);

Then(
    'Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table',
    async ({ homeFixture }) => {

        const actualHeaders =
            await homeFixture.getStaffHeaders();

        await expect(actualHeaders)
            .toEqual(homeData.staffHeaders);
    }
);
