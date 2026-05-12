// Base de datos de tus proyectos - Todo en MediaFire
const addons = [
    {
        name: "Velada - Andy Boxing",
        version: "v1.0.5",
        desc: "Combate 1v1 con físicas realistas y cámaras cinemáticas profesionales.",
        img: "img/velada.png", 
        fileUrl: "https://www.mediafire.com/file/cspjkkzjxp8ac9r/velada_andy.mcpack/file"
    },
    {
        name: "Sillas Musicales",
        version: "v1.2.0",
        desc: "Minijuego automatizado para servidores con música y lógica avanzada.",
        img: "img/sillas.jpg", 
        fileUrl: "https://www.mediafire.com/file/2r3ttm8r9nbft7x/sillas_andy.mcpack/file"
    },
    {
        name: "Chalecos Explosivos",
        version: "v0.2",
        desc: "Complemento de chalecos explosivos para eliminar jugadores como en los SquidCraft 4, tutorial de uso en discord.",
        img: "img/bomba.jpg",
        fileUrl: "https://www.mediafire.com/file/ii4s48gblginw5v/Chalecos_Core_v0.2.mcaddon.zip/file"
    }
];

const grid = document.getElementById('addonsGrid');

function render(data) {
    grid.innerHTML = '';
    data.forEach((addon, i) => {
        const card = document.createElement('div');
        card.className = 'card card-anim';
        card.style.animationDelay = `${i * 0.1}s`; 
        
        card.innerHTML = `
            <img src="${addon.img}" class="card-img" alt="${addon.name}">
            <div class="card-content">
                <span class="card-version">${addon.version}</span>
                <h3 class="card-title">${addon.name}</h3>
                <p class="card-desc">${addon.desc}</p>
                <a href="${addon.fileUrl}" target="_blank" class="download-btn">Descargar Ahora</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Carga inicial
render(addons);

// Buscador simple
document.getElementById('addonSearch').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = addons.filter(a => a.name.toLowerCase().includes(val));
    render(filtered);
});

// Lógica de contacto original (Discord)
const btnDiscord = document.getElementById('contactToggle');
const panelDiscord = document.getElementById('contactContent');

btnDiscord.addEventListener('click', () => {
    btnDiscord.classList.toggle('active');
    panelDiscord.classList.toggle('active');
});

// NUEVA Lógica de contacto (TikTok)
const btnSocial = document.getElementById('socialToggle');
const panelSocial = document.getElementById('socialContent');

btnSocial.addEventListener('click', () => {
    btnSocial.classList.toggle('active');
    panelSocial.classList.toggle('active');
});

