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
    description: 'Un cortometraggio che esplora il ritmo del quotidiano e la suddivisione del tempo.',
    url: 'progetto-pilipu.html'
  },
  {
    id: 'music-video',
    slug: 'music-video',
    title: 'Music Video',
    year: '2023',
    categories: ['music'],
    thumb: 'https://picsum.photos/900/600?random=22',
    description: 'Montaggio serrato e palette cromatica per una track energica.',
    url: '#'
  },
  {
    id: 'short',
    slug: 'short',
    title: 'Short',
    year: '2022',
    categories: ['short', 'experimental'],
    thumb: 'https://picsum.photos/900/600?random=23',
    description: 'Sperimentazione visiva e sonica per un corto di ricerca.',
    url: '#'
  },
  {
    id: 'brand-film',
    slug: 'brand-film',
    title: 'Brand Film',
    year: '2021',
    categories: ['commercial'],
    thumb: 'https://picsum.photos/900/600?random=24',
    description: "Racconto emozionale per un marchio, girato in location naturali.",
    url: '#'
  },
  {
    id: 'experimental',
    slug: 'experimental',
    title: 'Experimental',
    year: '2020',
    categories: ['experimental'],
    thumb: 'https://picsum.photos/900/600?random=25',
    description: 'Installazione video e loop che esplora texture visive.',
    url: '#'
  }
];

window.PROJECTS_BY_SLUG = (function(arr){ const m = Object.create(null); (arr||[]).forEach(p=>{ if(p && p.slug) m[p.slug]=p; if(p && p.id) m[p.id]=p; }); return m; })(window.PROJECTS);
