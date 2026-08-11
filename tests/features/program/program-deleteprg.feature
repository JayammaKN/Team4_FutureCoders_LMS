@LMSDeleteProgram
Feature: Delete Program

Background: Admin navigates to program page after logged in
  Given Admin successfully logged in to LMS Portal
  When Admin clicks "Program" on the navigation bar

Scenario: Delete Program
  When Admin clicks on delete icon for a program
  Then Admin can see Successful Program Deleted message after confirmation

Scenario: Delete Multiple Program
  When Admin selects more than one program by clicking on the checkbox
  Then Admin clicks Delete icon and can see Successful Program Deleted message after confirmation

Scenario: Cancel Multiple Deletion
  When Admin selects more than one program by clicking on the checkbox
  Then Admin clicks Delete icon and Admin clicks on No button