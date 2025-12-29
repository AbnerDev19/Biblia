/* --- DADOS FAKE (MOCKUP) --- */
const db = {
    books: [
        { id: 'gn', name: 'Gênesis', cat: 'ot', img: 'https://images.unsplash.com/photo-1518331483807-f6adc0f062a9?w=300&q=80', progress: 10 },
        { id: 'ex', name: 'Êxodo', cat: 'ot', img: 'https://images.unsplash.com/photo-1501183007906-957451b72039?w=300&q=80', progress: 0 },
        { id: 'mt', name: 'Mateus', cat: 'nt', img: 'https://images.unsplash.com/photo-1628510118714-d2124aea4b8a?w=300&q=80', progress: 45 },
        { id: 'jo', name: 'João', cat: 'nt', img: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=300&q=80', progress: 0 },
        { id: 'ap', name: 'Apocalipse', cat: 'nt', img: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=300&q=80', progress: 0 },
        { id: 'sl', name: 'Salmos', cat: 'ot', img: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=300&q=80', progress: 80 },
        { id: 'pv', name: 'Provérbios', cat: 'ot', img: null, progress: 0 },
        { id: 'rm', name: 'Romanos', cat: 'nt', img: null, progress: 0 }
    ],
    friends: [
        { id: 1, name: 'Ana Clara', streak: 15, status: 'Lendo Gênesis' },
        { id: 2, name: 'Pedro Henrique', streak: 42, status: 'Firme na rocha' },
        { id: 3, name: 'Lucas Tech', streak: 3, status: 'Voltando...' }
    ],
    chat: [
        { type: 'them', text: 'E aí, conseguiu ler hoje?' },
        { type: 'me', text: 'Sim! Acabei de ler Gênesis 1.' },
        { type: 'them', text: 'Boa! O versículo 3 é muito forte.' }
    ]
};

const app = {
    state: {
        userStreak: 12
    },

    init: () => {
        // Render Initial Lists
        app.render.posters('home-continue-list', db.books.filter(b => b.progress > 0));
        app.render.posters('home-nt-list', db.books.filter(b => b.cat === 'nt'));
        app.render.posters('home-ot-list', db.books.filter(b => b.cat === 'ot'));
        
        app.render.posters('search-grid', db.books);
        app.render.friends();
        app.render.chat();
    },

    auth: {
        login: () => {
            // Fade out login
            document.getElementById('view-login').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('view-login').classList.remove('active');
                app.nav.goTo('home');
            }, 300);
        },
        logout: () => {
            window.location.reload();
        }
    },

    nav: {
        goTo: (tabId) => {
            // Hide Overlay Screens
            document.querySelectorAll('.overlay-screen').forEach(el => el.classList.remove('active'));
            
            // Switch Main Screens
            document.querySelectorAll('.screen').forEach(el => {
                if(!el.classList.contains('overlay-screen')) el.classList.remove('active');
            });
            document.getElementById(`view-${tabId}`).classList.add('active');

            // Update Nav Icons
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            const map = {'home':0, 'search':1, 'community':2, 'profile':3};
            if(map[tabId] !== undefined) {
                document.querySelectorAll('.nav-item')[map[tabId]].classList.add('active');
            }

            // Show/Hide Main Header
            const header = document.getElementById('main-header');
            if(tabId === 'profile' || tabId === 'login') header.classList.add('hidden');
            else header.classList.remove('hidden');
        },
        openChat: () => {
            document.getElementById('view-chat').classList.add('active');
        },
        backToCommunity: () => {
            document.getElementById('view-chat').classList.remove('active');
        }
    },

    reader: {
        open: (bookId, chapter) => {
            const book = db.books.find(b => b.id === bookId) || {name: 'Leitura'};
            document.getElementById('reader-header-title').innerText = `${book.name} ${chapter}`;
            
            // Generate Text
            let html = '';
            for(let i=1; i<=15; i++) {
                html += `<p><sup style="color:#FFB300; margin-right:5px">${i}</sup> No princípio criou Deus o céu e a terra. E a terra era sem forma e vazia.</p>`;
            }
            document.getElementById('reader-content').innerHTML = html;
            
            document.getElementById('reader-overlay').classList.add('active');
        },
        close: () => {
            document.getElementById('reader-overlay').classList.remove('active');
        },
        finish: () => {
            app.state.userStreak++;
            document.getElementById('header-streak-count').innerText = app.state.userStreak;
            alert('Leitura Concluída! Foguinho aumentou 🔥');
            app.reader.close();
        }
    },

    chat: {
        send: () => {
            const input = document.getElementById('chat-input');
            const text = input.value;
            if(!text) return;

            const container = document.getElementById('chat-messages');
            container.innerHTML += `<div class="msg me">${text}</div>`;
            input.value = '';
            container.scrollTop = container.scrollHeight;
            
            // Auto reply
            setTimeout(() => {
                container.innerHTML += `<div class="msg them">Amém! 🙏</div>`;
                container.scrollTop = container.scrollHeight;
            }, 1000);
        }
    },

    render: {
        posters: (containerId, list) => {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            list.forEach(book => {
                const imgStyle = book.img ? `background: url('${book.img}') center/cover` : `background: #333`;
                const progress = book.progress > 0 ? 
                    `<div class="poster-progress"><div class="poster-fill" style="width:${book.progress}%"></div></div>` : '';
                
                container.innerHTML += `
                    <div class="poster-card" onclick="app.reader.open('${book.id}', 1)">
                        <div class="poster-img" style="${imgStyle}">
                            ${!book.img ? book.name : ''}
                            ${progress}
                        </div>
                        <div style="font-size:12px; color:#ccc; margin-top:4px;">${book.name}</div>
                    </div>`;
            });
        },
        filterBooks: (term) => {
            const filtered = db.books.filter(b => b.name.toLowerCase().includes(term.toLowerCase()));
            app.render.posters('search-grid', filtered);
        },
        friends: () => {
            const container = document.getElementById('community-list');
            db.friends.forEach((f, index) => {
                container.innerHTML += `
                    <div class="friend-row" onclick="app.nav.openChat()">
                        <div class="rank-num">#${index+1}</div>
                        <div class="avatar-small">${f.name[0]}</div>
                        <div class="friend-info">
                            <h4>${f.name}</h4>
                            <p>${f.status}</p>
                        </div>
                        <div class="friend-streak">
                            <span class="material-icons-round" style="color:#FFB300; font-size:18px">local_fire_department</span>
                            <span style="font-size:10px; font-weight:bold">${f.streak}</span>
                        </div>
                    </div>`;
            });
        },
        chat: () => {
            const container = document.getElementById('chat-messages');
            db.chat.forEach(msg => {
                container.innerHTML += `<div class="msg ${msg.type}">${msg.text}</div>`;
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);