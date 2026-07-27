export const SITE = {
  name: "Tuki",
  slogan: "Te devolvemos las horas.",
  tagline: "Vos ponés el negocio. Nosotros te devolvemos las horas.",
  description:
    "Agencia digital en Bahía Blanca: turnos online, páginas web, catálogos digitales con QR y automatizaciones para que tu negocio funcione sin que tengas que estar encima de todo.",
  whatsapp: "5492915134087",
  whatsappDisplay: "+54 9 291 513-4087",
  email: "tukisoluciones@gmail.com",
  instagramHandle: "@tukisoluciones",
  instagramUrl: "https://www.instagram.com/tukisoluciones/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61590551922179",
  location: "Bahía Blanca, Argentina",
  url: "https://horaslibres.site",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "turnos-y-reservas",
    number: "01",
    title: "Turnos y Reservas",
    short: "Cero llamadas, cero turnos pisados.",
    description:
      "Tu cliente entra, elige el día y la hora, y reserva solo. Se terminan las idas y vueltas por WhatsApp para coordinar un horario y los turnos que se superponen.",
    bullets: [
      "Reserva 100% online, día y hora",
      "Panel de administración para vos",
      "Excepciones de horario y multi-profesional",
    ],
  },
  {
    slug: "paginas-web",
    number: "02",
    title: "Páginas Web",
    short: "Tu mejor vendedor, 24/7.",
    description:
      "Desde una landing simple hasta una tienda online con pasarela de pago, con un botón directo a WhatsApp en todo momento. Mientras vos atendés tu negocio, tu web sigue mostrando lo que hacés y consiguiendo consultas.",
    bullets: [
      "Landing, institucional o e-commerce",
      "Mobile-first y rápido de cargar",
      "SEO on-page inicial incluido",
    ],
  },
  {
    slug: "catalogo-qr",
    number: "03",
    title: "Catálogo Digital con QR",
    short: "Tu menú o catálogo, siempre a mano.",
    description:
      "Para gastronomía y comercio: un menú o catálogo digital con QR imprimible en la mesa o el mostrador, y pedidos directos por WhatsApp. Rápido de poner en marcha y fácil de mantener al día.",
    bullets: [
      "QR imprimible para mesa o mostrador",
      "Pedidos directos por WhatsApp",
      "Panel propio opcional para editar solo",
    ],
  },
  {
    slug: "automatizaciones",
    number: "04",
    title: "Automatizaciones",
    short: "Dejá de hacer a mano lo que una máquina puede hacer por vos.",
    description:
      "Automatizamos WhatsApp, recordatorios de turnos, reportes y flujos de trabajo entre tus herramientas. Todo lo que hacés más de 3 veces por semana, se puede automatizar.",
    bullets: [
      "Respuestas automáticas en WhatsApp, 24/7",
      "Recordatorios que reducen ausencias",
      "Flujos que conectan tus herramientas",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Nos escribís y nos contás tu negocio",
    description:
      "Nos mandás un mensaje por WhatsApp y nos contás qué hace tu negocio, qué necesitás y cómo trabajás hoy.",
  },
  {
    number: "02",
    title: "Te armamos una demo real",
    description:
      "Preparamos una demo concreta, pensada para tu rubro, para que veas exactamente cómo quedaría.",
  },
  {
    number: "03",
    title: "La ves y, si te gusta, lo dejamos andando",
    description:
      "Revisamos la demo juntos, ajustamos lo que haga falta y, si te convence, la dejamos funcionando para tu negocio.",
  },
] as const;

export type Demo = {
  slug: string;
  file: string;
  rubro: string;
  accion: string;
};

export const DEMOS: Demo[] = [
  { slug: "psicologo", file: "/demos/web_psicologo.mp4?v=2", rubro: "Psicólogo", accion: "Reserva de turno" },
  { slug: "abogado", file: "/demos/web_abogado.mp4?v=2", rubro: "Abogado", accion: "Formulario de consulta" },
  { slug: "estetica", file: "/demos/web_estetica.mp4?v=2", rubro: "Centro de estética", accion: "Reserva de turno" },
  { slug: "medico", file: "/demos/web_medico.mp4?v=2", rubro: "Médico", accion: "Reserva de turno" },
  { slug: "peluqueria", file: "/demos/web_peluqueria.mp4?v=2", rubro: "Peluquería", accion: "Contacto por WhatsApp" },
  { slug: "odontologo", file: "/demos/web_odontologo.mp4?v=2", rubro: "Odontólogo", accion: "Reserva de turno" },
  { slug: "gimnasio", file: "/demos/web_gimnasio.mp4?v=2", rubro: "Gimnasio", accion: "Formulario de inscripción" },
  { slug: "veterinaria", file: "/demos/web_veterinaria.mp4?v=2", rubro: "Veterinaria", accion: "Contacto por WhatsApp" },
  { slug: "inmobiliaria", file: "/demos/web_inmobiliaria.mp4?v=2", rubro: "Inmobiliaria", accion: "Formulario de consulta" },
  { slug: "restaurante", file: "/demos/web_restaurante.mp4?v=2", rubro: "Restaurante", accion: "Contacto por WhatsApp" },
];
