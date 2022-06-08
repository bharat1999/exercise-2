var guess=11;
var win=0;
var loss=0;
var correctGuessStr
var correctGuessWord
var names=["THEWINTERSOLDIER","THOR", "CAPTAINAMERICA", "GUARDIANSOFTHEGALAXY","DOCTORSTRANGE", "TONYSTARK", "BRUCEBANNER", "LOKI", "PEGGYCARTER", "THANOS",]
var guessed=[]
var correctGuess=[]
var randomWord= names[Math.floor(Math.random() * names.length)];  
var start ="Press Any Key To Start The Game"
var img =""

updateDisplay()
document.getElementById("img").src=img
document.getElementById("start").innerHTML=start
for(var i=0;i<randomWord.length;i++){
    correctGuess[i]=".."
}
function gameStart(){
    
    randomWord= names[Math.floor(Math.random() * names.length)];
    for(var i=0;i<randomWord.length;i++){
        correctGuess[i]=".."
    }
}

document.addEventListener('keydown',function(e){
    if((e.which>=97 && e.which<=122) || (e.which>=65 && e.which<=90)){
        checkKey(e.key.toUpperCase())
    }
})

function gameReset(){
    guess=11;
    correctGuess=[]
    guessed=[]
    document.getElementById("img").className="none"
    document.getElementById("start").innerHTML=start
    document.getElementById("correctWord").innerHTML=""
    gameStart()
    updateDisplay()
}

function checkKey(a){
    //pauseAudio()
    document.getElementById("start").innerHTML=""
    if(randomWord.indexOf(a)!=-1){
        var i=randomWord.indexOf(a)
        if(guessed.indexOf(a)==-1)
            guessed.push(a)
        correctGuess[i]=a
        while(randomWord.indexOf(a,i+1)!=-1){
            correctGuess[randomWord.indexOf(a,i+1)]=a
            i=randomWord.indexOf(a,i+1)
        }
        updateDisplay()
    }
    else{
        if(guess<=0){
            gameReset()
        }
        else{
            if(guessed.indexOf(a)==-1){
                guess--;
                guessed.push(a)
            }    
        }
        updateDisplay()
    }
    checkWin()
    checkLoss()
}

function updateDisplay(){
    document.getElementById("wins").innerHTML=win
    document.getElementById("loss").innerHTML=loss
    document.getElementById("guess").innerHTML=guess
    correctGuessStr=correctGuess.toString()
    correctGuessWord=correctGuessStr.replace(/,/g," ")
    document.getElementById("guessedName").innerHTML=correctGuessWord
    document.getElementById("guessed").innerHTML=guessed
}

function checkWin()
{
    var n=strCmp(randomWord,correctGuess)
    if(n==1){
        win++;
        document.getElementById("correctWord").innerHTML="You Win"
        img="./assests/images/"+randomWord+".jpg"
        document.getElementById("img").className="show animate__animated animate__slower animate__bounceIn  animate__infinite"
        document.getElementById("img").src=img
        setTimeout(gameReset,3000)
    }
}

function checkLoss()
{
    if(guess==0){
        loss++;
        document.getElementById("correctWord").innerHTML="You Lose Secret Word was  " +randomWord
        img="./assests/images/captain america.jpg"
        document.getElementById("img").className="show animate__animated animate__slower animate__bounceIn  animate__infinite"
        document.getElementById("img").src=img
        setTimeout(gameReset,3000)
    }

}

function strCmp(a,b){
    var n=1;
    for(var i=0;i<randomWord.length;i++)
    {
        if(a[i]!=b[i]){
            n=0;
        }
    }
    return n;
}




    





// 
// "NICK FURY", "GROOT", "DRAX THE DESTROYER", "ULTRON", "BLACK WIDOW",
// "STORM", "SCARLET WITCH", "JEAN GREY", "ELEKTRA", "ROGUE", "MAGNETO", "DORMAMMU",
// "GREEN GOBLIN", "HUMAN TORCH", "INVISIBLE WOMAN","GHOST RIDER", "LUKE CAGE",
// "SILVER SURFER", "CYCLOPS", "WOLVERINE", "DEADPOOL", "CAPTAIN MARVEL", "HAWKEYE",
// "DAREDEVIL", "HOWARD THE DUCK", "BLADE", "PHIL COULSON", "RONAN THE ACCUSER", "APOCALYPSE",
// "INCREDIBLE HULK", "GAMORA", "BABY GROOT", "ROCKET", "YONDU UDONTA", "KARL MORDO", "KAECILIUS"