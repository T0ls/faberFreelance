window.SHOWREEL_DATA = [
  {
    slug: "t1",
    title: "Lorem ip",
    year: "2026",
    video: [
      "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    preview: [
      "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm",
    rel_path: "./data/assets/showreels/"
  }
];

window.SHOWREELS = window.SHOWREEL_DATA;
window.SHOWREEL_DETAILS = window.SHOWREEL_DATA;

window.SHOWREEL_BY_SLUG = (function(arr){
  const map = Object.create(null);
  (arr || []).forEach(function(item){
    if (!item) return;
    if (item.slug) map[item.slug] = item;
    if (item.id !== undefined) map[String(item.id)] = item;
  });
  return map;
})(window.SHOWREEL_DATA);
