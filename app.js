// DATABASE DE PLATOS DE BAR SARAY CON IMÁGENES
const MENU_ITEMS = [
  // PARA EMPEZAR
  {
    name: "Tiras de pollo",
    price: "9,70 €",
    category: "para empezar",
    description: "Tiras de pollo crujientes.",
    tags: [],
    note: "patatas + lechuga"
  },
  {
    name: "Palitos mozzarella + salsa fresca",
    price: "9,50 €",
    category: "para empezar",
    description: "Dedos de queso mozzarella fundido empanados con salsa marinara fresca.",
    image: "images/gallery-palitos.jpg",
    tags: []
  },
  {
    name: "Patatas Alioli / Bravas / Mixta",
    price: "6,50 €",
    category: "para empezar",
    description: "Nuestras patatas cortadas a mano con salsa alioli suave, brava picante o mixta.",
    image: "images/gallery-patatas-cargadas.jpg",
    tags: ["Top Ventas"]
  },
  {
    name: "Delicias de jalapeños",
    price: "8,00 €",
    category: "para empezar",
    description: "Deliciosos bocados rellenos de queso y jalapeño con un toque picante suave.",
    image: "images/gallery-jalapenos.jpg",
    tags: []
  },
  {
    name: "Jalapeños",
    price: "9,70 €",
    category: "para empezar",
    description: "Jalapeños enteros rellenos de queso, crujientes por fuera y cremosos por dentro.",
    image: "images/gallery-jalapenos.jpg",
    tags: []
  },
  {
    name: "Calamares a la Romana",
    price: "10,00 €",
    category: "para empezar",
    description: "Anillas de calamar tiernas rebozadas al estilo tradicional con limón.",
    image: "images/gallery-calamares.jpg",
    tags: []
  },
  {
    name: "Croquetas de Jamón",
    price: "10,00 €",
    category: "para empezar",
    description: "Croquetas cremosas de jamón serrano elaboradas con bechamel casera.",
    image: "images/gallery-croquetas.jpg",
    tags: ["Casero"]
  },
  {
    name: "Croquetas Ibéricas",
    price: "12,50 €",
    category: "para empezar",
    description: "Croquetas gourmet elaboradas con auténtico jamón ibérico seleccionado.",
    image: "images/gallery-croquetas-ibericas.jpg",
    tags: []
  },
  {
    name: "Tequeños de queso",
    price: "8,50 €",
    category: "para empezar",
    description: "Palitos de masa fina crujiente rellenos de abundante queso blanco fundido.",
    image: "images/gallery-tequenos-queso.jpg",
    tags: []
  },
  {
    name: "Ranchera de bacon",
    price: "10,00 €",
    category: "para empezar",
    description: "Patatas fritas cubiertas de bacon crujiente, mezcla de quesos gratinados y salsa ranchera.",
    image: "images/gallery-ranchera-bacon.jpg",
    tags: []
  },
  {
    name: "Ranchera de pollo",
    price: "10,00 €",
    category: "para empezar",
    description: "Patatas fritas con jugosas tiras de pollo, quesos fundidos y salsa ranchera casera.",
    image: "images/gallery-ranchera-pollo.jpg",
    tags: []
  },
  {
    name: "Alitas de pollo + patatas",
    price: "8,50 €",
    category: "para empezar",
    description: "Alitas de pollo sazonadas y doradas, servidas con ración de patatas fritas.",
    image: "images/gallery-alitas.jpg",
    tags: []
  },
  {
    name: "Alitas crujientes + patatas",
    price: "10,00 €",
    category: "para empezar",
    description: "Alitas extra crujientes rebozadas al estilo sureño con patatas fritas.",
    image: "images/gallery-alitas-crujientes.jpg",
    tags: []
  },
  {
    name: "Oreja a la plancha",
    price: "10,00 €",
    category: "para empezar",
    description: "Oreja de cerdo crujiente a la plancha bien sazonada con ajo y perejil.",
    image: "images/gallery-oreja.jpg",
    tags: ["Especialidad"]
  },
  {
    name: "Nuggets de pollo + patatas",
    price: "8,00 €",
    category: "para empezar",
    description: "Bocaditos de pollo empanados para los más jóvenes o para compartir.",
    image: "images/gallery-nuggets.jpg",
    tags: []
  },
  {
    name: "Huevos Rotos con Jamón Serrano",
    price: "11,50 €",
    category: "para empezar",
    description: "Base de patatas fritas panadera, huevos fritos de corral y jamón serrano de calidad.",
    image: "images/gallery-huevos-rotos.jpg",
    tags: ["Clásico"]
  },

  // COMIDA RUMANA
  {
    name: "Mici (unidad)",
    price: "2,30 €",
    category: "comida rumana",
    description: "Rollos de carne picada mezclada con especias tradicionales rumanas, cocinados a la parrilla. Servidos con pan, mostaza y patatas fritas.",
    image: "images/gallery-salchichas.jpg",
    tags: ["Especialidad Rumana", "Top Ventas"],
    note: "Vienen acompañados de patatas"
  },
  {
    name: "Tochitura",
    price: "15,00 €",
    category: "comida rumana",
    description: "Plato tradicional rumano muy completo. Elaborado con carne de cerdo guisada, salchichas locales, dos huevos fritos, acompañado de mamaliga (polenta) y smântână (crema agria).",
    image: "images/gallery-tochitura.jpg",
    tags: ["Especialidad Rumana"],
    note: "Servido con polenta y crema agria"
  },
  {
    name: "Sarmale cu Mămăligă",
    price: "9,50 €",
    category: "comida rumana",
    description: "Hojas de repollo fermentado rellenas de una mezcla sazonada de carne picada de cerdo, ternera y arroz, cocinadas lentamente a fuego lento. Servidas con polenta caliente y crema agria.",
    image: "images/gallery-sarmale.jpg",
    tags: ["Especialidad Rumana", "Casero"],
    note: "Servido con polenta y crema agria"
  },

  // BURGERS
  {
    name: "Hamburguesa Simple",
    price: "7,50 €",
    category: "burgers",
    description: "Jugosa hamburguesa de ternera con queso cheddar fundido.",
    image: "images/gallery-burger-simple.jpg",
    tags: [],
    note: "Servida con patatas"
  },
  {
    name: "Hamburguesa Especial",
    price: "11,50 €",
    category: "burgers",
    description: "Doble de carne seleccionada de ternera, doble queso cheddar fundido y doble ración de bacon ahumado.",
    image: "images/gallery-burger-especial.jpg",
    tags: ["Top Ventas"],
    note: "Servida con patatas"
  },
  {
    name: "Crispy Chicken Burger",
    price: "9,50 €",
    category: "burgers",
    description: "Filete de pollo crujiente rebozado, lechuga fresca, mayonesa cremosa y rodajas de tomate natural.",
    image: "images/gallery-burger-crispy.jpg",
    tags: [],
    note: "Servida con patatas"
  },
  {
    name: "Gourmet Saray",
    price: "14,00 €",
    category: "burgers",
    description: "240 g de carne selecta de ternera picada a mano, bacon crujiente, queso cheddar premium, tomate, lechuga y salsa de la casa.",
    image: "images/gallery-burger-gourmet.jpg",
    tags: ["Especialidad"],
    note: "Servida con patatas"
  },

  // ESPECIALIDADES
  {
    name: "Cachopo de ternera",
    price: "14,00 €",
    category: "especialidades",
    description: "Dos filetes de ternera grandes rellenos de jamón serrano y queso fundido, empanados y fritos a la perfección.",
    image: "images/especialidad-cachopo.jpg",
    tags: ["Top Ventas"],
    note: "Patatas o ensalada"
  },
  {
    name: "Cachopo de Pollo",
    price: "12,50 €",
    category: "especialidades",
    description: "Alternativa de filete de pechuga de pollo relleno de jamón y queso, empanado crujiente.",
    image: "images/especialidad-cachopo.jpg",
    tags: [],
    note: "Patatas o ensalada"
  },
  {
    name: "Pollo Empanado",
    price: "9,50 €",
    category: "especialidades",
    description: "Filete de pechuga de pollo tierna rebozada en pan rallado crujiente y frita.",
    image: "images/especialidad-pollo-empanado.jpg",
    tags: [],
    note: "Patatas o ensalada"
  },
  {
    name: "Pechuga Villaroy",
    price: "9,50 €",
    category: "especialidades",
    description: "Pechuga de pollo cubierta de una suave y cremosa bechamel, empanada y frita hasta dorar.",
    image: "images/especialidad-villaroy.jpg",
    tags: ["Clásico"],
    note: "Patatas o ensalada"
  },

  // PLATOS COMBINADOS
  {
    name: "Filete de ternera + ensalada + patatas",
    price: "11,50 €",
    category: "platos combinados",
    description: "Filete de ternera a la plancha acompañado de patatas fritas y ensalada mixta de la casa.",
    image: "images/gallery-filete-plato.jpg",
    tags: []
  },
  {
    name: "Panceta + ensalada + patatas",
    price: "11,00 €",
    category: "platos combinados",
    description: "Tiras de panceta de cerdo crujiente a la plancha con patatas fritas y ensalada fresca.",
    image: "images/gallery-panceta-plato.jpg",
    tags: []
  },
  {
    name: "Pechuga de pollo + ensalada + patatas",
    price: "9,50 €",
    category: "platos combinados",
    description: "Filete de pechuga de pollo a la plancha con patatas fritas y ensalada.",
    image: "images/gallery-pechuga.jpg",
    tags: []
  },
  {
    name: "Lomo + ensalada + patatas",
    price: "10,00 €",
    category: "platos combinados",
    description: "Cinta de lomo de cerdo a la plancha jugosa con patatas y ensalada.",
    image: "images/gallery-lomo.jpg",
    tags: []
  },
  {
    name: "Salmón + ensalada",
    price: "10,00 €",
    category: "platos combinados",
    description: "Filete de salmón fresco a la plancha servido con una rica ensalada aliñada.",
    image: "images/gallery-salmon.jpg",
    tags: ["Saludable"]
  },

  // BOCADILLOS
  {
    name: "Bocadillo de Panceta",
    price: "6,00 €",
    category: "bocadillos",
    description: "Pan de barra crujiente con tiras de panceta de cerdo a la plancha.",
    image: "images/gallery-bocadillo-lomo.jpg",
    tags: []
  },
  {
    name: "Bocadillo de Lomo",
    price: "6,00 €",
    category: "bocadillos",
    description: "Bocadillo clásico de lomo de cerdo a la plancha.",
    tags: []
  },
  {
    name: "Pepito de Ternera (Bocadillo)",
    price: "7,00 €",
    category: "bocadillos",
    description: "El mítico bocadillo de filete de ternera sazonado con un toque de ajo.",
    image: "images/gallery-bocadillo-ternera.jpg",
    tags: ["Clásico"]
  },
  {
    name: "Bocadillo de Tortilla Francesa",
    price: "5,00 €",
    category: "bocadillos",
    description: "Sencillo y delicioso bocadillo de tortilla francesa de dos huevos.",
    tags: []
  },
  {
    name: "Bocadillo de Calamares",
    price: "6,00 €",
    category: "bocadillos",
    description: "El clásico bocadillo madrileño de calamares fritos a la romana con limón.",
    image: "images/gallery-bocadillo-calamares.jpg",
    tags: ["Top Ventas"]
  },
  {
    name: "Bocadillo de Bacon",
    price: "5,50 €",
    category: "bocadillos",
    description: "Bocadillo caliente de bacon ahumado crujiente a la plancha.",
    tags: []
  },
  {
    name: "Bocadillo de Chorizo",
    price: "5,50 €",
    category: "bocadillos",
    description: "Chorizo frito en pan de barra recién horneado.",
    tags: []
  },
  {
    name: "Bocadillo de Jamón Serrano",
    price: "6,00 €",
    category: "bocadillos",
    description: "Jamón serrano español curado con un chorrito de aceite de oliva virgen extra.",
    tags: []
  },
  {
    name: "Bocadillo de Pollo",
    price: "7,00 €",
    category: "bocadillos",
    description: "Bocadillo de filete de pechuga de pollo a la plancha tierna.",
    image: "images/gallery-bocadillo-pollo.jpg",
    tags: []
  },
  {
    name: "Bocadillo de Tiras de Pollo + Lechuga",
    price: "7,50 €",
    category: "bocadillos",
    description: "Tiras de pollo empanado crujiente con lechuga y mayonesa.",
    image: "images/gallery-bocadillo-tiras.jpg",
    tags: []
  },

  // SANDWICHES
  {
    name: "Sándwich Mixto",
    price: "5,50 €",
    category: "sandwiches",
    description: "Clásico sándwich tostado de jamón york y queso fundido.",
    tags: []
  },
  {
    name: "Sándwich de Pechuga de Pollo",
    price: "6,60 €",
    category: "sandwiches",
    description: "Sándwich de pan de molde con filete de pechuga de pollo, lechuga y mayonesa.",
    image: "images/gallery-sand-pechuga.jpg",
    tags: []
  },
  {
    name: "Sándwich de Atún",
    price: "6,60 €",
    category: "sandwiches",
    description: "Mezcla de atún claro desmigado, lechuga, tomate y mayonesa suave.",
    tags: []
  },
  {
    name: "Sándwich de Salmón",
    price: "8,50 €",
    category: "sandwiches",
    description: "Exquisito sándwich de salmón ahumado con queso crema de untar y lechuga.",
    image: "images/gallery-sand-salmon.jpg",
    tags: []
  },

  // PASTAS
  {
    name: "Pasta Boloñesa",
    price: "7,50 €",
    category: "pastas",
    description: "Pasta italiana servida con una rica salsa boloñesa casera de carne de ternera picada y tomate.",
    tags: []
  },
  {
    name: "Pasta Carbonara",
    price: "7,50 €",
    category: "pastas",
    description: "Pasta con salsa cremosa tradicional de huevo, queso parmesano, pimienta negra y bacon crujiente.",
    tags: []
  },

  // DULCES
  {
    name: "Tarta de Chocolate",
    price: "4,50 €",
    category: "dulces",
    description: "Rica tarta casera de chocolate negro con capas de bizcocho esponjoso.",
    image: "images/gallery-tarta.jpg",
    tags: []
  },
  {
    name: "Tarta de Queso",
    price: "4,50 €",
    category: "dulces",
    description: "Tarta cremosa de queso horneada al estilo tradicional sobre base de galleta crujiente.",
    tags: ["Casero"]
  },
  {
    name: "Buñuelos de Nata (4 uds)",
    price: "4,80 €",
    category: "dulces",
    description: "Pequeños buñuelos de masa dulce frita rellenos de nata montada fresca.",
    image: "images/gallery-profiteroles.jpg",
    tags: []
  },
  {
    name: "Tequeños de Nutella (7 uds)",
    price: "8,50 €",
    category: "dulces",
    description: "Masa fina frita rellena de chocolate de avellanas Nutella caliente y fundido.",
    image: "images/gallery-tequenos.jpg",
    tags: []
  },
  {
    name: "Gofre",
    price: "4,50 €",
    category: "dulces",
    description: "Gofre caliente recién hecho, crujiente por fuera y tierno por dentro, servido con chocolate por encima.",
    image: "images/gallery-gofre.jpg",
    tags: []
  },
  {
    name: "Papanasi",
    price: "5,50 €",
    category: "dulces",
    description: "El postre estrella de la casa. Buñuelo de masa dulce frita tradicional rumano con requesón, servido caliente con nata agria fresca (smântână) y deliciosa mermelada de frutos rojos.",
    image: "images/gallery-papanasi.jpg",
    tags: ["Postre Estrella", "Especialidad Rumana"]
  }
];

