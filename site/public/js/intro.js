/* First-open brand intro: runs once per visit (browser session), before the page paints.
   Loaded synchronously in <head> so there is no flash; everything else is pure CSS. */
(function () {
  try {
    var KEY = 'gc-intro-seen';
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.sessionStorage.getItem(KEY)) return;
    window.sessionStorage.setItem(KEY, '1');
    document.documentElement.classList.add('intro-play');
  } catch (e) { /* storage blocked: skip the intro */ }
})();
