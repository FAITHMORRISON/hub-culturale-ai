function gestisciInvio() {
    const testo = document.getElementById('userInput').value;
    if(testo.trim() === "") return;

    // Per ora facciamo una prova semplice: se scrivi "musica" va in musica, altrimenti in extra
    let categoria = "extra";
    if(testo.toLowerCase().includes("musica")) categoria = "musica";
    if(testo.toLowerCase().includes("libro")) categoria = "libri";

    aggiungiAFVideo(testo, categoria);
    document.getElementById('userInput').value = ""; // Pulisce la casella
}

function aggiungiAFVideo(testo, cat) {
    const lista = document.getElementById('list-' + cat);
    const div = document.createElement('div');
    div.className = 'item-nota';
    div.textContent = testo;
    lista.appendChild(div);
}
