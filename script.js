choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    var random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function pick(value)
{
    if(value == "rock")
    {
        return "Rock"
    }
    
    if(value == "paper")
    {
        return "Paper"
    }
    
    if(value == "scissors")
    {
        return "Scissors"
    }
}

function checkWinner(p,c)
{
    if(p == "rock")
    {
        if(c == "Rock")
        {
            return "Draw"
        }
        if(c == "Scissors")
        {
            return "Player"
        }
        if(c == "Paper")
        {
            return "Computer"
        }
    }

    if(p == "paper")
    {
        if(c == "Paper")
        {
            return "Draw"
        }
        if(c == "Rock")
        {
            return "Player"
        }
        if(c == "Scissors")
        {
            return "Computer"
        }
    }
    if(p == "scissors")
    {
        if(c == "Scissors")
        {
            return "Draw"
        }
        if(c == "Paper")
        {
            return "Player"
        }
        if(c == "Rock")
        {
            return "Computer"
        }
    }
}

function round(value)
{
    var computerchoice = getComputerChoice()
    document.getElementById("playerc").innerHTML = pick(value)
    document.getElementById("computerc").innerHTML = computerchoice

    winner = checkWinner(value,computerchoice)

    document.getElementById("winner").innerHTML = winner
    if(winner == "Player")
    {
        var score = parseInt(document.getElementById("player").innerHTML);
        score = score +1 
        document.getElementById("player").innerHTML = score
        
    }
    if(winner == "Computer")
    {
        var score = parseInt(document.getElementById("computer").innerHTML);
        score = score +1 
        document.getElementById("computer").innerHTML = score

    }
}