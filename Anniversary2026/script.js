// List of reasons – customize these
const reasons = [
    "You make me feel truly appreciated.",
    "Your beautiful smile, please never stop smiling.",
    "Your contagious laughter.",
    "The way you always encourage me to improve myself.",
    "The fact that I could tell you anything and know that you'd never judge me.",
    "Your gorgeous eyes.",
    "Even 10,110 miles away (Itu adalah 16,270.4678 km untuk orang aneh) you still make me feel so loved and cared for.",
    "You are the sweetest and most caring girl I've ever met.",
    "You fit right into my family.",
    "We clicked well together the moment we started talking to each other.",
    "You're so cute when you make little mistakes in English.",
    "You make me feel like we can do anything.",
    "You're patient with me, even while I'm stressed.",
    "You're someone I can truly envision a future with.",
    "You are all the dreams that I've ever dreamt.",
    "You are one of the funniest people I know.",
    "You are an incredibly hard worker and I'm very proud of you and everything you've accomplished.",
    "You are very open minded when it comes to trying new things, I love sharing my culture with you and being able to learn about your culture.",
    "One year together has already passed and I still fall in love with you again every single day.",
    "You are the most special person I've ever met.",
    "You are all around, a fun person to be around.",
    "You are very optimistic and see the good in everything.",
    "You are a very kind person with a bubbly personality.",
    "Your willingness to give up everything you've known to come back to the US, just for me, means so so much to me and I promise to always try to give you the amazing life that you deserve.",
    "You are a very appreciative person, You're not interested in just money or expensive things, you're happy with the small things in life too."
];

const reasonText = document.getElementById("reasonText");
const newReasonBtn = document.getElementById("newReasonBtn");

// Selects random reason
function getRandomReason() {
    return reasons[Math.floor(Math.random() * reasons.length)];
}

// Show a new reason with a small fade animation
function showNewReason() {
    reasonText.classList.remove("show");
    setTimeout(() => {
        reasonText.textContent = getRandomReason();
        reasonText.classList.add("show");
    }, 180);
}

// Show one on load
window.addEventListener("DOMContentLoaded", () => {
    reasonText.textContent = getRandomReason();
    reasonText.classList.add("show");
});

// Button click
newReasonBtn.addEventListener("click", showNewReason);
