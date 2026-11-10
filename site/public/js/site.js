/* Good Create — site behaviour. No dependencies, no third-party calls, no eval, no innerHTML. */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Header state ── */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile menu ── */
  var toggle = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  if (toggle && mobileNav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      mobileNav.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      if (header) header.classList.toggle('menu-is-open', open);
      if (open) { var first = mobileNav.querySelector('a'); if (first) first.focus(); }
    };
    toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 960px)').addEventListener('change', function (m) { if (m.matches) setOpen(false); });
  }

  /* ── Mega menu (desktop) ── */
  var items = document.querySelectorAll('[data-nav-item].has-menu');
  var closeTimer = 0;
  function closeAll(except) {
    items.forEach(function (it) {
      if (it === except) return;
      it.classList.remove('is-open');
      var b = it.querySelector('[data-nav-trigger]'); if (b) b.setAttribute('aria-expanded', 'false');
    });
    if (header && !except && !document.body.classList.contains('menu-open')) header.classList.remove('menu-is-open');
  }
  function openItem(it) {
    clearTimeout(closeTimer);
    closeAll(it);
    it.classList.add('is-open');
    var b = it.querySelector('[data-nav-trigger]'); if (b) b.setAttribute('aria-expanded', 'true');
    if (header) header.classList.add('menu-is-open');
  }
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  items.forEach(function (it) {
    var btn = it.querySelector('[data-nav-trigger]');
    btn.addEventListener('click', function () {
      if (it.classList.contains('is-open')) closeAll(); else openItem(it);
    });
    if (finePointer) {
      it.addEventListener('mouseenter', function () { openItem(it); });
      it.addEventListener('mouseleave', function () { closeTimer = setTimeout(function () { closeAll(); }, 160); });
    }
    it.addEventListener('focusout', function (e) { if (!it.contains(e.relatedTarget)) { it.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); if (!document.querySelector('.nav-item.is-open') && header) header.classList.remove('menu-is-open'); } });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.nav-item.is-open');
    if (open) { closeAll(); var b = open.querySelector('[data-nav-trigger]'); if (b) b.focus(); }
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('[data-nav-item]')) closeAll(); });

  /* ── Local nav: highlight current section ── */
  var localLinks = document.querySelectorAll('[data-local-link]');
  if (localLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    localLinks.forEach(function (a) { var id = a.getAttribute('href').slice(1); var sec = document.getElementById(id); if (sec) map[id] = a; });
    var lio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          localLinks.forEach(function (a) { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
          var a = map[en.target.id]; if (a) { a.classList.add('is-active'); a.setAttribute('aria-current', 'true'); var bar = a.closest('.local-nav-inner'); if (bar) bar.scrollTo({ left: a.offsetLeft - bar.clientWidth / 2 + a.offsetWidth / 2, behavior: reduceMotion ? 'auto' : 'smooth' }); }
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) { lio.observe(document.getElementById(id)); });
  }

  /* ── Headline line reveal: split section titles into masked words
     (single characters for Japanese); each visual line slides up in turn ── */
  var TOKEN = /\s+|[「『（【〔“‘]*(?:[A-Za-z0-9@#&%'’.,:;\/\-–—!?]+|[^\sA-Za-z0-9])[、。，．」』）】〕”’！？：・ー…]*/g;
  function splitHeading(h) {
    h.setAttribute('aria-label', (h.innerText || h.textContent).replace(/\s+/g, ' ').trim());
    var walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT, null), nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (t) {
      var parts = t.nodeValue.match(TOKEN);
      if (!parts) return;
      var frag = document.createDocumentFragment();
      parts.forEach(function (p) {
        if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
        var w = document.createElement('span'), i = document.createElement('span');
        w.className = 'lr-w'; w.setAttribute('aria-hidden', 'true');
        i.className = 'lr-i'; i.textContent = p;
        w.appendChild(i); frag.appendChild(w);
      });
      t.parentNode.replaceChild(frag, t);
    });
    h.classList.add('lr');
  }
  function timeLines(h) {
    var base = parseFloat(h.style.transitionDelay) || 0, line = -1, top = null;
    h.querySelectorAll('.lr-w').forEach(function (w) {
      var y = w.getBoundingClientRect().top;
      if (top === null || y > top + 4) { line++; top = y; }
      w.firstChild.style.transitionDelay = base + line * 110 + 'ms';
    });
  }

  /* ── Reveal on scroll ── */
  var reveals = document.querySelectorAll('.reveal:not(.hero .reveal):not(.page-hero .reveal)');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.querySelectorAll('h2.reveal').forEach(function (h) {
      if (!h.closest('.hero, .page-hero')) splitHeading(h);
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          if (en.target.classList.contains('lr')) timeLines(en.target);
          en.target.classList.add('is-in'); io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el, i) {
      // Small stagger for siblings
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(sib, 5) * 70 + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ── Scroll story (@POP): the step crossing the trigger line drives the sticky stage
     (mid-screen on desktop; below the sticky stage on phones) ── */
  document.querySelectorAll('[data-story]').forEach(function (story) {
    var stage = story.querySelector('[data-story-stage]');
    var steps = story.querySelectorAll('[data-story-step]');
    var list = story.querySelector('[data-story-steps]');
    if (!stage || !steps.length || !('IntersectionObserver' in window)) return;
    if (list) list.classList.add('is-live');
    var setStep = function (el) {
      stage.setAttribute('data-step', el.getAttribute('data-story-step'));
      steps.forEach(function (s) { s.classList.toggle('is-active', s === el); });
    };
    setStep(steps[0]);
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setStep(en.target); });
    }, { rootMargin: window.matchMedia('(min-width: 960px)').matches ? '-48% 0px -48% 0px' : '-72% 0px -24% 0px' });
    steps.forEach(function (s) { sio.observe(s); });
  });

  /* ── Hero video: honour reduced motion / data saver, allow pause ── */
  var video = document.querySelector('[data-hero-video]');
  var vToggle = document.querySelector('[data-video-toggle]');
  if (video) {
    var saveData = navigator.connection && navigator.connection.saveData;
    var setPaused = function (paused) {
      if (paused) video.pause(); else { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
      if (vToggle) {
        vToggle.setAttribute('aria-pressed', String(paused));
        var label = vToggle.querySelector('.sr-only');
        if (label) label.textContent = paused ? (vToggle.getAttribute('data-label-play') || 'Play background video') : (vToggle.getAttribute('data-label-pause') || 'Pause background video');
      }
    };
    // Timeline of /media/hero.mp4 (same file as the original site):
    // 0-4.0s white logo intro, 4.0-22.3s city/product footage, 22.4s+ logo outro.
    var INTRO_END = 3.9, BODY_START = 4.0, BODY_END = 22.3;
    var hero = video.closest('.hero');
    var endIntro = function () {
      if (!hero || !hero.classList.contains('is-intro')) return;
      hero.classList.remove('is-intro');
      document.body.classList.remove('hero-intro');
    };
    if (reduceMotion || saveData) {
      video.removeAttribute('autoplay');
      setPaused(true);
      // show a city frame instead of the white logo frame behind the headline
      var showStill = function () { try { video.currentTime = 6; } catch (e) {} };
      if (video.readyState >= 1) showStill(); else video.addEventListener('loadedmetadata', showStill, { once: true });
    } else if (hero) {
      hero.classList.add('is-intro');
      document.body.classList.add('hero-intro');
      if (document.documentElement.classList.contains('intro-play')) {
        // The first-open plane animation already showed the logo: skip the video's own
        // logo intro, hold on the first city frame under the overlay, start as it fades.
        var holdUntil = Date.now() + 3100;
        var seekBody = function () { try { video.currentTime = BODY_START; } catch (e) {} };
        if (video.readyState >= 1) seekBody(); else video.addEventListener('loadedmetadata', seekBody, { once: true });
        video.pause();
        video.addEventListener('play', function () { if (Date.now() < holdUntil) video.pause(); });
        setTimeout(function () { endIntro(); if (!userPaused) setPaused(false); }, 3100);
      } else {
        setTimeout(endIntro, 6000); // safety net if the video never starts
        setTimeout(function () { if (video.paused) endIntro(); }, 1800); // autoplay blocked
      }
      var check = function () {
        var t = video.currentTime;
        if (t >= INTRO_END) endIntro();
        // after the first intro, loop only the footage so the white logo never sits under the headline
        if (t >= BODY_END) { video.currentTime = BODY_START; if (video.paused && !userPaused) video.play().catch(function () {}); }
      };
      if (video.requestVideoFrameCallback) {
        var onFrame = function () { check(); video.requestVideoFrameCallback(onFrame); };
        video.requestVideoFrameCallback(onFrame);
      }
      video.addEventListener('timeupdate', check);
      video.addEventListener('ended', function () { video.currentTime = BODY_START; video.play().catch(function () {}); });
    }
    var userPaused = false;
    if (vToggle) vToggle.addEventListener('click', function () { userPaused = !video.paused; endIntro(); setPaused(userPaused); });
  }

  /* ── Contact form ── */
  var form = document.querySelector('[data-contact-form]');
  if (form) initForm(form);

  function initForm(f) {
    var status = f.querySelector('[data-form-status]');
    var submitBtn = f.querySelector('button[type="submit"]');
    // Localized messages come from the form's data-messages attribute (JSON); English is the fallback.
    var M = {
      name: 'Please enter your name.', emailEmpty: 'Please enter your email.', emailBad: 'Please enter a valid email address.',
      phone: 'Please use digits, spaces, + ( ) or -.', message: 'Please write at least 10 characters.', consent: 'Please agree to continue.',
      ok: 'Thank you. Your inquiry has been sent — we will reply soon.',
      fail: 'Sorry, the message could not be sent. Please try again later or call 0877-57-1111.'
    };
    try {
      var custom = JSON.parse(f.getAttribute('data-messages') || '{}');
      Object.keys(M).forEach(function (k) { if (typeof custom[k] === 'string') M[k] = custom[k]; });
    } catch (err) { /* keep defaults */ }
    var EMAIL = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;

    function setErr(input, msg) {
      var id = input.getAttribute('aria-describedby');
      var errEl = null;
      if (id) id.split(' ').forEach(function (x) { var el = document.getElementById(x); if (el && el.classList.contains('err')) errEl = el; });
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (errEl) errEl.textContent = msg || '';
      return !msg;
    }
    function validate(input) {
      var v = (input.value || '').trim();
      switch (input.name) {
        case 'name': return setErr(input, v ? '' : M.name);
        case 'email': return setErr(input, !v ? M.emailEmpty : (EMAIL.test(v) ? '' : M.emailBad));
        case 'phone': return setErr(input, !v || /^[0-9+()\-\s]{6,30}$/.test(v) ? '' : M.phone);
        case 'message': return setErr(input, v.length >= 10 ? '' : M.message);
        case 'consent': return setErr(input, input.checked ? '' : M.consent);
        default: return true;
      }
    }
    var fields = f.querySelectorAll('input[name="name"], input[name="email"], input[name="phone"], textarea[name="message"], input[name="consent"]');
    fields.forEach(function (el) {
      el.addEventListener('blur', function () { if (el.value || el.type === 'checkbox') validate(el); });
      el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') validate(el); });
    });

    function show(kind, msg) {
      status.className = 'form-status is-visible ' + kind;
      status.textContent = msg;
    }

    var startedAt = Date.now();
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var allOk = true, firstBad = null;
      fields.forEach(function (el) { if (!validate(el)) { allOk = false; if (!firstBad) firstBad = el; } });
      if (!allOk) { firstBad.focus(); return; }
      // Bot checks: honeypot filled, or submitted implausibly fast
      if (f.website.value || Date.now() - startedAt < 2500) { show('ok', M.ok); f.reset(); return; }

      var data = {};
      new FormData(f).forEach(function (v, k) { if (k !== 'website') data[k] = String(v).trim(); });
      submitBtn.disabled = true;
      fetch(f.getAttribute('action'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(data)
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        show('ok', M.ok);
        f.reset();
      }).catch(function () {
        show('bad', M.fail);
      }).then(function () { submitBtn.disabled = false; });
    });
  }
})();
