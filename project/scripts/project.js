document.addEventListener('DOMContentLoaded', () => {
    
    initMenu();

    
    updateYear();

    
    loadQuotes();

    
    initBelts();


    initForm();
});


function initMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.querySelector('.navigation');

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', () => {
            navigation.classList.toggle('open');
            menuToggle.innerHTML = navigation.classList.contains('open') ? '&#10005;' : '&#9776;';
        });
    }
}


function updateYear() {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}


function loadQuotes() {
    const quoteContainer = document.getElementById('quote-container');
    if (!quoteContainer) return;

    const quotes = [
        { text: "A black belt is a white belt that never gave up.", author: "Rorion Gracie" },
        { text: "Jiu-Jitsu is the art of parking your opponent's body where they don't want it to be.", author: "Unknown" },
        { text: "Efficiency energy use is the secret of Jiu-Jitsu.", author: "Helio Gracie" }
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const q = quotes[randomIndex];

    quoteContainer.innerHTML = `
        <p>“${q.text}”</p>
        <p><strong>— ${q.author}</strong></p>
    `;
}


function initBelts() {
    const beltsContainer = document.getElementById('belts-container');
    if (!beltsContainer) return;

    const beltsData = [
        { name: "White Belt", category: "adult", description: "The starting point for every practitioner. Focuses on survival and fundamental escapes." },
        { name: "Blue Belt", category: "adult", description: "Requires deep technical understanding. Minimum age: 16 years old." },
        { name: "Purple Belt", category: "adult", description: "An intermediate rank where practitioners develop a personal game style." },
        { name: "Brown Belt", category: "adult", description: "The transition rank towards mastery and advanced technical teaching." },
        { name: "Grey Belt", category: "kids", description: "First level in the youth ranking system (ages 4-15)." },
        { name: "Yellow Belt", category: "kids", description: "Youth progression tier focusing on coordination and core techniques." }
    ];

    function displayBelts(filteredList) {
        beltsContainer.innerHTML = "";
        filteredList.forEach(belt => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <h2>${belt.name}</h2>
                <p><strong>Category:</strong> ${belt.category.toUpperCase()}</p>
                <p>${belt.description}</p>
            `;
            beltsContainer.appendChild(card);
        });
    }

    displayBelts(beltsData);

    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');
            if (filterValue === 'all') {
                displayBelts(beltsData);
            } else {
                
                const filtered = beltsData.filter(b => b.category === filterValue);
                displayBelts(filtered);
            }
        });
    });
}


function initForm() {
    const form = document.getElementById('membership-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const beltLevel = document.getElementById('belt-level').value;

        const userData = {
            name: fullname,
            email: email,
            belt: beltLevel,
            date: new Date().toLocaleDateString()
        };

        
        localStorage.setItem('jjClubMember', JSON.stringify(userData));

        const msgDiv = document.getElementById('form-message');
        if (msgDiv) {
            msgDiv.innerHTML = `Thank you, <strong>${fullname}</strong>! Your profile has been successfully saved locally.`;
        }

        form.reset();
    });
}