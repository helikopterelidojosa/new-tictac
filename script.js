var movenumber =  11;
var imgsToHide = 0

function move1(){
    document.getElementById("null1").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td1").innerHTML = "O";
}else{document.getElementById("td1").innerHTML = "X";}

if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}

checkGoals();

}

function move2(){
    document.getElementById("null2").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td2").innerHTML = "O";
}else{document.getElementById("td2").innerHTML = "X";}

if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}
checkGoals();
}

function move3(){
    document.getElementById("null3").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td3").innerHTML = "O";
}else{document.getElementById("td3").innerHTML = "X";}

if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}
checkGoals();
}

function move4(){
    document.getElementById("null4").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td4").innerHTML = "O";
}else{document.getElementById("td4").innerHTML = "X";}
if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}
checkGoals();
}

function move5(){
    document.getElementById("null5").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td5").innerHTML = "O";
}else{document.getElementById("td5").innerHTML = "X";}
if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}
checkGoals();
}

function move6(){
    document.getElementById("null6").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td6").innerHTML = "O";
}else{document.getElementById("td6").innerHTML = "X";}

if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}
checkGoals();
}

function move7(){
    document.getElementById("null7").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td7").innerHTML = "O";
}else{document.getElementById("td7").innerHTML = "X";}

if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}
checkGoals();
}

function move8(){
    document.getElementById("null8").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td8").innerHTML = "O";
}else{document.getElementById("td8").innerHTML = "X";}

if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}
checkGoals();
}

function move9(){
    document.getElementById("null9").style.display = "none";
 
movenumber--;
if(movenumber % 2 == 0 && movenumber > 0){
    document.getElementById("td9").innerHTML = "O";
}else{document.getElementById("td9").innerHTML = "X";}

if(movenumber == 2){
    document.getElementById("refresh-button").style.display = "block";
}
checkGoals();
}

function checkGoals(){

    //1-3
    if(document.getElementById("td1").innerHTML == "O" &&
    document.getElementById("td2").innerHTML == "O" &&
    document.getElementById("td3").innerHTML == "O"){
        document.getElementById("o-win").style.display = "block";
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
         });
         document.getElementById("refresh-button").style.display = "block";
    }
    
    if(document.getElementById("td1").innerHTML == "X" &&
    document.getElementById("td2").innerHTML == "X" &&
    document.getElementById("td3").innerHTML == "X"){
        document.getElementById("x-win").style.display = "block"
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
            
         });
         document.getElementById("refresh-button").style.display = "block";
    }

    //4-6
    if(document.getElementById("td4").innerHTML == "O" &&
    document.getElementById("td5").innerHTML == "O" &&
    document.getElementById("td6").innerHTML == "O"){
        document.getElementById("o-win").style.display = "block";
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
         });
         document.getElementById("refresh-button").style.display = "block";
    }
    
    if(document.getElementById("td4").innerHTML == "X" &&
    document.getElementById("td5").innerHTML == "X" &&
    document.getElementById("td6").innerHTML == "X"){
        document.getElementById("x-win").style.display = "block"
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
            
         });
         document.getElementById("refresh-button").style.display = "block";
    }

    //7-9
    if(document.getElementById("td7").innerHTML == "O" &&
    document.getElementById("td8").innerHTML == "O" &&
    document.getElementById("td9").innerHTML == "O"){
        document.getElementById("o-win").style.display = "block";
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
         });
         document.getElementById("refresh-button").style.display = "block";
    }
    
    if(document.getElementById("td7").innerHTML == "X" &&
    document.getElementById("td8").innerHTML == "X" &&
    document.getElementById("td9").innerHTML == "X"){
        document.getElementById("x-win").style.display = "block"
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
            
         });
         document.getElementById("refresh-button").style.display = "block";
    }

    //1-7
    if(document.getElementById("td1").innerHTML == "O" &&
    document.getElementById("td4").innerHTML == "O" &&
    document.getElementById("td7").innerHTML == "O"){
        document.getElementById("o-win").style.display = "block";
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
         });
         document.getElementById("refresh-button").style.display = "block";
    }
    
    if(document.getElementById("td1").innerHTML == "X" &&
    document.getElementById("td4").innerHTML == "X" &&
    document.getElementById("td7").innerHTML == "X"){
        document.getElementById("x-win").style.display = "block"
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
            
         });
         document.getElementById("refresh-button").style.display = "block";
    }

    //2-8
    if(document.getElementById("td2").innerHTML == "O" &&
    document.getElementById("td5").innerHTML == "O" &&
    document.getElementById("td8").innerHTML == "O"){
        document.getElementById("o-win").style.display = "block";
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
         });
         document.getElementById("refresh-button").style.display = "block";
    }
    
    if(document.getElementById("td2").innerHTML == "X" &&
    document.getElementById("td5").innerHTML == "X" &&
    document.getElementById("td8").innerHTML == "X"){
        document.getElementById("x-win").style.display = "block"
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
            
         });
         document.getElementById("refresh-button").style.display = "block";
    }

    //3-9
    if(document.getElementById("td3").innerHTML == "O" &&
    document.getElementById("td6").innerHTML == "O" &&
    document.getElementById("td9").innerHTML == "O"){
        document.getElementById("o-win").style.display = "block";
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
         });
         document.getElementById("refresh-button").style.display = "block";
    }
    
    if(document.getElementById("td3").innerHTML == "X" &&
    document.getElementById("td6").innerHTML == "X" &&
    document.getElementById("td9").innerHTML == "X"){
        document.getElementById("x-win").style.display = "block"
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
            
         });
         document.getElementById("refresh-button").style.display = "block";
    }

    // \\

    if(document.getElementById("td1").innerHTML == "O" &&
    document.getElementById("td5").innerHTML == "O" &&
    document.getElementById("td9").innerHTML == "O"){
        document.getElementById("o-win").style.display = "block";
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
         });
         document.getElementById("refresh-button").style.display = "block";
    }
    
    if(document.getElementById("td1").innerHTML == "X" &&
    document.getElementById("td5").innerHTML == "X" &&
    document.getElementById("td9").innerHTML == "X"){
        document.getElementById("x-win").style.display = "block"
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
            
         });
         document.getElementById("refresh-button").style.display = "block";
    }

    // ///
    if(document.getElementById("td3").innerHTML == "O" &&
    document.getElementById("td5").innerHTML == "O" &&
    document.getElementById("td7").innerHTML == "O"){
        document.getElementById("o-win").style.display = "block";
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
         });
         document.getElementById("refresh-button").style.display = "block";
    }
    
    if(document.getElementById("td3").innerHTML == "X" &&
    document.getElementById("td5").innerHTML == "X" &&
    document.getElementById("td7").innerHTML == "X"){
        document.getElementById("x-win").style.display = "block"
        document.querySelectorAll('.stop-game').forEach(function(el) {
            el.style.display = 'none';
            
         });
         document.getElementById("refresh-button").style.display = "block";
    }
}