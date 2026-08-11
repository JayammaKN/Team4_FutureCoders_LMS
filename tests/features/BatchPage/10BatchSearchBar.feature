Feature: Manage Batch - search bar

Background: Admin navigates to Manage batch page after logged in
Given Admin is on login Page
When Admin navigates to the manage batch page after login

Scenario Outline: Search bar functionality of batch
Given Admin is on the batch page
When Admin enters "<searchKey>" in the search box
Then Admin should see the filtered batch details based on the  "<searchKey>" in the data table

Examples:
| searchKey |
| batchName |
| batchDescription |
| programName |
| noOfClasses |
| batchStatus |

Scenario: Search by Non-existing batch name
Given Admin is on the batch page
When Admin enters the non existing batch name
Then Admin should see no results displayed

