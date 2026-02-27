let questions = [];
let currentIndex = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function initFlashcards(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        const data = await response.json();
        questions = shuffle(data);
        updateCard();
    } catch (e) {
        console.error("Erreur :", e);
    }
}

function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

function updateCard() {
    if (questions.length === 0) return;
    const card = document.getElementById('card');
	const recto = document.getElementById('recto');
    const verso = document.getElementById('verso');

// Vérification que les éléments existent bien dans la page
    if (!card || !recto || !verso) return; 

    card.classList.remove('flipped');
    
    setTimeout(() => {
        document.getElementById('recto').innerHTML = `<span>${questions[currentIndex].recto}</span>`;
        document.getElementById('verso').innerHTML = `<span>${questions[currentIndex].verso}</span>`;
        document.getElementById('progress').innerText = `Carte ${currentIndex + 1} / ${questions.length}`;
        if (window.MathJax) MathJax.typesetPromise();
    }, 150);
}

function nextCard(e) {
    e.stopPropagation();
    if (currentIndex < questions.length - 1) { currentIndex++; updateCard(); }
}

function prevCard(e) {
    e.stopPropagation();
    if (currentIndex > 0) { currentIndex--; updateCard(); }
}