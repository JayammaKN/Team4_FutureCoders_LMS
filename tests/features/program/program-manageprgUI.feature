Feature: Manage Program UI Verification

Background: Admin is logged in to LMS Portal
  Given Admin is on login Page
  When Admin clicks login in button after entering a valid credential
  Then Admin should land on home page 

Scenario: Manage program heading presence
  When Admin clicks "Program" on the navigation bar
  Then Admin should see heading as "Manage Program"

Scenario: Multiple Delete button state
  When Admin clicks "Program" on the navigation bar
  Then Admin should see a Delete button in left top is disabled

Scenario: Search box is displayed
  When Admin clicks "Program" on the navigation bar
  Then Admin should see Search bar

Scenario: Search placeholder presence
  When Admin clicks "Program" on the navigation bar
  Then Admin should see search... placeholder text

Scenario: column header name of data table
  When Admin clicks "Program" on the navigation bar
  Then Admin should see data table

Scenario: Checkbox default state - header
When Admin clicks "Program" on the navigation bar
  Then Admin should see checkbox default state as unchecked

Scenario: Checkbox default state - datatable each rows
  When Admin clicks "Program" on the navigation bar
  Then Admin should see check box default state as unchecked on the left side

Scenario: Sort icon presence
  When Admin clicks "Program" on the navigation bar
  Then Admin should see the sort arrow icon

Scenario: edit and delete icon presence
  When Admin clicks "Program" on the navigation bar
  Then Admin should see the Edit and Delete buttons on each row of the data table

Scenario: Pagination controls are displayed
  When Admin clicks "Program" on the navigation bar
  Then Admin should see the text as "Showing x to y of z entries"

Scenario: Footer message is displayed
  When Admin clicks "Program" on the navigation bar
  Then Admin should see the footer
  