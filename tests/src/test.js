module.exports ={
    'Site Up': function(browser){
        browser
        .url('localhost:8080')
        .assert.title('Project X')
        .end();
    }
}