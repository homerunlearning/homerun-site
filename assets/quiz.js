/* HomeRun program-match quiz. Edit questions, answers and results here. */
const bi=(id,en)=>({id,en});
const QUESTIONS={
 age:{type:"one",q:bi("Kita mulai dari siapa yang akan kita semangati. Berapa usia anak Anda?","Let's start with who we're cheering on. How old is your child?"),
  opts:[bi("2–3 tahun","2–3 years"),bi("4–6 tahun","4–6 years"),bi("7–12 tahun","7–12 years"),bi("13 tahun ke atas","13 and up")]},
 stage:{type:"one",q:bi("Bayangkan hari sekolahnya. Sekarang anak Anda ada di tahap mana?","Picture their school day. Where is your child right now?"),
  opts:[bi("Belum sekolah","Not in school yet"),bi("TK atau PAUD","Kindergarten or preschool"),bi("SD kelas 1–2","Grade 1–2"),bi("SD kelas 3–6","Grade 3–6"),bi("SMP","Middle school"),bi("SMA","High school"),bi("Kuliah","College")]},
 read:{type:"one",q:bi("Anak Anda melihat kata pendek di papan nama atau sampul buku. Apa yang terjadi?","Your child spots a short word on a sign or book cover. What happens?"),
  opts:[bi("Belum mengenal huruf","Doesn't recognize letters yet"),bi("Mengenal beberapa huruf tapi belum bisa menggabungkannya","Knows some letters but can't blend them"),bi("Mengeja kata pendek pelan-pelan","Sounds out short words slowly"),bi("Membaca kata pendek dengan lancar","Reads short words easily")]},
 write:{type:"one",q:bi("Anda memberi anak sebuah pensil. Apa yang dia lakukan?","You hand your child a pencil. What do they do?"),
  opts:[bi("Mencoret-coret","Scribbles"),bi("Menulis namanya dan beberapa huruf","Writes their name and a few letters"),bi("Menulis kata sederhana","Writes simple words"),bi("Menulis kalimat utuh","Writes full sentences")]},
 count:{type:"one",q:bi("Anda minta anak menghitung mainan di lantai. Apa yang terjadi?","You ask your child to count the toys on the floor. What happens?"),
  opts:[bi("Hanya menunjuk-nunjuk","Just points at them"),bi("Menghitung sampai 10, kadang ada angka yang terlewat","Counts to 10, sometimes skips a number"),bi("Menghitung sampai 20 atau lebih dengan benar","Counts to 20 or more correctly"),bi("Sudah bisa tambah dan kurang angka kecil","Adds and takes away small numbers")]},
 need1:{type:"one",q:bi("Mana yang paling mirip dengan suasana rumah Anda belakangan ini?","Which sounds most like your house lately?"),
  opts:[bi("Anak lain sudah bisa membaca dan saya ingin anak saya siap","Other kids already read and I want mine to be ready"),
        bi("PR memakan waktu lama dan sering berakhir dengan tangisan","Homework takes forever and ends in tears"),
        bi("Nilai mulai turun dan ujian sudah dekat","Grades are slipping and exams are close"),
        bi("Mengincar IELTS, TOEFL, atau Olimpiade","Aiming at IELTS, TOEFL, or an Olympiad"),
        bi("Bahasa Inggris atau matematika terasa seperti tembok","English or math feels like a wall"),
        bi("Sering tertukar huruf dan angka, lalu kehilangan percaya diri","Mixes up letters and numbers and is losing confidence")],
  why:[bi("Persiapan sekarang membuat hari pertama sekolah jadi penuh percaya diri.","A head start now makes the first day of school a confident one."),
       bi("Kami mengubah PR dari pertarungan menjadi rutinitas yang tenang.","We turn homework from a battle into a calm routine."),
       bi("Kami menjaga pelajaran tetap selaras dengan kurikulum sekolah dan menyiapkan ujian.","We keep learning aligned with the school curriculum and prepare for exams."),
       bi("Tutor kami menyiapkan anak untuk IELTS, TOEFL, dan Olimpiade.","Our tutors prepare children for IELTS, TOEFL and Olympiads."),
       bi("Tutor spesialis membuat Bahasa Inggris dan matematika terasa bisa ditaklukkan.","Specialist tutors make English and math feel doable."),
       bi("Kami membangun lagi membaca, menulis, dan berhitung selangkah demi selangkah sampai percaya dirinya kembali.","We rebuild reading, writing and counting step by step until confidence comes back.")]},
 need2:{type:"one",q:bi("Apa yang akan membuat Anda lega bulan ini?","What would give you a sigh of relief this month?"),
  opts:[bi("Melihat anak membaca kata pertamanya","Seeing my child read their first words"),bi("PR selesai tanpa drama","Homework finished without a battle"),bi("Hasil ujian yang bagus","A good exam result"),bi("Skor tes atau lomba yang kuat","A strong test or competition score")]},
 lang:{type:"one",q:bi("Anak Anda sebaiknya makin kuat di bahasa apa?","Which language do you want your child to grow stronger in?"),
  opts:[bi("Bahasa Indonesia","Bahasa Indonesia"),bi("Bahasa Inggris","English"),bi("Keduanya","Both")]},
 subj:{type:"many",q:bi("Menurut Anda, pelajaran apa yang paling perlu dibantu? Centang semua yang sesuai.","Which subjects do you think your child needs the most help with? Tick all that apply."),
  opts:[bi("Matematika","Math"),bi("Bahasa Inggris","English"),bi("Bahasa Indonesia","Bahasa Indonesia"),bi("IPA","Science"),bi("Membaca dan menulis","Reading and writing"),bi("Semua pelajaran","Everything")]}
};
const PROGRAMS={
 hh:{c:"#66BB6A",name:"Homeschool Heroes",tag:bi("Usia 2–3","Ages 2–3"),
   text:bi("Persiapan sebelum masuk TK atau PAUD: belajar menulis, berhitung, dan membaca kata pendek lewat aktivitas yang menyenangkan, supaya anak Anda unggul di hari pertama.","A head start before kindergarten or preschool: writing, counting and reading short words through fun activities, so your child shines on day one.")},
 cc:{c:"#F9DA4A",name:"Calistung Champs",tag:bi("Usia 4–7","Ages 4–7"),
   text:bi("Mengasah dan menyempurnakan membaca, berhitung, dan menulis dalam Bahasa Indonesia dan Inggris, cocok untuk anak TK sampai SD kelas 1–2.","Sharpening and perfecting reading, counting and writing in both Bahasa Indonesia and English, ideal for kindergarten to grade 2.")},
 aa:{c:"#EF5350",name:"Afterschool Aces",tag:bi("Usia 7–12","Ages 7–12"),
   text:bi("Untuk anak SD yang calistungnya sudah mantap: bantuan PR, persiapan ujian, bahkan persiapan lomba tingkat SD, selalu selaras dengan kurikulum sekolah.","For elementary children whose basics are solid: homework help, exam prep and even grade-school competition prep, always aligned with the school curriculum.")},
 hr:{c:"#9EA9F3",name:"HomeRun+",tag:bi("SMP sampai Kuliah","Middle school to college"),
   text:bi("Dorongan akademik untuk Bahasa Inggris dan Matematika bersama tutor terbaik di bidangnya, plus persiapan IELTS, TOEFL, Olimpiade, dan ujian lainnya.","An academic boost in English and math with our most expert tutors, plus IELTS, TOEFL, Olympiad and other exam prep.")}
};

