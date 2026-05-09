import { ContentData } from './types';

export const CONTENT: ContentData = {
  name: "Academia de Cine y Teatro de Puerto Rico",
  acronym: "ACT / CAE",
  summary: "El Conservatorio de Artes Escénicas de Puerto Rico (CAE) es una institución dedicada a la formación, producción y desarrollo del talento artístico, proyectando la Academia de Cine y Teatro (ACT) como pilar en el crecimiento de las industrias creativas y la economía naranja.",
  programs: [
    {
      title: "Certificación Profesional en Actuación",
      description: "Formación integral en teatro, cine y actuación ante cámara, preparando artistas para la industria creativa.",
      icon: "clapperboard"
    },
    {
      title: "Teatro Educativo",
      description: "Programas que utilizan las artes escénicas como herramienta pedagógica para fomentar el pensamiento crítico y la apreciación cultural.",
      icon: "book-open"
    },
    {
      title: "Teatro Comunitario",
      description: "Iniciativas que fortalecen la identidad cultural y el acceso al arte en comunidades.",
      icon: "users"
    },
    {
      title: "Teatro Corporativo",
      description: "Soluciones creativas para empresas enfocadas en comunicación, liderazgo y bienestar organizacional.",
      icon: "briefcase"
    },
    {
      title: "Eventos y Producción Artística",
      description: "Espacios de exhibición, formación y networking para el talento emergente.",
      icon: "ticket"
    }
  ],
  impact: {
    creativeIndustries: "El CAE se posiciona como un centro de desarrollo de talento que nutre sectores como el cine, teatro, televisión, educación artística y creación de contenido. A través de sus programas, impulsa la profesionalización y sostenibilidad del ecosistema creativo.",
    orangeEconomy: "El color naranja representa la creatividad como activo económico. En este contexto, el CAE convierte el talento artístico en oportunidades económicas sostenibles, genera empleo en el sector cultural, promueve la creación y exportación de contenido creativo y fortalece la cultura como valor estratégico del país. Asimismo, establece alianzas con instituciones, empresas y comunidades, posicionándose como un motor de desarrollo cultural y económico en Puerto Rico."
  },
  director: {
    name: "Wilderman García",
    title: "Director de la Academia de Cine y Teatro de Puerto Rico",
    bio: [
      "Actor, docente y gestor cultural con más de 30 años de trayectoria internacional. Wilderman es graduado en Artes Escénicas con énfasis en Teatro por la Universidad de Caldas (Colombia) y actualmente expande su visión estratégica cursando estudios de postgrado en Administración y Gestión Cultural en la Universidad de Puerto Rico.",
      "Su carrera frente a las cámaras y sobre las tablas abarca más de 300 producciones de cine y televisión, incluyendo series de distribución internacional. Esta vasta experiencia le ha permitido recorrer escenarios en Colombia, Estados Unidos, Puerto Rico, Perú, Alemania y República Dominicana, consolidándose como un referente de la industria."
    ],
    achievements: [
      "Ganador del premio a Mejor Actor en los Madrid Film Awards.",
      "Poseedor de la Visa EB1A de Habilidad Extraordinaria, otorgada por el Gobierno de los EE. UU.",
      "Fundador del Orlando Performing Arts Conservatory (Florida, 2021) y actual director de la Academia de Cine y Teatro de Puerto Rico."
    ]
  }
};
