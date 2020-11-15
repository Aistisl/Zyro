Feature: Login and Logout functionality

As a valid user
I want to succesfully log in and log out

Scenario: Valid login
Given I open login page
When I fill username with 'aistisl@outlook.com'
And I fill password with 'letmein1337'
And I click on submit button
Then I should see user profile icon

Scenario: Successfull logout
Given I verify that I can see user profile icon
When I click Sign Out button
Then I should see Sign In button
