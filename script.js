// Base de datos de tus proyectos - Todo en MediaFire
const addonsData = [
    {
        name: "Velada - Andy Boxing",
        description: "Addon de combate 1v1 con barras de vida detalladas y cámaras cinemáticas.",
        version: "v1.0.5",
        image: "img/velada.png", 
        fileUrl: "https://www.mediafire.com/file/cspjkkzjxp8ac9r/velada_andy.mcpack/file"
    },
    {
        name: "Sillas Musicales",
        description: "Minijuego automatizado con lógica de Armor Stands y música integrada.",
        version: "v1.2.0",
        // OJO: Si guardaste la foto como .jpg pon sillas.jpg, si fue .png pon sillas.png
        image: "img/sillas.jpg", 
        fileUrl: "https://www.mediafire.com/file/2r3ttm8r9nbft7x/sillas_andy.mcpack/file"
    }
];

const grid = document.getElementById('addonsGrid');
const searchInput = document.getElementById('addonSearch');
const noResultsMessage = document.getElementById('noResults');

// Lógica de tarjetas
function renderAddons(data) {
    grid.innerHTML = '';
    
    if (data.length === 0) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
        data.forEach(addon => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${addon.image}" alt="${addon.name}" class="card-img">
                <div class="card-content">
                    <span class="card-version">${addon.version}</span>
                    <h3 class="card-title">${addon.name}</h3>
                    <p class="card-desc">${addon.description}</p>
                    <a href="${addon.fileUrl}" target="_blank" class="download-btn">Descargar Ahora</a>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// Carga inicial
renderAddons(addonsData);

// Filtro buscador
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = addonsData.filter(addon => 
        addon.name.toLowerCase().includes(term) || 
        addon.description.toLowerCase().includes(term)
    );
    renderAddons(filtered);
});

// Lógica del Panel de Contacto (¡Esto es lo que faltaba para que funcione!)
const contactToggle = document.getElementById('contactToggle');
const contactContent = document.getElementById('contactContent');

contactToggle.addEventListener('click', () => {
    contactToggle.classList.toggle('active');
    contactContent.classList.toggle('active');
});

