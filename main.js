/* ============================================================
   NOVA MARKETING · Lógica global del sitio
   - Menú móvil
   - Modo oscuro (toggle)
   - Animaciones al hacer scroll
   - Galería: render, filtros y lightbox
   - Formulario de contacto: validación
   - Horarios: tabs por día
   - Servicios / Equipo / Testimonios: grid renderizado desde mocks
   ============================================================ */

/* ============ DATOS MOCKEADOS ============ */
const servicios = [
  {
    icono: "estrategia",
    titulo: "Estrategia Digital",
    descripcion: "Diseñamos el roadmap digital de tu marca con foco en resultados medibles y crecimiento sostenido.",
    bullets: ["Auditoría digital", "Plan 90 días", "KPIs y reporting"]
  },
  {
    icono: "seo",
    titulo: "SEO & Posicionamiento",
    descripcion: "Mejoramos tu visibilidad orgánica en Google con estrategias técnicas y de contenido probadas.",
    bullets: ["SEO técnico", "Content SEO", "Link building"]
  },
  {
    icono: "ads",
    titulo: "Publicidad Online (SEM)",
    descripcion: "Gestionamos campañas pagadas en Google, Meta, TikTok y LinkedIn para maximizar tu inversión publicitaria.",
    bullets: ["Google Ads", "Meta Ads", "Remarketing"]
  },
  {
    icono: "social",
    titulo: "Social Media",
    descripcion: "Gestionamos tus redes sociales con contenido atractivo, calendarios editoriales y community management.",
    bullets: ["Instagram & TikTok", "Calendario editorial", "Reels y stories"]
  },
  {
    icono: "branding",
    titulo: "Branding & Identidad",
    descripcion: "Construimos identidades de marca sólidas, memorables y alineadas con tu propuesta de valor.",
    bullets: ["Logo y manual", "Identidad verbal", "Papelería"]
  },
  {
    icono: "web",
    titulo: "Diseño & Desarrollo Web",
    descripcion: "Creamos sitios web rápidos, accesibles y optimizados para conversión en cualquier dispositivo.",
    bullets: ["Landing pages", "E-commerce", "WordPress & Webflow"]
  },
  {
    icono: "email",
    titulo: "Email Marketing & CRM",
    descripcion: "Automatizamos tus campañas de email y flujos de nurturing para convertir leads en clientes.",
    bullets: ["Mailchimp & HubSpot", "Automatizaciones", "Segmentación"]
  },
  {
    icono: "contenido",
    titulo: "Marketing de Contenidos",
    descripcion: "Producimos contenido relevante que educa, entretiene y posiciona a tu marca como referente.",
    bullets: ["Blog & artículos", "Ebooks", "Guías y whitepapers"]
  },
  {
    icono: "audiovisual",
    titulo: "Producción Audiovisual",
    descripcion: "Producimos contenido visual de alto impacto: videos corporativos, reels, fotos y motion graphics.",
    bullets: ["Videos corporativos", "Reels y shorts", "Fotografía"]
  },
  {
    icono: "influencers",
    titulo: "Influencer Marketing",
    descripcion: "Conectamos tu marca con influencers afines para amplificar tu alcance y generar confianza.",
    bullets: ["Selección de talentos", "Negociación", "Co-branding"]
  }
];

const equipo = [
  {
    nombre: "Sofía Navarro",
    cargo: "Directora Creativa",
    bio: "Más de 12 años liderando equipos creativos en campañas para marcas líderes en LATAM.",
    imagen: "https://i.pravatar.cc/300?img=47"
  },
  {
    nombre: "Andrés Vega",
    cargo: "Head of Strategy",
    bio: "Experta en estrategias de performance y growth marketing con expertise en e-commerce.",
    imagen: "https://i.pravatar.cc/300?img=12"
  },
  {
    nombre: "Camila Rojas",
    cargo: "Social Media Manager",
    bio: "Especialista en contenido viral, community management y estrategias de Instagram & TikTok.",
    imagen: "https://i.pravatar.cc/300?img=44"
  },
  {
    nombre: "Diego Salazar",
    cargo: "Lead Designer",
    bio: "Diseñador visual con enfoque en branding, identidad de marca y motion graphics.",
    imagen: "https://i.pravatar.cc/300?img=33"
  }
];

const stats = [
  { numero: "10+", etiqueta: "Años creando marcas" },
  { numero: "180", etiqueta: "Clientes activos" },
  { numero: "520", etiqueta: "Campañas lanzadas" },
  { numero: "25", etiqueta: "Premios ganados" }
];

const testimonios = [
  {
    nombre: "Valentina Cruz",
    manager: "CEO, Bloom Café",
    fecha: "Septiembre 2025",
    rating: 5,
    texto: "Nova Marketing transformó nuestra presencia digital. En 6 meses triplicamos las ventas online y nuestra comunidad creció 280%. Un equipo excepcional y muy profesional.",
    avatar: "https://i.pravatar.cc/100?img=45"
  },
  {
    nombre: "Roberto Méndez",
    manager: "CFO, TechLatam",
    fecha: "Agosto 2025",
    rating: 5,
    texto: "Su estrategia de SEM fue clave para nuestro lanzamiento. ROI del 480% en el primer trimestre. Reportes claros, comunicación fluida y resultados notables.",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    nombre: "Lucía Fernández",
    manager: "Fundadora, Lumi Cosmetics",
    fecha: "Julio 2025",
    rating: 4,
    texto: "El equipo de Nova entiende perfectamente el mundo beauty. Nuestra campaña en Meta Ads superó todas las expectativas y el branding elevó la marca a otro nivel.",
    avatar: "https://i.pravatar.cc/100?img=49"
  }
];

