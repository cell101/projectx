module.exports = {
    'Site Up': function(browser) {
        browser
        .url('localhost:8080')
        .assert.title('Project X')
        .end();
    },

    'TODO list': function(browser) {
        browser
        // visit main page to check if the title is "Project X"
        .url('localhost:8080')
        .assert.title('Project X')

        // click "TODO" link to visit TODO page
        // check if the title is "TODO list"
        .useXpath()
        .waitForElementVisible("//a[text()='TODO']", 1000)
        .click("//a[text()='TODO']")
        .useCss()
        .assert.title('TODO list');

        // Add "Add more tests" into a text box
        // and hit the "Add" button, now the list has "Add more tests"        
        browser
        .waitForElementVisible('input[type=text]', 1000)
        .setValue('input[type=text]', 'Add more tests')
        .waitForElementVisible('button[id=addItem]', 1000)
        .click('button[id=addItem]')
        .pause(1000)
        .assert.containsText('#lists', 'Add more tests');

        // Add "Learn how to use git". Now the list has "Learn how to use git".
        browser
        .waitForElementVisible('input[type=text]', 1000)
        .setValue('input[type=text]', 'Learn how to use git')
        .waitForElementVisible('button[id=addItem]', 1000)
        .click('button[id=addItem]')
        .pause(1000)
        .assert.containsText('#lists', 'Learn how to use git');

        // click "Team" link to check if the title is "Team"
        browser
        .useXpath()
        .waitForElementVisible("//a[text()='Team']", 1000)
        .click("//a[text()='Team']")
        .useCss()
        .assert.title('Project X Team');

        // click "TODO" link back to check if the title is "TODO"
        browser
        .useXpath()
        .waitForElementVisible("//a[text()='TODO']", 1000)
        .click("//a[text()='TODO']")
        .useCss()
        .assert.title('TODO list');     

        // Check the list still has "Add more tests" and "Learn how to use git"
        browser
        .pause(1000)
        .assert.containsText('#lists', 'Add more tests')
        .assert.containsText('#lists', 'Learn how to use git');

        // remove "Add more tests" and check if "Add more tests" is gone
        browser
        .useXpath()
        .waitForElementVisible("//div[@ng-repeat='item in list track by $index' and contains(., 'Add more tests')]//button", 1000)
        .click("//div[@ng-repeat='item in list track by $index' and contains(., 'Add more tests')]//button")
        .useCss()
        .pause(1000);

        browser
        .assert.containsText('#lists', 'Learn how to use git')
        .expect.element('#lists').text.to.not.contain('Add more tests');

        // remove "Learn how to use git" and check if "Learn how to use git" is gone
        browser
        .useXpath()
        .waitForElementVisible("//div[@ng-repeat='item in list track by $index' and contains(., 'Learn how to use git')]//button", 1000)
        .click("//div[@ng-repeat='item in list track by $index' and contains(., 'Learn how to use git')]//button")
        .useCss()
        .pause(1000);
        // Remember to call the .end() method when you want to close your test
        browser.end();
    }    
}