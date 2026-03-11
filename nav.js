// Kain Family Au Pair - Shared Navigation
(function () {
  const pages = [
    { label: 'Welcome', href: 'index.html' },
    { label: 'Benefits', href: 'benefits.html' },
    { label: 'Home & Schedule', href: 'home-schedule.html' },
    { label: 'Lifestyle', href: 'lifestyle.html' },
    { label: 'Parenting', href: 'parenting.html' },
    { label: 'Location', href: 'location.html' },
    { label: 'FAQ', href: 'faq.html' }
  ];

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const nav = document.createElement('nav');
  nav.className = 'nav-bar';
  nav.setAttribute('aria-label', 'Main navigation');

  const inner = document.createElement('div');
  inner.className = 'nav-inner';

  const brand = document.createElement('a');
  brand.className = 'nav-brand';
  brand.href = 'index.html';
  brand.textContent = 'Kain Family';

  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.innerHTML = '<span></span><span></span><span></span>';

  const links = document.createElement('div');
  links.className = 'nav-links';

  pages.forEach(function (page) {
    const a = document.createElement('a');
    a.href = page.href;
    a.textContent = page.label;
    if (currentPage === page.href) {
      a.classList.add('active');
    }
    links.appendChild(a);
  });

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }
  });

  inner.appendChild(brand);
  inner.appendChild(toggle);
  inner.appendChild(links);
  nav.appendChild(inner);

  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.replaceWith(nav);
  }
})();