const planes = [
  {
    nombre: "Plan Starter",
    precio: "$ 450.000",
    periodo: "/mes",
    descripcion: "Ideal para emprendedores y PyMEs que recién inician su presencia digital.",
    features: [
      "Hasta 2 redes sociales",
      "8 publicaciones mensuales",
      "1 campaña de ads",
      "Reporte mensual",
      "1 reunión de seguimiento"
    ],
    destacado: false
  },
  {
    nombre: "Plan Profesional",
    precio: "$ 950.000",
    periodo: "/mes",
    descripcion: "Para empresas en crecimiento que buscan escalar su presencia y resultados.",
    features: [
      "Hasta 4 redes sociales",
      "20 publicaciones mensuales",
      "3 campañas de ads",
      "SEO básico + blog",
      "Reuniones semanales",
      "Email marketing",
      "Reportes semanales"
    ],
    destacado: true
  },
  {
    nombre: "Plan Enterprise",
    precio: "$ 2.400.000",
    periodo: "/mes",
    descripcion: "Solución integral para marcas que necesitan un partner estratégico 360°.",
    features: [
      "Estrategia 360° a medida",
      "Producción audiovisual incluida",
      "Campañas ilimitadas",
      "Equipo dedicado",
      "Influencer marketing",
      "Reporte ejecutivo mensual",
      "Workshops estratégicos"
    ],
    destacado: false
  }
];

const preciosIndividuales = [
  { servicio: "Branding completo (logo + manual)", precio: "$ 680.000", duracion: "3 semanas" },
  { servicio: "Diseño de landing page", precio: "$ 420.000", duracion: "2 semanas" },
  { servicio: "Campaña Meta Ads (setup)", precio: "$ 250.000", duracion: "1 semana" },
  { servicio: "Auditoría SEO técnica", precio: "$ 380.000", duracion: "10 días" },
  { servicio: "Plan de social media mensual", precio: "$ 520.000", duracion: "Mensual" },
  { servicio: "Video corporativo", precio: "$ 850.000", duracion: "4 semanas" },
  { servicio: "Estrategia de contenidos", precio: "$ 480.000", duracion: "3 semanas" },
  { servicio: "Workshop de marketing (4h)", precio: "$ 320.000", duracion: "Por sesión" }
];

const horariosClases = {
  lunes: [
    { hora: "10:00 - 12:00", nombre: "Introducción al Marketing Digital", profesor: "Andrés Vega", modalidad: "Online" },
    { hora: "15:00 - 17:00", nombre: "Branding para Emprendedores", profesor: "Sofía Navarro", modalidad: "Presencial" },
    { hora: "18:00 - 20:00", nombre: "Google Ads desde Cero", profesor: "Andrés Vega", modalidad: "Online" }
  ],
  martes: [
    { hora: "10:00 - 12:00", nombre: "Community Management Avanzado", profesor: "Camila Rojas", modalidad: "Online" },
    { hora: "15:00 - 17:00", nombre: "Diseño de Marcas con Canva", profesor: "Diego Salazar", modalidad: "Presencial" },
    { hora: "18:00 - 20:00", nombre: "Embudos de Venta Digitales", profesor: "Andrés Vega", modalidad: "Online" }
  ],
  miercoles: [
    { hora: "10:00 - 12:00", nombre: "SEO Práctico y Posicionamiento", profesor: "Andrés Vega", modalidad: "Online" },
    { hora: "15:00 - 17:00", nombre: "Creación de Contenido para Reels", profesor: "Camila Rojas", modalidad: "Presencial" },
    { hora: "18:00 - 20:00", nombre: "Estrategia de Email Marketing", profesor: "Diego Salazar", modalidad: "Online" }
  ],
  jueves: [
    { hora: "10:00 - 12:00", nombre: "Analítica Web con GA4", profesor: "Andrés Vega", modalidad: "Online" },
    { hora: "15:00 - 17:00", nombre: "Identidad Visual y Logo Design", profesor: "Diego Salazar", modalidad: "Presencial" },
    { hora: "18:00 - 20:00", nombre: "Meta Ads: Segmentación Avanzada", profesor: "Andrés Vega", modalidad: "Online" }
  ],
  viernes: [
    { hora: "10:00 - 12:00", nombre: "Copywriting Persuasivo", profesor: "Sofía Navarro", modalidad: "Online" },
    { hora: "15:00 - 17:00", nombre: "Producción Audiovisual para Marcas", profesor: "Diego Salazar", modalidad: "Presencial" },
    { hora: "18:00 - 20:00", nombre: "Marketing de Influencers", profesor: "Camila Rojas", modalidad: "Online" }
  ],
  sabado: [
    { hora: "10:00 - 13:00", nombre: "Workshop: Plan de Marketing 90 días", profesor: "Equipo Nova", modalidad: "Presencial" },
    { hora: "15:00 - 17:00", nombre: "Mentorías Grupales", profesor: "Sofía Navarro", modalidad: "Online" }
  ]
};

