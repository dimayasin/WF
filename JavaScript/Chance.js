var game = 1000;

var winningNumber = 85;

RandomChance(game, winningNumber);


function RandomChance(Q, WN) 
{
    var play;
    while (Q > 0) 
    {
        play = Math.floor(Math.random() * 50 + 51);
        


        if (WN == play) 
        {
            console.log("*******************");
            console.log("You win 5 quarters!");
            console.log("*******************");
            Q += 5;
        }
        else 
        console.log("You got: ",play, ". You have ",Q," quarters left.");
        
        Q--;
    }


}