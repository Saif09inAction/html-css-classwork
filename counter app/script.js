count=0;
function increment(){
count++;
document.getElementById("countvalue").innerHTML=`counter value :-${count}`;
}

function decrement(){
count--;
document.getElementById("countvalue").innerHTML=`counter value :-${count}`;
}
function reset(){
count=0;
document.getElementById("countvalue").innerHTML=`counter value :-${count}`;
}