Feature: Login Functionality
Scenario: Login page is displayed successfully
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should land on the login page

Scenario: Access app with invalid URL
Given Admin is on the browser
When Admin enters the invalid LMS app URL
Then Admin should receive application error

Scenario: Broken link verification
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then HTTP response >= 400. Then the link is broken

Scenario: Application title is displayed
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should see  LMS - Learning Management System

Scenario: Application Logo is displayed
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should see Application Logo

Scenario: Company name is displayed
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should see company name below the app name

Scenario: Login instruction message is displayed
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should see "Please login to LMS application"

Scenario: Input field is displayed
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should see two text field

Scenario: Role Dropdown is displayed
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should see one dropdown

Scenario: Text presence on the first field
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should see "User" in the first text field

Scenario: Text presence on the second field
Given Admin is on the browser
When Admin enters the Valid LMS app URL
Then Admin should  see "Password" in the second text field










