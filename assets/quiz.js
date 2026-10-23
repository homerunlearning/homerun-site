/* HomeRun program-match quiz. Edit questions, answers and results here. */
const bi=(id,en)=>({id,en});
const QUESTIONS={
 age:{type:"one",q:bi("Berapa usia anak Anda?","How old is your child?"),
  opts:[bi("2–3 tahun","2–3 years"),bi("4–6 tahun","4–6 years"),bi("7–12 tahun","7–12 years"),bi("13 tahun ke atas","13 and up")]},
 stage:{type:"one",q:bi("Pilihlah jenjang pendidikan anak Anda di bawah ini.","Choose which school grade your child is in."),
  opts:[bi("Belum sekolah","Not in school yet"),bi("TK atau PAUD","Kindergarten or preschool"),bi("SD kelas 1–2","Grade 1–2"),bi("SD kelas 3–6","Grade 3–6"),bi("SMP","Middle school"),bi("SMA","High school"),bi("Kuliah","College")]},
 read:{type:"one",q:bi("Jika anak Anda melihat kata pendek (contoh: bola, sapi), apa yang dia lakukan?","When your child sees a short word (e.g., cat, sun), what do they do?"),
  opts:[bi("Belum kenal huruf","Doesn't know letters yet"),bi("Kenal beberapa huruf","Knows some letters"),bi("Mengeja pelan-pelan","Sounds it out slowly"),bi("Lancar membaca kata pendek","Reads short words easily")]},
 write:{type:"one",q:bi("Jika anak Anda diberi pensil, apa yang dia tulis?","When your child is given a pencil, what do they write?"),
  opts:[bi("Hanya coret-coret","Only scribbles"),bi("Namanya dan beberapa huruf","Their name and a few letters"),bi("Kata sederhana","Simple words"),bi("Kalimat utuh","Full sentences")]},
 need:{type:"many",q:bi("Apa yang paling membuat Anda khawatir tentang perkembangan pendidikan anak saat ini?","What worries you most about your child's educational development right now?"),
  hint:bi("Pilih semua yang sesuai.","Tick all that apply."),
  opts:[bi("Anak belum siap masuk TK atau SD.","My child isn't ready to start kindergarten or school."),
        bi("Anak lain sudah bisa membaca, tetapi anak saya belum.","Other children can already read, but mine can't yet."),
        bi("Anak sulit fokus saat belajar.","My child struggles to focus while studying."),
        bi("PR memakan waktu lama dan berakhir dengan tangisan.","Homework takes forever and ends in tears."),
        bi("Nilai mulai turun dan ujian sudah dekat.","Grades are slipping and exams are coming up."),
        bi("Anak mulai kehilangan percaya diri di sekolah.","My child is starting to lose confidence at school."),
        bi("Anak sering tertukar huruf atau angka.","My child often mixes up letters or numbers."),
        bi("Bahasa Inggris atau matematika terasa sangat sulit.","English or math feels very hard."),
        bi("Saya sibuk dan tidak sempat menemani anak belajar.","I'm too busy to sit with my child while they study."),
        bi("Anak belum siap untuk IELTS, TOEFL, atau Olimpiade.","My child isn't ready for IELTS, TOEFL, or an Olympiad.")],
  why:[bi("Kami menyiapkan anak agar percaya diri sebelum hari pertama sekolah.","We prepare your child to feel confident before the first day of school."),
       bi("Dengan latihan singkat yang seru, anak mengejar ketertinggalan tanpa tekanan.","With short, fun practice, your child catches up without pressure."),
       bi("Tutor kami memakai sesi singkat dan aktivitas seru agar anak tetap fokus.","Our tutors use short sessions and fun activities to keep your child focused."),
       bi("Kami mengubah PR dari pertengkaran menjadi rutinitas yang tenang.","We turn homework from a battle into a calm routine."),
       bi("Kami menjaga pelajaran tetap selaras dengan kurikulum sekolah dan menyiapkan ujian.","We keep learning aligned with the school curriculum and prepare for exams."),
       bi("Kemajuan kecil yang dirayakan membuat rasa percaya diri anak tumbuh kembali.","Celebrating small wins helps your child's confidence grow back."),
       bi("Kami membangun kembali dasar membaca, menulis, dan berhitung selangkah demi selangkah.","We rebuild the basics of reading, writing, and counting step by step."),
       bi("Tutor spesialis membuat Bahasa Inggris dan matematika terasa lebih mudah.","Specialist tutors make English and math feel easier."),
       bi("Tutor kami mendampingi anak belajar, sehingga Anda bisa lebih tenang.","Our tutors guide your child's study, so you can worry less."),
       bi("Tutor kami menyiapkan anak untuk IELTS, TOEFL, dan Olimpiade.","Our tutors prepare children for IELTS, TOEFL, and Olympiads.")]},
 subj:{type:"many",q:bi("Mata pelajaran apa yang ingin Anda prioritaskan dalam les nanti?","Which subjects would you like to prioritize in the course?"),
  hint:bi("Pilih semua yang sesuai.","Tick all that apply."),
  opts:[bi("Matematika","Math"),bi("Bahasa Inggris","English"),bi("Bahasa Indonesia","Bahasa Indonesia"),bi("IPA","Science"),bi("Membaca dan menulis","Reading and writing"),bi("Semua pelajaran","All subjects")]}
};
const PROGRAMS={
 hh:{c:"#66BB6A",name:"Homeschool Heroes",tag:bi("Usia 2–3","Ages 2–3"),
   text:bi("Persiapan sebelum masuk TK atau PAUD: belajar menulis, berhitung, dan membaca kata pendek lewat aktivitas yang menyenangkan, supaya anak Anda unggul di hari pertama.","A head start before kindergarten or preschool: writing, counting, and reading short words through fun activities, so your child shines on the first day.")},
 cc:{c:"#F9DA4A",name:"Calistung Champs",tag:bi("Usia 4–7","Ages 4–7"),
   text:bi("Mengasah dan menyempurnakan kemampuan membaca, berhitung, dan menulis dalam Bahasa Indonesia dan Inggris, cocok untuk anak TK sampai SD kelas 1–2.","Sharpening and perfecting reading, counting, and writing in both Bahasa Indonesia and English, ideal for kindergarten to grade 2.")},
 aa:{c:"#EF5350",name:"Afterschool Aces",tag:bi("Usia 7–12","Ages 7–12"),
   text:bi("Untuk anak SD yang calistungnya sudah mantap: bantuan PR, persiapan ujian, bahkan persiapan lomba tingkat SD, selalu selaras dengan kurikulum sekolah.","For elementary children whose basics are solid: homework help, exam prep, and even grade-school competition prep, always aligned with the school curriculum.")},
 hr:{c:"#9EA9F3",name:"HomeRun+",tag:bi("SMP sampai Kuliah","Middle school to college"),
   text:bi("Dorongan akademik untuk Bahasa Inggris dan Matematika bersama tutor terbaik di bidangnya, plus persiapan IELTS, TOEFL, Olimpiade, dan ujian lainnya.","An academic boost in English and math with our most expert tutors, plus IELTS, TOEFL, Olympiad, and other exam prep.")}
};

