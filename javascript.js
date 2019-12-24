var inquirer = require("inquirer")

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
    console.log(data.nomen)
})