// ==========================================
// TRANSLATIONS
// ==========================================
const translations = {
    fr: {
        loading: {
            welcome: "Bienvenue",
            subtitle: "Chargement de l'expérience..."
        },
        nav: { home: "Accueil", about: "À propos", skills: "Compétences", projects: "Projets", contact: "Contact" },
        theme: { dark: "Mode Sombre", light: "Mode Clair" },
        hero: { welcome: "Bienvenue sur mon portfolio", subtitle: "Présentation de mes compétences créatives<br>et de mon expérience en développement web" },
        about: { 
            title: "À propos de moi", 
            firstName: "Prénom :", 
            lastName: "Nom :", 
            profile: "Profil :", 
            profileValue: "Développeur Full Stack", 
            description: "Je suis un développeur web motivé avec un fort intérêt pour la création d'applications web modernes et conviviales. J'aime travailler avec des technologies front-end et back-end et améliorer continuellement mes compétences à travers des projets réels.", 
            downloadCV: "Télécharger CV" 
        },
        skills: {
            title: "Mes Compétences",
            cat: { 
                lang: "Langages de programmation", 
                frame: "Frameworks", 
                db: "Bases de Données", 
                tools: "Gestion de versions", 
                design: "Conception & Design", 
                method: "Méthodologies de travail" 
            }
        },
        projects: {
            title: "Mes Projets",
            oberlin: { 
                title: "Boutique de Fleurs", 
                description: "Application web moderne pour la gestion et l'affichage d'une boutique de fleurs en ligne.", 
                fullDescription: "Création d'un site web pour une boutique de fleurs avec une interface moderne, responsive et interactive.", 
                features: ["Présentation claire de produits", "Gestion avancée de médias", "Navigation responsive", "Interface intuitive", "Galerie optimisée"] 
            },
            ecommerce: { 
                title: "Plateforme E-commerce", 
                description: "Plateforme de commerce électronique complète (en cours).", 
                fullDescription: "Plateforme de commerce électronique complète.", 
                features: ["Présentation de projets", "Interfaces modernes", "Habilités Front-End", "Navigation fluide"] 
            },
            portfolio: { 
                title: "Portfolio Designer", 
                description: "Outil de création de portfolios avec templates modernes.", 
                fullDescription: "Portfolio personnel montrant projets.", 
                features: ["Présentation de projets", "Interfaces modernes", "Habilités Front-End", "Navigation fluide"] 
            },
            hotel: { 
                title: "Mounasabati", 
                description: "Système de réservations pour événements (en cours)", 
                fullDescription: "Application web pour organiser événements privés.", 
                features: ["Créateur d'événements", "Réservation en ligne", "Paiement sécurisé", "Système de calification", "Carte interactive"] 
            },
            modalDescription: "Description", 
            modalFeatures: "Fonctionnalités principales", 
            modalTechnologies: "Technologies utilisées"
        },
        contact: { 
            title: "Me Contacter", 
            subtitle: "Travaillons Ensemble", 
            phone: "Téléphone", 
            linkedinText: "Voir mon profil" 
        },
        footer: { rights: "Tous droits réservés." }
    },
    en: {
        loading: {
            welcome: "Welcome",
            subtitle: "Loading experience..."
        },
        nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
        theme: { dark: "Dark Mode", light: "Light Mode" },
        hero: { welcome: "Welcome to my portfolio", subtitle: "Showcasing my creativity skills<br>and experience in web development" },
        about: { 
            title: "About Me", 
            firstName: "First name:", 
            lastName: "Last name:", 
            profile: "Profile:", 
            profileValue: "Full Stack Developer", 
            description: "I am a motivated web developer with a strong interest in building modern and user-friendly web applications.", 
            downloadCV: "Download CV" 
        },
        skills: {
            title: "My Skills",
            cat: { 
                lang: "Programming Languages", 
                frame: "Frameworks", 
                db: "Databases", 
                tools: "Version Control", 
                design: "Design & Modeling", 
                method: "Methodologies" 
            }
        },
        projects: {
            title: "My Projects",
            oberlin: { 
                title: "Flower Shop", 
                description: "Modern web application for an online flower shop.", 
                fullDescription: "Website for a flower shop with modern interface.", 
                features: ["Clear product presentation", "Advanced media management", "Responsive navigation", "Intuitive interface", "Optimized gallery"] 
            },
            ecommerce: { 
                title: "E-commerce Platform", 
                description: "Complete e-commerce platform (in progress).", 
                fullDescription: "Complete e-commerce platform.", 
                features: ["Project showcase", "Modern interfaces", "Front-End skills", "Smooth navigation"] 
            },
            portfolio: { 
                title: "Portfolio Designer", 
                description: "Portfolio creation tool with modern templates.", 
                fullDescription: "Personal portfolio showcasing projects.", 
                features: ["Project showcase", "Modern interfaces", "Front-End skills", "Smooth navigation"] 
            },
            hotel: { 
                title: "Mounasabati", 
                description: "Booking system for events (in progress)", 
                fullDescription: "Web app for organizing private events.", 
                features: ["Event creator", "Online booking", "Secure payment", "Rating system", "Interactive map"] 
            },
            modalDescription: "Description", 
            modalFeatures: "Main Features", 
            modalTechnologies: "Technologies Used"
        },
        contact: { 
            title: "Contact Me", 
            subtitle: "Let's Work Together", 
            phone: "Phone", 
            linkedinText: "View my profile" 
        },
        footer: { rights: "All rights reserved." }
    },
    es: {
        loading: {
            welcome: "Bienvenido",
            subtitle: "Cargando experiencia..."
        },
        nav: { home: "Inicio", about: "Acerca de", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
        theme: { dark: "Modo Oscuro", light: "Modo Claro" },
        hero: { welcome: "Bienvenido a mi portafolio", subtitle: "Mostrando mis habilidades creativas<br>y experiencia en desarrollo web" },
        about: { 
            title: "Sobre Mí", 
            firstName: "Nombre:", 
            lastName: "Apellido:", 
            profile: "Perfil:", 
            profileValue: "Desarrollador Full Stack", 
            description: "Soy un desarrollador web motivado con un fuerte interés en crear aplicaciones web modernas y fáciles de usar.", 
            downloadCV: "Descargar CV" 
        },
        skills: {
            title: "Mis Habilidades",
            cat: { 
                lang: "Lenguajes de programación", 
                frame: "Frameworks", 
                db: "Bases de Datos", 
                tools: "Control de versiones", 
                design: "Diseño & Modelado", 
                method: "Metodologías" 
            }
        },
        projects: {
            title: "Mis Proyectos",
            oberlin: { 
                title: "Tienda de Flores", 
                description: "Aplicación web moderna para tienda de flores.", 
                fullDescription: "Sitio web para tienda de flores con interfaz moderna.", 
                features: ["Presentación clara de productos", "Gestión avanzada de medios", "Navegación responsive", "Interfaz intuitiva", "Galería optimizada"] 
            },
            ecommerce: { 
                title: "Plataforma E-commerce", 
                description: "Plataforma de comercio electrónico completa (en progreso).", 
                fullDescription: "Plataforma completa de comercio electrónico.", 
                features: ["Presentación de proyectos", "Interfaces modernas", "Habilidades Front-End", "Navegación fluida"] 
            },
            portfolio: { 
                title: "Diseñador de Portafolio", 
                description: "Herramienta de creación de portafolios.", 
                fullDescription: "Portafolio personal mostrando proyectos.", 
                features: ["Presentación de proyectos", "Interfaces modernas", "Habilidades Front-End", "Navegación fluida"] 
            },
            hotel: { 
                title: "Mounasabati", 
                description: "Sistema de reservas para eventos (en progreso)", 
                fullDescription: "Aplicación web para organizar eventos.", 
                features: ["Creador de eventos", "Reserva en línea", "Pago seguro", "Sistema de calificación", "Mapa interactivo"] 
            },
            modalDescription: "Descripción", 
            modalFeatures: "Características Principales", 
            modalTechnologies: "Tecnologías Utilizadas"
        },
        contact: { 
            title: "Contáctame", 
            subtitle: "Trabajemos Juntos", 
            phone: "Teléfono", 
            linkedinText: "Ver mi perfil" 
        },
        footer: { rights: "Todos los derechos reservados." }
    },
    ar: {
        loading: {
            welcome: "مرحباً",
            subtitle: "جاري التحميل..."
        },
        nav: { home: "الرئيسية", about: "من أنا", skills: "مهاراتي", projects: "مشاريعي", contact: "تواصل" },
        theme: { dark: "الوضع الداكن", light: "الوضع الفاتح" },
        hero: { welcome: "مرحباً بك في ملف أعمالي", subtitle: "عرض مهاراتي الإبداعية<br>وخبرتي في تطوير الويب" },
        about: { 
            title: "من أنا", 
            firstName: "الاسم الأول:", 
            lastName: "اسم العائلة:", 
            profile: "التخصص:", 
            profileValue: "مطوّر Full Stack", 
            description: "أنا مطوّرة ويب متحمسة ببناء تطبيقات ويب حديثة.", 
            downloadCV: "تحميل السيرة الذاتية" 
        },
        skills: {
            title: "مهاراتي",
            cat: { 
                lang: "لغات البرمجة", 
                frame: "أطر العمل", 
                db: "قواعد البيانات", 
                tools: "إدارة الإصدارات", 
                design: "التصميم والنمذجة", 
                method: "منهجيات العمل" 
            }
        },
        projects: {
            title: "مشاريعي",
            oberlin: { 
                title: "متجر الزهور", 
                description: "تطبيق ويب حديث لمتجر زهور إلكتروني.", 
                fullDescription: "موقع ويب لمتجر زهور بواجهة حديثة.", 
                features: ["عرض واضح للمنتجات", "إدارة متقدمة للوسائط", "تنقل متجاوب", "واجهة بديهية", "معرض محسّن"] 
            },
            ecommerce: { 
                title: "منصة التجارة الإلكترونية", 
                description: "منصة تجارة إلكترونية (قيد التطوير).", 
                fullDescription: "منصة تجارة إلكترونية متكاملة.", 
                features: ["عرض المشاريع", "واجهات حديثة", "مهارات الواجهة", "تنقل سلس"] 
            },
            portfolio: { 
                title: "مصمم ملف الأعمال", 
                description: "أداة لإنشاء ملفات أعمال مخصصة.", 
                fullDescription: "ملف أعمال شخصي يعرض مشاريعي.", 
                features: ["عرض المشاريع", "واجهات حديثة", "مهارات الواجهة", "تنقل سلس"] 
            },
            hotel: { 
                title: "مناسباتي", 
                description: "نظام حجز للفعاليات (قيد التطوير)", 
                fullDescription: "تطبيق ويب لتنظيم فعاليات خاصة.", 
                features: ["منشئ فعاليات", "حجز إلكتروني", "دفع آمن", "نظام تقييم", "خريطة تفاعلية"] 
            },
            modalDescription: "الوصف", 
            modalFeatures: "الميزات الرئيسية", 
            modalTechnologies: "التقنيات المستخدمة"
        },
        contact: { 
            title: "تواصل معي", 
            subtitle: "لنعمل معاً", 
            phone: "الهاتف", 
            linkedinText: "عرض ملفي الشخصي" 
        },
        footer: { rights: "جميع الحقوق محفوظة." }
    }
};

// ==========================================
// GLOBAL VARIABLES
// ==========================================
let charIndex = 0;
let isDeleting = false;
let isPaused = false;
let projectsData = {};

// ==========================================
// LOADING SCREEN
// ==========================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');
    
    let progress = 0;
    const duration = 3000; // 3 seconds
    const interval = 30; // Update every 30ms
    const increment = (100 / (duration / interval));
    
    const loadingInterval = setInterval(() => {
        progress += increment;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Hide loading screen after completion
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    // Start typing animation
                    setTimeout(typeWriter, 500);
                }, 500);
            }, 500);
        }
        
        progressBar.style.width = progress + '%';
        progressPercent.textContent = Math.floor(progress);
    }, interval);
}

