// Generated from: tests/features/logout/logout.feature
import { test } from "../../../../tests/fixture/fixtures.js";

test.describe('Validation on Logout button', () => {

  test.beforeEach('Background: Admin is logged into the application', async ({ Given, loginFixture, page }, testInfo) => { if (testInfo.error) return;
    await Given('Admin is in home page', null, { loginFixture, page }); 
  });
  
  test('Logout function', { tag: ['@logout'] }, async ({ When, Then, logoutFixture, page }) => { 
    await When('Admin clicks on the logout in the menu bar', null, { logoutFixture }); 
    await Then('Admin should be redirected to login page', null, { logoutFixture, page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/logout/logout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@logout"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is in home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout in the menu bar","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should be redirected to login page","stepMatchArguments":[]}]},
]; // bdd-data-end