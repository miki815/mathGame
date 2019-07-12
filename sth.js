let t = document.getElementById("tn"); //just a paragraph
let answer = document.getElementById("ans"); //input
let q = document.getElementById("quest");//math equation
let bt = document.getElementById("btn"); //button to start a game
let l = document.getElementById("lvl"); //level progress
let intro = document.getElementById("intro")
let a; 
let b;
let d;
let c = a + b;
let i = 1;

function check(e) {
    var key = e.which; //check if the enter is pressed
    if(key==13){
    var v = answer.value;
    if(v==c) {                  //right answer
        i++;
        l.style.color = "green";
        l.innerHTML = "Level " + i;
        answer.value = "";
        if(i>=10 && i<20) {             //10 to 20 levels
            product();
        }
        else if(i>20){           //after 20..want to add more different levels
            combine();
        }
        else {               //first ten levels
            sum();
        };
 }
    else{                            //wrong answer
        i=1;
        l.style.color = "red";
        l.innerHTML = "Level 1";
        sum();
    }
  };
};

function sum() {                        
    if(i == 1){
    intro.innerHTML = "";
    l.style.color = "red";
    l.innerHTML = "Level 1";
    }
    bt.innerHTML="GO!"
 a = Math.floor(Math.random()*100);
 b = Math.floor(Math.random()*100);
    c = a + b;
q.innerHTML = `${a} + ${b} = ?`;
    q.style.color="white";
    };

function product(){
    bt.innerHTML="GO!"
 a = Math.floor(Math.random()*20);
 b = Math.floor(Math.random()*20);
    c = a * b;
q.innerHTML = `${a} * ${b} = ?`;
    q.style.color="white";
    };

    function combine(){
        a = Math.floor(Math.random()*40);
        b = Math.floor(Math.random()*40);
        d = Math.floor(Math.random()*100);
        c = a * b + d;
        q.innerHTML = `${a} * ${b} + ${d} = ?`;
        q.style.color="white";
    };


 addEventListener("keydown", check);
bt.addEventListener("dblclick",sum);
















