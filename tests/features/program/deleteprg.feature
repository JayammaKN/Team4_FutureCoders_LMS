Feature: Delete Program

Background: Admin navigates to program page after logged in
  Given Admin successfully logged in to LMS Portal
  When Admin clicks "Program" on the navigation bar

Scenario: Delete Program
  When Admin clicks on delete icon for a program
  Then Admin can see Successful Program Deleted message after confirmation

