// ==========================================
// 1. SISTEMA DE SONIDOS UI (EFECTOS PREMIUM)
// ==========================================
const hoverSound = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3'); 
const clickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3'); 

hoverSound.volume = 0.15;
clickSound.volume = 0.4;

function playHoverSound() {
    hoverSound.currentTime = 0; 
    hoverSound.play().catch(e => {}); // Evita errores si el usuario no ha dado clic en la página
}

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => {});
}

// Aplicar sonidos a elementos fijos (Recuerda dar un clic en la página para que empiecen a sonar)
document.addEventListener("DOMContentLoaded", () => {
    const estaticos = document.querySelectorAll('.nav-item, .premium-card, .tutorial-btn, .glass-btn-back, .menu-btn, #addonSearch');
    estaticos.forEach(el => {
        el.addEventListener('mouseenter', playHoverSound);
        el.addEventListener('click', playClickSound);
    });
});


// ==========================================
// 2. LÓGICA DE PANTALLA DE CARGA (4 SEGUNDOS)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader-wrapper');
    
    setTimeout(() => {
        if (loader) loader.classList.add('fade-out');
        document.body.classList.remove('loading');
        
        setTimeout(() => {
            if(loader) loader.remove();
        }, 800);
        
    }, 4000); 
});


// ==========================================
// 3. LÓGICA DE VISTAS (INICIO vs LANZAMIENTOS)
// ==========================================
const homeView = document.getElementById('home-view');
const proximosView = document.getElementById('proximos-view');
const btnInicio = document.getElementById('btnInicio');
const btnProximos = document.getElementById('btnProximos');
const btnVolver = document.getElementById('btnVolver');

function showProximos() {
    homeView.style.display = 'none';
    proximosView.classList.remove('hidden-view');
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
    proximosView.classList.add('hidden-view');
    homeView.style.display = 'block';
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (btnProximos) {
    btnProximos.addEventListener('click', (e) => {
        e.preventDefault();
        showProximos();
    });
}

if (btnInicio) {
    btnInicio.addEventListener('click', (e) => {
        e.preventDefault();
        showHome();
    });
}

if (btnVolver) {
    btnVolver.addEventListener('click', showHome);
}


// ==========================================
// 4. BASE DE DATOS DE ADDONS
// ==========================================
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
    if (!grid) return; 

    grid.innerHTML = '';
    data.forEach((addon, index) => {
        const card = document.createElement('div');
        card.className = 'card card-anim';
        card.style.animationDelay = `${index * 0.15 + 2.2}s`; 
        
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
        
        // Sonidos a las tarjetas de addon que se generan automáticamente
        card.addEventListener('mouseenter', playHoverSound);
        const btn = card.querySelector('.download-btn');
        if(btn) btn.addEventListener('click', playClickSound);

        grid.appendChild(card);
    });
}

// Inicia las tarjetas
render(addons);


// ==========================================
// 5. BUSCADOR EN TIEMPO REAL
// ==========================================
const searchInput = document.getElementById('addonSearch');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredAddons = addons.filter(addon => 
            addon.name.toLowerCase().includes(searchTerm)
        );
        render(filteredAddons);
    });
}


// ==========================================
// 6. MENÚ LATERAL (SIDEBAR Y OVERLAY)
// ==========================================
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const openMenuBtn = document.getElementById('openMenu');
const btnTutoriales = document.getElementById('btnTutoriales');

if (openMenuBtn) {
    openMenuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });
}

function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

if (overlay) overlay.addEventListener('click', closeSidebar);
if (btnTutoriales) btnTutoriales.addEventListener('click', closeSidebar);

