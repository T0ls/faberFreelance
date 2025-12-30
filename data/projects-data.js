window.PROJECTS = [
    {
        slug: 't1',
        title: 'Lorem ipsum 1',
        tags: ['commercial', 'ritmo','montaggio','dramma'],
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
        thumbnail: 'https://picsum.photos/900/600?random=21',

        media: {
            video: [
                'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
            ],
        },

        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.",
            year: '2024',
            Cliente: ['[Cliente 1](https://example.com)', '[Cliente 2](https://example.com)'],
            Budget: '€50.000',
        },

        cast: [
            { name: 'Anna Rossi', role: 'Protagonista', photo: 'https://picsum.photos/1200/800?random=101', link: 'https://test.com'},
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
    },
    {
        slug: 't2',
        title: 'Lorem ipsum 2',
        tags: ['music'],
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
        thumbnail: 'https://picsum.photos/900/600?random=22',

        media: {
            images: [
                'https://picsum.photos/1200/800?random=201'
            ],
        },

        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            year: '2023',
            Piattaforma: 'YouTube',
        },

        cast: [
            { name: 'Anna Rossi', role: 'Protagonista', photo: 'https://picsum.photos/1200/800?random=101'},
            { name: 'Luca Bianchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=102'},
        ],
    },
    {
        slug: 't3',
        title: 'Lorem ipsum 3',
        tags: ['short', 'experimental'],
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
        thumbnail: 'https://picsum.photos/900/600?random=23',

        media: {
            images: [
                'https://picsum.photos/1200/800?random=301',
                'https://picsum.photos/1200/800?random=302'
            ],
        },

        info: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    },
    {
        slug: 't4',
        title: 'Lorem ipsum 4',
        tags: ['commercial'],
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
        thumbnail: 'https://picsum.photos/900/600?random=24',

        media: {
            video: [
                'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
            ],
        },
    },
    {
        slug: 't5',
        title: 'Lorem ipsum 5',
        tags: ['experimental'],
        description_short: "Lorem ipsum dolor sit amet, consectetur.",
        thumbnail: 'https://picsum.photos/900/600?random=25',

        media: {
            images: [
                'https://picsum.photos/1200/800?random=501'
            ],
        },

        info: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            year: '2020',
            Tecnica: 'Motion Graphics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    },
];

window.PROJECTS_BY_SLUG = (function(arr){ 
    const m = Object.create(null); 
    (arr||[]).forEach(p=>{ 
        if(p && p.slug) m[p.slug]=p; 
    }); 
    return m; 
})(window.PROJECTS);
