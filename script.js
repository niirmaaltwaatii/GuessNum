/*
    GitHub : https://github.com/niirmaaltwaatii/GuessNum
*/
var tries = 0;
var pre = [];
var ran = Math.floor(Math.random()*100 + 1);

var res = document.querySelector("#result");
var prev = document.querySelector("#prev");

function check() {
    if(tries<10){
        var inp = document.querySelector("#inp").value;
        update(inp);
        if(inp==ran){
            res.innerHTML = "Gotcha !!! You got it Right in "+tries+" tries !";
            res.style.background = "Green";
            res.style.color = "white";
            inp = "";
        }else if(inp>ran){
            res.innerHTML = "Your Guess is too High !";
            res.style.background = "red";
            res.style.color = "black";
        }else if(inp<ran){
            res.innerHTML = "Your Guess is too Low !";
            res.style.background = "red";
            res.style.color = "black";
        }else{
            res.innerHTML = "Error Occured !";
        }
    }else{
        res.innerHTML = " Game Over ! ";
        document.querySelector("#again").style.visibility = "visible";
    }
    document.querySelector("#inp").value = "";
}

function update(inp) {
    pre.push(inp);
    prev.innerHTML = pre;
    tries++;
}

console.log(ran);

function again(){
    window.location.reload();
}