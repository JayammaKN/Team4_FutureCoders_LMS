Feature: Batch Page - Pagination

Background: Admin navigates to Manage batch page after logged in
Given Admin is on login Page
When Admin navigates to the manage batch page after login

Scenario: Next Page Navigation
Given Admin is on batch page with multiple program records
When Admin clicks the next page option (>) in the pagination control
Then Admin should see the Next enabled link

Scenario: Last Page Navigation
Given Admin is on batch page except the last page of Program table
When Admin clicks the last page option (>>) in the pagination control
Then Admin should see the last page link with next page link disabled on the table 

Scenario: Previous Page Navigation
Given Admin is on the batch table on any page except the first page
When Admin clicks the previous page option (<) in the pagination control
Then Admin should see the previous page on the table

Scenario: First Page Navigation
Given Admin is on any page except the first page of batch table
When Admin clicks the first page option (<<) in the pagination control
Then Admin should see the very first page on the data table

Scenario: Previous page arrow disabled on first page
Given Admin is on the batch page with multiple pages of batch record
When Admin clicks first page link on the data table
Then Admin should see the Previous arrow (<)  disabled

Scenario: First page arrow disabled on first page
Given Admin is on the batch page with multiple pages of batch record
When Admin clicks first page link on the data table
Then Admin should see the First page arrow (<<) disabled

Scenario: Next page arrow enabled on first page
Given Admin is on the batch page with multiple pages of batch record
When Admin clicks first page link on the data table
Then Admin should see Next arrow (>)  enabled

Scenario: Last page arrow enabled on first page
Given Admin is on the batch page with multiple pages of batch record
When Admin clicks first page link on the data table
Then Admin should see Last page arrow (>>) enabled
