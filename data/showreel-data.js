window.SHOWREEL_DATA = [
	{
		slug: "t1",
		title: "Lorem ipsum 1",
		year: "2021",
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		preview: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		slug: "t2",
		title: "Lorem ipsum 2",
		year: "2022",
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		preview: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		slug: "t3",
		title: "Lorem ipsum 3",
		year: "2023",
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		preview: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 4,
		slug: "t4",
		title: "Lorem ipsum 4",
		year: "2024",
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
	},
	{
		id: 5,
		slug: "t5",
		title: "Lorem ipsum 5",
		year: "2025",
		video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
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
