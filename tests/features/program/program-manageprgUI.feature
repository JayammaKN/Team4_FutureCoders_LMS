Feature: Manage Program UI Verification

Background: Admin navigates to program page after logged in
  Given Admin successfully logged in to LMS Portal
  When Admin clicks "Program" on the navigation bar  

Scenario: Manage program heading presence
  Then Admin should see heading as "Manage Program"

Scenario: Multiple Delete button state
  Then Admin should see a Delete button in left top is disabled

Scenario: Search box is displayed
  Then Admin should see Search bar

Scenario: Search placeholder presence
  Then Admin should see search... placeholder text

Scenario: column header name of data table
  Then Admin should see data table

Scenario: Checkbox default state - header
  Then Admin should see checkbox default state as unchecked

Scenario: Checkbox default state - datatable each rows
  Then Admin should see check box default state as unchecked on the left side

Scenario: Sort icon presence
  Then Admin should see the sort arrow icon

Scenario: edit and delete icon presence
  Then Admin should see the Edit and Delete buttons on each row of the data table

Scenario: Pagination controls are displayed
  Then Admin should see the text as "Showing x to y of z entries"

Scenario: Footer message is displayed
  Then Admin should see the footer
  