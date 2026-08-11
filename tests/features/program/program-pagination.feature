@LMSProgramPagination
Feature: Program Pagination

Background: Admin navigates to program page after logged in
  Given Admin successfully logged in to LMS Portal
  When Admin clicks "Program" on the navigation bar 

Scenario: Next Page Navigation
  When Admin clicks the next page option > in the pagination control
  Then Admin should navigate to the next page

Scenario: Last Page Navigation
  When Admin clicks the next page option >> in the pagination control
  Then Admin should navigate to the last page

Scenario: Previous Page Navigation
  When Admin clicks the previous page option < in the pagination control
  Then Admin should see the previous page record on the table

Scenario: First Page Navigation
  When Admin clicks the previous page option << in the pagination control
  Then Admin should see the very first page record on the table