@home
Feature: Home Page

  Background: Admin gives the valid LMS portal URL
    Given Admin is on login Page
    When Admin clicks login in button after entering a valid credential

  Scenario: Title of the LMS
    Then Admin should see LMS - Learning management system as title

  Scenario: Title alignment
    Then LMS title should be on the top left corner of page

  Scenario: Navigation bar text spelling
    Then Admin should see correct spelling in navigation bar text

  Scenario: LMS title - spelling and space
    Then Admin should see correct spelling and space in LMS title

  Scenario: Navigation bar Alignment
    Then Admin should see the navigation bar text on the top right side

  Scenario: Navigation bar order - 1st home
    Then Admin should see home in the 1st place

  Scenario: Navigation bar order - 2nd Program
    Then Admin should see program in the 2nd place

  Scenario: Navigation bar order - 3rd batch
    Then Admin should see batch in the 3rd place

  Scenario: Navigation bar order - 4th logout
    Then Admin should see logout in the 4th place

  Scenario: Welcome Message is displayed
    Then Admin should see welcome message with user name and role

  Scenario: Bar chart presence
    Then Admin should see bar chart for Active and inactive user

  Scenario: User count card presence
    Then Admin should see user count

  Scenario: Program count card presence
    Then Admin should see Program count

  Scenario: Staff Count card presence
    Then Admin should see Staff count

  Scenario: Batch count card presence
    Then Admin should see batch count

  Scenario: Staff Table Presence
    Then Admin should see the Staff Data table

  Scenario: Staff Table header Presence
    Then Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table
