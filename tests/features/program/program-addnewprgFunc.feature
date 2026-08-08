Feature: Add New Program Functional Verification

Background: Admin navigates to program page after logged in
  Given Admin successfully logged in to LMS Portal
  When Admin clicks "Program" on the navigation bar
  Then Admin is on Program details dialog box

Scenario: Empty form submission
  When Admin clicks save button without entering mandatory
  Then Admin gets message <field> is required

Scenario: cancel button functionality
  When Admin clicks Cancel button
  Then Admin can see Program Details form disappears

Scenario: Close button X functionality
  When Admin clicks X button
  Then Admin can see Program Details form disappears

Scenario: Add new program with valid details
  When Admin enter valid details for mandatory fields and Click on save button
  Then Admin gets message Successful Program created

Scenario: Add new program with numeric program name
  When Admin enters a numeric value as the Program Name
  Then Admin should see error message