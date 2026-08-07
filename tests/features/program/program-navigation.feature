Feature: Program Navigation

Background:
  Given Admin is logged in to LMS Portal

Scenario: Program page navigation
  Given Admin is on home page after Login
  When Admin clicks "Program" on the navigation bar
  Then Admin should be navigated to Program page
