const addons = [
    {
        name: "Velada - Andy Boxing",
        version: "v1.0.5",
        desc: "Combate 1v1 con físicas realistas y cámaras cinemáticas profesionales.",
        img: "img/velada.png", 
        link: "https://www.mediafire.com/file/cspjkkzjxp8ac9r/velada_andy.mcpack/file"
    },
    {
        name: "Sillas Musicales",
        version: "v1.2.0",
        desc: "Minijuego automatizado para servidores con música y lógica avanzada.",
        img: "img/sillas.jpg", 
        link: "https://www.mediafire.com/file/6yerd0cnnn1rfe6/sillas_andy.mcpack/file"
    },
    {
        name: "Chalecos Explosivos",
        version: "v0.2",
        desc: "Complemento de chalecos explosivos para eliminar jugadores como en los SquidCraft 4.",
        img: "img/bomba.jpg",
        link: "https://www.mediafire.com/file/ii4s48gblginw5v/Chalecos_Core_v0.2.mcaddon.zip/file"
    }
];

const grid = document.getElementById('addonsGrid');

function render(data) {
    grid.innerHTML = '';
    data.forEach((addon, index) => {
        const card = document.createElement('div');
        card.className = 'card card-anim';
        // Aumentado a 1.9s para compensar la nueva tarjeta y mantener la cascada perfecta
        card.style.animationDelay = `${index * 0.15 + 1.9}s`; 
        
        card.innerHTML = `
            <div style="overflow: hidden; border-radius: 24px 24px 0 0;">
                <img src="${addon.img}" class="card-img" alt="${addon.name}">
            </div>
            <div class="card-content">
                <span class="card-version">${addon.version}</span>
                <h3 style="margin: 10px 0 5px; font-size: 1.3rem;">${addon.name}</h3>
                <p style="font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.4;">${addon.desc}</p>
                <a href="${addon.link}" target="_blank" class="download-btn">Descargar Ahora</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

render(addons);

const searchInput = document.getElementById('addonSearch');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredAddons = addons.filter(addon => 
        addon.name.toLowerCase().includes(searchTerm)
    );
    render(filteredAddons);
});

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const openMenuBtn = document.getElementById('openMenu');
const btnTutoriales = document.getElementById('btnTutoriales');

openMenuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', closeSidebar);
btnTutoriales.addEventListener('click', closeSidebar);

