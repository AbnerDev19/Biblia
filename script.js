/* --- BANCO DE DADOS (LIVROS) --- */
const fullBibleData = [
    { id: 'gn', name: 'Gênesis', cat: 'pentateuco', progress: 10 },
    { id: 'ex', name: 'Êxodo', cat: 'pentateuco', progress: 0 },
    { id: 'lv', name: 'Levítico', cat: 'pentateuco', progress: 0 },
    { id: 'nm', name: 'Números', cat: 'pentateuco', progress: 0 },
    { id: 'dt', name: 'Deuteronômio', cat: 'pentateuco', progress: 0 },
    { id: 'js', name: 'Josué', cat: 'historicos', progress: 0 },
    { id: 'jz', name: 'Juízes', cat: 'historicos', progress: 0 },
    { id: 'rt', name: 'Rute', cat: 'historicos', progress: 0 },
    { id: '1sm', name: '1 Samuel', cat: 'historicos', progress: 0 },
    { id: '2sm', name: '2 Samuel', cat: 'historicos', progress: 0 },
    { id: '1rs', name: '1 Reis', cat: 'historicos', progress: 0 },
    { id: '2rs', name: '2 Reis', cat: 'historicos', progress: 0 },
    { id: '1cr', name: '1 Crônicas', cat: 'historicos', progress: 0 },
    { id: '2cr', name: '2 Crônicas', cat: 'historicos', progress: 0 },
    { id: 'ed', name: 'Esdras', cat: 'historicos', progress: 0 },
    { id: 'ne', name: 'Neemias', cat: 'historicos', progress: 0 },
    { id: 'et', name: 'Ester', cat: 'historicos', progress: 0 },
    { id: 'job', name: 'Jó', cat: 'poeticos', progress: 0 },
    { id: 'sl', name: 'Salmos', cat: 'poeticos', progress: 45 },
    { id: 'pv', name: 'Provérbios', cat: 'poeticos', progress: 5 },
    { id: 'ec', name: 'Eclesiastes', cat: 'poeticos', progress: 0 },
    { id: 'ct', name: 'Cantares', cat: 'poeticos', progress: 0 },
    { id: 'is', name: 'Isaías', cat: 'profetas', progress: 0 },
    { id: 'jr', name: 'Jeremias', cat: 'profetas', progress: 0 },
    { id: 'lm', name: 'Lamentações', cat: 'profetas', progress: 0 },
    { id: 'ez', name: 'Ezequiel', cat: 'profetas', progress: 0 },
    { id: 'dn', name: 'Daniel', cat: 'profetas', progress: 0 },
    { id: 'os', name: 'Oseias', cat: 'profetas', progress: 0 },
    { id: 'jl', name: 'Joel', cat: 'profetas', progress: 0 },
    { id: 'am', name: 'Amós', cat: 'profetas', progress: 0 },
    { id: 'ob', name: 'Obadias', cat: 'profetas', progress: 0 },
    { id: 'jn', name: 'Jonas', cat: 'profetas', progress: 0 },
    { id: 'mq', name: 'Miqueias', cat: 'profetas', progress: 0 },
    { id: 'na', name: 'Naum', cat: 'profetas', progress: 0 },
    { id: 'hc', name: 'Habacuque', cat: 'profetas', progress: 0 },
    { id: 'sf', name: 'Sofonias', cat: 'profetas', progress: 0 },
    { id: 'ag', name: 'Ageu', cat: 'profetas', progress: 0 },
    { id: 'zc', name: 'Zacarias', cat: 'profetas', progress: 0 },
    { id: 'ml', name: 'Malaquias', cat: 'profetas', progress: 0 },
    { id: 'mt', name: 'Mateus', cat: 'evangelhos', progress: 15 },
    { id: 'mc', name: 'Marcos', cat: 'evangelhos', progress: 0 },
    { id: 'lc', name: 'Lucas', cat: 'evangelhos', progress: 0 },
    { id: 'joao', name: 'João', cat: 'evangelhos', progress: 0 },
    { id: 'at', name: 'Atos', cat: 'evangelhos', progress: 0 },
    { id: 'rm', name: 'Romanos', cat: 'cartas', progress: 0 },
    { id: '1co', name: '1 Coríntios', cat: 'cartas', progress: 0 },
    { id: '2co', name: '2 Coríntios', cat: 'cartas', progress: 0 },
    { id: 'gl', name: 'Gálatas', cat: 'cartas', progress: 0 },
    { id: 'ef', name: 'Efésios', cat: 'cartas', progress: 0 },
    { id: 'fp', name: 'Filipenses', cat: 'cartas', progress: 0 },
    { id: 'cl', name: 'Colossenses', cat: 'cartas', progress: 0 },
    { id: '1ts', name: '1 Tessalonicenses', cat: 'cartas', progress: 0 },
    { id: '2ts', name: '2 Tessalonicenses', cat: 'cartas', progress: 0 },
    { id: '1tm', name: '1 Timóteo', cat: 'cartas', progress: 0 },
    { id: '2tm', name: '2 Timóteo', cat: 'cartas', progress: 0 },
    { id: 'tt', name: 'Tito', cat: 'cartas', progress: 0 },
    { id: 'fm', name: 'Filemom', cat: 'cartas', progress: 0 },
    { id: 'hb', name: 'Hebreus', cat: 'cartas', progress: 0 },
    { id: 'tg', name: 'Tiago', cat: 'cartas', progress: 0 },
    { id: '1pe', name: '1 Pedro', cat: 'cartas', progress: 0 },
    { id: '2pe', name: '2 Pedro', cat: 'cartas', progress: 0 },
    { id: '1jo', name: '1 João', cat: 'cartas', progress: 0 },
    { id: '2jo', name: '2 João', cat: 'cartas', progress: 0 },
    { id: '3jo', name: '3 João', cat: 'cartas', progress: 0 },
    { id: 'jd', name: 'Judas', cat: 'cartas', progress: 0 },
    { id: 'ap', name: 'Apocalipse', cat: 'cartas', progress: 0 }
];

