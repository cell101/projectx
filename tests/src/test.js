module.exports ={
    'TODO list': function(browser){
        browser

        // visit main page to check if the title is "Project X"
        .url('localhost:8080')
        .assert.title('Project X')

        // click "todo" link to visit todo page
        // heck if the title is "TODO list"
        .useXpath()
        .waitForElementVisible("//a[text()='TODO']",1000)
        .click("//a[text()='TODO']")
        .useCss()
        .assert.title('TODO list');

        // Add "Add more tests" into a text box
        // and hit the "Add" button, now the list has "Add more tests"    
        browser
        .waitForElementVisible('input[type=text]',1000)
        .setValue('input[type=text]', 'Add more tests')     
        .waitForElementVisible('button[id=addItem]',1000)
        .click('button[id=addItem]')
        .pause(1000)
        .assert.containsText('#lists', 'Add more tests');


        browser.assert.fail('Finish the test');
        browser.end();
    }
}