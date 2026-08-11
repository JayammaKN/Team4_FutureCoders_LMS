import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixture/fixtures.js';
import { createLogger } from '../../../utils/logger.js';
const logger = createLogger("BatchSteps");


const { Given, When, Then } = createBdd(test);

When('Admin logs in by entering a valid credential and clicks batch on the navigation bar', async ({loginFixture, batchPage}) => {
    await loginFixture.login();
    await batchPage.clickBatchButton();
    
});

Given('Admin is on the batch page', async ({batchPage}) => {
    logger.info('Admin is on the batch page');
    await batchPage.ensureSearchSeed();
    await batchPage.ensureBatchRowCount(2);
});

When('Admin clicks on {string} under the {string} menu bar in the manage batch page', async ({batchPage}, arg, arg1) => {
    logger.info(`Admin clicks submenu: ${arg} under menu: ${arg1}`);
    await batchPage.clickAddNewBatchButton();
});

Then('Admin should see the batch name field', async ({batchPage}) => {
    logger.info("Validating Batch Name input field visibility");
    expect(await batchPage.verifyBatchNameInputField()).toBeTruthy();
});

Then('Admin should see the number of classes field', async ({batchPage}) => {
    logger.info("Validating Number of Classes input field visibility");
    expect(await batchPage.verifyNoOfClassesInputField()).toBeTruthy();
});

Then('Admin should see the description field', async ({batchPage}) => {
     logger.info("Validating Description input field visibility");
    expect(await batchPage.verifyDescriptionInputField()).toBeTruthy();
});

Then('Admin should see the program status field with dropdown', async ({batchPage}) => {
    logger.info("Validating Program dropdown visibility");
    expect(await batchPage.verifyProgramDropdown()).toBeTruthy();
});

Then('Admin should see the status radio button', async ({batchPage}) => {
     logger.info("Validating Status radio button visibility");
    expect(await batchPage.verifyStatusRadioButton()).toBeTruthy();
});