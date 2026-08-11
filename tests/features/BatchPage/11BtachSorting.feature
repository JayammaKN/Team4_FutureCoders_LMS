Feature: Manage Batch - Sorting

Background: Admin navigates to Manage batch page after logged in
Given Admin is on login Page
When Admin navigates to the manage batch page after login

Scenario: Sorting of batch name in Ascending order
Given Admin is on the Batch page
When Admin clicks on Arrow next to batch name
Then Admin should See the batch details sorted by batch Name in Ascending order

Scenario: Sorting of batch  name in Descending order
Given Admin is in Batch page where Batch names are sorted in ascending order
When Admin clicks on Arrow next to batch name
Then Admin should See the batch Name is sorted in Descending order

Scenario: Sorting of  batch Description in Ascending order
Given Admin is on the Batch page
When Admin clicks on Arrow next to batch description
Then Admin should See the batch Description is sorted in Ascending order

Scenario: Sorting of batch Description in Descending order
Given Admin is in batch page where batch description are sorted in ascending order
When Admin clicks on Arrow next to batch description
Then Admin  should See the batch Description is sorted in Descending order

Scenario: Sorting of Number of classes in Ascending Order
Given Admin is on the Batch page
When Admin clicks on arrow next to number of classes
Then Admin should see the batch details sorted by number of classes in ascending order

Scenario: Sorting of Number of classes in Descending Order
Given Admin is in batch page where number of classes are sorted in ascending order
When Admin clicks on arrow next to number of classes
Then Admin should see the batch details sorted by number of classes in descending order

Scenario: Sorting of batch status in Ascending order
Given Admin is on the batch page
When Admin clicks on Arrow next to batch status
Then Admin should see the batch status sorted in Ascending order

Scenario: Sorting of batch status in Descending order
Given Admin is on batch where batch status are sorted in ascending order
When Admin clicks on Arrow next to batch status
Then Admin should see the batch status sorted in Descending order
