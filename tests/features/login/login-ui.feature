Feature: Login UI Verification

  Background:
    Given Admin is on the browser

  Scenario: Login page is displayed successfully
    When Admin enters the Valid LMS app URL
    Then Admin should land on the login page

  Scenario: Access app with invalid URL
    When Admin enters the invalid LMS app URL
    Then Admin should receive application error

  Scenario: Broken link verification
    When Admin enters the Valid LMS app URL
    Then HTTP response < 400. Then the link is working

  Scenario: Application title is displayed
    When Admin enters the Valid LMS app URL
    Then Admin should see the application title

  Scenario: Application Logo is displayed
    When Admin enters the Valid LMS app URL
    Then Admin should see Application Logo

  @skip
  Scenario: Company name is displayed
    When Admin enters the Valid LMS app URL
    Then Admin should see company name below the app name

  Scenario: Login instruction message is displayed
    When Admin enters the Valid LMS app URL
    Then Admin should see the login message

  Scenario: Input field is displayed
    When Admin enters the Valid LMS app URL
    Then Admin should see two text field

  Scenario: Role Dropdown is displayed
    When Admin enters the Valid LMS app URL
    Then Admin should see one dropdown

  Scenario: Text presence on the first field
    When Admin enters the Valid LMS app URL
    Then Admin should see "User" in the first text field

  Scenario: Text presence on the second field
    When Admin enters the Valid LMS app URL
    Then Admin should see "Password" in the second text field

  Scenario: Asterisk is displayed for user field
  When Admin enters the Valid LMS app URL
  Then Admin should see asterisk mark(*) symbol next to text for user field

  Scenario: Asterisk is displayed for password field
  When Admin enters the Valid LMS app URL
  Then Admin should see asterisk mark symbol next to password text

  Scenario: Placeholder presence in dropdown 
  When Admin enters the Valid LMS app URL
  Then Admin should see "Select the role" placeholder in dropdown

Scenario: Dropdown options to select role
When Admin enters the Valid LMS app URL
Then Admin should see "Admin", "Staff", "Student" options in dropdown

Scenario: Alignment of the login form
When Admin enters the Valid LMS app URL
Then Admin should see login form on the centre of the page

Scenario: Input field label alignment
When Admin enters the Valid LMS app URL
Then Username , Password labels and select the role should be left-aligned above their respective input fields

Scenario: Login button is displayed
When Admin enters the Valid LMS app URL
Then Admin should see login button 

Scenario: User field Placeholder text colour
When Admin enters the Valid LMS app URL
Then Admin should see user text in gray color

Scenario: Password field Placeholder text colour
When Admin enters the Valid LMS app URL
Then Admin should see password text in gray color




