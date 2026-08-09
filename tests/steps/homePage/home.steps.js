import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

import { test } from '../../fixture/fixtures.js';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const homeData =
    require('../../test-data/homeData.json');

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


// =====================================================
// 11. BAR CHART
//
// Verified from the UI only: the bar chart must show two
// datasets labelled "Active" and "Inactive". The app currently
// shows "Undefined" for the Inactive bar (its label is empty),
// so this test is expected to fail until that bug is fixed.
// =====================================================

Then(
    'Admin should see bar chart for Active and inactive user',
    async ({ homeFixture }) => {

        await expect(
            homeFixture.barChart
        ).toBeVisible();

        // The chart data takes a moment to load, so we keep
        // polling until getBarChartData() returns real data.
        let chartData = null;

        await expect
            .poll(async () => {
                chartData = await homeFixture.getBarChartData();
                return chartData;
            })
            .not.toBeNull();

        expect(chartData.datasetCount)
            .toBe(2);

        expect(chartData.labels)
            .toContain('Active');

        expect(chartData.labels)
            .toContain('Inactive');
    }
);


// =====================================================
// 12. USER COUNT CARD
// =====================================================

// =====================================================
// 12. USER COUNT CARD
//
// Admin should see some number (count) on the User card.
// =====================================================

Then(
    'Admin should see user count',
    async ({ homeFixture }) => {

        await expect(
            homeFixture.userCard
        ).toBeVisible();

        // The card shows a number (any number is fine)
        await expect(
            homeFixture.getCardNumber('User')
        ).toHaveText(/\d+/);
    }
);


// =====================================================
// 13. PROGRAM COUNT CARD
//
// Admin should see some number (count) on the Program card.
// =====================================================

Then(
    'Admin should see Program count',
    async ({ homeFixture }) => {

        await expect(
            homeFixture.programCard
        ).toBeVisible();

        // The card shows a number (any number is fine)
        await expect(
            homeFixture.getCardNumber('Programs')
        ).toHaveText(/\d+/);
    }
);


// =====================================================
// 14. STAFF COUNT CARD
//
// Admin should see some number (count) on the Staff card.
// =====================================================

Then(
    'Admin should see Staff count',
    async ({ homeFixture }) => {

        await expect(
            homeFixture.staffCard
        ).toBeVisible();

        // The card shows a number (any number is fine)
        await expect(
            homeFixture.getCardNumber('Staff')
        ).toHaveText(/\d+/);
    }
);


// =====================================================
// 15. BATCH COUNT CARD
//
// Admin should see some number (count) on the Batch card.
// =====================================================

Then(
    'Admin should see batch count',
    async ({ homeFixture }) => {

        await expect(
            homeFixture.batchCard
        ).toBeVisible();

        // The card shows a number (any number is fine)
        await expect(
            homeFixture.getCardNumber('Batches')
        ).toHaveText(/\d+/);
    }
);


// =====================================================
// 16. STAFF DATA TABLE
// =====================================================

Then(
    'Admin should see the Staff Data table',
    async ({ homeFixture }) => {

        await expect(
            homeFixture.staffTable
        ).toBeVisible();
    }
);


// =====================================================
// 17. STAFF TABLE HEADERS
// =====================================================

Then(
    'Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table',
    async ({ homeFixture }) => {

        const actualHeaders =
            await homeFixture.getStaffHeaders();

        await expect(actualHeaders)
            .toEqual(homeData.staffHeaders);
    }
);
