choices = ["rock", "paper", "scrissors"];

function getComputerChoice()
{
    var random = Math.floor(Math.random() * choices.length);
    return random
}

console.log(getComputerChoice())