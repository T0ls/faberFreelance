window.PROJECTS = [
    {
        slug: 't1',
        title: 'Lorem ipsum 1',
        year: '2024',
        categories: ['commercial'],
        thumb: 'https://picsum.photos/900/600?random=21',
        images: [
            'https://picsum.photos/1200/800?random=101',
            'https://picsum.photos/1200/800?random=102'
        ],
        video: [
            'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
        tags: ['ritmo','montaggio','dramma'],
        awards: {
            wins: [
                'Miglior montaggio — Festival X 2025',
                'Miglior regia — Festival Z 2024',
            ],
            nominations: [
                'Miglior cortometraggio — Festival Y 2025',
                'Miglior regia — Festival X 2024',
            ]
        },
        cast: [
            { name: 'Anna Rossi', role: 'Protagonista', photo: 'https://picsum.photos/1200/800?random=101'},
            { name: 'Luca Bianchi', role: 'Coprotagonista', photo: 'https://picsum.photos/1200/800?random=102'},
            { name: 'Filippo Verdi', role: 'Comparsa', photo: 'https://picsum.photos/1200/800?random=103'},
            { name: 'Alessia Grigi', role: 'Comparsa', photo: 'https://picsum.photos/1200/800?random=104'},
            { name: 'Federisco Bianchi', role: 'Comparsa', photo: 'https://picsum.photos/1200/800?random=105'},
        ],
        crew: [
            { name: 'Marco Verdi', role: 'Direttore della fotografia', photo: 'https://picsum.photos/1200/800?random=106'},
            { name: 'Giulia Neri', role: 'Sound designer', photo: 'https://picsum.photos/1200/800?random=107'},
            { name: 'Luca Grigi', role: 'Gaffer'},
            { name: 'Fernando Vispo', role: 'Regista', photo: 'https://picsum.photos/1200/800?random=108'},
            { name: 'Maria Calpi', role: 'Assistente alla regia', photo: 'https://picsum.photos/1200/800?random=109'},
            { name: 'Susanna Forzi', role: 'Produttore', photo: 'https://picsum.photos/1200/800?random=110'},
            { name: 'Andrea Oriani', role: 'Assistente alla produzione', photo: 'https://picsum.photos/1200/800?random=111'},
        ],
    },
    {
        slug: 't2',
        title: 'Lorem ipsum 2',
        year: '2023',
        categories: ['music'],
        thumb: 'https://picsum.photos/900/600?random=22',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
        cast: [
            { name: 'Anna Rossi', role: 'Protagonista', photo: 'https://picsum.photos/1200/800?random=101'},
            { name: 'Luca Bianchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=102'},
            { name: 'Maria Franchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=103'},
        ],
    },
    {
    {
        slug: 't3',em ipsum 3',
        year: '2022',
        categories: ['short', 'experimental'],
        thumb: 'https://picsum.photos/900/600?random=23',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
    {
        slug: 't4',em ipsum 4',
        year: '2021',
        categories: ['commercial'],
        thumb: ['https://picsum.photos/900/600?random=24', 'https://picsum.photos/900/600?random=23', 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        id: '5',
    {
        slug: 't5',',
        categories: ['experimental'],
        thumb: 'https://picsum.photos/900/600?random=25',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
    },
];

window.PROJECTS_BY_SLUG = (function(arr){ const m = Object.create(null); (arr||[]).forEach(p=>{ if(p && p.slug) m[p.slug]=p; if(p && p.id) m[p.id]=p; }); return m; })(window.PROJECTS);
