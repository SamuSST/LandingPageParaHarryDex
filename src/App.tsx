import { useEffect, useRef } from "react";
import hogwarts from "./assets/crests/hogwarts.png";
import gryffindor from "./assets/crests/gryffindor.png";
import slytherin from "./assets/crests/slytherin.png";
import ravenclaw from "./assets/crests/ravenclaw.png";
import hufflepuff from "./assets/crests/hufflepuff.png";

const houses = [
  { name: "Gryffindor", crest: gryffindor, className: "house-red" },
  { name: "Slytherin", crest: slytherin, className: "house-green" },
  { name: "Ravenclaw", crest: ravenclaw, className: "house-blue" },
  { name: "Hufflepuff", crest: hufflepuff, className: "house-yellow" },
];

const features = [
  { icon: "search", title: "Búsqueda encantada", copy: "Encuentra personajes, varitas y criaturas al instante, incluso antes de terminar el nombre.", meta: "Hechizo: Revelio" },
  { icon: "flame", title: "Filtros por patronus", copy: "Cruza casas, especies, linajes y formas corpóreas para descubrir conexiones ocultas.", meta: "Archivo: 120+ fichas" },
  { icon: "orb", title: "Magia sin conexión", copy: "Guarda tu colección completa y consúltala desde cualquier rincón, con o sin señal.", meta: "Modo: Offline" },
];

const archiveItems = [
  { rune: "ϟ", title: "Varitas", count: "50+", copy: "Madera, núcleo, longitud, flexibilidad y propietario registrados en cada ficha." },
  { rune: "☾", title: "Patronus", count: "36", copy: "Formas corpóreas, simbolismo y vínculos mágicos reunidos en un bestiario luminoso." },
  { rune: "✧", title: "Hechizos", count: "80+", copy: "Encantamientos, maleficios y contrahechizos ordenados por dificultad y uso." },
  { rune: "⚗", title: "Pociones", count: "24", copy: "Ingredientes, efectos y nivel de preparación para ampliar tu conocimiento alquímico." },
];

const journey = [
  { step: "I", title: "Elige tu casa", copy: "Comienza desde el legado que mejor representa tu forma de entender la magia." },
  { step: "II", title: "Abre el archivo", copy: "Navega por categorías, cruza filtros y revela fichas ocultas en tu colección." },
  { step: "III", title: "Completa el códice", copy: "Marca descubrimientos, guarda favoritos y lleva tu progreso siempre contigo." },
];

const questions = [
  ["¿HarryDex funciona sin internet?", "Sí. Una vez descargado el archivo de datos, puedes consultar casas, varitas, hechizos y patronus completamente offline."],
  ["¿La APK es gratuita?", "Sí. HarryDex puede descargarse gratuitamente y no requiere suscripción para acceder al archivo principal."],
  ["¿Cómo se actualiza la colección?", "Cuando recuperas conexión, la aplicación comprueba si existen nuevas fichas y sincroniza el archivo automáticamente."],
  ["¿Es una aplicación oficial?", "No. HarryDex es un proyecto independiente creado por fans y no está afiliado a Warner Bros. ni a Wizarding World."],
];

const reviews = [
  {
    quote: "La cantidad de detalles es increíble. Puedo consultar una varita en segundos y guardar mis descubrimientos aunque esté viajando sin conexión.",
    name: "Lucía M.",
    role: "Coleccionista desde 2023",
    house: "Ravenclaw",
    crest: ravenclaw,
    className: "review-blue",
  },
  {
    quote: "Se siente como llevar un pequeño archivo encantado en el bolsillo. El diseño, los filtros y el sistema de casas están cuidadísimos.",
    name: "Mateo R.",
    role: "Explorador del códice",
    house: "Gryffindor",
    crest: gryffindor,
    className: "review-red",
  },
  {
    quote: "Mi función favorita es el modo offline. La colección carga rápido, es fácil de explorar y siempre termino encontrando un dato nuevo.",
    name: "Sofía V.",
    role: "Maestra de pociones",
    house: "Slytherin",
    crest: slytherin,
    className: "review-green",
  },
];

