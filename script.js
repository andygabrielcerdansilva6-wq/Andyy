const addons = [
    {
        name: "Velada - Andy Boxing",
        desc: "Combate 1v1 con físicas realistas y cámaras cinemáticas profesionales.",
        img: "img/velada.png",
        link: "https://www.mediafire.com/file/cspjkkzjxp8ac9r/velada_andy.mcpack/file"
    },
    {
        name: "Sillas Musicales",
        desc: "Minijuego automatizado para servidores con música y lógica avanzada.",
        img: "img/sillas.jpg",
        link: "https://www.mediafire.com/file/2r3ttm8r9nbft7x/sillas_andy.mcpack/file"
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
                <h3 class="card-title">${addon.name}</h3>
                <p class="card-desc">${addon.desc}</p>
                <a href="${addon.link}" target="_blank" class="download-btn">Descargar Ahora</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

render(addons);

document.getElementById('addonSearch').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = addons.filter(a => a.name.toLowerCase().includes(val));
    render(filtered);
});

const btn = document.getElementById('contactToggle');
const panel = document.getElementById('contactContent');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    panel.classList.toggle('active');
});

