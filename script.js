/* ===== SMOOTH FADE ===== */
document.addEventListener("DOMContentLoaded",()=>{document.body.classList.add("loaded");});
document.addEventListener("click",(e)=>{
if(e.target.tagName==="A"&&e.target.href){
e.preventDefault();document.body.classList.remove("loaded");
setTimeout(()=>window.location=e.target.href,500);
}});

/* ===== TYPING ANIMATION ===== */
function typeText(element,text,speed=50){
let i=0;element.innerHTML="";
(function typing(){if(i<text.length){element.innerHTML+=text.charAt(i);i++;setTimeout(typing,speed);}})();
}
window.addEventListener("load",()=>{
let el=document.getElementById("typingText");
if(el) typeText(el,"Every moment with you feels like magic... explore everything ❤️",50);
});

/* ===== PASSWORD PAGE ===== */
function checkPassword(){
let pass=document.getElementById("pass").value;
if(pass==="24072022") window.location="home.html";
else document.getElementById("error").innerText="Wrong password";
}

/* ===== UNLOCK SYSTEM ===== */
function complete(section){localStorage.setItem(section,true);checkUnlock();}
function checkUnlock(){
let items=["letter","music","jar","thanks","game","timeline","photos"];
let done=items.every(i=>localStorage.getItem(i));
let btn=document.getElementById("finalBtn");
if(done&&btn){btn.classList.remove("locked");btn.innerHTML="<p>💍 Final Question</p>";btn.href="question.html";}
}
window.onload=checkUnlock;

/* ===== COMPLIMENTS JAR ===== */
function newCompliment(){
let list=["You are so dam beautiful","You make my world brighter khadidja","You have the most heartmelting smile","You are my happiness","You are so adorable","You are hotter than the sun", "So damn pretty mashallah"];
let el=document.getElementById("compliment");
if(el) el.innerText=list[Math.floor(Math.random()*list.length)];
}

/* ===== MINI GAME ===== */
if(document.getElementById("memoryGame")){
let emojis=["❤️","🌹","💍","👑","❤️","🌹","💍","👑"];
emojis.sort(()=>Math.random()-0.5);
let game=document.getElementById("memoryGame");
let first=null,second=null,lock=false;
let moves=0,score=0;
emojis.forEach(e=>{
let div=document.createElement("div");div.className="cardItem";div.dataset.value=e;div.innerHTML="?";
div.onclick=()=>{
if(lock||div===first) return;
div.innerHTML=e;
if(!first){first=div;}
else{
second=div;moves++;document.getElementById("moves").innerText=moves;
if(first.dataset.value===second.dataset.value){score++;document.getElementById("score").innerText=score;first=null;second=null;
if(score===4){setTimeout(()=>{alert("You won ❤️");complete("game");},400);}}
else{lock=true;setTimeout(()=>{first.innerHTML="?";second.innerHTML="?";first=null;second=null;lock=false;},800);}
}};game.appendChild(div);
});
}

/* ===== LOVE CLOCK ===== */
function updateLoveClock(){
let start=new Date("2022-07-24T00:00:00");
let now=new Date();let diff=now-start;
let days=Math.floor(diff/(1000*60*60*24));
let hours=Math.floor((diff/(1000*60*60))%24);
let minutes=Math.floor((diff/(1000*60))%60);
let seconds=Math.floor((diff/1000)%60);
let clock=document.getElementById("loveClock");
if(clock) clock.innerHTML=`<h3>We have been together for:</h3><div class="clockBox"><span>${days} days</span><span>${hours} hrs</span><span>${minutes} min</span><span>${seconds} sec</span></div>`;
}
setInterval(updateLoveClock,1000);
updateLoveClock();

/* ===== SECRET QUESTION ===== */
function moveNo(){
let btn=document.querySelector(".no");btn.style.position="absolute";btn.style.left=Math.random()*80+"%";btn.style.top=Math.random()*80+"%";
}
function sayYes(){
confetti({particleCount:200,spread:100,origin:{y:0.6}});
setTimeout(()=>{document.body.innerHTML=`<div class="center"><div class="card"><h1>❤️ BEST DAY EVER ❤️</h1><p>You made me the happiest person alive.</p></div></div>`},800);
}
