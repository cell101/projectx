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


        
        browser.assert.fail('Finish the test');
        browser.end();
    }
}