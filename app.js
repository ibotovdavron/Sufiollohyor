(() => {
  const data = window.SITE_DATA || {};
  const $ = (s, root=document) => root.querySelector(s);
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const page = document.body.dataset.page || "home";
  const icons = {
    home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9M9 21v-7h6v7"/></svg>',
    competitions:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4"/></svg>',
    teachers:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 8 10-5 10 5-10 5L2 8Z"/><path d="M6 10v5c3 3 9 3 12 0v-5M22 8v6"/></svg>',
    ranking:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10m8 10V4m8 16v-7"/></svg>',
    results:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l3 3v15H4V3h3Z"/><path d="M8 11h8M8 15h8M8 7h4"/></svg>',
    about:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></svg>',
    contact:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4z"/><path d="m4 7 8 6 8-6"/></svg>'
  };
  const nav = [
    ["index.html","home","Bosh"],
    ["competitions.html","competitions","Musobaqa"],
    ["teachers.html","teachers","Ustozlar"],
    ["ranking.html","ranking","Reyting"],
    ["results.html","results","Natija"],
    ["about.html","about","Haqida"],
    ["contact.html","contact","Aloqa"]
  ];
  const navHtml = `<nav class="mobile-nav" aria-label="Asosiy menyu">${nav.map(([url,key,label])=>`<a class="nav-item ${page===key?"active":""}" ${page===key?'aria-current="page"':""} href="${url}">${icons[key]}<span>${label}</span></a>`).join("")}</nav>`;
  const footer = $("#site-footer");
  if (footer) footer.innerHTML = `${navHtml}<footer class="site-footer">© ${new Date().getFullYear()} ${esc(data.siteName || "Bilim Maydoni")} · <a href="index.html">Bosh sahifa</a></footer>`;

  const card = (item, image, meta) => `<article class="content-card">${image?`<img class="card-image" src="${esc(image)}" alt="" loading="lazy" onerror="this.style.display='none'">`:""}<div class="card-body"><span class="card-meta">${esc(meta || "")}</span><h3>${esc(item.title || item.name)}</h3><p>${esc(item.description || item.subject || "")}</p><a class="text-link" href="${item.href || "competitions.html"}">${esc(item.linkText || "Batafsil")} <span>→</span></a></div></article>`;
  if (page === "home") {
    const target = $("#news-list");
    if (target) target.innerHTML = (data.news||[]).map(n=>card({title:n.title,description:n.description,href:"results.html",linkText:"Yangiliklar"},n.image,n.date)).join("");
  }
  if (page === "competitions") {
    const target=$("#competition-list"); let current=1; const perPage=3;
    const render=()=>{const list=(data.competitions||[]).slice((current-1)*perPage,current*perPage);target.innerHTML=list.map(c=>`<article class="content-card"><div class="card-body"><span class="card-meta">${esc(c.category)}</span><h3>${esc(c.title)}</h3><p>${esc(c.description)}</p><p><b>Sana:</b> ${esc(c.date)}</p><button class="text-link competition-detail" data-title="${esc(c.title)}" data-desc="${esc(c.description)}" data-date="${esc(c.date)}">Batafsil ma’lumot <span>→</span></button></div></article>`).join("");document.querySelectorAll(".page-number").forEach(b=>{b.classList.toggle("active",Number(b.dataset.page)===current);b.setAttribute("aria-current",Number(b.dataset.page)===current?"page":"false")});};
    document.querySelectorAll(".page-number").forEach(b=>b.addEventListener("click",()=>{current=Number(b.dataset.page);render()}));
    $(".page-next")?.addEventListener("click",()=>{current=current===3?1:current+1;render()});
    target?.addEventListener("click",e=>{const b=e.target.closest(".competition-detail");if(!b)return;alert(`${b.dataset.title}\\n\\n${b.dataset.desc}\\n\\n${b.dataset.date}\\n\\nTo‘liq ma’lumotlar data.js faylida tahrirlanadi.`)});
    render();
  }
  if (page === "teachers") {
    const target=$("#teacher-list"), search=$("#teacher-search"), empty=$("#teacher-empty"); let current=1; const perPage=3;
    const render=()=>{const q=(search?.value||"").trim().toLocaleLowerCase("uz");const all=(data.teachers||[]).filter(t=>(t.name+" "+t.subject).toLocaleLowerCase("uz").includes(q));const pages=Math.max(1,Math.ceil(all.length/perPage));current=Math.min(current,pages);const list=all.slice((current-1)*perPage,current*perPage);target.innerHTML=list.map((t,i)=>`<article class="content-card"><div class="teacher-avatar" aria-hidden="true">${esc(t.name.split(" ").map(x=>x[0]).slice(0,2).join(""))}</div><div class="card-body"><span class="card-meta">${esc(t.subject)}</span><h3>${esc(t.name)}</h3><p>Ta’lim va tajriba haqida ma’lumot.</p><button class="text-link teacher-detail" data-index="${(data.teachers||[]).indexOf(t)}">To‘liq ma’lumot <span>→</span></button></div></article>`).join("");empty.hidden=list.length>0;document.querySelectorAll(".page-number").forEach(b=>{const n=Number(b.dataset.page);b.hidden=n>pages;b.classList.toggle("active",n===current)});};
    search?.addEventListener("input",()=>{current=1;render()});
    document.querySelectorAll(".page-number").forEach(b=>b.addEventListener("click",()=>{current=Number(b.dataset.page);render()}));
    $(".page-next")?.addEventListener("click",()=>{const q=(search?.value||"").trim().toLocaleLowerCase("uz");const pages=Math.max(1,Math.ceil((data.teachers||[]).filter(t=>(t.name+" "+t.subject).toLocaleLowerCase("uz").includes(q)).length/perPage));current=current>=pages?1:current+1;render()});
    target?.addEventListener("click",e=>{const b=e.target.closest(".teacher-detail");if(!b)return;const t=data.teachers[Number(b.dataset.index)];$("#teacher-detail").innerHTML=`<span class="dialog-subject">${esc(t.subject)}</span><h2>${esc(t.name)}</h2><p><b>Tajriba:</b> ${esc(t.experience)}</p><p>${esc(t.bio)}</p>`;const dlg=$("#teacher-dialog");if(dlg.showModal)dlg.showModal();else alert(`${t.name}\\n${t.subject}\\n${t.bio}`)});
    $(".dialog-close")?.addEventListener("click",()=>$("#teacher-dialog").close());
    $("#teacher-dialog")?.addEventListener("click",e=>{if(e.target.id==="teacher-dialog")e.target.close()});
    render();
  }
  if (page === "ranking") {
    const body=$("#ranking-body"), type=$("#rank-type"), cls=$("#class-filter"), subject=$("#subject-filter"), classWrap=$("#class-filter-wrap"), subjectWrap=$("#subject-filter-wrap");
    const render=()=>{const mode=type.value;classWrap.hidden=mode!=="class";subjectWrap.hidden=mode!=="subject";let rows=[...(data.ranking||[])];if(mode==="class"&&cls.value!=="all")rows=rows.filter(r=>r.className===cls.value);if(mode==="subject"&&subject.value!=="all")rows=rows.filter(r=>r.subject===subject.value);rows.sort((a,b)=>b.score-a.score);body.innerHTML=rows.map((r,i)=>`<tr><td><span class="rank-number">${i+1}</span></td><td><b>${esc(r.name)}</b></td><td>${esc(r.className)}</td><td>${esc(r.subject)}</td><td><span class="stars">★ ${esc(r.stars)}</span></td><td><span class="status">${esc(r.status)}</span></td><td><b>${esc(r.score)} ball</b></td></tr>`).join("")||'<tr><td colspan="7">Bu tanlov bo‘yicha ma’lumot topilmadi.</td></tr>'};
    [type,cls,subject].forEach(el=>el?.addEventListener("change",render));render();
  }
  if (page === "results") {const target=$("#results-list");if(target)target.innerHTML=(data.results||[]).map(r=>card({title:r.title,description:r.description,href:"ranking.html",linkText:"Reytingni ko‘rish"},null,r.category)).join("")}
  if (page === "contact") {
    const c=data.contact||{};$("#contact-address").textContent=c.address||"Hozircha kiritilmagan";$("#contact-email").textContent=c.email||"Hozircha kiritilmagan";$("#contact-phone").textContent=c.phone||"Hozircha kiritilmagan";
    $("#contact-form")?.addEventListener("submit",e=>{e.preventDefault();if(!c.email){$("#contact-status").textContent="Email manzili hali kiritilmagan. data.js faylidagi contact.email qiymatini to‘ldiring.";return}const f=new FormData(e.currentTarget);const subject=encodeURIComponent(f.get("subject"));const body=encodeURIComponent(`Ism: ${f.get("name")}\\n\\n${f.get("message")}`);location.href=`mailto:${c.email}?subject=${subject}&body=${body}`});
  }
})();