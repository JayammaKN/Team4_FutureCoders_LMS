
@login
Feature: Login Page - Functional Verification

Background: Admin enters the Valid LMS app URL
 Given Admin is on login Page

 Scenario: Successful login with valid credentials
 When Admin clicks login in button after entering a valid credential
 Then Admin should land on home page 

  Scenario: Login with spl charac in user name
  When Admin clicks login in button after entering special character in username
  Then Admin should see Error message "Inactive User : Please contact Admin for assistance"

 Scenario: Login attempt with empty username
   When Admin has entered only the password and selected a role
   Then Admin should see Error message "Please enter your user name"

  Scenario: Login attempt with empty password
   When Admin has entered only the username and selected a role
   Then Admin should see Error message "Please enter your password"

  Scenario: Login attempt with wrong password
  When Admin clicks login in button after entering valid username , role and wrong password
  Then Admin should see Error message "Invalid username and password Please try again"

  Scenario: Login attempt without selecting any role
  When Admin has entered a valid username and password without selecting a role
  Then Admin should see Error Messge "Please select your Role" 

  Scenario: Login Attempt with invalid role
  Given Admin clicks login in button after selecting a invalid role and entering valid username ,password
  Then Admin should see Error Messge "Please select correct role" 

  Scenario: Login Attempt using Keyboard 
  When Admin clicks login in button after entering a valid credential through keyboard
  Then Admin should land on home page

  Scenario: Login Attempt using Mouse 
  When Admin clicks login in button after entering a valid credential through mouse
  Then Admin should land on home page

  
  









