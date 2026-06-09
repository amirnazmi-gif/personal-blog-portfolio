# Personal Portfolio Website

A clean, modern, and responsive personal portfolio website built to showcase my academic projects, technical skills, and software development journey. The website is officially hosted on **GitHub Pages**.

 **Live Demo:** [https://amirnazmi-git.github.io/personal-blog-portfolio/](https://amirnazmi-git.github.io/personal-blog-portfolio/)

---

## Key Features

* **Dynamic Hero Section:** Implemented interactive auto-typing effects for professional role titles.
* **Technical Skills Showcase:** Responsive progress bars triggered smoothly upon scrolling to demonstrate proficiency levels.
* **Integrated Contact Form:** Fully functional static contact form powered by **Web3Forms API**, enabling real-time message delivery directly to my email inbox without a dedicated backend database.

---

## Project Structure & Code Cleanliness

The project directory has been refactored adhering to clean code principles:
* `index.html` - Core structure integrated with modern CSS classes.
* `assets/vendor/` - Kept essential libraries only (`bootstrap`, `aos` for scroll animations, `glightbox` for portfolio modals, `isotope` for category filtering, and `typed.js`).


---


## Source Code Stack
personal-blog-portfolio/
├── assets/
│   ├── css/
│   │   └── main.css             # Core custom styles and layout overrides
│   ├── img/
│   │   ├── profile-img.jpg      # Professional profile avatar
│   │   └── portfolio/                 # portfolio images
│   ├── js/
│   │   └── main.js              # Theme initialization and layout scripts
│   └── vendor/                  # Essential third-party production libraries
│       ├── aos/                 # Scroll-triggered animations framework
│       ├── bootstrap/           # Core responsive layout & grid system
│       ├── bootstrap-icons/     # Official icon font pack
│       ├── glightbox/           # Media lightbox expansion plugin
│       ├── imageloaded/         # loaded the image
|       ├── isotope-layout/      # Dynamic project gallery layout engine
│       ├── typed.js/            # Auto-typing animation for hero section titles
│       └─ waypoints/            # graph percantage
├── index.html                   # Main Page
└── README.md                    # Repository documentation and deployment guide


---

## Tech Stack & Libraries

* **Frontend Base:** HTML5, CSS3, Bootstrap 5
* **Animations & Interactivity:** AOS (Animate on Scroll), Typed.js
* **Media Components:** GLightbox, Isotope Layout
* **Form Integration:** Web3Forms API (Serverless Mail Integration)

---

##  Featured Project: Final Year Project (FYP)

Inside the portfolio, a dedicated section showcases my Final Year Project: **Lifestyle Risk Prediction System**. 

To maintain high data integrity and separate the presentation layer from raw analytical assets, the complete machine learning environment (Jupyter Notebooks, datasets, and preprocessing code) is securely decoupled into a separate dedicated repository.



##  Local Setup & Deployment

To run this project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/amirnazmi-git/personal-blog-portfolio.git](https://github.com/amirnazmi-git/personal-blog-portfolio.git)