function Spark({ className = "" }: { className?: string }) {
  return <span className={`spark ${className}`} aria-hidden="true">✦</span>;
}

function FeatureIcon({ type }: { type: string }) {
  if (type === "flame") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="feature-svg blue-flame">
        <path className="flame-outer" d="M34 5c3 12-7 14-3 25 2-7 8-9 10-16 9 9 15 19 11 31-3 10-11 15-21 15S12 53 11 43c-1-9 4-17 12-24-1 9 2 12 5 14C23 20 31 14 34 5Z" />
        <path className="flame-inner" d="M31 55c-6-2-9-7-7-12 1-4 5-7 8-11 0 6 5 8 6 13 1 4-2 8-7 10Z" />
      </svg>
    );
  }
  if (type === "orb") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="feature-svg magic-orb-icon">
        <circle cx="32" cy="29" r="19" />
        <path className="orb-runes" d="M17 29c8-11 22-11 30 0M20 20c7 4 17 4 24 0M32 10c-7 10-7 28 0 38M32 10c7 10 7 28 0 38" />
        <path d="M23 52h18M19 58h26" />
        <path className="orb-star" d="m32 18 2.2 6.8L41 27l-6.8 2.2L32 36l-2.2-6.8L23 27l6.8-2.2L32 18Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="feature-svg magic-search-icon">
      <circle cx="27" cy="27" r="16" />
      <circle cx="27" cy="27" r="11" className="search-lens" />
      <path d="m39 39 14 14M48 48l5-5 7 7-5 5Z" />
      <path className="search-star" d="m26 16 1.7 5.3L33 23l-5.3 1.7L26 30l-1.7-5.3L19 23l5.3-1.7L26 16ZM42 8l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" />
    </svg>
  );
}

