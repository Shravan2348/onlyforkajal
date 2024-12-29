document.addEventListener("DOMContentLoaded", () => {
    const compliments = [
        "✨ Your eyes shine like the brightest stars in the sky, I could get lost in them forever. 🌟",
        "🌸 You have the most mesmerizing smile, it’s like the sun breaking through the clouds after a rainy day. ☀️",
        "💖 I'm so proud of you, you have achieved so much and you're just getting started. 🌱",
        "🦋 Your beauty is like a delicate butterfly, always fluttering through life with grace and elegance. 🦋",
        "🌙 Your laugh is my favorite melody, like the gentle sound of wind chimes in the breeze. 🎶",
        "🌺 The warmth of your presence makes everything around you bloom like spring flowers. 🌷",
        "💫 Your kindness is a beacon, a lighthouse guiding those who feel lost. 🌟",
        "🌹 You’re the kind of person that makes everything better, just by being there. 🌼",
        "💎 You are as rare as a diamond, glowing in your own unique light. 💖",
        "🌈 Your heart is as pure as the rainbow after a thunderstorm, filled with all the colors of love. 🌦️",
        "💫 Your body is a work of art, each curve perfectly sculpted like the most beautiful statue. 🎨",
        "🌺 The way you carry yourself, with such confidence and poise, is truly inspiring. 🌟",
        "🌙 You are a constellation of beauty, a universe of grace, just waiting to be admired. 🌌",
        "🌻 Your laughter is like the sound of a soft breeze, calming and gentle, it brings peace to my soul. 🌾",
        "💫 You light up every room you enter, like the moon lights up the night sky. 🌙",
        "🌸 You deserve to hear that you're a masterpiece, one of a kind, truly special. 🎨"
    ];

    const generateButton = document.getElementById("generate-btn");
    const complimentText = document.getElementById("compliment");

    generateButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        complimentText.textContent = compliments[randomIndex];
    });
});