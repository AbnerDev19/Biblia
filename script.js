/* --- DADOS FAKES (MOCKUP) --- */
const mockData = {
    books: [
        { id: 'gn', name: 'Gênesis', abbrev: 'Gn', category: 'ot', progress: 10 },
        { id: 'ex', name: 'Êxodo', abbrev: 'Êx', category: 'ot', progress: 0 },
        { id: 'sl', name: 'Salmos', abbrev: 'Sl', category: 'ot', progress: 45 },
        { id: 'mt', name: 'Mateus', abbrev: 'Mt', category: 'nt', progress: 5 },
        { id: 'rm', name: 'Romanos', abbrev: 'Rm', category: 'nt', progress: 0 },
    ],
    friends: [
        { id: 1, name: 'Ana Clara', streak: 5, fireColor: 'orange', avatar: 'A', status: 'Lendo Salmos' },
        { id: 2, name: 'Pedro H.', streak: 42, fireColor: 'green', avatar: 'P', status: 'Firme na rocha' },
        { id: 3, name: 'Lucas', streak: 1, fireColor: 'red', avatar: 'L', status: 'Recomeçando' }
    ],
    chatHistory: [
        { type: 'them', text: 'Bom dia! Leu hoje?' },
        { type: 'me', text: 'Sim! Gênesis 1 é tremendo.' },
        { type: 'spiritual', text: 'Versículo Compartilhado: "Haja luz, e houve luz."', sender: 'me' }
    ]
};

/* --- APLICAÇÃO PRINCIPAL --- */
const app = {
    state: {
        currentTab: 'home',
        selectedVerse: null,
    },

    init: () => {
        // Inicializa listeners e renderiza listas
        app.render.homeLists();
        app.render.bibleGrid();
        app.render.friendsList();
        app.render.chat();
    },

    auth: {
        login: () => {
            // Simula login e vai para Home
            document.getElementById('view-login').classList.remove('active');
            app.nav.goTo('home');
        }
    },

    nav: {
        goTo: (tabId) => {
            // 1. Atualiza Nav Bar
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            // Lógica simples para achar o índice correto (apenas visual)
            const map = { 'home': 0, 'bible': 1, 'friends': 2, 'profile': 3 };
            if (map[tabId] !== undefined) {
                document.querySelectorAll('.nav-item')[map[tabId]].classList.add('active');
                document.getElementById('main-nav').classList.remove('hidden');
            }

            // 2. Troca Telas
            document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
            document.getElementById(`view-${tabId}`).classList.add('active');
            
            // Caso especial para Chat (overlay)
            if (tabId === 'chat') {
                document.getElementById('view-chat').classList.add('active');
                document.getElementById('main-nav').classList.add('hidden'); // Esconde nav no chat
            }
        },
        goBack: () => {
            document.getElementById('view-chat').classList.remove('active');
            document.getElementById('main-nav').classList.remove('hidden');
            app.nav.goTo('friends');
        }
    },

    reader: {
        open: (bookId, chapter) => {
            document.getElementById('reader-overlay').classList.add('open');
            document.getElementById('reader-content').innerHTML = app.reader.generateText();
        },
        close: () => {
            document.getElementById('reader-overlay').classList.remove('open');
            app.reader.deselect();
        },
        generateText: () => {
            // Gera texto fake de lorem ipsum com estrutura de versículo
            let html = '';
            for(let i=1; i<=15; i++) {
                html += `<span class="verse" id="v${i}" onclick="app.reader.select(this)">
                    <sup>${i}</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deus lux est. 
                </span> `;
            }
            return html;
        },
        select: (el) => {
            app.reader.deselect();
            el.classList.add('selected');
            app.state.selectedVerse = el;
            document.getElementById('selection-menu').classList.remove('hidden');
        },
        deselect: () => {
            if(app.state.selectedVerse) app.state.selectedVerse.classList.remove('selected');
            document.getElementById('selection-menu').classList.add('hidden');
            app.state.selectedVerse = null;
        },
        highlight: (color) => {
            if(app.state.selectedVerse) {
                app.state.selectedVerse.classList.add(`highlight-${color}`);
                app.reader.deselect();
            }
        },
        finish: () => {
            alert("Capítulo Concluído! O Foguinho cresceu 🔥");
            app.reader.close();
        }
    },

    render: {
        homeLists: () => {
            const container = document.getElementById('home-continue-list');
            mockData.books.slice(0,3).forEach(book => {
                container.innerHTML += `
                    <div class="book-card" onclick="app.reader.open('${book.id}', 1)">
                        <div class="book-cover">${book.abbrev}</div>
                        <div class="progress-bar"><div class="progress-fill" style="width:${book.progress}%"></div></div>
                        <small>${book.name}</small>
                    </div>`;
            });
        },
        bibleGrid: () => {
            const container = document.getElementById('bible-grid-list');
            // Estilo simples de lista para bíblia
            mockData.books.forEach(book => {
                const item = document.createElement('div');
                item.style.padding = '15px';
                item.style.borderBottom = '1px solid #333';
                item.style.display = 'flex';
                item.style.justifyContent = 'space-between';
                item.innerHTML = `<b>${book.name}</b> <span style="color:#666">Ver</span>`;
                item.onclick = () => app.reader.open(book.id, 1);
                container.appendChild(item);
            });
        },
        friendsList: () => {
            const container = document.getElementById('friends-list-container');
            mockData.friends.forEach(friend => {
                // Define cor do icone baseado no mock
                const colorMap = { 'orange': '#FF9F43', 'green': '#1DD1A1', 'red': '#FF6B6B' };
                const color = colorMap[friend.fireColor];
                
                container.innerHTML += `
                    <div class="friend-card" style="display:flex; align-items:center; background:#1e1e1e; padding:15px; border-radius:12px; margin-bottom:10px; cursor:pointer" onclick="app.nav.goTo('chat')">
                        <div style="width:40px; height:40px; background:#333; border-radius:50%; display:flex; justify-content:center; align-items:center; font-weight:bold; margin-right:15px;">${friend.avatar}</div>
                        <div style="flex:1">
                            <h4 style="margin:0">${friend.name}</h4>
                            <small style="color:#888">${friend.status}</small>
                        </div>
                        <div style="text-align:center">
                            <span class="material-icons-round" style="color:${color}">local_fire_department</span>
                            <div style="font-size:10px">${friend.streak} dias</div>
                        </div>
                    </div>`;
            });
        },
        chat: () => {
            const container = document.getElementById('chat-messages');
            mockData.chatHistory.forEach(msg => {
                container.innerHTML += `<div class="msg ${msg.type}">${msg.text}</div>`;
            });
        }
    }
};

// Start
document.addEventListener('DOMContentLoaded', app.init);