const galeria = [
  { src: "https://picsum.photos/seed/novacamp1/600/400", categoria: "campanas", titulo: "Campaña Bloom Café - Verano 2025" },
  { src: "https://picsum.photos/seed/novacamp2/600/400", categoria: "campanas", titulo: "Lanzamiento TechLatam" },
  { src: "https://picsum.photos/seed/novacamp3/600/400", categoria: "campanas", titulo: "Back to School - Lumi Cosmetics" },
  { src: "https://picsum.photos/seed/novacamp4/600/400", categoria: "campanas", titulo: "Hot Sale LATAM 2025" },
  { src: "https://picsum.photos/seed/novabrand1/600/400", categoria: "branding", titulo: "Rebranding Aurora Spa" },
  { src: "https://picsum.photos/seed/novabrand2/600/400", categoria: "branding", titulo: "Logo & Manual - Verde Limón" },
  { src: "https://picsum.photos/seed/novabrand3/600/400", categoria: "branding", titulo: "Identidad - Casa Bonita" },
  { src: "https://picsum.photos/seed/novabrand4/600/400", categoria: "branding", titulo: "Naming & Branding Indie" },
  { src: "https://picsum.photos/seed/novaevento1/600/400", categoria: "eventos", titulo: "Nova Talks 2025" },
  { src: "https://picsum.photos/seed/novaevento2/600/400", categoria: "eventos", titulo: "Workshop de Marketing Digital" },
  { src: "https://picsum.photos/seed/novaevento3/600/400", categoria: "eventos", titulo: "Premios Marketing LATAM" },
  { src: "https://picsum.photos/seed/novaevento4/600/400", categoria: "eventos", titulo: "Networking para Emprendedores" },
  { src: "https://picsum.photos/seed/novaequipo1/600/400", categoria: "equipo", titulo: "Equipo Nova" },
  { src: "https://picsum.photos/seed/novaequipo2/600/400", categoria: "equipo", titulo: "Reunión creativa" },
  { src: "https://picsum.photos/seed/novaequipo3/600/400", categoria: "equipo", titulo: "Producción audiovisual" },
  { src: "https://picsum.photos/seed/novaequipo4/600/400", categoria: "equipo", titulo: "Día de integración" }
];

const faqs = [
  {
    pregunta: "¿Cuánto cuesta trabajar con Nova Marketing?",
    respuesta: "El costo depende del alcance del proyecto. Nuestros planes mensuales arrancan desde $450.000 e incluyen servicios básicos. Para proyectos personalizados o de gran envergadura, armamos una cotización a medida tras una reunión de descubrimiento gratuita."
  },
  {
    pregunta: "¿Cuánto tiempo tardan en ver resultados?",
    respuesta: "En campañas de Ads (Google/Meta) puedes ver resultados desde la primera semana. En SEO y contenido orgánico, los resultados significativos suelen verse a partir del tercer mes. Trabajamos con KPIs claros desde el día uno para medir el avance."
  },
  {
    pregunta: "¿Trabajan con marcas de cualquier tamaño?",
    respuesta: "Sí, trabajamos tanto con emprendedores individuales como con grandes empresas. Adaptamos nuestra metodología al presupuesto y objetivos de cada cliente, manteniendo el mismo nivel de profesionalismo y dedicación."
  },
  {
    pregunta: "¿Quiénes serán las personas que atiendan mi marca?",
    respuesta: "Cada cliente tiene un equipo dedicado: un estratega como account manager, un creativo, un community manager y un especialista en ads (si corresponde). Conocerás a todo el equipo en la reunión kickoff."
  },
  {
    pregunta: "¿Puedo cancelar el plan cuando quiera?",
    respuesta: "Sí, nuestros planes mensuales no tienen permanencia mínima. Recomendamos al menos 3 meses para ver resultados consistentes, pero puedes pausar o cancelar en cualquier momento con aviso previo de 15 días."
  },
  {
    pregunta: "¿Miden los resultados de las campañas?",
    respuesta: "Absolutamente. Cada plan incluye reportes periódicos con KPIs clave (alcance, leads, ventas, ROI). Usamos herramientas profesionales de analítica y te enviamos dashboards actualizados para que veas el avance en tiempo real."
  }
];

const valores = [
  {
    titulo: "Creatividad",
    descripcion: "Cada campaña es única. Apostamos por la innovación y la diferenciación en cada proyecto.",
    icono: "creatividad"
  },
  {
    titulo: "Resultados",
    descripcion: "Medimos todo lo que hacemos. Si no genera impacto, no lo hacemos.",
    icono: "resultados"
  },
  {
    titulo: "Transparencia",
    descripcion: "Reportes claros, comunicación honesta y cero sorpresas en la facturación.",
    icono: "transparencia"
  },
  {
    titulo: "Pasión",
    descripcion: "Amamos lo que hacemos y se nota en cada detalle de nuestro trabajo.",
    icono: "pasion"
  }
];

const historia = [
  { año: "2015", titulo: "Fundación", descripcion: "Sofía y Diego fundan Nova en un pequeño estudio con 3 clientes." },
  { año: "2018", titulo: "Primer gran cliente", descripcion: "Bloom Café confía en nosotros y crece 320% en ventas online." },
  { año: "2020", titulo: "Expansión del equipo", descripcion: "Sumamos 8 nuevos talentos y abrimos el área de performance." },
  { año: "2023", titulo: "Premios Marketing LATAM", descripcion: "Ganamos 3 premios por nuestras campañas de social media y branding." },
  { año: "2025", titulo: "Hoy", descripcion: "Más de 180 clientes activos y un equipo de 25 personas apasionadas." }
];

