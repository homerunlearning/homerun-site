/* ====== EDIT THESE FIRST ====== */
const SITE = {
  name: "HomeRun Learning",
  whatsapp: "62XXXXXXXXXX",      // country code + number, no + or spaces. Example: 6281234567890
  instagram: "homerunlearning",  // your Instagram handle without @
  city: "Manado, Sulawesi Utara",
  waText: { id: "Halo HomeRun Learning, saya ingin tanya tentang les untuk anak saya.", en: "Hello HomeRun Learning, I'd like to ask about tutoring for my child." }
};

/* ====== BLOG POSTS (newest first). Add a new post by copying one block. ====== */
const POSTS = [
 { slug:"membaca-di-rumah", date:"2026-10-20", photo:"images/blog-membaca.jpg",
   tag:{id:"Tips Orang Tua",en:"Parent Tips"},
   title:{id:"5 cara seru melatih anak membaca di rumah",en:"5 fun ways to practise reading with your child at home"},
   summary:{id:"Tidak perlu alat mahal. Lima kebiasaan kecil yang membuat anak betah membaca.",en:"No expensive tools needed. Five small habits that make reading enjoyable."},
   body:{
    id:`<p>Anak yang baru belajar membaca butuh latihan singkat tapi rutin. Sepuluh menit yang menyenangkan lebih efektif daripada satu jam yang membuat anak lelah.</p>
    <h3>1. Baca bersama setiap hari</h3><p>Pilih jam yang sama, misalnya sebelum tidur. Biarkan anak memilih bukunya sendiri.</p>
    <h3>2. Tunjuk huruf dengan jari</h3><p>Saat membaca, gerakkan jari di bawah kata. Anak belajar bahwa tulisan dibaca dari kiri ke kanan.</p>
    <h3>3. Bermain tebak suku kata</h3><p>Ucapkan "ba" dan "tu", lalu minta anak menggabungkannya. Permainan kecil ini melatih kemampuan calistung.</p>
    <h3>4. Rayakan kemajuan kecil</h3><p>Satu kata baru yang berhasil dibaca layak dipuji. Rasa percaya diri tumbuh dari sini.</p>
    <h3>5. Tanya tentang ceritanya</h3><p>"Menurutmu, apa yang terjadi selanjutnya?" Pertanyaan ini melatih pemahaman, bukan hanya membaca lancar.</p>`,
    en:`<p>Children who are just learning to read need short, regular practice. Ten enjoyable minutes beat an hour that leaves them tired.</p>
    <h3>1. Read together every day</h3><p>Pick the same time each day, such as before bed, and let your child choose the book.</p>
    <h3>2. Point to the words</h3><p>Slide a finger under each word as you read. Children learn that text runs left to right.</p>
    <h3>3. Play syllable games</h3><p>Say "ba" and "tu", then ask your child to blend them. These small games build early reading, writing and counting skills.</p>
    <h3>4. Celebrate small wins</h3><p>One new word read correctly deserves praise. Confidence grows from here.</p>
    <h3>5. Ask about the story</h3><p>"What do you think happens next?" This builds understanding, not just fluent reading.</p>`}},
 { slug:"jadwal-belajar-anak", date:"2026-10-12", photo:"images/blog-jadwal.jpg",
   tag:{id:"Belajar di Rumah",en:"Learning at Home"},
   title:{id:"Cara membuat jadwal belajar yang tidak bikin anak stres",en:"How to build a study routine that doesn't stress your child"},
   summary:{id:"Jadwal yang baik itu fleksibel, singkat, dan punya waktu istirahat.",en:"A good routine is flexible, short and includes breaks."},
   body:{
    id:`<p>Jadwal belajar yang terlalu padat sering membuat anak menolak belajar. Mulailah dari yang kecil dan sesuaikan dengan kebiasaan keluarga.</p>
    <h3>Mulai dari 20 menit</h3><p>Untuk anak SD awal, 20 menit fokus sudah cukup. Tambahkan perlahan jika anak mampu.</p>
    <h3>Tetapkan jam yang sama</h3><p>Kebiasaan terbentuk dari keteraturan. Pilih waktu saat anak sudah makan dan tidak terlalu lelah.</p>
    <h3>Selipkan istirahat</h3><p>Setelah belajar, beri jeda singkat untuk minum, bergerak, atau bermain.</p>
    <h3>Libatkan anak</h3><p>Biarkan anak ikut memilih urutan mata pelajaran. Anak yang merasa dilibatkan lebih mudah bekerja sama.</p>`,
    en:`<p>A packed study schedule often makes children resist learning. Start small and fit it around your family's habits.</p>
    <h3>Start with 20 minutes</h3><p>For early primary children, 20 focused minutes is enough. Add time slowly if they cope well.</p>
    <h3>Keep the same time</h3><p>Habits form through regularity. Choose a time after your child has eaten and isn't too tired.</p>
    <h3>Add breaks</h3><p>After studying, give a short pause to drink water, move or play.</p>
    <h3>Involve your child</h3><p>Let them choose the order of subjects. Children who feel involved cooperate more easily.</p>`}},
 { slug:"memilih-les-privat", date:"2026-10-05", photo:"images/blog-memilih.jpg",
   tag:{id:"Panduan",en:"Guide"},
   title:{id:"Kapan anak perlu les privat? Tanda-tanda yang perlu dilihat",en:"When does a child need a tutor? Signs to look for"},
   summary:{id:"Beberapa tanda bahwa anak mungkin butuh pendampingan tambahan.",en:"A few signs your child may benefit from extra support."},
   body:{
    id:`<p>Tidak semua anak perlu les, tetapi ada tanda-tanda yang bisa menjadi pertimbangan orang tua.</p>
    <h3>Nilai atau pemahaman menurun</h3><p>Jika anak mulai tertinggal di satu pelajaran, pendampingan satu per satu bisa membantu menutup celahnya.</p>
    <h3>Anak kehilangan percaya diri</h3><p>Kalimat seperti "aku memang bodoh" adalah tanda untuk segera mendampingi dengan sabar.</p>
    <h3>Orang tua kekurangan waktu</h3><p>Pekerjaan dan kesibukan keluarga itu wajar. Tutor yang tepat membantu anak tetap belajar teratur.</p>
    <h3>Sebelum memutuskan</h3><p>Tanyakan kecocokan tutor, metode, dan laporan perkembangan agar orang tua tetap tahu progres anak.</p>`,
    en:`<p>Not every child needs a tutor, but a few signs can help parents decide.</p>
    <h3>Grades or understanding drop</h3><p>If your child falls behind in one subject, one-to-one support can close the gap.</p>
    <h3>Confidence is slipping</h3><p>Phrases like "I'm just bad at this" are a cue to step in with patient support.</p>
    <h3>Parents are short on time</h3><p>Work and family life are demanding. The right tutor keeps your child's learning on track.</p>
    <h3>Before you decide</h3><p>Ask about tutor fit, teaching method and progress reports so you always know how your child is doing.</p>`}}
];

