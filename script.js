const mockData = {
    books: [
        { id: 'gn', name: 'Gênesis', img: 'https://images.unsplash.com/photo-1518331483807-f6adc0f062a9?w=300&q=80', progress: 40 },
        { id: 'ex', name: 'Êxodo', img: 'https://images.unsplash.com/photo-1555677284-6a6f971635e0?w=300&q=80', progress: 10 },
        { id: 'sl', name: 'Salmos', img: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=300&q=80', progress: 85 },
        { id: 'mt', name: 'Mateus', img: 'https://images.unsplash.com/photo-1628510118714-d2124aea4b8a?w=300&q=80', progress: 0 },
        { id: 'ap', name: 'Apocalipse', img: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=300&q=80', progress: 0 },
        { id: 'jo', name: 'João', img: 'https://images.unsplash.com/photo-1529335764857-3f1164d1ea24?w=300&q=80', progress: 0 },
    ]
};

const app = {
    init: () => {
        app.render.posters('home-continue-list', mockData.books.slice(0,3));
        app.render.posters('home-popular-list', mockData.books.reverse());
        app.render.posters('home-nt-list', mockData.books.slice(3,6));
    },

    nav: {
        goTo: (tabId) => {
            document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
            document.getElementById(`view-${tabId}`).classList.add('active');
            
            // Atualiza Nav Icons
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            // Simples mapeamento para demo
            const map = {'home':0, 'search':1, 'profile':3};
            if(map[tabId] !== undefined) document.querySelectorAll('.nav-item')[map[tabId]].classList.add('active');
        }
    },

    reader: {
        open: (bookId, ch) => {
            const overlay = document.getElementById('reader-overlay');
            overlay.classList.add('active');
            overlay.style.pointerEvents = 'auto'; // Força interação
            
            // Gera Texto Lorem Ipsum Bíblico
            let text = `<h2>Capítulo 1</h2><br>`;
            for(let i=1; i<=20; i++) {
                text += `<sup>${i}</sup> No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. `;
            }
            document.getElementById('reader-content').innerHTML = text;
        },
        close: () => {
            const overlay = document.getElementById('reader-overlay');
            overlay.classList.remove('active');
            overlay.style.pointerEvents = 'none';
        }
    },

    render: {
        posters: (containerId, list) => {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            list.forEach(book => {
                // Se não tiver imagem, usa cor sólida
                const imgStyle = book.img ? `background: url('${book.img}') center/cover` : `background: #333`;
                
                // Barra de progresso estilo Netflix (vermelha na base)
                const progressBar = book.progress > 0 
                    ? `<div class="poster-progress"><div class="poster-fill" style="width:${book.progress}%"></div></div>` 
                    : '';

                container.innerHTML += `
                    <div class="poster-card" onclick="app.reader.open('${book.id}', 1)">
                        <div class="poster-img" style="${imgStyle}">
                            ${!book.img ? book.name : ''}
                            ${progressBar}
                        </div>
                        <div style="font-size:12px; color:#aaa; margin-top:4px;">${book.name}</div>
                    </div>
                `;
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);