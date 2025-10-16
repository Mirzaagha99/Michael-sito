
const projects = [
    {
        title: "Sito Web Portfolio",
        category: "web",
        description: "Un sito portfolio moderno."
    },
    {
        title: "Logo Design",
        category: "design",
        description: "Design creativo per brand."
    },
    {
        title: "Landing Page",
        category: "web",
        description: "Pagina promozionale responsive."
    }
];

function displayProjects(filteredProjects) {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";
    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        container.appendChild(card);
    });
}

function filterProjects(category) {
    if (category === "all") {
        displayProjects(projects);
    } else {
        const filtered = projects.filter(p => p.category === category);
        displayProjects(filtered);
    }
}

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim()) {
        alert("Inserisci il tuo nome.");
        name.focus();
        return false;
    }
    if (!email.value.trim() || !email.value.includes("@")) {
        alert("Inserisci un'email valida.");
        email.focus();
        return false;
    }
    if (!message.value.trim()) {
        alert("Scrivi un messaggio.");
        message.focus();
        return false;
    }

    alert("Messaggio inviato con successo!");
    return true;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

window.onload = () => {
    displayProjects(projects);

    // Animazione di fade-in
    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.transition = "opacity 1s ease-in";
            section.style.opacity = 1;
        }, 300);
    });

    // Aggiungi listener al bottone dark mode
    const toggleBtn = document.getElementById("dark-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleDarkMode);
    }
};