// INITIALIZATION AND EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  // Navigation elements
  const header = document.getElementById("header-bar");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  
  // 1. STICKY HEADER ON SCROLL
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // 2. MOBILE MENU TOGGLE
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });

    // Close mobile menu when nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });
  }

  // ScrollSpy - highlight active navigation link on scroll
  const sections = document.querySelectorAll("section, footer");
  const mainNavLinks = document.querySelectorAll(".nav-links .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 160) {
        current = section.getAttribute("id");
      }
    });

    mainNavLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // 3. RENDER MENU ITEMS WITH IMAGES
  const menuGrid = document.getElementById("menu-grid-content");
  const categoryButtons = document.querySelectorAll(".btn-category");
  const searchInput = document.getElementById("menu-search");
  
  if (menuGrid) {
    let activeCategory = "todos";
    let searchQuery = "";

    function renderMenu() {
      menuGrid.innerHTML = "";
      
      // Filter by category and search query
      const filteredItems = MENU_ITEMS.filter(item => {
        const matchesCategory = activeCategory === "todos" || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      // Update dynamic plate counter
      const menuCount = document.getElementById("menu-count");
      if (menuCount) {
        menuCount.textContent = `· (${filteredItems.length} platos)`;
      }

      if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
          <div class="menu-empty">
            <i class="fa-solid fa-utensils" style="font-size: 2.5rem; margin-bottom: 1rem; display: block; color: var(--red); opacity: 0.5;"></i>
            No hemos encontrado ningún plato.
          </div>
        `;
        return;
      }

      filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        
        // Image container if available
        let imgHtml = "";
        if (item.image) {
          imgHtml = `
            <div class="menu-card-img-wrapper">
              <img class="menu-card-img" src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
          `;
        } else {
          // Fallback for pasta or dishes without specific images
          imgHtml = `
            <div class="menu-card-img-wrapper" style="background: #000000; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.75rem;">
              <i class="fa-solid fa-utensils" style="font-size: 2.6rem; color: var(--red);"></i>
              <span style="font-family: var(--ff-sans), sans-serif; font-size: 0.75rem; font-weight: 900; letter-spacing: 4px; text-transform: uppercase; color: var(--red);">Bar Saray</span>
            </div>
          `;
        }
        
        // Determine badge class and text with icons
        let badgeHtml = "";
        if (item.tags && item.tags.length > 0) {
          item.tags.forEach(tag => {
            let badgeTypeClass = "";
            let iconHtml = "";
            const tagLower = tag.toLowerCase();
            
            if (tagLower.includes("estrella")) {
              badgeTypeClass = "star";
              iconHtml = '<i class="fa-solid fa-star"></i> ';
            } else if (tagLower.includes("ventas")) {
              badgeTypeClass = "top";
              iconHtml = '<i class="fa-solid fa-fire"></i> ';
            } else if (tagLower.includes("rumana")) {
              badgeTypeClass = "rumana";
              iconHtml = '<i class="fa-solid fa-crown"></i> ';
            } else if (tagLower.includes("casero")) {
              badgeTypeClass = "casero";
              iconHtml = '<i class="fa-solid fa-house-chimney"></i> ';
            } else if (tagLower.includes("clásico") || tagLower.includes("clasico")) {
              badgeTypeClass = "clasico";
              iconHtml = '<i class="fa-solid fa-clock-rotate-left"></i> ';
            } else if (tagLower.includes("saludable")) {
              badgeTypeClass = "saludable";
              iconHtml = '<i class="fa-solid fa-leaf"></i> ';
            } else if (tagLower.includes("especialidad")) {
              badgeTypeClass = "especialidad";
              iconHtml = '<i class="fa-solid fa-award"></i> ';
            } else {
              badgeTypeClass = "generic";
              iconHtml = '<i class="fa-solid fa-tag"></i> ';
            }
            
            badgeHtml += `<span class="menu-badge ${badgeTypeClass}">${iconHtml}${tag}</span> `;
          });
        }

        // Notes element if available
        const notesHtml = item.note ? `<p class="menu-card-notes"><i class="fa-solid fa-circle-info" style="margin-right: 4px;"></i> ${item.note}</p>` : "";

        card.innerHTML = `
          ${imgHtml}
          <div class="menu-card-content">
            <div>
              <div class="menu-card-header">
                <div class="menu-card-title-group">
                  <h3 class="menu-card-title">${item.name}</h3>
                  <div style="margin-top: 0.3rem; display: flex; flex-wrap: wrap; gap: 0.3rem;">${badgeHtml}</div>
                </div>
                <span class="menu-card-price">${item.price}</span>
              </div>
              <p class="menu-card-desc">${item.description}</p>
            </div>
            ${notesHtml}
          </div>
        `;
        
        menuGrid.appendChild(card);
      });
    }

    // Initial Menu Render
    renderMenu();

    // 4. CATEGORY SELECTOR HANDLERS
    categoryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        activeCategory = btn.getAttribute("data-category");
        renderMenu();

        // Mobile UX: Scroll back to the top of menu content when clicking a category tag
        if (window.innerWidth <= 768) {
          const mainHeader = document.querySelector(".main-header");
          if (mainHeader) {
            const yOffset = -70; // Offset for mobile sticky category bar
            const y = mainHeader.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      });
    });

    // 5. SEARCH INPUT HANDLER WITH CLEAR BUTTON
    if (searchInput) {
      let searchTimeout;
      const searchClearBtn = document.getElementById("search-clear");

      function updateClearButton() {
        if (searchClearBtn) {
          if (searchInput.value.trim() !== "") {
            searchClearBtn.style.display = "flex";
          } else {
            searchClearBtn.style.display = "none";
          }
        }
      }

      searchInput.addEventListener("input", (e) => {
        updateClearButton();
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          searchQuery = e.target.value;
          renderMenu();
        }, 200);
      });

      if (searchClearBtn) {
        searchClearBtn.addEventListener("click", () => {
          searchInput.value = "";
          searchQuery = "";
          updateClearButton();
          renderMenu();
          searchInput.focus();
        });
      }
    }
  }

  // 6. BACK TO TOP BUTTON LOGIC
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 7. SCROLL REVEAL ANIMATIONS
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }
});
