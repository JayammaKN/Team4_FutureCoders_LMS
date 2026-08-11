@LMSAddNewProgramUI
Feature: Add New Program UI Verification

Background: Admin navigates to program page after logged in
  Given Admin successfully logged in to LMS Portal
  When Admin clicks "Program" on the navigation bar 

Scenario: Add New Program dialog is displayed
  When Admin clicks on Add New Program under the Program menu bar
  Then Admin should see Program Details dialog

Scenario: Program Details dialog title
  When Admin clicks on Add New Program under the Program menu bar
  Then Admin should see title as Program Details

Scenario: Mandatory fields indicator
  When Admin clicks on Add New Program under the Program menu bar
  Then Admin should see red asterisk mark beside mandatory field Name and status

Scenario: Name field is displayed
  When Admin clicks on Add New Program under the Program menu bar
  Then Admin should see the Name text box

Scenario: Description field is displayed
  When Admin clicks on Add New Program under the Program menu bar
  Then Admin should see the Description text box
  
Scenario: Status radio buttons are displayed
  When Admin clicks on Add New Program under the Program menu bar
  Then Admin should see Active and Inactive radio buttons