const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const loveLetter = document.getElementById('loveLetter');
const container = document.querySelector('.container');
const loading = document.getElementById('loading');
const messageEl = document.getElementById('message');
const bgMusic = document.getElementById('bgMusic');

// Play background music
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {});

// The love letter text (typing effect)
const loveMessage = "Happy Valentine’s Day, love! 🌹\nI know we’re thousands of miles apart, and while other couples are out on dates today, and us magka video call lang. Honestly, it’s not easy. Ang daming moments na sana katabi lang kita or nahahawakan ko yung kamay mo, but the distance won't let us at least for now. Minsan nakaka-frustrate yung screen lang ang nahahawakan ko, but then I see your smile and everything feels okay again.But you know what? Thank you for making me feel so loved kahit magkalayo tayo. Kahit hindi pa tayo nagkikita in person, you’ve become my safe space. I really appreciate how we handle the time difference between PH and NZ kahit busy, we always find a way to talk. Sobrang laking bagay sa akin nung mga small efforts mo yung mga random updates mo about your day, yung pag-stay up late just to catch me, and just knowing na nandyan ka. It makes me feel like you're part of my life here, even if you’re actually on the other side of the world.I’m so lucky to have you as my partner and my best friend at the same time. You’re the one I want to tell everything to, whether it's a bad day or just a random thought. Please know na kahit sobrang layo natin sa isa’t isa, ikaw lang talaga. No one else even comes close. I’m not in a rush, because I know na worth it lahat ng paghihintay ko for you. I’d rather wait years for you than be with anyone else right now.Sana alam mo how much I appreciate your patience. LDR is a challenge, but with you, it feels like a journey I’m happy to be on. One day, hindi na natin kailangan mag-bilang ng hours or mag-check ng time zones, because we’ll finally be together. I’m already dreaming of that first time I’ll get to see you in person it’s going to be the best day ever.I really wish I could give you a hug today, but for now, I just write a message for you!. I’m so proud of us and I’m so happy it’s you. You’re my favorite person in the world. I love you so much, love! Enjoy your day there and always remember that I'm always here for you, no matter the distance.Love, Huggy Bear";

function typeMessage(text, element, delay = 50) {
  let i = 0;
  element.innerHTML = '';
  const interval = setInterval(() => {
    element.innerHTML += text[i] === '\n' ? '<br>' : text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, delay);
}

// Yes button click
yesBtn.addEventListener('click', () => {
  container.style.display = 'none';
  loading.style.display = 'block';
  
  setTimeout(() => {
    loading.style.display = 'none';
    loveLetter.style.display = 'block';
    typeMessage(loveMessage, messageEl, 50);
  }, 2000);
});

// No button dodge
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = (10 + Math.random() * 30) + 'px';
  heart.innerText = '❤️';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);
    