// Generated from: tests/features/login/login-ui.feature
import { test } from "../../../../tests/fixture/fixtures.js";

test.describe('Login UI Verification', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('Admin is on the browser', null, { page }); 
  });
  
  test('Login page is displayed successfully', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should land on the login page', null, { page }); 
  });

  test('Access app with invalid URL', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the invalid LMS app URL', null, { loginFixture }); 
    await Then('Admin should receive application error', null, { loginFixture }); 
  });

  test('Broken link verification', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('HTTP response < 400. Then the link is working', null, { loginFixture }); 
  });

  test('Application title is displayed', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see the application title', null, { loginFixture, page }); 
  });

  test('Application Logo is displayed', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see Application Logo', null, { loginFixture, page }); 
  });

  test.skip('Company name is displayed', { tag: ['@skip'] }, async ({ When, Then }) => { 
    await When('Admin enters the Valid LMS app URL'); 
    await Then('Admin should see company name below the app name'); 
  });

  test('Login instruction message is displayed', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see the login message', null, { loginFixture, page }); 
  });

  test('Input field is displayed', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see two text field', null, { loginFixture, page }); 
  });

  test('Role Dropdown is displayed', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see one dropdown', null, { loginFixture, page }); 
  });

  test('Text presence on the first field', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see "User" in the first text field', null, { loginFixture, page }); 
  });

  test('Text presence on the second field', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see "Password" in the second text field', null, { loginFixture, page }); 
  });

  test('Asterisk is displayed for user field', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see asterisk mark(*) symbol next to text for user field', null, { loginFixture }); 
  });

  test('Asterisk is displayed for password field', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see asterisk mark symbol next to password text', null, { loginFixture }); 
  });

  test('Placeholder presence in dropdown', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see "Select the role" placeholder in dropdown', null, { loginFixture, page }); 
  });

  test('Dropdown options to select role', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see "Admin", "Staff", "Student" options in dropdown', null, { loginFixture }); 
  });

  test('Alignment of the login form', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see login form on the centre of the page', null, { loginFixture }); 
  });

  test('Input field label alignment', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Username , Password labels and select the role should be left-aligned above their respective input fields', null, { loginFixture }); 
  });

  test('Login button is displayed', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see login button', null, { loginFixture, page }); 
  });

  test('User field Placeholder text colour', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see user text in gray color', null, { loginFixture }); 
  });

  test('Password field Placeholder text colour', async ({ When, Then, loginFixture }) => { 
    await When('Admin enters the Valid LMS app URL', null, { loginFixture }); 
    await Then('Admin should see password text in gray color', null, { loginFixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/login/login-ui.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the login page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Admin enters the invalid LMS app URL","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then HTTP response < 400. Then the link is working","stepMatchArguments":[{"group":{"start":16,"value":"400"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":25,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the application title","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Application Logo","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":27,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL"},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Admin should see company name below the app name"}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the login message","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Admin should see two text field","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then Admin should see one dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"User\" in the first text field","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Password\" in the second text field","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark(*) symbol next to text for user field","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":55,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to password text","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":59,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Select the role\" placeholder in dropdown","stepMatchArguments":[{"group":{"start":17,"value":"\"Select the role\"","children":[{"start":18,"value":"Select the role","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":80,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Admin\", \"Staff\", \"Student\" options in dropdown","stepMatchArguments":[{"group":{"start":17,"value":"\"Admin\"","children":[{"start":18,"value":"Admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":26,"value":"\"Staff\"","children":[{"start":27,"value":"Staff","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"Student\"","children":[{"start":36,"value":"Student","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":85,"pickleLine":67,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Admin should see login form on the centre of the page","stepMatchArguments":[]}]},
  {"pwTestLine":90,"pickleLine":71,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Username , Password labels and select the role should be left-aligned above their respective input fields","stepMatchArguments":[]}]},
  {"pwTestLine":95,"pickleLine":75,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then Admin should see login button","stepMatchArguments":[]}]},
  {"pwTestLine":100,"pickleLine":79,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should see user text in gray color","stepMatchArguments":[]}]},
  {"pwTestLine":105,"pickleLine":83,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"When Admin enters the Valid LMS app URL","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":85,"keywordType":"Outcome","textWithKeyword":"Then Admin should see password text in gray color","stepMatchArguments":[]}]},
]; // bdd-data-end