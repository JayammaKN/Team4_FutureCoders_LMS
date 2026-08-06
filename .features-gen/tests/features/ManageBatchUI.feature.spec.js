// Generated from: tests\features\ManageBatchUI.feature
import { test } from "../../../tests/fixture/fixtures.js";

test.describe('Manage Batch - UI validation', () => {

  test.beforeEach('Background: Admin is logged in to LMS Portal', async ({ Given, When, loginFixture }, testInfo) => { if (testInfo.error) return;
    await Given('Admin is on login Page', null, { loginFixture }); 
    await When('Admin clicks login in button after entering  a valid credential', null, { loginFixture }); 
  });
  
  test('Batch page heading is displayed', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the " Manage Batch" Heading', null, { batchPage }); 
  });

  test('Presence of disabled Delete Icon', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the disabled "Delete Icon" under the header', null, { batchPage }); 
  });

  test('Pagination controls are displayed', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the pagination controls under the data table', null, { batchPage }); 
  });

  test('Edit icon is displayed', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the edit icon in each row', null, { batchPage }); 
  });

  test('Delete icon is displayed', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the delete icon in each row', null, { batchPage }); 
  });

  test('Checkbox is displayed', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the checkbox in each row', null, { batchPage }); 
  });

  test('Datatable headers are displayed', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of classes, Program Name, Edit/Delete', null, { batchPage }); 
  });

  test('Checkbox is displayed in the datatable header row', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the checkbox in the datatable header row', null, { batchPage }); 
  });

  test('Sort icon presence', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { batchPage }); 
    await Then('Admin should see the sort icon next to all Datatable headers', null, { batchPage }); 
  });

  test('Add New Batch dialog is displayed', async ({ Given, When, Then, batchPage }) => { 
    await Given('Admin is on home page after Login', null, { batchPage }); 
    await When('Admin clicks on "Add New batch" under the "batch" menu bar', null, { batchPage }); 
    await Then('Admin should see the Batch Details dialog box', null, { batchPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\ManageBatchUI.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" Manage Batch\" Heading","stepMatchArguments":[{"group":{"start":21,"value":"\" Manage Batch\"","children":[{"start":22,"value":" Manage Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the disabled \"Delete Icon\" under the header","stepMatchArguments":[{"group":{"start":30,"value":"\"Delete Icon\"","children":[{"start":31,"value":"Delete Icon","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the pagination controls under the data table","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the edit icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the delete icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in each row","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of classes, Program Name, Edit/Delete","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in the datatable header row","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":62,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon next to all Datatable headers","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":52,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login in button after entering  a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Add New batch\" under the \"batch\" menu bar","stepMatchArguments":[{"group":{"start":16,"value":"\"Add New batch\"","children":[{"start":17,"value":"Add New batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"batch\"","children":[{"start":43,"value":"batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":68,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Batch Details dialog box","stepMatchArguments":[]}]},
]; // bdd-data-end