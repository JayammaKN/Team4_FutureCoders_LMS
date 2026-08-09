Feature: Manage Sorting functionality

Background: Admin navigates to program page after logged in
  Given Admin successfully logged in to LMS Portal
  When Admin clicks "Program" on the navigation bar

Scenario: Sorting of Program name in Ascending order and Descending order
  When Admin clicks on Arrow next to program Name
  Then Admin should See the Program Name is sorted in Ascending order first and then descending order

Scenario: Sorting of Program Description in Ascending order and Descending order
  When Admin clicks on Arrow next to program Description
  Then Admin should See the Program Description is sorted in Ascending order first and then descending order


