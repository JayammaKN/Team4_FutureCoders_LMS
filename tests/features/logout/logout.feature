@logout
Feature: Validation on Logout button

  Background: Admin is logged into the application
    Given Admin is in home page

  Scenario: Logout function
    When Admin clicks on the logout in the menu bar
    Then Admin should be redirected to login page
