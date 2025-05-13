document.addEventListener('contextmenu', function(e){
    e.preventDefault();
});

function abrirLinguagem(linguagem){
    alert(`Abrindo detalhes de ${linguagem.toUpperCase()}...`)
}
