// Get elements
const mainContainer = document.getElementById('mainContainer');
const joyAnimation = document.getElementById('joyAnimation');
const sadAnimation = document.getElementById('sadAnimation');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const retryBtn = document.getElementById('retryBtn');
const heartsContainer = document.getElementById('heartsContainer');

// Create floating hearts background
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Generate floating hearts continuously
setInterval(createFloatingHeart, 300);

// Initialize some hearts
for (let i = 0; i < 15; i++) {
    setTimeout(createFloatingHeart, i * 200);
}

// Yes button click handler
yesBtn.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    joyAnimation.classList.remove('hidden');

    // Create fireworks
    createFireworks();

    // Create celebration hearts
    createCelebrationHearts();

    // Play celebration sound (optional - you can add audio if needed)
});

// No button click handler
noBtn.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    sadAnimation.classList.remove('hidden');

    // Create rain effect
    createRain();
});

// Retry button click handler
retryBtn.addEventListener('click', () => {
    sadAnimation.classList.add('hidden');
    mainContainer.style.display = 'flex';

    // Clear rain
    const rainContainer = document.getElementById('rainContainer');
    rainContainer.innerHTML = '';
});

// Create fireworks effect
function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];

    function createSingleFirework() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 50 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');

            fireworksContainer.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    // Create multiple fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(createSingleFirework, i * 300);
    }

    // Continue creating fireworks
    setInterval(createSingleFirework, 1500);
}

// Create celebration hearts
function createCelebrationHearts() {
    const container = document.querySelector('.floating-hearts-celebration');
    const hearts = ['💕', '💖', '💗', '💝', '💓', '💞'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'celebration-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }

    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Create rain effect
function createRain() {
    const rainContainer = document.getElementById('rainContainer');

    function createRaindrop() {
        const drop = document.createElement('div');
        drop.className = 'raindrop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        rainContainer.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 3000);
    }

    // Create initial raindrops
    for (let i = 0; i < 100; i++) {
        setTimeout(createRaindrop, i * 30);
    }

    // Continue creating rain
    setInterval(createRaindrop, 100);
}

// Add button hover sound effect (optional visual feedback)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-5px) scale(1.05)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});
