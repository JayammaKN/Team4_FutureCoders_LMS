Feature: Add New Batch - UI validation

Background: Admin navigates to Manage batch page after logged in
Given Admin is on login Page
When Admin logs in by entering a valid credential and clicks batch on the navigation bar
Then Admin should be in the Manage Batch Page

Scenario: Batch name field is displayed
Given Admin is on the batch page
When Admin clicks on "Add New batch" under the "batch" menu bar
Then Admin should see the batch name field

Scenario: Number of Classes field is displayed.
Given Admin is on the batch page
When Admin clicks on "Add New batch" under the "batch" menu bar
Then Admin should see the number of classes field

Scenario: Description field is displayed
Given Admin is on the batch page
When Admin clicks on "Add New batch" under the "batch" menu bar
Then Admin should see the description field

Scenario: Program Name dropdown is displayed.
Given Admin is on the batch page
When Admin clicks on "Add New batch" under the "batch" menu bar
Then Admin should see the program status field with dropdown

Scenario: Status radio buttons are displayed
Given Admin is on the batch page
When Admin clicks on "Add New batch" under the "batch" menu bar
Then Admin should see the status radio button
