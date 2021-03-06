Feature: To validate Login Functionality in Facebook Application

  Background: 
    Given User is in login page

  Scenario: To validate valid username and invalid password
    When user enter the valid username
      | java@gmail.com | selenium@gmail.com | framework@gmail.com | sql@gmail.com |
    And user enter invalid password
      | 123465985 | basjsbh   | knsbnnvkboi | hfuefgiohoingho |
      | dfoiflg   | kjdcbkjhf | djbbof      | ckjf            |
      | jbfkjbb   | kdbbfbg   | fjbjkbkj    | n               |
    And user click submit button
    Then User quit the browser

  Scenario: To validate invalid username and valid password
    When user enter the invalid username
      | email1 | selenium@gmail.com |
      | email2 | java@gmail.com     |
      | email3 | sql@gmail.com      |
    And user enter valid password
      | password1 | password2 | password3 |
      | dfoiflg   | kjdcbkjhf | djbbof    |
      | jbfkjbb   | kdbbfbg   | fjbjkbkj  |
    And user click submit button
    Then User quit the browser
