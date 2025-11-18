window.SHOWREEL_DATA = [
	{
		id: 1,
		slug: "spierman",
		title: "Spiderman",
		year: "2014",
		preview: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		description: "Spiderman è un progetto di regia e montaggio che esplora il ritmo attraverso campi lunghi e panoramiche controllate. Il progetto è pensato per schermi ampi e festival.",
	},
	{
		id: 2,
		slug: "dark-web",
		title: "Dark Web",
		year: "2023",
		preview: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		description: "Dark Web è un esperimento visivo sul contrasto tra luce e buio, con interventi di post-production e color grading spinto.",
	},
	{
		id: 3,
		slug: "shortcuts",
		title: "Shortcuts",
		year: "2022",
		preview: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		video: [],
		description: "Shortcuts raccoglie brevi estratti montati per il palco: tagli rapidi, ritmo serrato e sincronizzazione su musica dal vivo.",
	},
	{
		id: 4,
		slug: "metamorfosi",
		title: "Metamorfosi",
		year: "2021",
		preview: [],
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		description: "Metamorfosi nasce da una serie di riprese astratte e manipolazioni, studiate per creare un flusso ipnotico in loop.",
	},
	{
		id: 5,
		slug: "puzzo",
		title: "Puzzo",
		year: "2020",
		preview: [],
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		description: "prova prova prova",
	}
];

// Legacy aliases to minimize changes in existing pages
window.SHOWREELS = window.SHOWREEL_DATA;
window.SHOWREEL_DETAILS = window.SHOWREEL_DATA;

// Small helper for other scripts that expect a map by slug
window.SHOWREEL_BY_SLUG = (function(arr){
	const map = Object.create(null);
	(arr||[]).forEach(item=>{ if(item && item.slug) map[item.slug] = item; map[String(item.id)] = item; });
	return map;
})(window.SHOWREEL_DATA);

// End of unified data
