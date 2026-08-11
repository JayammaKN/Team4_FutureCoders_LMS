Feature: Delete multiple batches with checkbox

Background: Admin navigates to Manage batch page after logged in
Given Admin is on login Page
When Admin navigates to the manage batch page after login

Scenario: Select multiple batch
Given Admin is on the Batch page
When Admin selects more than one batch by clicking on the checkbox
Then Admin should see the Multiple delete box enabled under manage batch 

Scenario: Delete Multiple Batches
Given Admin is on the batch page
When Admin clicks on the delete button on the left top of the batch page
Then Admin lands on Confirmation form
