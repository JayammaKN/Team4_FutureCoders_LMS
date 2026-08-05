// Generated from: tests/features/login.feature
import { test } from "../../../tests/fixture/fixtures.js";

test.describe('Login Functionality', () => {

  test('Login page is displayed successfully', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should land on the login page', null, { page }); 
  });

  test('Access app with invalid URL', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the invalid LMS app URL', null, { loginFixture }); 
    await Then('Admin should receive application error', null, { loginFixture }); 
  });

  test('Broken link verification', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('HTTP response >= 400. Then the link is broken', null, { loginFixture }); 
  });

  test('Application title is displayed', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see  LMS - Learning Management System', null, { page }); 
  });

  test('Application Logo is displayed', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see Application Logo', null, { loginFixture, page }); 
  });

  test('Company name is displayed', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see company name below the app name', null, { loginFixture, page }); 
  });

  test('Login instruction message is displayed', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see "Please login to LMS application"', null, { page }); 
  });

  test('Input field is displayed', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see two text field', null, { loginFixture, page }); 
  });

  test('Role Dropdown is displayed', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see one dropdown', null, { loginFixture, page }); 
  });

  test('Text presence on the first field', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see "User" in the first text field', null, { loginFixture, page }); 
  });

  test('Text presence on the second field', async ({ Given, When, Then, loginFixture, page }) => { 
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should  see "Password" in the second text field', null, { loginFixture, page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the login page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Admin enters the invalid LMS app URL","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then HTTP response >= 400. Then the link is broken","stepMatchArguments":[{"group":{"start":17,"value":"400"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":24,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see  LMS - Learning Management System","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Application Logo","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see company name below the app name","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Please login to LMS application\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Please login to LMS application\"","children":[{"start":18,"value":"Please login to LMS application","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see two text field","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":55,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see one dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":61,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"User\" in the first text field","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":52,"tags":[],"steps":[{"pwStepLine":67,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Admin should  see \"Password\" in the second text field","stepMatchArguments":[{"group":{"start":18,"value":"\"Password\"","children":[{"start":19,"value":"Password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end