const razones = [
  { titulo: "Equipo senior", descripcion: "Profesionales con experiencia comprobada en marcas líderes de LATAM y el mundo." },
  { titulo: "Estrategia a medida", descripcion: "Cada marca es única. Diseñamos estrategias personalizadas, no plantillas." },
  { titulo: "Tecnología y datos", descripcion: "Trabajamos con herramientas profesionales y tomamos decisiones basadas en datos." },
  { titulo: "Resultados garantizados", descripcion: "Cada plan incluye KPIs acordados y reportes periódicos para que veas el avance." }
];

const herramientas = [
  "Google Ads", "Meta Ads", "TikTok Ads", "Google Analytics 4", "Search Console",
  "HubSpot", "Mailchimp", "Hootsuite", "Canva Pro", "Figma",
  "WordPress", "Webflow", "Shopify", "Semrush", "Ahrefs", "Photoshop", "Illustrator", "Premiere Pro"
];

const casosExito = [
  {
    categoria: "E-commerce",
    titulo: "Bloom Café: +320% ventas online en 6 meses",
    descripcion: "Estrategia 360° de social media, Meta Ads y rebranding completo para marca de café gourmet.",
    imagen: "https://picsum.photos/seed/casobloom/600/360"
  },
  {
    categoria: "Tech",
    titulo: "TechLatam: ROI 480% en campaña de lanzamiento",
    descripcion: "Plan de performance marketing con Google Ads, LinkedIn Ads y landing pages optimizadas.",
    imagen: "https://picsum.photos/seed/casotech/600/360"
  },
  {
    categoria: "Moda",
    titulo: "Lumi Cosmetics: comunidad 280% más grande",
    descripcion: "Estrategia de contenido para Instagram y TikTok con producción constante de material orgánico.",
    imagen: "https://picsum.photos/seed/casolumi/600/360"
  }
];

/* ============ ICONOS SVG ============ */
const iconos = {
  estrategia: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.91,6.31L128,182.8l59.09,47.51A8,8,0,0,0,200,224V48A16,16,0,0,0,216,32Zm0,16V210.39l-51.09-41.07a8,8,0,0,0-10,0L104,210.39V48Zm-32,72a8,8,0,0,1-8,8H136v40a8,8,0,0,1-16,0V128H96a8,8,0,0,1,0-16h24V96a8,8,0,0,1,16,0v16h40A8,8,0,0,1,184,120Z"/></svg>',
  seo: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34,179.6,168.28A88.21,88.21,0,1,0,168,179.91l50.06,50.06a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,152,112Z"/></svg>',
  ads: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M240,40a8,8,0,0,0-8-8H160a40,40,0,0,0-32,16A40,40,0,0,0,99,32H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H99a40,40,0,0,0,32-16,40,40,0,0,0,32,16h72a8,8,0,0,0,8-8Zm-160,152H40V48H99a24,24,0,0,1,24,24V192A24,24,0,0,1,99,192Zm144,0H160a24,24,0,0,1-24-24V72a24,24,0,0,1,24-24h64Z"/></svg>',
  social: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm165.74,49.92a60,60,0,1,0-66.5,0,95.83,95.83,0,0,0-32.55,25.85,8,8,0,1,0,11.86,10.74,80.08,80.08,0,0,1,30.55-22.31,8,80.08,0,0,1,30.55-22.31,8,8,0,0,0,5.91-7.71V160a8,8,0,0,0-13.66-5.66l-8.84,8.84L140,124.69a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L132,143.31,147.31,158.63l-9.65,9.65a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0,0-11.32Z"/></svg>',
  branding: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200V216ZM176,104a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V112H88a8,8,0,0,1,0-16h32V80a8,8,0,0,1,16,0v16h32A8,8,0,0,1,176,104Z"/></svg>',
  web: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M232,152H184V96h48a8,8,0,0,0,0-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V208a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V176h48a8,8,0,0,0,0-16ZM168,208H40V48H168V208ZM200,160H184V128h16Zm0-48H184V96h16Z"/></svg>',
  email: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V64L128,128,32,64V64Zm0,128H32L128,112,224,192Z"/></svg>',
  contenido: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H72A16,16,0,0,0,56,56V224a8,8,0,0,0,12.91,6.31L128,182.8l59.09,47.51A8,8,0,0,0,200,224V56A16,16,0,0,0,216,40ZM184,210.39l-51.09-41.07a8,8,0,0,0-10,0L72,210.39V56H184ZM88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm0,32a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,128Z"/></svg>',
  audiovisual: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M232,128a16,16,0,0,0-16-16H184V72a16,16,0,0,0-16-16H40A16,16,0,0,0,24,72V184a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V144h32A16,16,0,0,0,232,128ZM168,184H40V72H168Zm48-56H184V112h32ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm48,0a12,12,0,1,1,12,12A12,12,0,0,1,128,108Zm48,0a12,12,0,1,1,12,12A12,12,0,0,1,176,108Z"/></svg>',
  influencers: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Zm-88,40a8,8,0,0,1-8,8H120v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h8A8,8,0,0,1,128,168Z"/></svg>',
  creatividad: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-152a88,88,0,1,0-160,0c0,28.06,2.94,53.18,15.43,73.65C80.05,170.45,93,184.06,104,192h48c11-7.94,23.95-21.55,32.57-38.35,12.49-20.47,15.43-45.59,15.43-73.65Z"/></svg>',
  resultados: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M152,120H112v24h40Zm88-72V208a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V48A16,16,0,0,1,32,32H224A16,16,0,0,1,240,48ZM32,208H224V48H32Zm80-96a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H120A8,8,0,0,1,112,112Zm0,32a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H120A8,8,0,0,1,112,144Z"/></svg>',
  transparencia: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M128,24,24,80v32a12,12,0,0,0,12,12,12,12,0,0,0,12-12V88l80-40,80,40v24a12,12,0,0,0,12,12,12,12,0,0,0,12-12V80Zm0,40L72,96v40a56,56,0,0,0,56,56,56,56,0,0,0,56-56V96Z"/></svg>',
  pasion: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M178,32c-20.94,0-39,12-50,29.32C117,44,98.94,32,78,32A66.08,66.08,0,0,0,12,98c0,72,116,152,116,152s116-80,116-152A66.08,66.08,0,0,0,178,32ZM128,232S28,160,28,98A50.06,50.06,0,0,1,78,48c18.44,0,35.21,10.94,44.32,27.71L128,84l5.68-8.29C142.79,58.94,159.56,48,178,48a50.06,50.06,0,0,1,50,50C228,160,128,232,128,232Z"/></svg>',
  flecha: '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>',
  estrella: '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>',
  ubicacion: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,0,0,24,128c0,72,104,128,104,128S232,200,232,128A104,104,0,0,0,128,24Zm0,144a40,40,0,1,1,40-40A40,40,0,0,1,128,168Zm0-64a24,24,0,1,0,24,24A24,24,0,0,0,128,104Z"/></svg>',
  telefono: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.11l-23.6-9.41a16,16,0,0,0-18,3.36l-13.06,13a104.08,104.08,0,0,1-58.74-58.74l13-13.06a16,16,0,0,0,3.36-18L116.18,33.63A16,16,0,0,0,97.77,24.22L60.55,41.86a16,16,0,0,0-9.31,18.43C61.05,148.79,107.21,194.95,194.71,204.74a16,16,0,0,0,18.43-9.31l17.64-37.22A16,16,0,0,0,222.37,158.11Z"/></svg>',
  email: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V64L128,128,32,64V64Zm0,128H32L128,112,224,192Z"/></svg>',
  reloj: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-28,0l-24-24a8,8,0,0,1,11.32-11.32L96,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/></svg>',
  sol: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64,64.07,64.07,0,0,1,64,64Zm-16,0a48,48,0,1,0-48,48,48.05,48.05,0,0,0,48-48ZM58.34,69.66a8,8,0,0,0,11.32-11.32l-16-16a8,8,0,0,0-11.32,11.32Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34-16-16a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM40,120H16a8,8,0,0,0,0,16H40a8,8,0,0,0,0-16Zm88,96a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V224A8,8,0,0,0,128,216Zm96-96H200a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>',
  luna: '<svg fill="currentColor" viewBox="0 0 256 256"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.13,104.13,0,0,0-52.91,135,104.12,104.12,0,0,0,135,52.91A8,8,0,0,0,233.54,142.23ZM189.79,191.86a88.1,88.1,0,0,1-114.24-114.24A104.14,104.14,0,0,0,128,24a88,88,0,0,0,22.93,3,104,104,0,0,0,68.57,67.57A88,88,0,0,0,189.79,191.86Z"/></svg>',
  menu: '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7"/></svg>',
  cerrar: '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>'
};

