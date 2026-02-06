function playSong() {
    const song = document.getElementById("song");
    song.play();
}

function showSurprise() {
    const message = document.getElementById("hiddenMessage");
    message.style.display = "block";
}

const text = "Hey forever 💖";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 120);
    }
}

window.onload = typingEffect;

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight / 1.2;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("show");
        }
    });
});
function unlock() {
    const pass = document.getElementById("password").value;
    if (pass === "manvi") { // 🔴 CHANGE PASSWORD HERE
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("error").innerText = "Wrong password 💔";
    }
}
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 800);
function playSong() {
    const song = document.getElementById("song");
    song.volume = 0;
    song.play();

    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            song.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);
}
function openSurprise() {
    document.getElementById("surpriseScreen").classList.add("show");
}

function closeSurprise() {
    document.getElementById("surpriseScreen").classList.remove("show");
}
/* ============================= */
/* TAGDA SURPRISE SYSTEM */
/* ============================= */

const letterText = `
You are not just a part of my life,
you are the reason behind
so many of my smiles.

No matter how far we go,
no matter how much life changes,
you will always be my constant. ❤️
`;

let letterIndex = 0;

function openSurprise() {
    document.getElementById("surpriseScreen").classList.add("show");

    playSong();        // song fade-in
    heartBlast();      // heart explosion
    startTyping();     // typing letter
}

function startTyping() {
    const el = document.getElementById("typedLetter");
    el.innerHTML = "";
    letterIndex = 0;

    function type() {
        if (letterIndex < letterText.length) {
            el.innerHTML += letterText.charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 50);
        } else {
            // Show photo AFTER typing finishes
            setTimeout(() => {
                document.getElementById("surprisePhoto").classList.add("show");
            }, 500);
        }
    }
    type();
}

/* ===== HEART EXPLOSION ===== */
function heartBlast() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";

        heart.style.left = "50vw";
        heart.style.top = "50vh";

        heart.style.setProperty("--x", `${Math.random() * 400 - 200}px`);
        heart.style.setProperty("--y", `${Math.random() * 400 - 200}px`);

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    }
}

function closeSurprise() {
    document.getElementById("surpriseScreen").classList.remove("show");
    document.getElementById("typedLetter").innerHTML = "";
    document.getElementById("surprisePhoto").classList.remove("show");
}
