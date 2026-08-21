/* =========================================================
   SAT UPPER VIEW — main.js
   Vanilla JS — aucune dépendance externe
   ========================================================= */
(function(){
  "use strict";

  /* ---------------------------------------------------------
     DONNÉES — Produits, Galerie, Témoignages, FAQ
  --------------------------------------------------------- */
  const PRODUCTS = [
    { id:1, name:"Disjoncteur différentiel 40A", cat:"electrique", price:28000, oldPrice:34000, promo:true, stars:5, avail:true, img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop" },
    { id:2, name:"Câble électrique souple 2.5mm (100m)", cat:"electrique", price:65000, promo:false, stars:4, avail:true, img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop" },
    { id:3, name:"Tableau de répartition 12 modules", cat:"electrique", price:112000, oldPrice:130000, promo:true, stars:5, avail:true, img:"https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=600&auto=format&fit=crop" },
    { id:4, name:"Onduleur / Régulateur 3000VA", cat:"electrique", price:245000, promo:false, stars:4, avail:false, img:"https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop" },
    { id:5, name:"Ordinateur portable Pro 15\"", cat:"informatique", price:890000, promo:false, stars:5, avail:true, img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&auto=format&fit=crop" },
    { id:6, name:"Switch réseau 24 ports Gigabit", cat:"informatique", price:175000, oldPrice:198000, promo:true, stars:4, avail:true, img:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" },
    { id:7, name:"Imprimante ticket de caisse thermique", cat:"informatique", price:98000, promo:false, stars:4, avail:true, img:"https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=600&auto=format&fit=crop" },
    { id:8, name:"Scanner code-barres sans fil", cat:"informatique", price:56000, promo:false, stars:5, avail:true, img:"https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=600&auto=format&fit=crop" },
    { id:9, name:"Caméra IP dôme Full HD", cat:"securite", price:87000, oldPrice:99000, promo:true, stars:5, avail:true, img:"https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop" },
    { id:10, name:"Kit vidéosurveillance 4 caméras + NVR", cat:"securite", price:420000, promo:false, stars:5, avail:true, img:"https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=600&auto=format&fit=crop" },
    { id:11, name:"Alarme anti-intrusion connectée", cat:"securite", price:150000, promo:false, stars:4, avail:false, img:"https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop" },
    { id:12, name:"Licence Logiciel POS — Boutique", cat:"pos", price:120000, promo:false, stars:5, avail:true, img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" },
    { id:13, name:"Licence Logiciel POS — Restaurant", cat:"pos", price:150000, oldPrice:180000, promo:true, stars:5, avail:true, img:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=600&auto=format&fit=crop" },
    { id:14, name:"Licence Logiciel POS — Pharmacie", cat:"pos", price:160000, promo:false, stars:4, avail:true, img:"https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop" },
    { id:15, name:"Terminal de caisse tout-en-un", cat:"pos", price:520000, promo:false, stars:5, avail:true, img:"https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600&auto=format&fit=crop" },
    { id:16, name:"Tiroir-caisse électronique", cat:"pos", price:74000, promo:false, stars:4, avail:true, img:"https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=600&auto=format&fit=crop" },
  ];

  const GALLERY = [
    { img:"https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=700&auto=format&fit=crop", caption:"Installation tableau électrique" },
    { img:"https://images.unsplash.com/photo-1558002038-bb0237f4e04d?q=80&w=700&auto=format&fit=crop", caption:"Déploiement caisse POS" },
    { img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=700&auto=format&fit=crop", caption:"Câblage réseau professionnel" },
    { img:"https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=700&auto=format&fit=crop", caption:"Vidéosurveillance boutique" },
    { img:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=700&auto=format&fit=crop", caption:"Salle serveurs" },
    { img:"https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=700&auto=format&fit=crop", caption:"Formation logiciel POS" },
    { img:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=700&auto=format&fit=crop", caption:"Infrastructure réseau" },
    { img:"https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=700&auto=format&fit=crop", caption:"Tableau de répartition" },
  ];

  const TESTIMONIALS = [
    { name:"Jean-Marc Kalonji", role:"Gérant, Pharmacie Bonsomi", quote:"Depuis le logiciel POS de SAT UPPER VIEW, la gestion de nos stocks a changé du tout au tout. Fini les erreurs de caisse.", stars:5 },
    { name:"Grace Mputu", role:"Propriétaire, Restaurant Nzoto", quote:"Installation rapide, équipe très professionnelle. Le matériel électrique livré est de bonne qualité et bien garanti.", stars:5 },
    { name:"Patrick Ilunga", role:"Directeur, Supermarché Elikya", quote:"Le support technique répond toujours vite. Nos caisses n'ont jamais été aussi fiables qu'avec leur système POS.", stars:4 },
    { name:"Béatrice Tshimanga", role:"Gérante, Quincaillerie Uzima", quote:"Un vrai partenaire de confiance pour équiper notre boutique, du câblage électrique jusqu'à la caméra de sécurité.", stars:5 },
  ];

  const FAQS = [
    { q:"Quels types de commerces peuvent utiliser votre logiciel POS ?", a:"Notre logiciel POS s'adapte aux boutiques, pharmacies, restaurants, hôtels, quincailleries et supermarchés, avec des modules configurables selon votre activité." },
    { q:"Proposez-vous l'installation du matériel électrique ?", a:"Oui, nos techniciens certifiés assurent l'étude, le câblage et la mise en service pour tous types de bâtiments." },
    { q:"Le logiciel POS fonctionne-t-il sans connexion internet ?", a:"Oui, le logiciel fonctionne en mode local et synchronise vos données dès qu'une connexion est disponible." },
    { q:"Quels sont les délais de livraison du matériel ?", a:"Les délais varient entre 24h et 72h à Kinshasa selon la disponibilité du produit, et sont communiqués lors de la commande." },
    { q:"Proposez-vous une formation à l'utilisation du logiciel ?", a:"Chaque installation du logiciel POS inclut une session de formation pour vous et votre équipe." },
    { q:"Offrez-vous une garantie sur vos produits ?", a:"Tous nos produits et installations sont couverts par une garantie dont la durée est précisée sur chaque commande." },
  ];

  const fmtFC = n => n.toLocaleString('fr-FR') + " FC";
  const stars = n => "★".repeat(n) + "☆".repeat(5-n);

  /* ---------------------------------------------------------
     PAGE LOADER
  --------------------------------------------------------- */
  window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    setTimeout(() => loader.classList.add('hidden'), 500);
  });

  /* ---------------------------------------------------------
     STICKY NAVBAR + SCROLL PROGRESS + BACK TO TOP
  --------------------------------------------------------- */
  const header = document.getElementById('header');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  /* ---------------------------------------------------------
     ACTIVE NAV LINK ON SCROLL
  --------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [...navLinks].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  function updateActiveNav(){
    let currentId = sections[0] ? sections[0].id : null;
    const offset = 140;
    sections.forEach(sec => {
      if (window.scrollY + offset >= sec.offsetTop) currentId = sec.id;
    });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + currentId));
  }

  function onScroll(){
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    backToTop.classList.toggle('show', y > 600);

    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    scrollProgress.style.width = total > 0 ? (y/total*100) + '%' : '0%';

    updateActiveNav();
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  /* ---------------------------------------------------------
     MOBILE MENU
  --------------------------------------------------------- */
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    const expanded = burger.classList.contains('active');
    burger.setAttribute('aria-expanded', expanded);
    document.body.style.overflow = expanded ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-link, .mobile-cta').forEach(l => l.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }));

  /* ---------------------------------------------------------
     SMOOTH SCROLL (anchors)
  --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target){
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior:'smooth' });
      }
    });
  });

  /* ---------------------------------------------------------
     RIPPLE EFFECT ON BUTTONS
  --------------------------------------------------------- */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-ripple');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });

  /* ---------------------------------------------------------
     TYPING EFFECT (hero)
  --------------------------------------------------------- */
  const typingEl = document.getElementById('typingText');
  const typingWords = ["notre logiciel POS", "une caisse intelligente", "un vrai outil de gestion"];
  let twIndex = 0, twChar = 0, twDeleting = false;
  function typeLoop(){
    const word = typingWords[twIndex];
    if (!twDeleting){
      twChar++;
      typingEl.textContent = word.slice(0, twChar);
      if (twChar === word.length){ twDeleting = true; setTimeout(typeLoop, 1400); return; }
    } else {
      twChar--;
      typingEl.textContent = word.slice(0, twChar);
      if (twChar === 0){ twDeleting = false; twIndex = (twIndex+1) % typingWords.length; }
    }
    setTimeout(typeLoop, twDeleting ? 35 : 65);
  }
  typeLoop();

  /* ---------------------------------------------------------
     SCROLL REVEAL (IntersectionObserver) + stagger index
  --------------------------------------------------------- */
  const revealTargets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  ['services-grid','why-grid','stats-grid','products-grid'].forEach(cls => {
    const parent = document.querySelector('.' + cls);
    if (parent) [...parent.children].forEach((c,i) => c.style.setProperty('--i', i));
  });
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold:.15, rootMargin:'0px 0px -60px 0px' });
  revealTargets.forEach(t => revealObserver.observe(t));

  /* ---------------------------------------------------------
     COUNT UP (data-count)
  --------------------------------------------------------- */
  function animateCount(el){
    const target = parseFloat(el.getAttribute('data-count'));
    const duration = 1600;
    const start = performance.now();
    function step(now){
      const p = Math.min((now-start)/duration, 1);
      const eased = 1 - Math.pow(1-p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('fr-FR');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('fr-FR');
    }
    requestAnimationFrame(step);
  }
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold:.4 });
  document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

  /* ---------------------------------------------------------
     TIMELINE PROGRESS ON SCROLL
  --------------------------------------------------------- */
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const timelineProgress = document.getElementById('timelineProgress');
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
    const doneCount = document.querySelectorAll('.timeline-step.in-view').length;
    if (timelineProgress) timelineProgress.style.width = (doneCount / timelineSteps.length * 100) + '%';
  }, { threshold:.6 });
  timelineSteps.forEach(s => timelineObserver.observe(s));

  /* ---------------------------------------------------------
     PARTICLE CANVAS (hero, discret)
  --------------------------------------------------------- */
  (function particles(){
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w,h,particlesArr;
    function resize(){
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    function init(){
      resize();
      const count = window.innerWidth < 700 ? 22 : 45;
      particlesArr = Array.from({length:count}, () => ({
        x: Math.random()*w, y: Math.random()*h,
        r: Math.random()*1.6+.4,
        vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
        a: Math.random()*.4+.15
      }));
    }
    function draw(){
      ctx.clearRect(0,0,w,h);
      particlesArr.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x<0) p.x=w; if (p.x>w) p.x=0;
        if (p.y<0) p.y=h; if (p.y>h) p.y=0;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    window.addEventListener('resize', resize);
    init(); requestAnimationFrame(draw);
  })();

  /* ---------------------------------------------------------
     PARALLAX on hero shapes (mousemove) — discret
  --------------------------------------------------------- */
  const heroSection = document.querySelector('.hero');
  if (heroSection && window.matchMedia('(hover:hover)').matches){
    const shapes = document.querySelectorAll('.hero-shape');
    heroSection.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - .5);
      const y = (e.clientY / window.innerHeight - .5);
      shapes.forEach((s,i) => {
        const depth = (i+1) * 10;
        s.style.transform = `translate(${x*depth}px, ${y*depth}px)`;
      });
    });
  }

  /* ---------------------------------------------------------
     PRODUCTS — render, filter, search
  --------------------------------------------------------- */
  const productsGrid = document.getElementById('productsGrid');
  const catLabels = { electrique:"Électrique", informatique:"Informatique", securite:"Sécurité", pos:"POS" };

  function productCard(p, i){
    return `
    <article class="product-card reveal-up" style="--i:${i % 8}" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">
      <div class="product-media">
        ${p.promo ? '<span class="badge-promo">PROMO</span>' : ''}
        <img class="lazy" data-src="${p.img}" alt="${p.name}" width="400" height="340">
      </div>
      <div class="product-body">
        <span class="product-cat">${catLabels[p.cat]}</span>
        <h3>${p.name}</h3>
        <div class="product-stars">${stars(p.stars)}</div>
        <span class="product-avail ${p.avail ? '' : 'out'}">${p.avail ? 'En stock' : 'Rupture de stock'}</span>
        <div class="product-price-row">
          <span class="product-price">${fmtFC(p.price)}${p.oldPrice ? `<small>${fmtFC(p.oldPrice)}</small>` : ''}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline btn-ripple add-cart" data-id="${p.id}" ${p.avail ? '' : 'disabled'}>Ajouter au panier</button>
          <a href="#contact" class="btn btn-primary btn-ripple">Commander</a>
        </div>
      </div>
    </article>`;
  }

  function renderProducts(list){
    productsGrid.innerHTML = list.length
      ? list.map(productCard).join('')
      : `<p class="no-results">Aucun produit ne correspond à votre recherche.</p>`;
    revealObserverAttach();
    lazyLoadAttach();
  }
  renderProducts(PRODUCTS);

  function revealObserverAttach(){
    document.querySelectorAll('.reveal-up:not(.in-view)').forEach(t => revealObserver.observe(t));
  }

  const filterChips = document.getElementById('filterChips');
  const productSearch = document.getElementById('productSearch');
  let activeFilter = 'all';

  function applyFilters(){
    const q = productSearch.value.trim().toLowerCase();
    const list = PRODUCTS.filter(p => (activeFilter === 'all' || p.cat === activeFilter) && p.name.toLowerCase().includes(q));
    renderProducts(list);
  }
  filterChips.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    filterChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.getAttribute('data-filter');
    applyFilters();
  });
  productSearch.addEventListener('input', applyFilters);

  /* ---------------------------------------------------------
     LAZY LOADING IMAGES
  --------------------------------------------------------- */
  function lazyLoadAttach(){
    const imgs = document.querySelectorAll('img.lazy:not(.loaded)');
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          const img = entry.target;
          img.src = img.dataset.src;
          img.addEventListener('load', () => img.classList.add('loaded'));
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    imgs.forEach(img => io.observe(img));
  }

  /* ---------------------------------------------------------
     CART (localStorage)
  --------------------------------------------------------- */
  const CART_KEY = 'satUpperViewCart';
  function getCart(){ try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e){ return []; } }
  function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); renderCart(); }

  const cartBtn = document.getElementById('cartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartItemsEl = document.getElementById('cartItems');
  const cartCountEl = document.getElementById('cartCount');
  const cartTotalEl = document.getElementById('cartTotal');

  function openCart(){ cartDrawer.classList.add('open'); cartOverlay.classList.add('open'); }
  function closeCart(){ cartDrawer.classList.remove('open'); cartOverlay.classList.remove('open'); }
  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  function renderCart(){
    const cart = getCart();
    cartCountEl.textContent = cart.reduce((s,i) => s+i.qty, 0);
    if (!cart.length){
      cartItemsEl.innerHTML = `<p class="cart-empty">Votre panier est vide.</p>`;
      cartTotalEl.textContent = fmtFC(0);
      return;
    }
    cartItemsEl.innerHTML = cart.map(item => {
      const p = PRODUCTS.find(pp => pp.id === item.id);
      if (!p) return '';
      return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}">
        <div class="cart-item-info">
          <strong>${p.name}</strong>
          <span>${item.qty} × ${fmtFC(p.price)}</span>
        </div>
        <button class="cart-item-remove" data-id="${p.id}">Retirer</button>
      </div>`;
    }).join('');
    const total = cart.reduce((s,item) => {
      const p = PRODUCTS.find(pp => pp.id === item.id);
      return s + (p ? p.price * item.qty : 0);
    }, 0);
    cartTotalEl.textContent = fmtFC(total);
  }

  document.addEventListener('click', e => {
    const addBtn = e.target.closest('.add-cart');
    if (addBtn){
      const id = parseInt(addBtn.getAttribute('data-id'));
      const cart = getCart();
      const existing = cart.find(i => i.id === id);
      if (existing) existing.qty++;
      else cart.push({ id, qty:1 });
      saveCart(cart);
      openCart();
      return;
    }
    const removeBtn = e.target.closest('.cart-item-remove');
    if (removeBtn){
      const id = parseInt(removeBtn.getAttribute('data-id'));
      saveCart(getCart().filter(i => i.id !== id));
    }
  });
  renderCart();

  /* ---------------------------------------------------------
     GALLERY (masonry) + LIGHTBOX
  --------------------------------------------------------- */
  const masonryGallery = document.getElementById('masonryGallery');
  masonryGallery.innerHTML = GALLERY.map((g,i) => `
    <div class="masonry-item" data-index="${i}">
      <img class="lazy" data-src="${g.img}" alt="${g.caption}" width="500" height="${360 + (i%3)*60}">
      <div class="masonry-overlay"><span>${g.caption}</span></div>
    </div>`).join('');
  lazyLoadAttach();

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  let lightboxIndex = 0;
  function openLightbox(i){
    lightboxIndex = i;
    lightboxImg.src = GALLERY[i].img;
    lightboxImg.alt = GALLERY[i].caption;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){ lightbox.classList.remove('open'); document.body.style.overflow = ''; }
  function navLightbox(dir){
    lightboxIndex = (lightboxIndex + dir + GALLERY.length) % GALLERY.length;
    lightboxImg.src = GALLERY[lightboxIndex].img;
    lightboxImg.alt = GALLERY[lightboxIndex].caption;
  }
  masonryGallery.addEventListener('click', e => {
    const item = e.target.closest('.masonry-item');
    if (item) openLightbox(parseInt(item.getAttribute('data-index')));
  });
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => navLightbox(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => navLightbox(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });

  /* ---------------------------------------------------------
     TESTIMONIAL SLIDER (auto)
  --------------------------------------------------------- */
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${stars(t.stars)}</div>
      <p class="testimonial-quote">« ${t.quote} »</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
        <strong>${t.name}</strong>
        <span>${t.role}</span>
      </div>
    </div>`).join('');
  dotsWrap.innerHTML = TESTIMONIALS.map((_,i) => `<button data-i="${i}" class="${i===0?'active':''}" aria-label="Témoignage ${i+1}"></button>`).join('');

  let testIndex = 0, testTimer;
  function goToTestimonial(i){
    testIndex = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${testIndex*100}%)`;
    dotsWrap.querySelectorAll('button').forEach((b,idx) => b.classList.toggle('active', idx===testIndex));
  }
  function startAutoSlide(){ testTimer = setInterval(() => goToTestimonial(testIndex+1), 5000); }
  function resetAutoSlide(){ clearInterval(testTimer); startAutoSlide(); }
  dotsWrap.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    goToTestimonial(parseInt(btn.getAttribute('data-i')));
    resetAutoSlide();
  });
  startAutoSlide();

  /* ---------------------------------------------------------
     FAQ ACCORDION
  --------------------------------------------------------- */
  const accordion = document.getElementById('accordion');
  accordion.innerHTML = FAQS.map((f,i) => `
    <div class="accordion-item${i===0 ? ' open':''}">
      <button class="accordion-head" aria-expanded="${i===0}">
        <span>${f.q}</span><span class="plus"></span>
      </button>
      <div class="accordion-body"><p>${f.a}</p></div>
    </div>`).join('');

  function setupAccordion(){
    accordion.querySelectorAll('.accordion-item').forEach(item => {
      const head = item.querySelector('.accordion-head');
      const body = item.querySelector('.accordion-body');
      if (item.classList.contains('open')) body.style.maxHeight = body.scrollHeight + 'px';
      head.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        accordion.querySelectorAll('.accordion-item').forEach(other => {
          other.classList.remove('open');
          other.querySelector('.accordion-head').setAttribute('aria-expanded','false');
          other.querySelector('.accordion-body').style.maxHeight = null;
        });
        if (!isOpen){
          item.classList.add('open');
          head.setAttribute('aria-expanded','true');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }
  setupAccordion();

  /* ---------------------------------------------------------
     CONTACT FORM VALIDATION
  --------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    contactForm.querySelectorAll('.form-group').forEach(g => {
      const input = g.querySelector('input, textarea');
      if (!input) return;
      const errEl = g.querySelector('.form-error');
      let msg = '';
      if (input.hasAttribute('required') && !input.value.trim()) msg = 'Ce champ est requis.';
      else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) msg = 'Email invalide.';
      else if (input.type === 'tel' && input.value && !/^[0-9+\s-]{7,}$/.test(input.value)) msg = 'Numéro de téléphone invalide.';
      g.classList.toggle('error', !!msg);
      if (errEl) errEl.textContent = msg;
      if (msg) valid = false;
    });
    if (!valid) return;
    formSuccess.classList.add('show');
    contactForm.reset();
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  });

  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    input.value = '';
    input.placeholder = 'Merci pour votre inscription !';
  });

  /* ---------------------------------------------------------
     FOOTER YEAR
  --------------------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

})();
