Feature: To Signup in Swiggy

  Scenario: Signup swiggy by using asmaps
    Given User open the browser
    When User  hit the swiggy url and click the signup buttonenther the details from asmaps
      | Method Name     | URL                     | Mobile      | Name   | Email               | Password   | Location |
      | Swiggy Login    | https://www.swiggy.com/ | 98765432190 |        |                     |            |          |
      | Swiggy Signup   | https://www.swiggy.com/ | 98765432190 | Bharth | bharth@orioninc.com | bharth@123 |          |
      | Swiggy Location |                         |             |        |                     |            | Chennai  |
    Then User close the browser
