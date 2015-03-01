Feature: US33957 - ChoiceEDGE - RSSJAM - Change Rate Access Landing State from table view to resposive grid view
  As a Channel Manager
  I should be able to view Rate Access Landing state in responsive grid view with expand / collapse option
  So That I can experience responsive user-interface seamlessly across multiple devices

  Scenario: No <table> tag on rate plan page source
    Given I navigate to choiceEDGE channel manager site
    When I log in as admin with my username and password
    And I select Manage tab
    And I select Rate Plans
    Then There should be no table tag
