// ===== PASSWORD CHECK =====
function checkPassword(){
    let pass = document.getElementById("pass").value;
    if(pass === "khadidja"){ // <-- change to your password
        window.location = "home.html";
    } else {
        document.getElementById("error").innerText = "Wrong password!";
    }
}

// ===== COMPLETE SECTION AND REDIRECT =====
function complete(section){
    localStorage.setItem(section, true); // mark section as done
    checkUnlock();                        // unlock final question if ready
    window.location = "home.html";        // go back to icons/dashboard
}

// ===== UNLOCK FINAL QUESTION =====
function checkUnlock(){
    let items = ["letter","music","jar","thanks","game","timeline","photos"];
    let done = items.every(i => localStorage.getItem(i));
    let btn = document.getElementById("finalBtn");
    if(done && btn){
        btn.classList.remove("locked");
        btn.innerHTML = "<p>💍 Final Question</p>";
        btn.href = "question.html";
    }
}

// ===== TYPING ANIMATION =====
function typeText(el, text, speed){
    if(!el) return;
    let i=0;
    el.innerHTML="";
    let interval = setInterval(()=>{
        el.innerHTML += text.charAt(i);
        i++;
        if(i>=text.length) clearInterval(interval);
    }, speed);
}

// ===== COMPLIMENTS JAR =====
function newCompliment(){
    let compliments=[
        "You light up my world ❤️",
        "Your smile is magic 🌟",
        "I love you more every day 💖",
        "You make everything better 🥰",
        "You are my inspiration 💌",
        "Forever grateful for you 🌹"
    ];
    let c = compliments[Math.floor(Math.random()*compliments.length)];
    let el = document.getElementById("compliment");
    if(el) el.innerText = c;
}

// ===== LOVE CLOCK / TIMELINE =====
function updateLoveClock(){
    let el = document.getElementById("loveClock");
    if(!el) return;
    let start=new Date("2022-07-24T00:00:00"); // your anniversary
    let now=new Date();
    let diff = now - start; // milliseconds
    let days=Math.floor(diff/1000/60/60/24);
    let hours=Math.floor(diff/1000/60/60)%24;
    let minutes=Math.floor(diff/1000/60)%60;
    let seconds=Math.floor(diff/1000)%60;
    el.innerText=`Together for ${days} days, ${hours}h ${minutes}m ${seconds}s ❤️`;
}

// ===== MINI-GAME =====
window.onload = function() {
    checkUnlock(); // unlock final icon if ready

    // MINI GAME INITIALIZATION
    if(document.getElementById("memoryGame")){
        let emojis=["❤️","🌹","💍","👑","❤️","🌹","💍","👑"];
        emojis.sort(()=>Math.random()-0.5);
        let game=document.getElementById("memoryGame");
        let first=null, second=null, lock=false;
        let moves=0, score=0;

        // clear previous content
        game.innerHTML = "";

        emojis.forEach(e=>{
            let div=document.createElement("div");
            div.className="cardItem";
            div.dataset.value=e;
            div.innerHTML="?";

            div.onclick = ()=>{
                if(lock || div === first) return;
                div.innerHTML=e;
                if(!first){ first=div; }
                else{
                    second=div;
                    moves++;
                    document.getElementById("moves").innerText = moves;
                    if(first.dataset.value === second.dataset.value){
                        score++;
                        document.getElementById("score").innerText = score;
                        first=null; second=null;
                        if(score === emojis.length/2){ 
                            setTimeout(()=>{
                                alert("You won ❤️");
                                complete("game"); // go back to dashboard
                            }, 400);
                        }
                    } else {
                        lock=true;
                        setTimeout(()=>{
                            first.innerHTML="?";
                            second.innerHTML="?";
                            first=null; second=null; lock=false;
                        }, 800);
                    }
                }
            };
            game.appendChild(div);
        });
    }

    // TYPING ANIMATION FOR HOME PAGE
    if(document.getElementById("typingText")){
        typeText(document.getElementById("typingText"), "Every moment with you feels like magic...", 50);
    }

    // LOVE CLOCK UPDATES
    if(document.getElementById("loveClock")){
        updateLoveClock();
        setInterval(updateLoveClock,1000);
    }
}
