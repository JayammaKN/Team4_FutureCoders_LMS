Feature: Program Navigation

Background: Admin is logged in to LMS Portal
Given Admin is on login Page
When Admin clicks login in button after entering a valid credential

Scenario: Program page navigation
  Given Admin is on home page after Login
  When Admin clicks "Program" on the navigation bar
  Then Admin should be navigated to Program page
