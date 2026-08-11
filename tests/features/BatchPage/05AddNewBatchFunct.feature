Feature: Add New Batch - Functional Validation

Background: Admin navigates to Add new batch dialog box after logged in
Given Admin is on login Page
When Admin navigates to the add new batch dialog box by clicking Add New Batch submenu under Batch menu bar after login
Then Admin should be in the add new batch dialog box

Scenario: Program name appears as batch prefix
Given Admin is on Batch Details dialog box
When Admin selects program name present in the dropdown
Then Admin should see selected program name in the batch name prefix box

Scenario: Batch name suffix accepts only numbers
Given Admin is on Batch details dialog box
When Admin enters alphabets in batch name suffix box
Then Admin should get error message below the text box of respective field

Scenario: Batch name Prefix cannot be edited
Given Admin is on Batch Details dialog box
When Admin enters alphabets in batch name prefix box
Then Admin should see empty text box

Scenario: Add new batch only with mandatory fields
Given Admin is on Batch Details dialog box
When Admin enters the data only to the mandatory fields and clicks save button
Then Admin should get a successful message

Scenario: Add new batch with leaving space in mandatory field
Given Admin is on Batch Details dialog box
When Admin leaves blank one of the mandatory fields
Then Admin should get a error message on the respective mandatory field

Scenario: Cancel Button functionality
Given Admin is on Batch Details dialog box
When Admin enters the valid data to all the mandatory fields and click cancel button 
Then Admin should see the batch details popup closes without creating any batch

Scenario: Close icon functionality
Given Admin is on Batch Details dialog box
When Admin clicks on the close icon
Then batch details pop up closes

Scenario: Add new batch with all fields
Given Admin is on Batch Details dialog box
When Admin enters the data to all fields and clicks save button
Then Admin should get a successful message