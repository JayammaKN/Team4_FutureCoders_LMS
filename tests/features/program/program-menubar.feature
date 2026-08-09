Feature: Menu bar verification in Program page

Background: Admin is logged in to LMS Portal
Given Admin is on login Page
When Admin clicks login in button after entering a valid credential

Scenario: Program-Sub menu displayed
  Given Admin is on home page after Login
  When Admin clicks "Program" on the navigation bar
  Then Admin should see sub menu in menu bar as "Add New Program"