function TransparentCrest({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const canvas = ref.current;
      if (!canvas) return;
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d");
      if (!context) return;
      context.drawImage(image, 0, 0);
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
      for (let index = 0; index < pixels.data.length; index += 4) {
        const red = pixels.data[index];
        const green = pixels.data[index + 1];
        const blue = pixels.data[index + 2];
        const maximum = Math.max(red, green, blue);
        const minimum = Math.min(red, green, blue);
        const saturation = maximum ? (maximum - minimum) / maximum : 0;
        const brightness = (red + green + blue) / 3;
        if (brightness > 166 && saturation < 0.24) {
          pixels.data[index + 3] = Math.max(0, Math.min(255, ((saturation - 0.025) / 0.215) * 255));
        }
      }
      context.putImageData(pixels, 0, 0);
    };
  }, [src]);

  return <canvas ref={ref} className={className} role="img" aria-label={alt} />;
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02060b] text-[#f8edd2]">
      <div className="star-field" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-[#d9ad4d]/20 bg-[#02060b]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="HarryDex, inicio">
            <TransparentCrest src={hogwarts} alt="Escudo de Hogwarts" className="h-14 w-14 object-contain drop-shadow-[0_0_12px_rgba(217,173,77,.25)]" />
            <span className="logo-type text-xl sm:text-2xl">Harry<span>Dex</span></span>
          </a>
          <nav className="hidden items-center gap-3 xl:flex" aria-label="Casas de Hogwarts">
            {houses.map((house) => (
              <a key={house.name} href="#casas" className={`house-nav ${house.className}`}>
                <TransparentCrest src={house.crest} alt={`Escudo de ${house.name}`} />
                <span>{house.name}</span>
              </a>
            ))}
          </nav>
          <a href="#descargar" className="nav-download">Obtener APK <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <section id="inicio" className="hero relative isolate min-h-[790px]">
        <div className="castle-silhouette" aria-hidden="true" />
        <div className="moon" aria-hidden="true" />
        <div className="mx-auto grid min-h-[790px] max-w-[1440px] items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div className="relative z-10">
            <div className="eyebrow"><Spark /> EL ARCHIVO MÁGICO DEFINITIVO <Spark /></div>
            <h1 className="hero-title mt-6">
              Tu enciclopedia
              <span>mágica de bolsillo</span>
            </h1>
            <div className="ornament" aria-hidden="true"><span>◆</span></div>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#b9c2cc] sm:text-lg">
              Atrapa el conocimiento. Explora cada personaje, descifra cada varita y descubre los secretos de las cuatro casas en una colección que siempre viaja contigo.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a id="btn-cta-principal" href="#descargar" className="gold-button">
                <span className="button-glyph" aria-hidden="true">ϟ</span>
                Descargar APK HarryDex
                <span aria-hidden="true">→</span>
              </a>
              <div className="download-note">
                <strong>VERSIÓN 2.4</strong>
                <span>Android 8.0+ · 68 MB</span>
              </div>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
              {["120+ personajes", "50 varitas", "4 casas", "sin conexión"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#8f99a6]">
                  <span className="text-[#d9ad4d]">✦</span>{item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto h-[600px] w-full max-w-[520px]">
            <div className="magic-orbit orbit-one" />
            <div className="magic-orbit orbit-two" />
            <Spark className="absolute left-4 top-12 text-2xl" />
            <Spark className="absolute right-4 top-40 text-sm" />
            <div className="phone-shell">
              <div className="phone-inner">
                <div className="phone-notch" />
                <div className="flex items-center justify-between px-5 pt-6">
                  <span className="logo-type text-sm">Harry<span>Dex</span></span>
                  <span className="text-[#efca68]">✦</span>
                </div>
                <div className="px-5 pt-5">
                  <p className="font-display text-[1.35rem] leading-tight">¿Qué deseas<br />descubrir hoy?</p>
                  <div className="mt-4 rounded-full border border-white/10 bg-black/35 px-4 py-3 text-[0.62rem] text-[#808b95]">⌕ &nbsp; Buscar en el archivo mágico...</div>
                  <div className="mt-4 flex gap-2">
                    {houses.map((house) => <TransparentCrest key={house.name} src={house.crest} alt={house.name} className="h-10 w-10 object-contain" />)}
                  </div>
                  <div className="mt-5 overflow-hidden rounded-2xl border border-[#d9ad4d]/30 bg-[#0b1720] p-3">
                    <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-xl bg-[radial-gradient(circle,#3b2d17,#071018_68%)]">
                      <div className="absolute h-36 w-36 rotate-45 border border-[#d9ad4d]/20" />
                      <TransparentCrest src={hogwarts} alt="Escudo de Hogwarts" className="relative z-10 h-40 w-40 object-contain drop-shadow-[0_0_20px_rgba(217,173,77,.25)]" />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-[0.5rem] font-bold uppercase tracking-[.2em] text-[#efca68]">Elige tu legado</span>
                        <h2 className="font-display text-lg">Las cuatro casas</h2>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 p-2 text-center">
                      <div><span>Casas</span><b>4</b></div>
                      <div><span>Reliquias</span><b>3</b></div>
                      <div><span>Varitas</span><b>50+</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-badge badge-left"><span>COLECCIÓN</span><strong>87%</strong><small>COMPLETADA</small></div>
            <div className="floating-badge badge-right"><TransparentCrest src={hogwarts} alt="Escudo de Hogwarts" /><span>NUEVA CASA</span><strong>Desbloqueada</strong></div>
          </div>
        </div>
      </section>

      <section id="casas" className="relative border-y border-[#d9ad4d]/15 bg-[#06101a] py-28">
        <div className="section-rune" aria-hidden="true">H</div>
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="section-heading">
            <div className="eyebrow"><Spark /> LOS CUATRO LEGADOS</div>
            <h2>Encuentra tu casa</h2>
            <p>Cuatro emblemas, cuatro formas de entender la magia. Explora su historia, sus valores y sus secretos.</p>
          </div>
          <div className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {houses.map((house) => (
              <article key={house.name} className={`collector-card ${house.className}`}>
                <div className="card-corners" aria-hidden="true" />
                <div className="card-image house-card-image">
                  <div className="house-halo" />
                  <TransparentCrest className="house-main-crest" src={house.crest} alt={`Escudo de ${house.name}`} />
                </div>
                <div className="card-copy">
                  <span>Casa de Hogwarts</span>
                  <h3>{house.name}</h3>
                  <p>{house.name === "Gryffindor" ? "Valor y caballerosidad" : house.name === "Slytherin" ? "Ambición y astucia" : house.name === "Ravenclaw" ? "Sabiduría e ingenio" : "Lealtad y constancia"}</p>
                  <div className="card-stats"><span>FUNDACIÓN <b>SIGLO X</b></span><span>ARCHIVO <b>ABIERTO</b></span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="caracteristicas" className="relative py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="section-heading mx-auto text-center">
            <div className="eyebrow justify-center"><Spark /> MAGIA EN CADA DETALLE <Spark /></div>
            <h2>Más que una enciclopedia</h2>
            <p className="mx-auto">Una herramienta hechizada para quienes quieren conocer el universo mágico hasta el último detalle.</p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon"><FeatureIcon type={feature.icon} /></div>
                <div className="feature-ornament">✦ ───── ✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
                <span className="feature-meta">{feature.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="archivo" className="archive-section relative border-y border-[#d9ad4d]/15 py-28">
        <div className="archive-compass" aria-hidden="true"><span>✦</span></div>
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div className="section-heading">
              <div className="eyebrow"><Spark /> EL GRAN ARCHIVO</div>
              <h2>Todo el conocimiento en un mismo códice</h2>
            </div>
            <p className="max-w-2xl text-sm leading-8 text-[#8f9aa5] lg:justify-self-end">
              HarryDex no se limita a las casas. Su biblioteca reúne los objetos, criaturas y disciplinas que dan forma al mundo mágico, conectados mediante un sistema de búsqueda diseñado para explorar sin perderse.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden border border-[#d9ad4d]/20 bg-[#d9ad4d]/20 sm:grid-cols-2 xl:grid-cols-4">
            {archiveItems.map((item) => (
              <article key={item.title} className="archive-card">
                <div className="archive-rune">{item.rune}</div>
                <div className="flex items-end justify-between gap-4">
                  <h3>{item.title}</h3>
                  <strong>{item.count}</strong>
                </div>
                <p>{item.copy}</p>
                <span className="archive-link">Explorar categoría <b>→</b></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="coleccion" className="relative py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div className="collection-vault">
              <div className="vault-ring ring-outer" />
              <div className="vault-ring ring-inner" />
              <div className="vault-core">
                <TransparentCrest src={hogwarts} alt="Escudo de Hogwarts" className="h-48 w-48 object-contain" />
                <span>87%</span>
                <small>Códice completado</small>
              </div>
              {houses.map((house, index) => (
                <div key={house.name} className={`orbit-crest orbit-crest-${index + 1}`}>
                  <TransparentCrest src={house.crest} alt={house.name} />
                </div>
              ))}
            </div>
            <div>
              <div className="section-heading">
                <div className="eyebrow"><Spark /> TU VIAJE COMIENZA</div>
                <h2>Forja tu propia colección mágica</h2>
                <p>Cada consulta suma un nuevo fragmento a tu códice personal. Avanza a tu ritmo y descubre todo lo que aún permanece oculto.</p>
              </div>
              <div className="journey-list mt-10">
                {journey.map((item) => (
                  <article key={item.step} className="journey-step">
                    <span>{item.step}</span>
                    <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="numbers-section relative overflow-hidden border-y border-[#d9ad4d]/20 py-20">
        <div className="numbers-word" aria-hidden="true">MAGIA</div>
        <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 px-5 text-center lg:grid-cols-4 lg:px-10">
          {[
            ["120+", "Fichas mágicas"],
            ["4", "Casas legendarias"],
            ["190", "Datos arcanos"],
            ["100%", "Disponible offline"],
          ].map(([value, label]) => (
            <div key={label} className="number-stat">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="descargar" className="relative px-5 py-28 lg:px-10">
        <div className="parchment mx-auto max-w-5xl">
          <div className="parchment-inner">
            <TransparentCrest src={hogwarts} alt="Escudo de Hogwarts" className="mx-auto h-28 w-28 object-contain" />
            <div className="mt-3 text-center">
              <span className="font-display text-xs font-bold uppercase tracking-[.35em] text-[#755828]">Carta oficial de admisión</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-[#24180e] sm:text-5xl">Tu aventura comienza aquí</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5b4733]">Escribe tu nombre en el registro y una lechuza digital llevará HarryDex directamente a tu correo.</p>
            </div>
            <form className="mx-auto mt-9 grid max-w-2xl gap-5 sm:grid-cols-2" aria-label="Formulario para descargar HarryDex">
              <label className="parchment-field">Nombre<input name="nombre" type="text" placeholder="Tu nombre completo" /></label>
              <label className="parchment-field">Correo<input name="correo" type="email" placeholder="tu@correo.com" /></label>
              <button type="submit" className="wax-button sm:col-span-2">Sellar y recibir la APK <span>ϟ</span></button>
            </form>
            <div className="wax-seal" aria-hidden="true"><span>H</span></div>
          </div>
        </div>
      </section>

      <section id="comunidad" className="community-section relative overflow-hidden border-y border-[#d9ad4d]/15 py-28">
        <div className="community-quote" aria-hidden="true">“</div>
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="section-heading mx-auto text-center">
            <div className="eyebrow justify-center"><Spark /> VOCES DE LA COMUNIDAD <Spark /></div>
            <h2>Lo que dicen quienes ya abrieron el códice</h2>
            <p className="mx-auto">Impresiones compartidas por exploradores que hicieron de HarryDex su compañero de aventuras.</p>
          </div>
          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className={`review-card ${review.className}`}>
                <div className="review-stars" aria-label="5 de 5 estrellas">✦ ✦ ✦ ✦ ✦</div>
                <blockquote>“{review.quote}”</blockquote>
                <div className="review-author">
                  <div className="review-crest">
                    <TransparentCrest src={review.crest} alt={`Escudo de ${review.house}`} />
                  </div>
                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                  </div>
                  <span>{review.house}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="community-summary">
            <div><strong>4.9</strong><span>Valoración media</span></div>
            <div className="summary-stars">✦ ✦ ✦ ✦ ✦</div>
            <p>Basado en opiniones de la comunidad de acceso anticipado</p>
          </div>
        </div>
      </section>

      <section id="preguntas" className="relative border-t border-[#d9ad4d]/15 bg-[#05101a] py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-10">
          <div className="section-heading">
            <div className="eyebrow"><Spark /> CONSULTA AL ORÁCULO</div>
            <h2>Preguntas frecuentes</h2>
            <p>Todo lo que necesitas saber antes de abrir las puertas del archivo.</p>
          </div>
          <div className="faq-list">
            {questions.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>{question}</span><b>+</b></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative border-t border-[#d9ad4d]/20 bg-[#010408] px-5 pb-8 pt-16 lg:px-10">
        <div className="footprints" aria-hidden="true">· ·　　· ·　　　· ·</div>
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><TransparentCrest src={hogwarts} alt="Escudo de Hogwarts" className="h-16 w-16 object-contain" /><span className="logo-type text-2xl">Harry<span>Dex</span></span></div>
            <p className="mt-4 max-w-sm text-xs leading-6 text-[#7e8995]">Un archivo independiente creado por fans para explorar, descubrir y coleccionar la magia.</p>
          </div>
          <div>
            <h3 className="footer-title">Mapa del merodeador</h3>
            <div className="mt-4 grid gap-3 text-xs text-[#929ba5]"><a href="#inicio">Gran Salón</a><a href="#casas">Archivo de casas</a><a href="#archivo">Gran archivo</a><a href="#coleccion">Tu colección</a><a href="#comunidad">Comunidad</a><a href="#preguntas">Oráculo</a></div>
          </div>
          <div>
            <h3 className="footer-title">Juramento</h3>
            <p className="mt-4 font-display text-xs italic leading-6 text-[#b09c70]">“Juro solemnemente que mis intenciones no son buenas.”</p>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-white/5 pt-6 text-[0.62rem] uppercase tracking-[.16em] text-[#525b65] sm:flex-row sm:justify-between">
          <span>© 2025 HarryDex · Proyecto no oficial</span>
          <span>Desarrollado independientemente con magia y código</span>
        </div>
      </footer>
    </main>
  );
}
