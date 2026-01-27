// Funzione per aprire e chiudere le sezioni
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const allContents = document.querySelectorAll('.acc-content');
    
    // Chiude gli altri se vuoi un effetto pulito (opzionale)
    // allContents.forEach(c => { if(c.id !== id) c.classList.remove('active'); });

    content.classList.toggle('active');
}

function gestisciInvio() {
    const areaTesto = document.getElementById('userInput');
    const testo = areaTesto.value;
    if(testo.trim() === "") return;

    document.getElementById('status').textContent = "Elaborazione in corso...";

    // Logica temporanea (Prima dell'AI)
    let categoria = "extra";
    const t = testo.toLowerCase();

    if(t.includes("tutorial") || t.includes("come fare") || t.includes("istruzioni")) {
        categoria = "tutorial";
    } else if(t.includes("musica") || t.includes("canzone") || t.includes("band")) {
        categoria = "musica";
    } else if(t.includes("libro") || t.includes("leggere") || t.includes("scrittore")) {
        categoria = "libri";
    } else if(t.includes("arte") || t.includes("museo") || t.includes("quadro") || t.includes("mostra")) {
        categoria = "arte";
    }

    // Simuliamo un piccolo ritardo "di pensiero"
    setTimeout(() => {
        aggiungiNotaAVideo(testo, categoria);
        areaTesto.value = "";
        document.getElementById('status').textContent = "Nota salvata!";
        setTimeout(() => document.getElementById('status').textContent = "Pronto all'uso", 2000);
    }, 600);
}

function aggiungiNotaAVideo(testo, cat) {
    const lista = document.getElementById('list-' + cat);
    const div = document.createElement('div');
    div.className = 'item-nota';
    
    const data = new Date().toLocaleString('it-IT', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
    
    div.innerHTML = `
        <div>${testo}</div>
        <span class="item-date">${data}</span>
    `;
    
    lista.prepend(div); // Mette l'ultima nota in alto
    
    // Apriamo automaticamente la sezione dove è finita la nota per dare feedback
    lista.classList.add('active');
}
