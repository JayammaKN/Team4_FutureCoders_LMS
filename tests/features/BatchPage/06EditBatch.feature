Feature: Edit Batch Validation

Background: Admin navigates to Manage batch page after logged in
Given Admin is on login Page
When Admin navigates to the manage batch page after login

Scenario: Edit icon functionality
Given Admin is on the Batch page
When Admin clicks the edit icon
Then Admin should see the Batch details dialog box

Scenario: Batch Name value disabled
Given Admin is on the Batch page
When Admin clicks the edit icon
Then Admin should see batch name value field is disabled for editing

Scenario: Validate editing description and No. of classes fields with invalid data in the pop up
Given Admin is on Batch Details dialog box
When Admin Updates any fields with invalid data and click save button
Then Admin should get a error message under the respective field

Scenario: Successful Batch Update
Given Admin is on Batch Details dialog box
When Admin clicks save button after updating with valid data
Then Admin should get a successful message for editing the batch

Scenario: Cancel Button Functionality
Given Admin is on Batch Details dialog box
When Admin clicks cancel button after updating with valid data
Then Admin should see the batch details popup closes without editing the batch
