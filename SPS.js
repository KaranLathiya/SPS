let re= function arrange(e){
    const move=document.getElementById('move').value
    let div=document.getElementById('div1')
    div1.innerHTML=`<hr>
<div id="turn"><p>TOTAL NUMBER OF MOVES : ${move}  </p></div><hr> <p>PICK ANY ONE OUT OF THREE</p>
<ul >
<li id="UL" class="li">
<button id="bt1" class="" onclick="start(this)">STONE ✊</button>
<button id="bt2" class="" onclick="start(this)">PAPER 🖐️</button>
<button id="bt3" class="" onclick="start(this)">SCISSOR ✌️</button>
</li>
</ul>
<div id="result"> </div>
<div id="final"> </div>
<hr> <p><span id="text">TO RESTART THE GAME  👉   </span> <button id="reset" type="reset" class="li" onclick="restart()">RESTART</button></p>`
}

submit.addEventListener('click', re)
let w=0,l=0,count=0;

function start(z){
    submit.removeEventListener('click',re)
    let final=document.getElementById('final')
    let turn=document.getElementById('turn') 
    let move=document.getElementById('move').value
    document.getElementById('move').disabled="true"
// console.log(move)
    let result=document.getElementById('result')
    let arr=["STONE ✊","PAPER 🖐️","SCISSOR ✌️"]
let random=Math.floor(Math.random()*3)
let value
    let bt1=document.getElementById('bt1').style.backgroundColor="white"
    let bt2=document.getElementById('bt2').style.backgroundColor="white"
    let bt3=document.getElementById('bt3').style.backgroundColor="white"
    let ul=document.getElementById('UL')
    let col=2
// console.log(value)
//     console.log(arr[random])

    if(move>count){         
    value=z.innerText
    console.log(value)
    if(value==arr[random]){
        count+=1
        result.innerHTML=`<hr><p>IT IS TIE BEACUSE YOUR OPPONENT ALSO CHOOSE THE ${arr[random]}</p>
        <p>YOUR SCORE : ${w}   ||   COMPUTER SCORE : ${l}</p>`
    }
    else if(value=="PAPER 🖐️"){
        if(arr[random]=="STONE ✊"){
           w+=1
           count+=1
            col= win(arr[random]);
                // console.log(w)
        }
        else if(arr[random]=="SCISSOR ✌️"){
            l+=1
            count+=1
            col=lose(arr[random]);
                // console.log(l)
        }
    }
        else if(value=="STONE ✊"){
        if(arr[random]=="SCISSOR ✌️"){
           w+=1
           count+=1
            col= win(arr[random]);
                // console.log(w)
        }
        else if(arr[random]=="PAPER 🖐️"){
           l+=1
           count+=1
            col= lose(arr[random]);
                // console.log(l)
        }
    }
        else if(value=="SCISSOR ✌️"){
        if(arr[random]=="PAPER 🖐️"){
           w+=1
           count+=1
            col= win(arr[random]);
                // console.log(w)
        }
        else if(arr[random]=="STONE ✊"){
            l+=1
            count+=1
            col=lose(arr[random]);
                // console.log(l)
        }
    } 
    if(col==0){
        z.style.backgroundColor="red"
    }else if(col==1) {
        z.style.backgroundColor="green"
    }else  {
        z.style.backgroundColor="gray"
    }
    turn.innerHTML=`<p>TOTAL NUMBER OF MOVES : ${move} || NUMBER OF MOVES LEFT : ${move-count}  </p> `
}
if(count==move){
turn.innerHTML=`<p class="red">GAME OVER</p> `
if(w<l){
    final.innerHTML=`<hr><p class="red" >COMPUTER WIN THE GAME 😣</p>`
}
else if(w>l){
    final.innerHTML=`<hr><p class="green">YOU WIN THE GAME ✌️ </p>`
}
else{
    final.innerHTML=`<hr><p>IT IS TIE BETWEEN YOU AND THE COMPUTER </p>`
}
}}
function win(m){
                result.innerHTML=`<hr><p>YOU GOT ONE POINT BECAUSE COMPUTER CHOOSE ${m}</p>
                <p> YOUR SCORE : ${w}   ||   COMPUTER SCORE : ${l}</p>`
                return 1    
              }
function lose(m){
                result.innerHTML=`<hr><p>COMPUTER GOT ONE POINT BECAUSE COMPUTER CHOOSE ${m}</p>
                    <p>   YOUR SCORE : ${w}   ||   COMPUTER SCORE : ${l}</p>`
                return 0
                }          
function restart(){
                window.location.reload();
                 }