// ==========================================
// LANGUAGE MANAGEMENT
// ==========================================
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // RTL support for Arabic
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];
        for (let k of keys) {
            translation = translation[k];
        }
        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    updateTypingText(lang);
    updateProjectsData(lang);
    updateThemeButton(document.documentElement.getAttribute('data-theme'));
}

function updateTypingText(lang) {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.setAttribute('data-text', translations[lang].hero.welcome);
        typingText.textContent = '';
        charIndex = 0;
        isDeleting = false;
        isPaused = false;
    }
}

function updateProjectsData(lang) {
    projectsData = {
        oberlin: {
            title: translations[lang].projects.oberlin.title,
            description: translations[lang].projects.oberlin.fullDescription,
            features: translations[lang].projects.oberlin.features,
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        ecommerce: {
            title: translations[lang].projects.ecommerce.title,
            description: translations[lang].projects.ecommerce.fullDescription,
            features: translations[lang].projects.ecommerce.features,
            technologies: ["Laravel", "CSS", "JavaScript", "React"]
        },
        portfolio: {
            title: translations[lang].projects.portfolio.title,
            description: translations[lang].projects.portfolio.fullDescription,
            features: translations[lang].projects.portfolio.features,
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        hotel: {
            title: translations[lang].projects.hotel.title,
            description: translations[lang].projects.hotel.fullDescription,
            features: translations[lang].projects.hotel.features,
            technologies: ["React", "Laravel", "PHP", "MySQL"]
        }
    };
}

// ==========================================
// THEME MANAGEMENT
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
    
    // Re-initialize Three.js scene for new theme
    initThreeJS();
});

