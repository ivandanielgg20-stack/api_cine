document.addEventListener('DOMContentLoaded', () => {

   

    // 📋 copiar endpoint
    document.querySelectorAll('.endpoint').forEach(e => {
        e.addEventListener('click', () => {
            navigator.clipboard.writeText(e.innerText);
            alert("Copiado 🚀");
        });
    });

});

function goEndpoints() {
    const el = document.getElementById('endpoints');
    if (!el) return console.error('No existe endpoints');

    el.scrollIntoView({ behavior: 'smooth' });
}

function goDocs() {
    const el = document.getElementById('docs');
    if (!el) return console.error('No existe docs');

    el.scrollIntoView({ behavior: 'smooth' });
}

function goAbout() {
    const el = document.getElementById('about');
    if (!el) return console.error('No existe about');

    el.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(id) {
    const el = document.getElementById(id);

    if (!el) {
        console.error("No existe el id:", id);
        alert("Sección no encontrada");
        return;
    }

    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}