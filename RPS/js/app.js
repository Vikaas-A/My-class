let v = 0;
let u = 0;
let move = 5;
function increament1() {
    v++;
    if (v<5){
        
        document.getElementById("Score1").textContent = v;    
    }
    else if(u<5 && v==5){
        document.getElementById("Score1").textContent = 5;
        document.getElementById("Winner").textContent = "Player";
        document.body.style.backgroundColor = "green";
    }
}
function increament2() {
    u++;
    if (u<5){    
        document.getElementById("Score2").textContent = u;    
    }
    else if (v<5&& u==5){
        var x = "Computer";
        document.getElementById("Score2").textContent = 5;    
        document.getElementById("Winner").textContent = x;
        
        const div = document.getElementById("f");
        console.log(div);
        document.body.style.backgroundColor = "red";
        div.style.color = "green";

    }
   
}

function winner(a,b){
    
    if (a==b){
        return 0;
    }
    else if (((a==0) && (b==1)) || ((a==1) && (b==2)) ||((a==2) && (b==0))){
        return 1;
    }
    else {
        return 2;
    }
}
function ran(n){
    let arr = ["Rock","Paper","Scisser"]
    const random = (min = 0, max = 3) => {
        let num = Math.random() * (max - min) + min;
    
        return Math.floor(num);
    };    
    let com = random();
    let pla = n-1;
    let win = winner(com,pla);
           
    if (v<5 && u<5){
    if (win==1 && u!= 5){
        increament1()
        document.getElementById("Status").textContent = "Player own";
    }
    else if (win==2 && v!=5){
        increament2()
        document.getElementById("Status").textContent = "Computer Own";
    }
    else {
        document.getElementById("Status").textContent = "Tie";
    }
    
}
}