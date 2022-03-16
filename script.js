/*
    GitHub : https://github.com/niirmaaltwaatii/GuessNum
*/
var tries = 0;
var pre = [];
var ran = Math.floor(Math.random()*100 + 1);
function check() {
    var inp = document.querySelector("#inp").value;
    var res = document.querySelector("#result");
    var prev = document.querySelector("#prev");
    if(tries<10){
        if(inp==ran){
            tries++;
            pre.push(inp);
            prev.innerHTML = pre;
            res.innerHTML = "Gotcha !!! You got it Right in "+tries+" tries !";
            res.style.background = "Green";
            res.style.color = "white";
            inp = "";
        }else if(inp>ran){
            res.innerHTML = "Your Guess is too High !";
            res.style.background = "red";
            res.style.color = "black";
            pre.push(inp);
            prev.innerHTML = pre;
            tries++;
        }else if(inp<ran){
            res.innerHTML = "Your Guess is too Low !";
            res.style.background = "red";
            res.style.color = "black";
            pre.push(inp);
            prev.innerHTML = pre;
            tries++;
        }else{
            res.innerHTML = "Error Occured !";
        }
    }else{
        res.innerHTML = " Game Over ! ";
        document.querySelector("#again").style.visibility = "visible";
    }
    document.querySelector("#inp").value = "";
}
function again(){
    window.location.reload();
}
console.log(ran);
console.log(prev);
