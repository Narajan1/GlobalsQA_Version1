Feature: Add, search and delete customer

  Scenario: As a user, I should open manager and add customer page

    Given I am on the login page
    When I clicked on manager button
    Then I should see manager page opened


  Scenario: As a user, I should add new customer

    Given I am on the manager-add customer page
    When I click on Add customer
    And I fill customer information
    And I click on the add button
    Then I should accept appeared popup


  Scenario: As a user, I should shearch a customer, verify if that is correct costomer and delete customer

    Given I am on the search-delete customer page
    When I input search text in search field
    And I assert that customer is added with correct info and delete that customer
    Then I should verify that customer is deleted