/* ====== Everything below is shared logic. You rarely need to edit it. ====== */
const L = () => document.documentElement.lang;
const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg || SITE.waText[L()])}`;
const ig = `https://instagram.com/${SITE.instagram}`;
const T = (o) => `<span class="id">${o.id}</span><span class="en">${o.en}</span>`;
const fmt = (d) => new Date(d).toLocaleDateString(L()==="id"?"id-ID":"en-GB",{day:"numeric",month:"long",year:"numeric"});

(function(){
  let lang="id"; try{ lang=localStorage.getItem("lang")||"id"; }catch(e){}
  document.documentElement.lang=lang;
})();

const NAV=[["index.html",{id:"Beranda",en:"Home"}],["programs.html",{id:"Program",en:"Programs"}],["tutors.html",{id:"Tutor",en:"Tutors"}],["blog.html",{id:"Blog",en:"Blog"}],["testimonials.html",{id:"Testimoni",en:"Testimonials"}],["contact.html",{id:"Kontak",en:"Contact"}]];

function renderChrome(){
  const page=(location.pathname.split("/").pop()||"index.html").replace("post.html","blog.html");
  const links=NAV.map(([h,t])=>`<a href="${h}" class="${h===page?"active":""}">${T(t)}</a>`).join("");
  const header=document.getElementById("site-header");
  if(header) header.outerHTML=`<header class="site-header"><div class="wrap nav">
    <a class="brand" href="index.html"><img class="logo-img" src="images/logo.png" alt="${SITE.name}" onerror="this.replaceWith(document.createTextNode('${SITE.name}'))"></a>
    <button class="menu-btn" aria-label="Menu" id="menu-btn">☰</button>
    <nav class="nav-links" id="nav-links">${links}<button class="lang" id="lang-btn" aria-label="Language">ID | EN</button></nav></div></header>`;
  const footer=document.getElementById("site-footer");
  if(footer) footer.outerHTML=`<footer class="site-footer"><div class="wrap"><div class="foot">
    <div><h4>${SITE.name}</h4><p>${T({id:"Les privat dan pendampingan belajar untuk anak di Manado.",en:"Tutoring and learning support for children in Manado."})}</p></div>
    <div><h4>${T({id:"Menu",en:"Menu"})}</h4><ul>${NAV.map(([h,t])=>`<li><a href="${h}">${T(t)}</a></li>`).join("")}</ul></div>
    <div><h4>${T({id:"Hubungi Kami",en:"Get in touch"})}</h4><ul><li><a href="${wa()}" target="_blank" rel="noopener" data-wa>WhatsApp</a></li><li><a href="${ig}" target="_blank" rel="noopener">Instagram @${SITE.instagram}</a></li><li>${SITE.city}</li></ul></div>
    </div><div class="copy">© ${new Date().getFullYear()} ${SITE.name}</div></div></footer>`;
  const ic=document.createElement("link"); ic.rel="icon"; ic.href="images/logo-mark.png"; document.head.appendChild(ic);
  document.getElementById("menu-btn")?.addEventListener("click",()=>document.getElementById("nav-links").classList.toggle("open"));
  document.getElementById("lang-btn")?.addEventListener("click",()=>{
    const n=L()==="id"?"en":"id"; document.documentElement.lang=n; try{localStorage.setItem("lang",n);}catch(e){}
    refreshLinks();
  });
  refreshLinks();
}
function refreshLinks(){ document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa(a.dataset.msg)); document.querySelectorAll("[data-ig]").forEach(a=>a.href=ig); }

