(() => {
  let lang = 'kn', gi = 0, wi = 0;
  try { lang = localStorage.getItem('lang') || 'kn'; } catch(e){}
  const $ = s => document.querySelector(s);
  const T = (o) => o[lang];

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i]').forEach(el => el.textContent = UI[lang][el.dataset.i]);
    document.querySelectorAll('[data-al]').forEach(el => el.setAttribute('aria-label', UI[lang][el.dataset.al]));
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));

    /* Section on/off switches (SETTINGS lives in data.js) */
    $('#navGallery').style.display = SETTINGS.showGallery ? '' : 'none';
    $('#gallery').style.display = SETTINGS.showGallery ? '' : 'none';
    $('#navWinners').style.display = SETTINGS.showWinners ? '' : 'none';
    $('#winners').style.display = SETTINGS.showWinners ? '' : 'none';

    $('#tabs').innerHTML = GROUPS.map((g,i)=>`<button role="tab" class="${i===gi?'on':''}" data-g="${i}" aria-selected="${i===gi}">${T(g.tab)}</button>`).join('');
    const g = GROUPS[gi];
    $('#panel').innerHTML = `
      <div class="p-list">
        ${g.items.map(x=>`<div class="row"><span>${T(x)}${x.loc?`<small class="loc">${T(x.loc)}</small>`:''}</span><em>${T(x.t)}</em></div>`).join('')}
        ${g.note?`<p class="note">${T(g.note)}</p>`:''}
      </div>
      <img src="assets/gallery/${g.img}" alt="${T(g.tab)}" loading="lazy">`;
    $('#talent').innerHTML = `<h3>${T(TALENT.t)}</h3><p>${T(TALENT.p)}</p><p class="note">${T(TALENT.n)}</p>`;
    $('#rail').innerHTML = GALLERY.map(x=>`<figure><img src="assets/gallery/${x.src}" alt="${T(x.alt)}" loading="lazy"></figure>`).join('');
    $('#reelRules').innerHTML = REEL_RULES.map(x=>`<li>${T(x)}</li>`).join('');
    $('#rulesList').innerHTML = RULES.map(x=>`<li>${T(x)}</li>`).join('');
    $('#people').innerHTML = PEOPLE.map(p=>`<div><b>${T(p.n)}</b><span>${T(p.r)}</span></div>`).join('');

    if (SETTINGS.showWinners) {
      $('#wtabs').innerHTML = WINNERS.map((w,i)=>`<button role="tab" class="${i===wi?'on':''}" data-w="${i}" aria-selected="${i===wi}">${T(w.tab)}</button>`).join('');
      const w = WINNERS[wi];
      const medal = {1:'🥇',2:'🥈',3:'🥉'};
      $('#wpanel').innerHTML = w.comps.map(c => `
        <div class="wcomp">
          <h4>${T(c.name)}</h4>
          ${c.ranks.length ? `<ul class="wlist">${c.ranks.sort((a,b)=>a.p-b.p).map(r=>`<li><span class="medal">${medal[r.p]||r.p+'.'}</span>${T(r.name)}</li>`).join('')}</ul>`
                            : `<p class="note">${UI[lang].winners_empty}</p>`}
        </div>`).join('');
    }
  }

  document.addEventListener('click', e => {
    const l = e.target.closest('[data-lang]'); if (l) { lang = l.dataset.lang; try{localStorage.setItem('lang',lang)}catch(_){} render(); }
    const t = e.target.closest('[data-g]'); if (t) { gi = +t.dataset.g; render(); }
    const wt = e.target.closest('[data-w]'); if (wt) { wi = +wt.dataset.w; render(); }
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
