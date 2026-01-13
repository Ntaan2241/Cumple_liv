document.addEventListener('DOMContentLoaded', () => {
    
    // Referencias
    const coverScreen = document.getElementById('cover-screen');
    const btnAbrir = document.getElementById('btnAbrir');
    const audioPlayer = document.getElementById('audioPlayer');
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabs = document.querySelectorAll('.tab');

    // 1. ABRIR REGALO
    btnAbrir.addEventListener('click', () => {
        coverScreen.style.transform = 'translateY(-100%)';
        
        // Intentar reproducir música
        audioPlayer.volume = 0.5;
        audioPlayer.play().catch(e => console.log("Audio:", e));

        lanzarConfeti();
    });

    // 2. NAVEGACIÓN TABS
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Limpiar activos
            navBtns.forEach(b => b.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));

            // Activar nuevo
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 3. EFECTO CONFETI
    function lanzarConfeti() {
        const colores = ['#ff8fab', '#c5a3ff', '#ffd700', '#81d4fa'];
        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
            confetti.style.top = -10 + 'px';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    }
});