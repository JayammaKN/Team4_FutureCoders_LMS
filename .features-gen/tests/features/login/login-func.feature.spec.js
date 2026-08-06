// Generated from: tests/features/login/login-func.feature
import { test } from "../../../../tests/fixture/fixtures.js";

test.describe('Login Page - Functional Verification', () => {

  test.beforeEach('Background: Admin enters the Valid LMS app URL', async ({ Given, loginFixture, page }, testInfo) => { if (testInfo.error) return;
    await Given('Admin is on login Page', null, { loginFixture, page }); 
  });
  
  test('Successful login with valid credentials', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin clicks login in button after entering a valid credential', null, { loginFixture }); 
    await Then('Admin should land on home page', null, { page }); 
  });

  test('Login with spl charac in user name', async ({ When, Then, loginFixture }) => { 
    await When('Admin clicks login in button after entering special character in username', null, { loginFixture }); 
    await Then('Admin should see Error message "Inactive User : Please contact Admin for assistance"', null, { loginFixture }); 
  });

  test('Login attempt with empty username', async ({ When, Then, loginFixture }) => { 
    await When('Admin has entered only the password and selected a role', null, { loginFixture }); 
    await Then('Admin should see Error message "Please enter your user name"', null, { loginFixture }); 
  });

  test('Login attempt with empty password', async ({ When, Then, loginFixture }) => { 
    await When('Admin has entered only the username and selected a role', null, { loginFixture }); 
    await Then('Admin should see Error message "Please enter your password"', null, { loginFixture }); 
  });

  test('Login attempt with wrong password', async ({ When, Then, loginFixture }) => { 
    await When('Admin clicks login in button after entering valid username , role and wrong password', null, { loginFixture }); 
    await Then('Admin should see Error message "Invalid username and password Please try again"', null, { loginFixture }); 
  });

  test('Login attempt without selecting any role', async ({ When, Then, loginFixture }) => { 
    await When('Admin has entered a valid username and password without selecting a role', null, { loginFixture }); 
    await Then('Admin should see Error Messge "Please select your Role"', null, { loginFixture }); 
  });

  test('Login Attempt with invalid role', async ({ Given, Then, loginFixture }) => { 
    await Given('Admin clicks login in button after selecting a invalid role and entering valid username ,password', null, { loginFixture }); 
    await Then('Admin should see Error Messge "Please select correct role"', null, { loginFixture }); 
  });

  test('Login Attempt using Keyboard', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin clicks login in button after entering a valid credential through keyboard', null, { loginFixture }); 
    await Then('Admin should land on home page', null, { page }); 
  });

  test('Login Attempt using Mouse', async ({ When, Then, loginFixture, page }) => { 
    await When('Admin clicks login in button after entering a valid credential through mouse', null, { loginFixture }); 
    await Then('Admin should land on home page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/login/login-func.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering special character in username","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Error message \"Inactive User : Please contact Admin for assistance\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Inactive User : Please contact Admin for assistance\"","children":[{"start":32,"value":"Inactive User : Please contact Admin for assistance","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin has entered only the password and selected a role","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Error message \"Please enter your user name\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter your user name\"","children":[{"start":32,"value":"Please enter your user name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin has entered only the username and selected a role","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Error message \"Please enter your password\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter your password\"","children":[{"start":32,"value":"Please enter your password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering valid username , role and wrong password","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Invalid username and password Please try again\"","children":[{"start":32,"value":"Invalid username and password Please try again","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When Admin has entered a valid username and password without selecting a role","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Error Messge \"Please select your Role\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Please select your Role\"","children":[{"start":31,"value":"Please select your Role","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given Admin clicks login in button after selecting a invalid role and entering valid username ,password","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Error Messge \"Please select correct role\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Please select correct role\"","children":[{"start":31,"value":"Please select correct role","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":45,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential through keyboard","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering a valid credential through mouse","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
]; // bdd-data-end