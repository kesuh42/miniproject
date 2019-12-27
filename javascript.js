var inquirer = require("inquirer")
var fs = require("fs")

inquirer.prompt([
    {
        name: "nomen",
        message: "What is your name?"
    },
    {
        name: "location",
        message: "What is your location?"
    },
    {
        name: "bio",
        message: "Gimme your bio."
    },
    {
        name: "linkedin",
        message: "What is your linkedin URL?"
    },
    {
        name: "github",
        message: "What is your github URL?"
    }
]).then(function(data){
    var htmlTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Mini Project</title>
            <link rel="stylesheet" type="text/css" href="assets/style.css">
        </head>
    
        <body>
            <header>${data.nomen}'s Amazing Portfolio</header>
            <div id="name">Name: ${data.nomen}</div>
            <div id="location">Location: ${data.location}</div>
            <div id="bio">${data.bio}</div>
            <div id="linkedin">${data.linkedin}</div>
            <div id="github">${data.github}</div>
        </body>
    </html>
    `
    
    fs.writeFile("portfolio.html", htmlTemplate, function(){
        
    })
})