/* --- DADOS DA COMUNIDADE --- */
const friendsData = [
    { id: 1, name: 'Hadassa', streak: 52, status: 'fire', msg: 'incentivou-te de volta · 1h' },
    { id: 2, name: 'gi', streak: 9, status: 'fire', msg: 'incentivou-te de volta · 1h' },
    { id: 3, name: 'daisilva_', streak: 6, status: 'frozen', msg: 'Enviado há 1h' },
    { id: 4, name: 'geovanna', streak: 6, status: 'fire', msg: 'Enviado há 1h' },
    { id: 5, name: 'Pedro H.', streak: 55, status: 'god', msg: 'Lendo Salmos' }
];

/* --- DADOS DO PERFIL (MOCK) --- */
const profileActivity = [{
        id: 1,
        type: 'highlight',
        book: 'Gênesis',
        ref: 'Gênesis 20:7 NTLH',
        text: 'Agora devolva a mulher ao marido dela. Ele é profeta e orará para que você não morra.',
        time: '10sem'
    },
    {
        id: 2,
        type: 'highlight',
        book: 'Jeremias',
        ref: 'Jeremias 2:5 NTLH',
        text: 'Ele diz: “Que defeito os seus antepassados acharam em mim para que se afastassem de mim?”',
        time: '10sem'
    }
];

