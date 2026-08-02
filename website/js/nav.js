/* Mobile navigation toggle — first-party, no data collection.
   Progressive enhancement: without JS the toggle button is hidden on
   desktop and the nav simply stays in the document for assistive tech;
   with JS the button controls visibility and reports state. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the menu when a navigation link is chosen.
  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
