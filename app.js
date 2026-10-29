(function () {
  var $ = function (s) { return document.querySelector(s); };
  var TOQUES = 3;

  /* ---------- Textos ---------- */
  $("#lblPara").textContent = CFG.para;
  $("#toName").textContent = CFG.nombreEl;
  $("#fromName").textContent = CFG.nombreElla;
  $("#topTitle").textContent = CFG.tituloTop;
  $("#topSub").textContent = CFG.subTop;
  $("#letterTitle").textContent = CFG.cartaTitulo;
  $("#foot").textContent = CFG.pie;

  /* ---------- Fotos: se cargan desde la carpeta images/ ---------- */
  function foto(el, src) {
    el.classList.add("empty");
    if (!src) return el;
    var t = new Image();
    t.onload = function () { el.style.backgroundImage = "url('" + src + "')"; el.classList.remove("empty"); };
    t.src = src;
    return el;
  }
  function nuevaFoto(src) { var d = document.createElement("div"); d.className = "ph"; return foto(d, src); }

  foto($("#hero"), CFG.fotoPrincipal);
  CFG.galeria.forEach(function (s) { $("#gal").appendChild(nuevaFoto(s)); });

  CFG.momentos.forEach(function (m) {
    var a = document.createElement("article");
    a.className = "post";
    a.appendChild(nuevaFoto(m.foto));
    var t = document.createElement("div");
    t.className = "t";
    t.innerHTML = "<small></small><h3></h3><p></p>";
    t.children[0].textContent = m.fecha;
    t.children[1].textContent = m.titulo;
    t.children[2].textContent = m.texto;
    a.appendChild(t);
    $("#moments").appendChild(a);
  });

  CFG.carta.forEach(function (txt) {
    var p = document.createElement("p"); p.textContent = txt; $("#letter").appendChild(p);
  });

  /* ---------- Audio (carpeta audio/) ---------- */
  if (CFG.audio) { $("#aud").src = CFG.audio; } else { $("#secAudio").style.display = "none"; }

  /* ---------- Spotify ---------- */
  var m = (CFG.spotify || "").match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist|episode)\/([A-Za-z0-9]+)/);
  if (m) {
    $("#spOut").innerHTML = '<iframe src="https://open.spotify.com/embed/' + m[1] + "/" + m[2] + '" allow="encrypted-media" loading="lazy"></iframe>';
  } else { $("#secSpotify").style.display = "none"; }

  /* ---------- Contador ---------- */
  var p = CFG.fechaInicio.split("-"), s = new Date(+p[0], p[1] - 1, +p[2]), n = new Date();
  $("#sinceTxt").textContent = s.toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" });
  $("#days").textContent = Math.max(0, Math.floor((n - s) / 864e5)).toLocaleString("es");
  var y = n.getFullYear() - s.getFullYear(), mo = n.getMonth() - s.getMonth(), d = n.getDate() - s.getDate();
  if (d < 0) { mo--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); }
  if (mo < 0) { y--; mo += 12; }
  $("#yy").textContent = y; $("#mm").textContent = mo; $("#dd").textContent = d;

  /* ---------- Invitación ---------- */
  var iv = CFG.invitacion;
  foto($("#invPhoto"), iv.foto);
  $("#invTitle").textContent = iv.titulo;
  $("#invWhen").textContent = iv.cuando;
  $("#invWhere").textContent = iv.lugar;
  $("#invText").textContent = iv.texto;
  $("#next").href = iv.siguientePagina;
  $("#env").onclick = function () { this.style.display = "none"; $("#inv").classList.add("show"); };

  /* ---------- Entrada: portada → corazón (3 toques) → mensaje ---------- */
  var dots = $("#dots");
  for (var i = 0; i < TOQUES; i++) dots.appendChild(document.createElement("i"));

  var paso = 0, toques = 0;
  function irAlCorazon() {
    if (paso) return; paso = 1;
    $("#p1").classList.add("up"); $("#p2").classList.remove("below");
  }
  $("#go").onclick = irAlCorazon;
  var y0 = 0;
  addEventListener("touchstart", function (e) { y0 = e.touches[0].clientY; }, { passive: true });
  addEventListener("touchend", function (e) { if (y0 - e.changedTouches[0].clientY > 40) irAlCorazon(); });
  addEventListener("wheel", function (e) { if (e.deltaY > 20) irAlCorazon(); }, { passive: true });

  $("#heart").onclick = function () {
    if (toques >= TOQUES) return;
    toques++;
    var h = $("#heart");
    h.classList.add("pop"); setTimeout(function () { h.classList.remove("pop"); }, 150);
    h.querySelector("path").style.fillOpacity = 0.12 + toques * (0.88 / TOQUES);
    Array.prototype.forEach.call(dots.children, function (el, k) { el.classList.toggle("on", k < toques); });
    if (toques === TOQUES) setTimeout(revelar, 600);
  };

  function revelar() {
    $("#p2").classList.add("up");
    var msg = $("#msg"); msg.classList.remove("below");
    setTimeout(function () { msg.classList.add("show"); }, 300);
    setTimeout(function () {
      var mn = $("#main"); mn.style.display = "block";
      $("#gate").classList.add("out");
      requestAnimationFrame(function () { mn.classList.add("show"); });
      document.body.classList.add("open"); scrollTo(0, 0);
    }, 3300);
  }
})();
