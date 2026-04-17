# FaberFreelance

Welcome to the personal portfolio website of **Fabrizio Arrigo** — a filmmaker, videomaker, editor, and director. 

This repository contains the source code for [www.faberfreelance.com](http://www.faberfreelance.com), a fully responsive, static, and data-driven portfolio website built with HTML, CSS, and Vanilla JavaScript.

## Features

* **Dynamic Content Loading:** Projects, showreels, team members, and site text are all loaded dynamically from static JavaScript data files (`data/` folder), making content updates seamless without needing to duplicate HTML.
* **Custom Video Integration:** Utilizes [Plyr](https://plyr.io/) for a clean, customizable, and responsive video playback experience across devices.
* **Advanced Filtering & Sorting:** The *Lavori* (Projects) section includes real-time filtering by tags, text search, and sorting capabilities.
* **Responsive Design:** Fully mobile-optimized layouts using Bootstrap 5 grid and utility classes.
* **Custom Animations:** Smooth page transitions, hover effects, and custom CSS animations (e.g., the pulsing gallery on the landing page).

## Project Structure

    .
    ├── index.html               # Landing page with video hero
    ├── about.html               # About page and skill bars
    ├── lavori.html              # Portfolio gallery with filtering
    ├── dettagli-lavoro.html     # Dynamic project details page
    ├── showreel.html            # Showreels gallery
    ├── dettagli-showreel.html   # Dynamic showreel details page
    ├── contatti.html            # Contact information
    ├── CNAME                    # Custom domain configuration
    └── data/                    # Static database (JSON-like JS files)
        ├── lavori-data.js       # Projects data and media links
        ├── persone-data.js      # Cast & Crew registry
        ├── showreel-data.js     # Showreels data
        └── text-data.js         # Shared site copy (nav, footer, general text)

## Technologies Used

* **HTML5 & CSS3**
* **Vanilla JavaScript (ES6)**
* **[Bootstrap 5.3.3](https://getbootstrap.com/)** - Core styling and responsive grid
* **[Bootstrap Icons](https://icons.getbootstrap.com/)** - UI Icons
* **[Plyr 3.7.8](https://plyr.io/)** - Modern HTML5 video player
* **[Hover.css](https://ianlunn.github.io/Hover/)** - CSS3 hover effects for navigation

## How to Run Locally

Since this is a static website, no complex build tools or Node.js are required.
You can simply open direcly the [index.html](index.html) file. 

## Content Management

To update the website's content without modifying the underlying HTML templates, simply edit the respective files inside the `data/` directory:
* **Add a new project:** Append a new object to `window.PROJECTS` inside `data/lavori-data.js`.
* **Add a new person to Cast & Crew:** Append a new entry to `window.PEOPLE` in `data/persone-data.js`.
* **Update site text/translations:** Modify the values in `window.TEXT_DATA` located in `data/text-data.js`.
