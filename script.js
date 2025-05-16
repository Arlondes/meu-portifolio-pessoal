document.addEventListener('contextmenu', function(e){
    e.preventDefault();
});

function abrirLinguagem(linguagem){
    alert(`Abrindo detalhes de ${linguagem.toUpperCase()}...`)
}

function abrirLinguagem(linguagem) {
            // Esconde todos os certificados
            document.querySelectorAll('.certificado').forEach(div => div.style.display = 'none');

            // Mostra o certificado correspondente
            const cert = document.getElementById('cert-' + linguagem);
            if (cert) {
                cert.style.display = 'block';
                cert.scrollIntoView({ behavior: "smooth" });
            }
        }
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');

        // Rolagem com botões
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -320, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 320, behavior: 'smooth' });
        });

        // Clicar na imagem abre popup
        const images = track.querySelectorAll('img');
        images.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                const popup = window.open('', '_blank');
                popup.document.write(`
                    <html>
                    <head><title>Certificado</title></head>
                    <body style="margin:0;">
                        <img src="${img.src}" style="width:100%;height:auto;" />
                    </body>
                    </html>
                `);
            });
        });

        // ✅ INSERIR BLOCO DOS INDICADORES AQUI:
        const indicators = carousel.querySelector('.carousel-indicators');
        if (indicators && images.length > 0) {
            indicators.innerHTML = ''; // limpar qualquer indicador antigo

            images.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');

                dot.addEventListener('click', () => {
                    const imageWidth = images[0].offsetWidth + 20;
                    track.scrollTo({ left: index * imageWidth, behavior: 'smooth' });
                });

                indicators.appendChild(dot);
            });

            // Atualizar dot ativo ao rolar
            track.addEventListener('scroll', () => {
                const scrollLeft = track.scrollLeft;
                const itemWidth = images[0].offsetWidth + 20;
                const currentIndex = Math.round(scrollLeft / itemWidth);

                indicators.querySelectorAll('.dot').forEach((d, i) => {
                    d.classList.toggle('active', i === currentIndex);
                });
            });
        }
        // ✅ FIM DO BLOCO DOS INDICADORES
    });
});

function abrirLinguagem(linguagem) {
    // Esconde todos os certificados
    const certificados = document.querySelectorAll('.certificado');
    certificados.forEach(c => c.style.display = 'none');

    // Mostra apenas o selecionado
    const cert = document.getElementById('cert-' + linguagem);
    if (cert) {
        cert.style.display = 'block';
        cert.scrollIntoView({ behavior: 'smooth' });
    }
}


        
