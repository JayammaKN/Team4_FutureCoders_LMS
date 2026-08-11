Feature: Delete batch validation

Background: Admin navigates to Manage batch page after logged in
Given Admin is on login Page
When Admin navigates to the manage batch page after login

Scenario: Display Delete Confirmation
Given Admin is on the Batch page
When Admin clicks the delete Icon on any row
Then Admin should see the confirm alert box with yes and no button

Scenario: Delete batch Successfully
Given Admin is on the batch confirm popup page
When Admin clicks yes button after clicking delete icon
Then Admin should see the successful message and the batch should be deleted

Scenario: Cancel batch deletion
Given Admin is on the batch confirm popup page
When Admin clicks  no button after clicking delete icon
Then Admin should see the alert box closed and the batch is not deleted

Scenario: close icon functionality
Given Admin is on the batch confirm popup page
When Admin clicks on the close icon in delete dialog box
Then Admin should see the alert box closed 