function updateThemeButton(theme) {
    const currentLang = localStorage.getItem('language') || 'fr';
    const themeText = theme === 'dark' ? translations[currentLang].theme.light : translations[currentLang].theme.dark;
    const themeIcon = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.innerHTML = `<span class="theme-icon">${themeIcon}</span> <span class="theme-text">${themeText}</span>`;
}

// ==========================================
// NAVIGATION MENU
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});

// ==========================================
// ACTIVE SECTION HIGHLIGHTING
// ==========================================
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// SMOOTH SCROLLING
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.section-title, .about-wrapper, .skills-grid, .project-card, .contact-info-container').forEach(el => {
    observer.observe(el);
});

// ==========================================
// SKILL CARD MOUSE EFFECT
// ==========================================
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width * 100);
        const y = ((e.clientY - rect.top) / rect.height * 100);
        card.style.setProperty('--mx', x + '%');
        card.style.setProperty('--my', y + '%');
    });
});

// ==========================================
// PROJECT MODAL
// ==========================================
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const currentLang = localStorage.getItem('language') || 'fr';
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalBody').innerHTML = `
        <h3>${translations[currentLang].projects.modalDescription}</h3>
        <p>${project.description}</p>
        <h3>${translations[currentLang].projects.modalFeatures}</h3>
        <ul style="color:var(--text-secondary);line-height:2;margin-left:1.5rem;">
            ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <h3>${translations[currentLang].projects.modalTechnologies}</h3>
        <div class="tech-stack">
            ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
    `;
    
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Project card click events
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        if (projectId) {
            openModal(projectId);
        }
    });
});

// Modal close events
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ==========================================
// TYPING ANIMATION
// ==========================================
function typeWriter() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const text = typingText.getAttribute('data-text') || typingText.textContent;
    
    if (isPaused) {
        setTimeout(typeWriter, 50);
        return;
    }

    if (!isDeleting && charIndex < text.length) {
        typingText.textContent += text.charAt(charIndex++);
        setTimeout(typeWriter, 100);
    } else if (!isDeleting && charIndex === text.length) {
        isPaused = true;
        setTimeout(() => {
            isPaused = false;
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else if (isDeleting && charIndex > 0) {
        typingText.textContent = text.substring(0, --charIndex);
        setTimeout(typeWriter, 50);
    } else {
        isDeleting = false;
        isPaused = true;
        setTimeout(() => {
            isPaused = false;
            typeWriter();
        }, 500);
    }
}

// ==========================================
// THREE.JS BACKGROUND ANIMATION
// ==========================================
let scene, camera, renderer, particles;

function initThreeJS() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const container = currentTheme === 'dark' ? 
        document.getElementById('bg-animation-dark') : 
        document.getElementById('bg-animation-light');
    
    // Clear previous renderer if exists
    if (renderer) {
        renderer.dispose();
        container.innerHTML = '';
    }

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 30;

    // Particles
    const particlesCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < particlesCount; i++) {
        positions.push((Math.random() - 0.5) * 100);
        positions.push((Math.random() - 0.5) * 100);
        positions.push((Math.random() - 0.5) * 100);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    // Particle color based on theme
    const particleColor = currentTheme === 'dark' ? 0xFF9FFC : 0xFF1493;
    const material = new THREE.PointsMaterial({
        color: particleColor,
        size: currentTheme === 'dark' ? 0.5 : 0.7,
        transparent: true,
        opacity: currentTheme === 'dark' ? 1 : 0.6
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        particles.rotation.y += 0.002;
        particles.rotation.x += 0.001;

        camera.position.x += (mouseX * 10 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 10 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();

    // Responsive
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'fr';
    changeLanguage(savedLang);

    // Language button events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Initialize Three.js
    if (typeof THREE !== 'undefined') {
        initThreeJS();
    }

    // Initialize loading screen
    initLoadingScreen();

    // Grab-to-scroll for projects
    const container = document.querySelector('.projects-container');
    const scroll = document.querySelector('.projects-scroll');
    if (container && scroll) {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.classList.add('grabbing');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('grabbing');
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('grabbing');
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });

        // Touch support
        container.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        }, { passive: true });

        container.addEventListener('touchend', () => {
            isDown = false;
        });

        container.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        }, { passive: true });

        // Navigation Arrows Logic
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn && nextBtn) {
            const cardWidth = 350 + 32; // card width + gap (2rem = 32px)
            
            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: cardWidth, behavior: 'smooth' });
            });
        }
    }
});

window.addEventListener('load', () => {
    // Loading screen will handle the typeWriter call
});