/* ---- pure logic (easy to test) ---- */
function earlyStage(a){ return a.stage===0||a.stage===1||a.stage===2; }
function stepsFor(a){
  const s=["age","stage"];
  if(a.stage!==undefined && earlyStage(a)) s.push("read","write","count");
  s.push("need1","need2","lang");
  if(a.age!==undefined && a.age>=2) s.push("subj");
  return s;
}
function matchProgram(a){
  if(a.age===3||a.stage>=4) return "hr";
  if(a.age===0) return "hh";
  if(a.age===1) return "cc";
  if(earlyStage(a) && [a.read,a.write,a.count].some(v=>v!==undefined&&v<3)) return "cc";
  return "aa";
}
if(typeof module!=="undefined") module.exports={stepsFor,matchProgram};

/* ---- interface ---- */
if(typeof document!=="undefined"){(function(){
  let a={}, i=0, overlay, opener;
  const lang=()=>document.documentElement.lang;
  const tx=o=>`<span class="id">${o.id}</span><span class="en">${o.en}</span>`;
  const plain=o=>o[lang()];
  const steps=()=>stepsFor(a);

  function open(btn){
    opener=btn; a={}; i=0;
    overlay=document.createElement("div"); overlay.className="quiz-overlay";
    overlay.innerHTML=`<div class="quiz" role="dialog" aria-modal="true" aria-labelledby="quiz-q"></div>`;
    document.body.appendChild(overlay); document.body.classList.add("quiz-open");
    overlay.addEventListener("click",e=>{ if(e.target===overlay) close(); });
    document.addEventListener("keydown",onKey); render();
  }
  function close(){ overlay?.remove(); overlay=null; document.body.classList.remove("quiz-open"); document.removeEventListener("keydown",onKey); opener?.focus(); }
  function onKey(e){ if(e.key==="Escape") close(); }

  function render(){
    const st=steps(), id=st[i], panel=overlay.querySelector(".quiz");
    if(!id){ return result(panel); }
    const q=QUESTIONS[id], pct=Math.round(i/st.length*100);
    const top=`<div class="quiz-top"><div class="quiz-bar"><i style="width:${Math.max(pct,6)}%"></i></div><button class="quiz-x" aria-label="Close" type="button">✕</button></div>`;
    let body=`<h2 class="quiz-q" id="quiz-q" tabindex="-1">${tx(q.q)}</h2>`;
    if(q.type==="many"){
      const sel=a[id]||[];
      body+=`<div class="opts" role="group">`+q.opts.map((o,n)=>`<button type="button" class="opt ${sel.includes(n)?"on":""}" data-n="${n}" role="checkbox" aria-checked="${sel.includes(n)}"><span class="box">${sel.includes(n)?"✓":""}</span><span>${tx(o)}</span></button>`).join("")+`</div>
      <div class="btn-row"><button type="button" class="btn btn-primary" id="quiz-next"><span class="id">Lihat hasilnya</span><span class="en">See my match</span></button></div>`;
    } else {
      body+=`<div class="opts">`+q.opts.map((o,n)=>`<button type="button" class="opt ${a[id]===n?"on":""}" data-n="${n}"><span>${tx(o)}</span></button>`).join("")+`</div>`;
    }
    panel.innerHTML=top+body+`<div class="quiz-foot"><button type="button" class="quiz-back" ${i===0?"hidden":""}>← <span class="id">Kembali</span><span class="en">Back</span></button></div>`;
    panel.querySelector(".quiz-x").onclick=close;
    panel.querySelector(".quiz-back").onclick=()=>{ i=Math.max(0,i-1); render(); };
    panel.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
      const n=+b.dataset.n;
      if(q.type==="many"){ const s=a[id]||[]; a[id]=s.includes(n)?s.filter(x=>x!==n):[...s,n]; render(); panel.querySelector(`[data-n="${n}"]`)?.focus(); }
      else{ a[id]=n; panel.querySelectorAll(".opt").forEach(x=>x.classList.toggle("on",x===b)); setTimeout(()=>{ if(!overlay) return; i++; render(); },180); }
    });
    panel.querySelector("#quiz-next")?.addEventListener("click",()=>{ i++; render(); });
    panel.querySelector("#quiz-q").focus({preventScroll:true}); panel.scrollTop=0;
  }

  function result(panel){
    const key=matchProgram(a), p=PROGRAMS[key];
    const why=(a.need1!==undefined)?QUESTIONS.need1.why[a.need1]:null;
    const L=lang();
    const parts=[];
    parts.push(L==="id"?`Halo HomeRun Learning! Kami baru saja mengikuti kuis program di website dan hasilnya ${p.name}.`:`Hello HomeRun Learning! We just took the program quiz on your website and got ${p.name}.`);
    parts.push((L==="id"?"Usia anak: ":"Child's age: ")+plain(QUESTIONS.age.opts[a.age])+". "+(L==="id"?"Tahap sekolah: ":"School stage: ")+plain(QUESTIONS.stage.opts[a.stage])+".");
    if(a.need1!==undefined) parts.push((L==="id"?"Yang paling kami butuhkan: ":"What we need most: ")+plain(QUESTIONS.need1.opts[a.need1])+".");
    if(a.lang!==undefined) parts.push((L==="id"?"Fokus bahasa: ":"Language focus: ")+plain(QUESTIONS.lang.opts[a.lang])+".");
    if(a.subj&&a.subj.length) parts.push((L==="id"?"Pelajaran yang perlu dibantu: ":"Subjects needing help: ")+a.subj.map(n=>plain(QUESTIONS.subj.opts[n])).join(", ")+".");
    parts.push(L==="id"?"Bisakah kami menjadwalkan kelas percobaan?":"Could we book a trial class?");
    const msg=parts.join(" ");
    panel.innerHTML=`<div class="quiz-top"><div class="quiz-bar"><i style="width:100%"></i></div><button class="quiz-x" aria-label="Close" type="button">✕</button></div>
    <div class="quiz-eyebrow"><span class="id">Program yang paling cocok</span><span class="en">Your best match</span></div>
    <div class="result" style="--c:${p.c}"><span class="tag">${tx(p.tag)}</span><h3 id="quiz-q" tabindex="-1" style="outline:none">${p.name}</h3><p>${tx(p.text)}</p>
    ${why?`<div class="why">${tx(why)}</div>`:""}</div>
    <div class="btn-row"><a class="btn btn-wa" id="quiz-wa" target="_blank" rel="noopener"><span class="id">Chat WhatsApp untuk kelas percobaan</span><span class="en">Chat on WhatsApp for a trial class</span></a></div>
    <div class="quiz-foot"><button type="button" class="quiz-back" id="quiz-retake">↺ <span class="id">Ulangi kuis</span><span class="en">Retake quiz</span></button><a href="programs.html" style="font-weight:600"><span class="id">Lihat semua program</span><span class="en">See all programs</span></a></div>`;
    // build the link for both languages so it follows the language toggle
    const wa=panel.querySelector("#quiz-wa"); wa.href=`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
    panel.querySelector(".quiz-x").onclick=close;
    panel.querySelector("#quiz-retake").onclick=()=>{ a={}; i=0; render(); };
    panel.querySelector("#quiz-q").focus({preventScroll:true}); panel.scrollTop=0;
  }
  document.querySelectorAll("[data-quiz]").forEach(b=>b.addEventListener("click",()=>open(b)));
})();}
