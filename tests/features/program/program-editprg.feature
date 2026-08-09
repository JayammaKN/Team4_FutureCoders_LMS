@LMSEditProgram
Feature: Edit Program Functional Verification

Background: Admin navigates to program page after logged in
  Given Admin successfully logged in to LMS Portal
  When Admin clicks "Program" on the navigation bar

Scenario: Search added Program and Edit the Program details
  When Admin searches and selects the newly created Program Name and edits the Program
  Then Admin should see the Records of the newly created Program details

Scenario: Search new Program and verify the details
  When Admin searches with newly updated Program Name
  Then Admin verifies that the details are correctly updated