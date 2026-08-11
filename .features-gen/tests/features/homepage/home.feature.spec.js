// Generated from: tests/features/homepage/home.feature
import { test } from "../../../../tests/fixture/fixtures.js";

test.describe('Home Page', () => {

  test.beforeEach('Background: Admin gives the valid LMS portal URL', async ({ Given, When, loginFixture, page }, testInfo) => { if (testInfo.error) return;
    await Given('Admin is on login Page', null, { loginFixture, page }); 
    await When('Admin clicks login in button after entering a valid credential', null, { loginFixture }); 
  });
  
  test('Title of the LMS', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see LMS - Learning management system as title', null, { homeFixture }); 
  });

  test('Title alignment', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('LMS title should be on the top left corner of page', null, { homeFixture }); 
  });

  test('Navigation bar text spelling', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see correct spelling in navigation bar text', null, { homeFixture }); 
  });

  test('LMS title - spelling and space', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see correct spelling and space in LMS title', null, { homeFixture }); 
  });

  test('Navigation bar Alignment', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see the navigation bar text on the top right side', null, { homeFixture }); 
  });

  test('Navigation bar order - 1st home', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see home in the 1st place', null, { homeFixture }); 
  });

  test('Navigation bar order - 2nd Program', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see program in the 2nd place', null, { homeFixture }); 
  });

  test('Navigation bar order - 3rd batch', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see batch in the 3rd place', null, { homeFixture }); 
  });

  test('Navigation bar order - 4th logout', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see logout in the 4th place', null, { homeFixture }); 
  });

  test('Welcome Message is displayed', { tag: ['@home'] }, async ({ Then, envFixture, homeFixture }) => { 
    await Then('Admin should see welcome message with user name and role', null, { envFixture, homeFixture }); 
  });

  test('Bar chart presence', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see bar chart for Active and inactive user', null, { homeFixture }); 
  });

  test('User count card presence', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see user count', null, { homeFixture }); 
  });

  test('Program count card presence', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see Program count', null, { homeFixture }); 
  });

  test('Staff Count card presence', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see Staff count', null, { homeFixture }); 
  });

  test('Batch count card presence', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see batch count', null, { homeFixture }); 
  });

  test('Staff Table Presence', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see the Staff Data table', null, { homeFixture }); 
  });

  test('Staff Table header Presence', { tag: ['@home'] }, async ({ Then, homeFixture }) => { 
    await Then('Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table', null, { homeFixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/homepage/home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":8,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should see LMS - Learning management system as title","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then LMS title should be on the top left corner of page","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":14,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see correct spelling in navigation bar text","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see correct spelling and space in LMS title","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":20,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the navigation bar text on the top right side","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":23,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see home in the 1st place","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":26,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see program in the 2nd place","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":29,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch in the 3rd place","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":32,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Admin should see logout in the 4th place","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":35,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should see welcome message with user name and role","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":50,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin should see bar chart for Active and inactive user","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":53,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then Admin should see user count","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":56,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Program count","stepMatchArguments":[]}]},
  {"pwTestLine":63,"pickleLine":59,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Staff count","stepMatchArguments":[]}]},
  {"pwTestLine":67,"pickleLine":62,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch count","stepMatchArguments":[]}]},
  {"pwTestLine":71,"pickleLine":65,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Staff Data table","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":68,"tags":["@home"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table","stepMatchArguments":[]}]},
]; // bdd-data-end