/* photo slots: <div class="photo" data-photo="images/x.jpg" data-label="..."> shows the photo if the file exists, otherwise a neat placeholder */
const CAM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';
function renderPhotos(root=document){
  root.querySelectorAll(".photo[data-photo]").forEach(el=>{
    if(el.dataset.done) return; el.dataset.done=1;
    el.innerHTML=`<div class="ph">${CAM}<span>${el.dataset.label||"Foto"}</span><span style="opacity:.6;font-weight:500">${el.dataset.photo}</span></div>`;
    const img=new Image(); img.alt=el.dataset.label||""; img.loading="lazy";
    img.onload=()=>{el.innerHTML=""; el.appendChild(img);}; img.src=el.dataset.photo;
  });
}
function postCard(p){
  return `<a class="post-card" href="post.html?p=${p.slug}"><div class="photo" data-photo="${p.photo}" data-label="${p.title.en}"></div>
  <div class="body"><div class="meta"><span class="pill">${T(p.tag)}</span><span>${fmt(p.date)}</span></div>
  <h3>${T(p.title)}</h3><p>${T(p.summary)}</p></div></a>`;
}
function renderBlog(){ const el=document.getElementById("blog-grid"); if(el) el.innerHTML=POSTS.map(postCard).join(""); const lt=document.getElementById("latest-posts"); if(lt) lt.innerHTML=POSTS.slice(0,3).map(postCard).join(""); }
function renderPost(){
  const el=document.getElementById("post"); if(!el) return;
  const slug=new URLSearchParams(location.search).get("p"); const p=POSTS.find(x=>x.slug===slug)||POSTS[0];
  document.title=p.title.en+" | "+SITE.name;
  el.innerHTML=`<a class="back" href="blog.html">← ${T({id:"Semua artikel",en:"All articles"})}</a>
   <div class="meta"><span class="pill">${T(p.tag)}</span><span>${fmt(p.date)}</span></div>
   <h1>${T(p.title)}</h1><div class="photo wide" data-photo="${p.photo}" data-label="${p.title.en}" style="margin:20px 0 28px"></div>
   <div class="body"><div class="id">${p.body.id}</div><div class="en">${p.body.en}</div></div>
   <div class="cta-band" style="margin-top:40px"><h3 style="color:#fff">${T({id:"Ingin pendampingan untuk anak Anda?",en:"Want support for your child?"})}</h3>
   <div class="btn-row"><a class="btn btn-wa" data-wa target="_blank" rel="noopener">${T({id:"Chat via WhatsApp",en:"Chat on WhatsApp"})}</a></div></div>`;
}
document.addEventListener("DOMContentLoaded",()=>{ renderChrome(); renderBlog(); renderPost(); renderPhotos(); refreshLinks(); });
