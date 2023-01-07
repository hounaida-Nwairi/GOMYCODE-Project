
function show() { 


var x = document.getElementById("btn").innerHTML;
x = parseInt(x, 10);

x += 1;

document.getElementById("btn").innerHTML = x;


}
function reverse(){
    var x = document.getElementById("btn").innerHTML;
    if (x="Click me")  {
        document.getElementById("btn").innerHTML = "me Click";
    }
    else {
        document.getElementById("btn").innerHTML = "Click me";
    }

}
function compare() {
var x ='a'
var y =1

if(x>y) {
alert("hi");

}
else{
    alert("Uncomparable")
}
}

function inp(){
    var visitorName = prompt("What's your name : ")
    var isCoolWithIt = confirm("Are you ok with it?")
}