/* ---- pure logic (easy to test) ---- */
function earlyStage(a){ return a.stage===0||a.stage===1||a.stage===2; }
function stepsFor(a){
  const s=["age","stage"];
  if(a.stage!==undefined && earlyStage(a)) s.push("read","write");
  s.push("need");
  if(a.age!==undefined && a.age>=2) s.push("subj");
  return s;
}
function matchProgram(a){
  if(a.age===3||a.stage>=4) return "hr";
  if(a.age===0) return "hh";
  if(a.age===1) return "cc";
  if(earlyStage(a) && [a.read,a.write].some(v=>v!==undefined&&v<3)) return "cc";
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
    let body=`<h2 class="quiz-q" id="quiz-q" tabindex="-1">${tx(q.q)}</h2>`+(q.hint?`<p class="quiz-hint">${tx(q.hint)}</p>`:"");
    if(q.type==="many"){
      const sel=a[id]||[];
      body+=`<div class="opts" role="group">`+q.opts.map((o,n)=>`<button type="button" class="opt ${sel.includes(n)?"on":""}" data-n="${n}" role="checkbox" aria-checked="${sel.includes(n)}"><span class="box">${sel.includes(n)?"✓":""}</span><span>${tx(o)}</span></button>`).join("")+`</div>
      <div class="btn-row"><button type="button" class="btn btn-primary" id="quiz-next">${i===st.length-1?'<span class="id">Lihat hasilnya</span><span class="en">See my match</span>':'<span class="id">Lanjut</span><span class="en">Next</span>'}</button></div>`;
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
    const worries=(a.need||[]).slice().sort((x,y)=>x-y);
    const why=worries.length?QUESTIONS.need.why[worries[0]]:null;
    const L=lang();
    const parts=[];
    parts.push(L==="id"?`Halo HomeRun Learning! Kami baru saja mengikuti kuis program di website dan hasilnya ${p.name}.`:`Hello HomeRun Learning! We just took the program quiz on your website and got ${p.name}.`);
    parts.push((L==="id"?"Usia anak: ":"Child's age: ")+plain(QUESTIONS.age.opts[a.age])+". "+(L==="id"?"Jenjang pendidikan: ":"School grade: ")+plain(QUESTIONS.stage.opts[a.stage])+".");
    if(worries.length) parts.push((L==="id"?"Yang kami khawatirkan: ":"Our concerns: ")+worries.slice(0,3).map(n=>plain(QUESTIONS.need.opts[n]).replace(/\.$/,"")).join("; ")+".");
    if(a.subj&&a.subj.length) parts.push((L==="id"?"Mata pelajaran yang ingin diprioritaskan: ":"Subjects to prioritize: ")+a.subj.map(n=>plain(QUESTIONS.subj.opts[n])).join(", ")+".");
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
