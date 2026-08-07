Feature: Menu bar verification in Program page

Background:
  Given Admin is logged in to LMS Portal

Scenario: Program-Sub menu displayed
  Given Admin is on home page after Login
  When Admin clicks "Program" on the navigation bar
  Then Admin should see sub menu in menu bar as "Add New Program"
