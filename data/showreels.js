// showreels data exposed as a global for environments where fetch isn't desired
// showreels data exposed as a global for environments where fetch isn't desired
// NOTE: keep this in sync with any JSON source you edit; showreel pages load this JS directly.
// showreels data (synchronized from data/showreels.json)
// The page imports this JS directly (works with file://). Keep it in sync with your JSON source.
window.SHOWREELS = [
  {
    id: 1,
    slug: "spierman",
    title: "Spiderman",
    year: "2014",
    categories: ["regia", "montaggio"],
  video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
    description: "Un montaggio narrativo che esplora ritmi lenti e scelte cromatiche calde."
  },
  {
    id: 2,
    slug: "dark-web",
    title: "AGAGGAG",
    year: "2023",
    categories: ["horror", "after"],
  video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
    description: "Sequenze sperimentali che lavorano su texture visive e contrasti sonori."
  },
  {
    id: 3,
    slug: "shortcuts",
    title: "Shortcuts",
    year: "2022",
    categories: ["regia", "montaggio"],
  video: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
    description: "Estratti rapidi e dinamici pensati per performance dal vivo e montaggi serrati."
  },
  {
    id: 4,
    slug: "metamorfosi",
    title: "Metamorfosi",
    year: "2021",
    categories: ["after", "regia"],
  video: [],
    description: "Un esperimento visivo giocato su metamorfosi di forme e colore, pensato per schermi grandi e installazioni notturne."
  }
];
