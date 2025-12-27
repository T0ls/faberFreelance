// Projects list for `lavori.html`
// Use this file to edit the gallery content. Works on file:// because it defines a global.
window.PROJECTS = [
  {
    id: 'pilipu',
    slug: 'progetto-pilipu',
    title: 'PILIPU',
    year: '2024',
    categories: ['commercial'],
    thumb: 'https://picsum.photos/900/600?random=21',
    // extended/demo fields for project-item.html
    images: [
      'https://picsum.photos/1200/800?random=101',
      'https://picsum.photos/1200/800?random=102'
    ],
    video: [
      // public demo MP4 so the detail page can play immediately
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
    ],
    description: 'Un cortometraggio che esplora il ritmo del quotidiano e la suddivisione del tempo. etc etc etc  etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc',
    role: 'Regia, montaggio',
    client: 'Autoproduzione',
    duration: '12:34',
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
      { name: 'Luca Bianchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=102'},
      { name: 'Luca Bianchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=103'},
      { name: 'Luca Bianchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=104'},
      { name: 'Luca Bianchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=104'},
    ],
    crew: [
      { name: 'Marco Verdi', role: 'Direttore della fotografia' },
      { name: 'Giulia Neri', role: 'Sound designer' },
      { name: 'Luca Grigi', role: 'Sound designer' },
      { name: 'Fernando Vispo', role: 'Sound designer' },
      { name: 'Fabrizio Gorlo', role: 'Sound designer' },
      { name: 'Fabrizio Gorlo', role: 'Sound designer' },
      { name: 'Fabrizio Gorlo', role: 'Sound designer' },
    ],
    description_short: 'Corto sperimentale sul tempo e la quotidianità.',
  },
  {
    id: 'music-video',
    slug: 'music-video',
    title: 'Music Video',
    year: '2023',
    categories: ['music'],
    thumb: 'https://picsum.photos/900/600?random=22',
    description: 'Montaggio serrato e palette cromatica per una track energica.',
    description_short: 'Montaggio energico e colore deciso.',
    cast: [
      { name: 'Anna Rossi', role: 'Protagonista', photo: 'https://picsum.photos/1200/800?random=101'},
      { name: 'Luca Bianchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=102'},
      { name: 'Luca Bianchi', role: 'Supporto', photo: 'https://picsum.photos/1200/800?random=103'},
    ],
  },
  {
    id: 'short',
    slug: 'short',
    title: 'Short',
    year: '2022',
    categories: ['short', 'experimental'],
    thumb: 'https://picsum.photos/900/600?random=23',
    description: 'Sperimentazione visiva e sonica per un corto di ricerca.',
    description_short: 'Corto di ricerca con sperimentazioni visive.',
  },
  {
    id: 'brand-film',
    slug: 'brand-film',
    title: 'Brand Film',
    year: '2021',
    categories: ['commercial'],
    thumb: ['https://picsum.photos/900/600?random=24', 'https://picsum.photos/900/600?random=23', 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'],
    description: "Racconto emozionale per un marchio, girato in location naturali.",
    description_short: 'Racconto emozionale per brand, location naturali.',
  },
  {
    id: 'experimental',
    slug: 'experimental',
    title: 'Experimental',
    year: '2020',
    categories: ['experimental'],
    thumb: 'https://picsum.photos/900/600?random=25',
    description: 'Installazione video e loop che esplora texture visive.',
    description_short: 'Installazione video che esplora texture visive.',
  }
];

window.PROJECTS_BY_SLUG = (function(arr){ const m = Object.create(null); (arr||[]).forEach(p=>{ if(p && p.slug) m[p.slug]=p; if(p && p.id) m[p.id]=p; }); return m; })(window.PROJECTS);
