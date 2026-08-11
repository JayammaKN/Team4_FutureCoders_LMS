Feature: Manage Batch - UI validation

Background: Admin is logged in to LMS Portal
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credentials

Scenario: Batch page heading is displayed
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the " Manage Batch" Heading

Scenario: Presence of disabled Delete Icon
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the disabled "Delete Icon" under the header

Scenario: Pagination controls are displayed
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the pagination controls under the data table

Scenario: Edit icon is displayed
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the edit icon in each row

Scenario: Delete icon is displayed
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the delete icon in each row

Scenario: Checkbox is displayed
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the checkbox in each row

Scenario: Datatable headers are displayed
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of classes, Program Name, Edit/Delete

Scenario: Checkbox is displayed in the datatable header row
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the checkbox in the datatable header row

Scenario: Sort icon presence
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should see the sort icon next to all Datatable headers

Scenario: Add New Batch dialog is displayed
Given Admin is on home page after Login
When Admin clicks on "Add New batch" under the "batch" menu bar
Then Admin should see the Batch Details dialog box