/* ============ ESTILOS GLOBALES (inyectados) ============ */
function inyectarEstilos() {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --primary: #ec4899;
      --primary-light: #f472b6;
    }
    .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
    .reveal-delay-4 { transition-delay: 0.4s; }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    .float { animation: float 6s ease-in-out infinite; }
    @keyframes pulse-ring {
      0% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7); }
      70% { box-shadow: 0 0 0 20px rgba(236, 72, 153, 0); }
      100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0); }
    }
    .pulse-ring { animation: pulse-ring 2s infinite; }
    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .gradient-animated {
      background-size: 200% 200%;
      animation: gradient-shift 8s ease infinite;
    }
    /* Scrollbar personalizado */
    ::-webkit-scrollbar { width: 10px; }
    ::-webkit-scrollbar-track { background: #f7f6f8; }
    ::-webkit-scrollbar-thumb { background: #ec4899; border-radius: 5px; }
    .dark ::-webkit-scrollbar-track { background: #0f0a14; }
    .dark ::-webkit-scrollbar-thumb { background: #f472b6; }
    /* Smooth scroll */
    html { scroll-behavior: smooth; }
  `;
  document.head.appendChild(style);
}

/* ============ MODO OSCURO ============ */
function initDarkMode() {
  const btn = document.getElementById('btnDarkMode');
  if (!btn) return;
  const html = document.documentElement;
  const stored = localStorage.getItem('nova-dark-mode');
  if (stored === 'true') html.classList.add('dark');

  btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('nova-dark-mode', html.classList.contains('dark'));
  });
}

/* ============ MENÚ MÓVIL ============ */
function initMenu() {
  const btnMenu = document.getElementById('btnMenu');
  const navMenu = document.getElementById('navMenu');
  if (!btnMenu || !navMenu) return;
  btnMenu.addEventListener('click', () => {
    const abierto = !navMenu.classList.contains('hidden');
    if (!abierto) {
      navMenu.classList.remove('hidden');
      navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-background-light', 'dark:bg-background-dark', 'border-t', 'border-primary/20', 'dark:border-primary/30', 'p-4', 'z-50', 'shadow-xl');
    } else {
      navMenu.classList.add('hidden');
      navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-background-light', 'dark:bg-background-dark', 'border-t', 'border-primary/20', 'dark:border-primary/30', 'p-4', 'z-50', 'shadow-xl');
    }
  });
}

/* ============ ANIMACIONES AL HACER SCROLL ============ */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const observar = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  };

  observar();

  const mo = new MutationObserver(observar);
  mo.observe(document.body, { childList: true, subtree: true });
}

/* ============ RENDER DE SERVICIOS ============ */
function renderServicios(containerId, limit) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const items = limit ? servicios.slice(0, limit) : servicios;
  cont.innerHTML = items.map((s, i) => `
    <div class="reveal reveal-delay-${(i % 4) + 1} flex flex-col gap-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
      <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">${iconos[s.icono]}</div>
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">${s.titulo}</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm">${s.descripcion}</p>
      <ul class="mt-2 flex flex-col gap-2">
        ${s.bullets.map(b => `
          <li class="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
            <svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
            <span>${b}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* ============ RENDER DE EQUIPO ============ */
function renderEquipo(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = equipo.map(p => `
    <div class="reveal flex flex-col overflow-hidden rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 hover:shadow-xl transition-all hover:-translate-y-1">
      <div class="aspect-square overflow-hidden bg-primary/10">
        <img alt="${p.nombre}" class="h-full w-full object-cover" src="${p.imagen}" loading="lazy" />
      </div>
      <div class="flex flex-col gap-2 p-6">
        <p class="text-lg font-bold text-gray-900 dark:text-white">${p.nombre}</p>
        <p class="text-sm font-medium text-primary">${p.cargo}</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">${p.bio}</p>
      </div>
    </div>
  `).join('');
}

/* ============ RENDER DE STATS ============ */
function renderStats(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = stats.map(s => `
    <div class="reveal text-center">
      <p class="text-5xl font-black text-primary">${s.numero}</p>
      <p class="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">${s.etiqueta}</p>
    </div>
  `).join('');
}

/* ============ RENDER DE TESTIMONIOS ============ */
function renderTestimonios(containerId, limit) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const items = limit ? testimonios.slice(0, limit) : testimonios;
  cont.innerHTML = items.map(t => `
    <div class="reveal flex flex-col gap-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 p-6">
      <div class="flex items-center gap-4">
        <img alt="${t.nombre}" class="h-12 w-12 rounded-full object-cover" src="${t.avatar}" loading="lazy" />
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">${t.nombre}</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">${t.manager} · ${t.fecha}</p>
        </div>
      </div>
      <div class="flex text-yellow-400">
        ${Array.from({length: 5}, (_, i) => `<span class="${i < t.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}">${iconos.estrella}</span>`).join('')}
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400">"${t.texto}"</p>
    </div>
  `).join('');
}

/* ============ RENDER DE PLANES ============ */
function renderPlanes(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = planes.map(p => `
    <div class="reveal flex flex-col gap-6 rounded-xl p-7 ${p.destacado ? 'bg-gradient-to-br from-primary to-primary-light text-white border-2 border-primary shadow-2xl md:scale-105' : 'border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30'}">
      ${p.destacado ? '<span class="self-start rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase">Más popular</span>' : ''}
      <div>
        <h3 class="text-xl font-bold ${p.destacado ? 'text-white' : 'text-gray-900 dark:text-white'}">${p.nombre}</h3>
        <p class="mt-2 text-sm ${p.destacado ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}">${p.descripcion}</p>
      </div>
      <div>
        <span class="text-4xl font-black ${p.destacado ? 'text-white' : 'text-gray-900 dark:text-white'}">${p.precio}</span>
        <span class="text-sm ${p.destacado ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}">${p.periodo}</span>
      </div>
      <ul class="flex flex-col gap-3 ${p.destacado ? 'text-white' : 'text-gray-700 dark:text-gray-300'}">
        ${p.features.map(f => `
          <li class="flex items-start gap-2 text-sm">
            <svg class="mt-0.5 h-5 w-5 flex-shrink-0 ${p.destacado ? 'text-white' : 'text-primary'}" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
      <a href="contacto.html" class="mt-auto inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold transition-transform hover:scale-105 ${p.destacado ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-primary-light'}">Contratar</a>
    </div>
  `).join('');
}

/* ============ RENDER DE PRECIOS INDIVIDUALES ============ */
function renderPreciosIndividuales(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = `
    <div class="overflow-x-auto rounded-xl border border-gray-200/50 dark:border-gray-700/50">
      <table class="w-full text-left text-sm">
        <thead class="bg-primary/10 dark:bg-gray-800/50 text-xs uppercase tracking-wider">
          <tr>
            <th class="px-6 py-4 font-bold text-gray-900 dark:text-white">Servicio</th>
            <th class="px-6 py-4 font-bold text-gray-900 dark:text-white">Duración</th>
            <th class="px-6 py-4 font-bold text-gray-900 dark:text-white text-right">Precio</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200/50 dark:divide-gray-700/50">
          ${preciosIndividuales.map(p => `
            <tr class="hover:bg-primary/5 dark:hover:bg-gray-800/30 transition-colors">
              <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">${p.servicio}</td>
              <td class="px-6 py-4 text-gray-600 dark:text-gray-400">${p.duracion}</td>
              <td class="px-6 py-4 text-right font-bold text-primary">${p.precio}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ============ HORARIOS POR DÍA ============ */
function initHorarios() {
  const tabs = document.getElementById('tabsDias');
  const panel = document.getElementById('panelHorario');
  if (!tabs || !panel) return;

  const dias = [
    { id: 'lunes', label: 'Lunes' },
    { id: 'martes', label: 'Martes' },
    { id: 'miercoles', label: 'Miércoles' },
    { id: 'jueves', label: 'Jueves' },
    { id: 'viernes', label: 'Viernes' },
    { id: 'sabado', label: 'Sábado' }
  ];

  tabs.innerHTML = dias.map((d, i) => `
    <button data-dia="${d.id}" class="tab-dia px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${i === 0 ? 'bg-primary text-white shadow-lg' : 'bg-background-light dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 hover:bg-primary/20'}">${d.label}</button>
  `).join('');

  const pintar = (dia) => {
    panel.innerHTML = `
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        ${horariosClases[dia].map(c => `
          <div class="flex flex-col gap-3 rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 p-5 hover:border-primary/50 transition-all hover:shadow-lg">
            <div class="flex items-center justify-between">
              <span class="inline-flex items-center gap-1.5 text-xs font-bold text-primary">${iconos.reloj}<span>${c.hora}</span></span>
              <span class="rounded-full ${c.modalidad === 'Online' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'} px-2 py-0.5 text-xs font-medium">${c.modalidad}</span>
            </div>
            <h3 class="text-base font-bold text-gray-900 dark:text-white">${c.nombre}</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400">Profesor: <span class="font-medium">${c.profesor}</span></p>
          </div>
        `).join('')}
      </div>
    `;
  };

  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-dia');
    if (!btn) return;
    tabs.querySelectorAll('.tab-dia').forEach(b => {
      b.classList.remove('bg-primary', 'text-white', 'shadow-lg');
      b.classList.add('bg-background-light', 'dark:bg-gray-800/40', 'text-gray-700', 'dark:text-gray-300');
    });
    btn.classList.add('bg-primary', 'text-white', 'shadow-lg');
    btn.classList.remove('bg-background-light', 'dark:bg-gray-800/40', 'text-gray-700', 'dark:text-gray-300');
    pintar(btn.dataset.dia);
  });

  pintar('lunes');
}

/* ============ GALERÍA: RENDER, FILTRO Y LIGHTBOX ============ */
function initGaleria() {
  const cont = document.getElementById('galeriaGrid');
  const filtros = document.getElementById('galeriaFiltros');
  if (!cont) return;

  const pintar = (cat) => {
    const items = cat === 'todos' ? galeria : galeria.filter(g => g.categoria === cat);
    cont.innerHTML = items.map((g, i) => `
      <button data-src="${g.src}" data-titulo="${g.titulo}" class="galeria-item group relative overflow-hidden rounded-xl border border-gray-200/50 dark:border-gray-700/50 aspect-[4/3]" style="transition-delay: ${i * 30}ms">
        <img alt="${g.titulo}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="${g.src}" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <p class="text-sm font-bold text-white">${g.titulo}</p>
        </div>
      </button>
    `).join('');
  };

  if (filtros) {
    const cats = [
      { id: 'todos', label: 'Todos' },
      { id: 'campanas', label: 'Campañas' },
      { id: 'branding', label: 'Branding' },
      { id: 'eventos', label: 'Eventos' },
      { id: 'equipo', label: 'Equipo' }
    ];
    filtros.innerHTML = cats.map((c, i) => `
      <button data-cat="${c.id}" class="filtro-cat rounded-full px-5 py-2 text-sm font-medium transition-all ${i === 0 ? 'bg-primary text-white shadow-lg' : 'bg-background-light dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 hover:bg-primary/20'}">${c.label}</button>
    `).join('');

    filtros.addEventListener('click', (e) => {
      const btn = e.target.closest('.filtro-cat');
      if (!btn) return;
      filtros.querySelectorAll('.filtro-cat').forEach(b => {
        b.classList.remove('bg-primary', 'text-white', 'shadow-lg');
        b.classList.add('bg-background-light', 'dark:bg-gray-800/40', 'text-gray-700', 'dark:text-gray-300');
      });
      btn.classList.add('bg-primary', 'text-white', 'shadow-lg');
      btn.classList.remove('bg-background-light', 'dark:bg-gray-800/40', 'text-gray-700', 'dark:text-gray-300');
      pintar(btn.dataset.cat);
    });
  }

  pintar('todos');

  // Lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.className = 'fixed inset-0 z-[100] hidden items-center justify-center bg-black/90 p-4 backdrop-blur-sm';
  lightbox.innerHTML = `
    <button id="lightboxClose" class="absolute top-6 right-6 text-white hover:text-primary-light transition-colors">
      <svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <img id="lightboxImg" alt="" class="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl" />
    <p id="lightboxTitulo" class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-medium"></p>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitulo = document.getElementById('lightboxTitulo');
  const lightboxClose = document.getElementById('lightboxClose');

  cont.addEventListener('click', (e) => {
    const item = e.target.closest('.galeria-item');
    if (!item) return;
    lightboxImg.src = item.dataset.src;
    lightboxImg.alt = item.dataset.titulo;
    lightboxTitulo.textContent = item.dataset.titulo;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
  });

  const cerrar = () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
  };
  lightboxClose.addEventListener('click', cerrar);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) cerrar(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrar(); });
}

/* ============ VALORES ============ */
function renderValores(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = valores.map(v => `
    <div class="reveal flex flex-col gap-3 rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
      <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">${iconos[v.icono]}</div>
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">${v.titulo}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">${v.descripcion}</p>
    </div>
  `).join('');
}

/* ============ HISTORIA / TIMELINE ============ */
function renderHistoria(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = historia.map((h, i) => `
    <div class="reveal relative flex gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center">
      <div class="hidden md:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}">
        <div class="inline-block rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 p-5 hover:shadow-lg transition-shadow">
          <p class="text-2xl font-black text-primary">${h.año}</p>
          <p class="mt-1 text-base font-bold text-gray-900 dark:text-white">${h.titulo}</p>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">${h.descripcion}</p>
        </div>
      </div>
      <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold pulse-ring z-10">${i + 1}</div>
      <div class="flex-1 md:hidden">
        <div class="rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 p-5">
          <p class="text-2xl font-black text-primary">${h.año}</p>
          <p class="mt-1 text-base font-bold text-gray-900 dark:text-white">${h.titulo}</p>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">${h.descripcion}</p>
        </div>
      </div>
      <div class="hidden md:block flex-1"></div>
    </div>
  `).join('');
}

/* ============ RAZONES ============ */
function renderRazones(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = razones.map((r, i) => `
    <div class="reveal reveal-delay-${i + 1} flex flex-col gap-3 rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
      <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-black">${i + 1}</div>
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">${r.titulo}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">${r.descripcion}</p>
    </div>
  `).join('');
}

/* ============ CASOS DE ÉXITO ============ */
function renderCasos(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = casosExito.map(c => `
    <article class="reveal group flex flex-col overflow-hidden rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 hover:shadow-2xl transition-all hover:-translate-y-1">
      <div class="aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('${c.imagen}');"></div>
      <div class="flex flex-1 flex-col gap-3 p-6">
        <span class="text-xs font-bold uppercase tracking-wider text-primary">${c.categoria}</span>
        <h3 class="text-lg font-bold text-gray-900 dark:text-white">${c.titulo}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">${c.descripcion}</p>
      </div>
    </article>
  `).join('');
}

/* ============ HERRAMIENTAS ============ */
function renderHerramientas(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = herramientas.map(h => `
    <span class="inline-flex items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-2 text-sm font-medium text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all cursor-default">
      ${h}
    </span>
  `).join('');
}

/* ============ FAQ ============ */
function initFaq() {
  const cont = document.getElementById('faqList');
  if (!cont) return;
  cont.innerHTML = faqs.map((f, i) => `
    <details class="reveal group rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-background-light dark:bg-gray-800/30 overflow-hidden">
      <summary class="flex cursor-pointer items-center justify-between p-5 font-medium text-gray-900 dark:text-white hover:text-primary">
        <span>${f.pregunta}</span>
        <svg class="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </summary>
      <div class="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">${f.respuesta}</div>
    </details>
  `).join('');
}

/* ============ FORMULARIO DE CONTACTO ============ */
function initContacto() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const validar = (input, condicion) => {
    const err = input.parentElement.querySelector('.error-msg');
    if (condicion) {
      input.classList.remove('border-red-500');
      input.classList.add('border-gray-300');
      if (err) err.classList.add('hidden');
      return true;
    } else {
      input.classList.add('border-red-500');
      input.classList.remove('border-gray-300');
      if (err) err.classList.remove('hidden');
      return false;
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('input, textarea, select').forEach(input => {
      const v = input.value.trim();
      let valido = v.length > 0;
      if (input.type === 'email' && valido) valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (input.type === 'tel' && valido) valido = v.replace(/\D/g, '').length >= 8;
      ok = validar(input, valido) && ok;
    });
    const acepta = form.querySelector('#acepta');
    if (acepta && !acepta.checked) ok = false;
    if (ok) {
      const msgExito = document.getElementById('formExito');
      if (msgExito) msgExito.classList.remove('hidden');
      form.reset();
      setTimeout(() => msgExito && msgExito.classList.add('hidden'), 5000);
    }
  });

  form.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('blur', () => {
      const v = input.value.trim();
      let valido = v.length > 0;
      if (input.type === 'email' && valido) valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (input.type === 'tel' && valido) valido = v.replace(/\D/g, '').length >= 8;
      validar(input, valido);
    });
  });
}

/* ============ MARCAR LINK ACTIVO ============ */
function marcarActivo() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav#navMenu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.remove('text-gray-900', 'dark:text-gray-200');
      a.classList.add('text-primary');
    }
  });
}

/* ============ AÑO AUTOMÁTICO EN FOOTER ============ */
function setAnioFooter() {
  document.querySelectorAll('[data-anio]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ============ INICIALIZACIÓN ============ */
document.addEventListener('DOMContentLoaded', () => {
  inyectarEstilos();
  initDarkMode();
  initMenu();
  initAnimations();
  marcarActivo();
  setAnioFooter();
  renderServicios('serviciosGrid');
  renderServicios('serviciosDestacados', 6);
  renderEquipo('equipoGrid');
  renderStats('statsGrid');
  renderTestimonios('testimoniosGrid', 3);
  renderCasos('casosGrid');
  renderPlanes('planesGrid');
  renderPreciosIndividuales('preciosIndividuales');
  renderHerramientas('herramientasGrid');
  initHorarios();
  initGaleria();
  renderValores('valoresGrid');
  renderHistoria('historiaTimeline');
  renderRazones('razonesGrid');
  initFaq();
  initContacto();
});