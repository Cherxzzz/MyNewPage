
/*
var limit=prompt("Type the limit: ");
let i=0;
for(i=2;i<=limit;i++){
    console.log(i);
}
*/
/*
var limit=prompt("Type the limit: ");
let i=0;
for(i=0;i<=limit;i=i+3){
    console.log(i);
}

var limit=prompt("Type the limit: ");
let j=0;
while(j<=limit){
    console.log(j);
    j=j+3
}
*/
function guessNumber(number, random){
    if(number >=0 & number<100){
        if(number == random){
            document.getElementById("answer").innerHTML="Congrats! This is the number!"
        }
        else{
            document.getElementById("answer").innerHTML="Oh no! Is not the number. Try again"
        }
        }
    else{
        document.getElementById("answer").innerHTML="Please type a valid number."
    }

}


function sendMail(){
    document.getElementById("mailsuccess").innerHTML="Thanks for confirm your mail."
}

