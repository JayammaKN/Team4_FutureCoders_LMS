Feature: Batch Page Navigation 

Background: Admin is logged in to LMS Portal
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credentials

Scenario:  Batch page Navigation
Given Admin is on home page after Login
When Admin clicks "Batch" on the navigation bar
Then Admin should be in the Manage Batch Page