const app = {
    state: {
        userStreak: 12,
        myList: [],
        currentSearchFilter: 'all'
    },

    init: () => {
        app.storage.load();
        app.render.home();
        app.search.init();
        app.render.community();
        app.render.profile();
        app.render.updateStreakUI();
        app.render.checkHeroButton();
    },

    storage: {
        load: () => {
            const savedStreak = localStorage.getItem('lumen_streak');
            if (savedStreak) app.state.userStreak = parseInt(savedStreak);
            const savedList = localStorage.getItem('lumen_mylist');
            if (savedList) app.state.myList = JSON.parse(savedList);
        },
        save: () => {
            localStorage.setItem('lumen_streak', app.state.userStreak);
            localStorage.setItem('lumen_mylist', JSON.stringify(app.state.myList));
        }
    },

    user: {
        toggleList: (bookId) => {
            const index = app.state.myList.indexOf(bookId);
            const btnIcon = document.getElementById('hero-list-icon');
            const btnText = document.getElementById('hero-list-text');
            if (index === -1) { app.state.myList.unshift(bookId); if (btnIcon) btnIcon.innerText = 'check'; if (btnText) btnText.innerText = 'Na Lista'; } else { app.state.myList.splice(index, 1); if (btnIcon) btnIcon.innerText = 'add'; if (btnText) btnText.innerText = 'Minha Lista'; }
            app.storage.save();
            app.render.home();
        }
    },

    search: {
        init: () => { const container = document.getElementById('search-grid'); if (container) app.render.posters(container, fullBibleData); },
        filter: (term) => {
            const defaultContent = document.getElementById('explore-default-content');
            const searchTitle = document.getElementById('search-title');
            if (term.length > 0) {
                defaultContent.style.display = 'none';
                searchTitle.innerText = 'Resultados da Busca';
                document.getElementById('search-clear').classList.remove('hidden');
            } else {
                defaultContent.style.display = 'block';
                searchTitle.innerText = 'Todos os Livros';
                document.getElementById('search-clear').classList.add('hidden');
            }
            let filtered = fullBibleData.filter(b => b.name.toLowerCase().includes(term.toLowerCase()));
            app.search.renderResults(filtered);
        },
        clear: () => {
            document.getElementById('search-input').value = '';
            app.search.filter('');
        },
        renderResults: (list) => {
            const container = document.getElementById('search-grid');
            const emptyState = document.getElementById('search-empty');
            if (list.length === 0) {
                container.innerHTML = '';
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
                app.render.posters(container, list);
            }
        },
        filterTag: (category, element) => { /* Placeholder tag filter */ }
    },

    chat: {
        open: (friendId) => {
            const friend = friendsData.find(f => f.id == friendId) || { name: 'Amigo', streak: 0, status: 'fire' };
            document.getElementById('view-chat').classList.add('active');
            document.getElementById('main-header').classList.add('hidden');
            document.getElementById('main-nav').classList.add('hidden');
            document.getElementById('chat-username').innerText = friend.name;
            document.getElementById('chat-avatar').innerText = friend.name[0];
            document.getElementById('chat-header-streak').innerText = `${friend.streak} dias`;
            const fireIcon = document.getElementById('chat-header-fire');
            fireIcon.className = 'material-icons-round';
            if (friend.status === 'god') fireIcon.classList.add('fire-status', 'gold');
            else if (friend.status === 'frozen') fireIcon.classList.add('fire-status', 'blue');
            else fireIcon.classList.add('fire-status', 'fire');
        },
        toggleMenu: () => document.getElementById('chat-menu-dropdown').classList.toggle('hidden'),
        closeMenu: () => document.getElementById('chat-menu-dropdown').classList.add('hidden'),
        send: () => {
            const input = document.getElementById('chat-input');
            const text = input.value;
            if (!text) return;
            const container = document.getElementById('chat-messages');
            container.innerHTML += `<div class="msg me">${text}</div>`;
            input.value = '';
            container.scrollTop = container.scrollHeight;
            setTimeout(() => {
                container.innerHTML += `<div class="msg them">Amém! 🙏</div>`;
                container.scrollTop = container.scrollHeight;
            }, 1000);
        }
    },

    auth: { logout: () => window.location.reload() },

    render: {
        home: () => {
            const myListContainer = document.getElementById('wrapper-mylist');
            if (app.state.myList.length > 0) {
                myListContainer.classList.remove('hidden');
                const myBooks = app.state.myList.map(id => fullBibleData.find(b => b.id === id)).filter(Boolean);
                app.render.posters(document.getElementById('list-mylist'), myBooks);
            } else { myListContainer.classList.add('hidden'); }
            app.render.posters(document.getElementById('list-continue'), fullBibleData.filter(b => b.progress > 0));
            app.render.posters(document.getElementById('list-pentateuco'), fullBibleData.filter(b => b.cat === 'pentateuco'));
            app.render.posters(document.getElementById('list-historicos'), fullBibleData.filter(b => b.cat === 'historicos'));
            app.render.posters(document.getElementById('list-evangelhos'), fullBibleData.filter(b => b.cat === 'evangelhos'));
        },

        posters: (container, list) => {
            if (!container) return;
            container.innerHTML = '';
            list.forEach(book => {
                const progress = book.progress > 0 ? `<div class="poster-progress"><div class="poster-fill" style="width:${book.progress}%"></div></div>` : '';
                const hue = (book.id.charCodeAt(0) * 40 + book.id.length * 10) % 360;
                const bgStyle = `background: linear-gradient(135deg, hsl(${hue}, 60%, 40%) 0%, hsl(${hue}, 70%, 20%) 100%);`;
                container.innerHTML += `<div class="poster-card" onclick="app.reader.open('${book.id}', 1)"><div class="poster-img" style="${bgStyle}"><div class="poster-text-center">${book.name}</div>${progress}</div></div>`;
            });
        },

        community: () => {
            const container = document.getElementById('community-list');
            if (!container) return;
            container.innerHTML = '';

            // NOVO RENDER DA COMUNIDADE (Estilo Chat/Lista)
            friendsData.forEach((friend) => {
                let fireColorClass = 'fire-red'; // Padrao (laranja/vermelho)
                if (friend.status === 'frozen') fireColorClass = 'fire-blue'; // Cinza/Azul se estiver frio

                // Icone da direita varia
                const iconRight = friend.status === 'frozen' ? 'photo_camera' : 'photo_camera';

                container.innerHTML += `
                    <div class="friend-row" onclick="app.chat.open('${friend.id}')">
                        <div class="friend-avatar-container">
                            <div class="avatar-chat-list">${friend.name[0]}</div>
                        </div>
                        <div class="friend-info-col">
                            <div class="friend-name-line">
                                <span class="friend-name">${friend.name}</span>
                                <div class="friend-streak-badge ${fireColorClass}">
                                    <span class="material-icons-round" style="font-size:14px;">local_fire_department</span>
                                    <span class="friend-streak-val">${friend.streak}</span>
                                </div>
                            </div>
                            <div class="friend-msg-preview">${friend.msg}</div>
                        </div>
                        <div class="friend-action-right">
                            <span class="material-icons-round" style="font-size:22px; border:2px solid #666; border-radius:8px; padding:2px;">${iconRight}</span>
                        </div>
                    </div>`;
            });
        },

        profile: () => {
            // Atualizar o foguinho do perfil com o dado real
            const streakDisplay = document.getElementById('profile-streak-display');
            if (streakDisplay) streakDisplay.innerText = app.state.userStreak;

            const container = document.getElementById('profile-feed');
            if (!container) return;
            container.innerHTML = '';
            profileActivity.forEach(item => {
                container.innerHTML += `
                    <div class="feed-card">
                        <div class="feed-header">
                            <div class="feed-user-meta">
                                <div class="feed-avatar">A</div>
                                <div class="feed-text"><span>Você destacou <b>${item.ref}</b></span><span class="feed-time">${item.time}</span></div>
                            </div>
                            <div class="feed-dot"></div>
                        </div>
                        <div class="feed-content"><p class="feed-quote">${item.text}</p><span class="feed-ref">${item.ref}</span></div>
                        <div class="feed-actions">
                            <div class="feed-action-icons"><span class="material-icons-round feed-icon">favorite_border</span><span class="material-icons-round feed-icon">chat_bubble_outline</span></div>
                            <span class="material-icons-round feed-icon">more_horiz</span>
                        </div>
                    </div>`;
            });
        },

        checkHeroButton: () => { /* Hero logic */ },
        updateStreakUI: () => {
            document.getElementById('header-streak-count').innerText = app.state.userStreak;
            // Atualiza tambem o do perfil caso esteja na tela
            const pStreak = document.getElementById('profile-streak-display');
            if (pStreak) pStreak.innerText = app.state.userStreak;
        }
    },

    nav: {
        goTo: (tabId) => {
            document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
            document.getElementById(`view-${tabId}`).classList.add('active');
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            const map = { 'home': 0, 'search': 1, 'community': 2, 'profile': 3 };
            if (map[tabId] !== undefined) document.querySelectorAll('.nav-item')[map[tabId]].classList.add('active');

            const header = document.getElementById('main-header');
            if (tabId === 'profile' || tabId === 'login') header.classList.add('hidden');
            else header.classList.remove('hidden');
        },
        backToCommunity: () => {
            document.getElementById('view-chat').classList.remove('active');
            document.getElementById('main-header').classList.remove('hidden');
            document.getElementById('main-nav').classList.remove('hidden');
        }
    },

    reader: {
        open: (bookId, chapter) => {
            const book = fullBibleData.find(b => b.id === bookId) || { name: 'Leitura' };

            // Renderizacao limpa e tipografica
            let html = `
                <div class="reader-book-title">${book.name}</div>
                <div class="reader-big-chapter">${chapter}</div>
            `;

            // Texto ficticio estilo Biblia
            html += `<p class="reader-verse-p"><sup class="verse-num">1</sup> Permaneça o amor fraternal.</p>`;
            html += `<p class="reader-verse-p"><sup class="verse-num">2</sup> Não vos esqueçais da hospitalidade, porque, por ela, alguns, não o sabendo, hospedaram anjos.</p>`;
            html += `<p class="reader-verse-p"><sup class="verse-num">3</sup> Lembrai-vos dos presos, como se estivésseis presos com eles, e dos maltratados, como sendo-o vós mesmos também no corpo.</p>`;

            // Loop para encher linguiça visualmente
            for (let i = 4; i <= 8; i++) {
                html += `<p class="reader-verse-p"><sup class="verse-num">${i}</sup> Venerado seja entre todos o matrimônio e o leito sem mácula; porém, aos que se dão à prostituição, e aos adúlteros, Deus os julgará.</p>`;
            }

            document.getElementById('reader-content-wrapper').innerHTML = html;
            document.getElementById('reader-overlay').classList.add('active');
        },
        close: () => document.getElementById('reader-overlay').classList.remove('active'),
        finish: () => {
            app.state.userStreak++;
            app.storage.save();
            app.render.updateStreakUI();
            alert(`Leitura completa! 🔥 ${app.state.userStreak} dias`);
            app.reader.close();
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);