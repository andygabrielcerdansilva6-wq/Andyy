const addons = [
    {
        name: "Velada - Andy Boxing",
        desc: "Addon de combate avanzado con físicas mejoradas y cámaras dinámicas.",
        img: "img/velada.png",
        url: "downloads/velada_andy.mcpack"
    },
    {
        name: "Sillas Musicales",
        desc: "El clásico minijuego ahora totalmente automatizado para tu servidor.",
        img: "img/sillas.png",
        url: "downloads/sillas_musicales.mcpack"
    }
];

const grid = document.getElementById('addonsGrid');
const search = document.getElementById('addonSearch');

function displayAddons(list) {
    grid.innerHTML = '';
    list.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'card';
        el.style.animationDelay = `${index * 0.1}s`; // Efecto escalonado
        el.innerHTML = `
            <img src="${item.img}" class="card-img" alt="${item.name}">
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.desc}</p>
                <a href="${item.url}" class="dl-btn" download>Descargar</a>
            </div>
        `;
        grid.appendChild(el);
    });
}

// Inicializar
displayAddons(addons);

// Buscador fluido
search.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = addons.filter(a => a.name.toLowerCase().includes(val));
    displayAddons(filtered);
});

// Lógica de Contacto (Desplegable)
const btn = document.getElementById('contactToggle');
const content = document.getElementById('contactContent');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    content.classList.toggle('active');
});

