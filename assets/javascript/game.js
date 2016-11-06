//This is where the word list array is formed//
var wordlist=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//Different variable creations//
var completter;
var userletter;
var userdata=[];
var compchoice=[];//This is what is stored in the letter options selected//
var lives = 6;
var Win= 0;
var loss = 0;
var game= 6;



var psychic = function(){
    
//This is where the letter is going to be randomly selected//

    completter = wordlist(math.floor()*wordList.length);

//this shall lowercase the letter in case since the array has  decides to press a capslock key//
    compchoice[i] = completter.toLowerCase();

// this is where the user presses the button to select the word
    var input= function(){
        userletter = document.addEventListener("keyup", input);
        document.write("you chose:" + userletter);
    
    };

    if (userletter == completter)
        {
            compchoice[i]= completter;
            userdata[]=userletter;
            Win++;
        
        }
    
    else{
        compchoice[]=completter;
        userdata[]=userletter;
        Loss++;
        lives--;
        };
    var print(){
        document.html("you guessed"+ userdata[]);
        } ; 
    
    if (lives != 0)
        {
            psychic();
            game--;
            
        }
    else{
        alert("Game over");
    }
    

    











