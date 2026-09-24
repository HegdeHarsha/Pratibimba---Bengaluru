(() => {
  let lang = 'kn', gi = 0;
  try { lang = localStorage.getItem('lang') || 'kn'; } catch(e){}
  const $ = s => document.querySelector(s);
  const T = (o) => o[lang];

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i]').forEach(el => el.textContent = UI[lang][el.dataset.i]);
    document.querySelectorAll('[data-al]').forEach(el => el.setAttribute('aria-label', UI[lang][el.dataset.al]));
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));

    $('#tabs').innerHTML = GROUPS.map((g,i)=>`<button role="tab" class="${i===gi?'on':''}" data-g="${i}" aria-selected="${i===gi}">${T(g.tab)}</button>`).join('');
    const g = GROUPS[gi];
    $('#panel').innerHTML = `
      <div class="p-list">
        ${g.items.map(x=>`<div class="row"><span>${T(x)}</span><em>${T(x.t)}</em></div>`).join('')}
        ${g.note?`<p class="note">${T(g.note)}</p>`:''}
      </div>
      <img src="assets/gallery/${g.img}" alt="${T(g.tab)}" loading="lazy">`;
    $('#talent').innerHTML = `<h3>${T(TALENT.t)}</h3><p>${T(TALENT.p)}</p><p class="note">${T(TALENT.n)}</p>`;
    $('#rail').innerHTML = GALLERY.map(x=>`<figure><img src="assets/gallery/${x.src}" alt="${T(x.alt)}" loading="lazy"></figure>`).join('');
    $('#reelRules').innerHTML = REEL_RULES.map(x=>`<li>${T(x)}</li>`).join('');
    $('#rulesList').innerHTML = RULES.map(x=>`<li>${T(x)}</li>`).join('');
    $('#people').innerHTML = PEOPLE.map(p=>`<div><b>${T(p.n)}</b><span>${T(p.r)}</span></div>`).join('');
  }

  document.addEventListener('click', e => {
    const l = e.target.closest('[data-lang]'); if (l) { lang = l.dataset.lang; try{localStorage.setItem('lang',lang)}catch(_){} render(); }
    const t = e.target.closest('[data-g]'); if (t) { gi = +t.dataset.g; render(); }
    if (e.target.closest('#menu a')) closeMenu();
  });
  const closeMenu = () => { document.body.classList.remove('open'); $('#burger').setAttribute('aria-expanded','false'); };
  $('#burger').onclick = () => { const o = document.body.classList.toggle('open'); $('#burger').setAttribute('aria-expanded', o); };
  const step = d => $('#rail').scrollBy({left: d * Math.min(640, $('#rail').clientWidth*0.85), behavior:'smooth'});
  $('#gl').onclick = () => step(-1); $('#gr').onclick = () => step(1);
  const nav = $('#nav'); const onS = () => nav.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onS, {passive:true}); onS();
  render();
})();
