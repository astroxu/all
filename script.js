/* ===== FONTS ===== */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Cinzel:wght@400;700&display=swap');

/* ===== GLOBAL ===== */
body {
  margin: 0;
  font-family: 'Cinzel', serif;
  color: #3b2a1d;
  background:
    repeating-linear-gradient(
      0deg,
      #e8dccb 0px,
      #e8dccb 8px,
      #e0d2bf 8px,
      #e0d2bf 16px
    ),
    repeating-linear-gradient(
      90deg,
      #e8dccb 0px,
      #e8dccb 8px,
      #e0d2bf 8px,
      #e0d2bf 16px
    );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity .8s ease;
}

body.loaded { opacity: 1; }

/* center container */
.center { width: 90%; max-width: 900px; }

/* ===== CARDS ===== */
.card {
  background: #f7f0e0;
  border: 3px solid #8b6f47;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {opacity:0; transform:translateY(20px)}
  to {opacity:1; transform:translateY(0)}
}

/* ===== PIXEL ICON MENU ===== */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 130px);
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.icon {
  font-family:'Press Start 2P';
  background:#fff5e6;
  border:3px solid #8b6f47;
  border-radius:15px;
  width:120px;
  height:120px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  color:#5c3d2e;
  font-size:11px;
  transition:.3s;
}

.icon:hover{
  transform:translateY(-8px) scale(1.05);
  box-shadow:0 10px 20px rgba(0,0,0,.3);
}

.locked{opacity:.4; pointer-events:none}

/* ===== MEDIEVAL LETTER ===== */
.parchment {
  background:#fdf6e3;
  padding:40px;
  border-radius:10px;
  border:3px solid #a68a64;
  box-shadow:inset 0 0 30px rgba(0,0,0,.2);
  font-size:18px;
  line-height:1.8;
}

/* ===== PHOTO GALLERY ===== */
.gallery {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
  margin-top:20px;
}

.gallery img{
  width:100%;
  border-radius:10px;
  border:3px solid #8b6f47;
  transition:.3s;
}
.gallery img:hover{transform:scale(1.05)}

/* ===== GAME ===== */
#memoryGame{
  display:grid;
  grid-template-columns:repeat(4,80px);
  gap:12px;
  justify-content:center;
  margin-top:20px;
}

.cardItem{
  width:80px;
  height:80px;
  background:#c2a878;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  cursor:pointer;
  transition:.2s;
}
.cardItem:hover{transform:scale(1.1)}

.score{margin-top:20px}

/* ===== LOVE CLOCK ===== */
.clockBox{
  display:flex;
  gap:15px;
  justify-content:center;
  margin:20px 0;
}
.clockBox span{
  background:#8b6f47;
  color:white;
  padding:15px;
  border-radius:10px;
}

/* ===== BUTTONS ===== */
button{
  font-family:'Press Start 2P';
  background:#8b6f47;
  color:white;
  border:none;
  padding:15px 20px;
  margin:10px;
  border-radius:10px;
  cursor:pointer;
  transition:.3s;
}
button:hover{transform:scale(1.1)}
