const organData = {
  pineal: {
    id: "GL-001",
    name: "Glándula Pineal",
    desc: "Pequeña estructura cónica situada en el centro del cerebro. Fotoreceptora en algunas especies, en humanos se encarga de regular los ritmos biológicos básicos dictados por los ciclos de luz y oscuridad.",
    contribution: "Regula el 'reloj biológico' del cuerpo (ritmo circadiano), induciendo el sueño y sincronizando de forma global las funciones corporales con los ciclos de luz y oscuridad del entorno.",
    structureFunction: "Su forma cónica permite una posición central y cercana a la glándula suprarrenal, facilitando la secreción rápida de melatonina directamente al torrente sanguíneo.",
    hormones: [
      { name: "Melatonina", desc: "Sintetizada a partir de la serotonina. Regula los ciclos de sueño y vigilia (ritmo circadiano) y tiene potentes propiedades antioxidantes." }
    ],
    clinicalNote: "La calcificación de la glándula pineal es común con la edad y puede visualizarse en radiografías, sirviendo como punto de referencia anatómico.",
    color: "#ff00ff", // Magenta Neón
    zoomCoords: "205px 85px",
    zoomScale: 5.5,
    axis: ["path-hipotalamo-pineal"],
    context: {
      img: "/context_sleep.png",
      health: "Evitar pantallas (celular, tablet) antes de dormir es crucial para no frenar la producción de melatonina.",
      daily: "Quedarte viendo TikTok o jugando de madrugada engaña a esta glándula creyendo que es de día. Por eso amaneces 'destruido' para las clases de las 7am."
    },
    video: "/video_pineal.mp4",
    disease: {
      name: "Insomnio Crónico / Alteración del Ritmo Circadiano",
      img: "/disease_pineal.png",
      desc: "Trastorno donde es difícil conciliar o mantener el sueño de forma constante.",
      causes: "En el contexto actual, el uso excesivo de celulares y pantallas antes de dormir bloquea la liberación natural de melatonina debido a la luz azul. También influye el estrés.",
      prevention: "Apagar pantallas al menos 1 hora antes de dormir, mantener horarios regulares de descanso y asegurar un ambiente oscuro en la habitación."
    }
  },
  hipotalamo: {
    id: "GL-002",
    name: "Hipotálamo",
    desc: "Región del encéfalo basal que actúa como centro de integración crítico. Coordina la actividad del sistema nervioso autónomo y la función de la glándula pituitaria, sirviendo de puente entre el sistema nervioso y el endocrino.",
    contribution: "Actúa como el centro de mando supremo. Traduce las señales nerviosas del cerebro en comandos hormonales, dirigiendo a la hipófisis para mantener el equilibrio interno (homeostasis) del organismo completo.",
    structureFunction: "Su forma alargada y ubicación estratégica entre el tronco encefálico y la hipófisis facilitan la transmisión rápida de señales hormonales a través del portal hipotálamo-hipofisario.",
    hormones: [
      { name: "TRH", desc: "Hormona liberadora de tirotropina. Estimula la liberación de tirotropina y prolactina por la hipófisis anterior." },
      { name: "GnRH", desc: "Hormona liberadora de gonadotropina. Estimula la síntesis y secreción de gonadotropinas (FSH y LH)." },
      { name: "Oxitocina", desc: "Neuropéptido que estimula las contracciones uterinas durante el parto y la eyección de leche durante la lactancia." },
      { name: "Vasopresina (ADH)", desc: "Hormona antidiurética. Promueve la retención de agua en los riñones y aumenta la presión arterial induciendo vasoconstricción." }
    ],
    color: "#00b5b5", // Cyan Oscuro para mejor contraste
    zoomCoords: "195px 95px",
    zoomScale: 5.5,
    axis: ["path-hipotalamo-hipofisis"],
    context: {
      img: "/context_thirst_fixed.png",
      health: "La hidratación y la buena nutrición ayudan al hipotálamo a regular tu temperatura y energía.",
      daily: "Es esa sed extrema y calor que sientes después de jugar una pichanga intensa o hacer educación física en el patio del cole."
    },
    video: "/video_hipotalamo.mp4",
    disease: {
      name: "Diabetes Insípida",
      img: "/disease_hipotalamo.png",
      desc: "Condición rara en la que los riñones no pueden conservar el agua debido a una falta de la hormona antidiurética (ADH), produciendo sed extrema y mucha orina.",
      causes: "Traumatismos craneoencefálicos severos (por accidentes de tránsito, comunes en nuestro país), tumores o infecciones.",
      prevention: "Uso estricto de casco al manejar moto o bicicleta, prevenir accidentes viales y realizar chequeos médicos neurológicos tras golpes fuertes en la cabeza."
    }
  },
  hipofisis: {
    id: "GL-003",
    name: "Hipófisis (Pituitaria)",
    desc: "A menudo denominada la 'glándula maestra', la hipófisis regula la actividad de la mayor parte de las demás glándulas endocrinas bajo el control del hipotálamo.",
    contribution: "Es la directora de orquesta del sistema endocrino. A partir de las órdenes del hipotálamo, segrega mensajeros que controlan la actividad del resto de glándulas periféricas (tiroides, suprarrenales y gónadas).",
    structureFunction: "Su forma de glándula bulbosa con porciones anterior y posterior permite la liberación diferencial de hormonas peptídicas y esteroides, facilitando respuestas rápidas y sostenidas.",
    hormones: [
      { name: "GH", desc: "Hormona del crecimiento. Estimula el crecimiento celular, la reproducción y la regeneración en humanos y otros animales." },
      { name: "TSH", desc: "Hormona estimulante de la tiroides. Induce a la glándula tiroides a producir tiroxina (T4) y triyodotironina (T3)." },
      { name: "ACTH", desc: "Hormona adrenocorticotrópica. Estimula la producción y liberación de cortisol por la corteza de las glándulas suprarrenales." },
      { name: "Gonadotropinas", desc: "Incluye la FSH y LH, que regulan el desarrollo, maduración puberal y los procesos reproductivos en ambos sexos." },
      { name: "Prolactina", desc: "Estimula la producción de leche en las glándulas mamarias y juega un papel en la regulación inmunológica." }
    ],
    color: "#16a34a", // Verde Fuerte
    zoomCoords: "200px 110px",
    zoomScale: 5.5,
    axis: ["path-hipotalamo-hipofisis"],
    context: {
      img: "/context_growth.png",
      health: "Un descanso profundo (sueño REM) es cuando tu hipófisis libera más hormona del crecimiento. Si no duermes, no creces bien.",
      daily: "Es la responsable de los temidos 'estirones' que das en secundaria, haciendo que el uniforme del colegio te quede pequeño en solo unos meses."
    },
    video: "/video_hipofisis.mp4",
    disease: {
      name: "Gigantismo y Enanismo Pituitario",
      img: "/disease_hipofisis.png",
      desc: "Trastornos del crecimiento. El gigantismo es un crecimiento anormalmente grande por exceso de GH, y el enanismo es la baja estatura extrema por falta de GH durante la niñez.",
      causes: "Suele ser causado por un adenoma (tumor benigno) en la glándula pituitaria que altera la producción hormonal, o mutaciones genéticas hereditarias.",
      prevention: "Llevar a los niños a los controles de 'Niño Sano' (establecidos por el MINSA en Perú) para detectar a tiempo desviaciones inusuales en la curva de crecimiento."
    }
  },
  tiroides: {
    id: "GL-004",
    name: "Tiroides",
    desc: "Glándula cervical fundamental para el control metabólico basal. Dicta la velocidad de consumo de energía y la producción de calor de todas las células del cuerpo.",
    contribution: "Determina el ritmo del 'motor' del cuerpo. Controla la velocidad metabólica celular afectando el peso, la temperatura y tu nivel de energía vital.",
    structureFunction: "Su forma de mariposa con lóbulos laterales aumenta la superficie para captar y procesar yodo, optimizando la producción de hormonas tiroideas a partir de la sangre circulante.",
    hormones: [
      { name: "Tiroxina (T4)", desc: "Principal prohormona secretada por la tiroides. Circula en la sangre y se convierte en T3 en los tejidos diana para regular el metabolismo." },
      { name: "Triyodotironina (T3)", desc: "Forma biológicamente activa de la hormona tiroidea. Aumenta drásticamente la tasa metabólica basal, la síntesis de proteínas y la sensibilidad a catecolaminas." },
      { name: "Calcitonina", desc: "Secreta por las células C. Reduce los niveles de calcio en la sangre inhibiendo la resorción ósea por los osteoclastos." }
    ],
    color: "#e11d48", // Rojo Carmesí Vibrante Oscurecido
    zoomCoords: "200px 135px",
    zoomScale: 5.0,
    axis: ["path-hipotalamo-hipofisis", "path-hipofisis-tiroides"],
    context: {
      img: "/context_energy.png",
      health: "Una buena nutrición sin dietas extremas permite que tu tiroides mantenga un metabolismo sano, regulando perfectamente la velocidad a la que quemas calorías.",
      daily: "Es tu termostato y batería: si funciona al 100%, tienes 'pilas' para todas las clases y no sientes frío excesivo cuando tus compañeros tienen calor."
    },
    video: "/video_tiroides.mp4",
    disease: {
      name: "Hipotiroidismo y Bocio Endémico",
      img: "/disease_tiroides.png",
      desc: "El hipotiroidismo es la baja producción de hormonas tiroideas. Históricamente en zonas altoandinas del Perú, la falta de yodo causaba Bocio Endémico (crecimiento anormal de la tiroides en el cuello) y Cretinismo (retraso físico y mental).",
      causes: "Deficiencia severa de yodo en la dieta o enfermedades autoinmunes como la Tiroiditis de Hashimoto, donde el cuerpo ataca a su propia tiroides.",
      prevention: "Consumo de sal yodada (política de salud pública exitosa en Perú), comer pescados, mariscos y algas ricas en yodo."
    }
  },
  paratiroides: {
    id: "GL-004B",
    name: "Glándulas Paratiroides",
    desc: "Son cuatro glándulas diminutas situadas detrás de la glándula tiroides. Su función principal es mantener un control preciso de los niveles de calcio y fósforo en la sangre y los huesos.",
    contribution: "Es el guardián del calcio. Se asegura de que el sistema nervioso y muscular tengan el calcio necesario para transmitir impulsos y contraerse correctamente.",
    structureFunction: "Su pequeño tamaño y ubicación estratégica posterior a la tiroides les permite monitorear constantemente el abundante flujo sanguíneo del cuello para detectar niveles de calcio y liberar PTH instantáneamente.",
    hormones: [
      { name: "PTH (Hormona Paratiroidea)", desc: "Aumenta los niveles de calcio en sangre estimulando la liberación de calcio de los huesos, la absorción intestinal y la reabsorción renal." }
    ],
    color: "#f59e0b", // Ámbar/Amarillo vibrante
    zoomCoords: "200px 135px",
    zoomScale: 5.0,
    axis: ["path-hipotalamo-hipofisis", "path-hipofisis-tiroides"],
    context: {
      img: "/context_parathyroids.png",
      health: "Consumir alimentos ricos en calcio y vitamina D es esencial para que la paratiroides no se vea forzada a robar calcio de tus huesos (lo que debilita tu esqueleto).",
      daily: "Son las responsables de que tus músculos se contraigan rápido cuando haces deporte y de que tus huesos sean fuertes y no te fractures fácilmente al caerte jugando."
    },
    disease: {
      name: "Hiperparatiroidismo",
      img: "/disease_paratiroides.png",
      desc: "Producción excesiva de la hormona paratiroidea (PTH), lo que extrae demasiado calcio de los huesos hacia la sangre, causando osteoporosis secundaria.",
      causes: "Tumores benignos en las glándulas paratiroides o como respuesta a una deficiencia severa y crónica de calcio y vitamina D.",
      prevention: "Exposición solar moderada para sintetizar vitamina D y dieta peruana rica en calcio (queso fresco, leche, kiwicha, tarwi, quinua)."
    }
  },
  timo: {
    id: "GL-005",
    name: "Timo",
    desc: "Órgano linfoide primario ubicado en la cavidad torácica superior. Es el sitio de maduración de los linfocitos T, cruciales para la inmunidad adaptativa. Su tamaño decrece con la edad.",
    contribution: "Es la 'academia de entrenamiento' del sistema inmunológico. Prepara y madura glóbulos blancos especializados (linfocitos T) asegurando que el cuerpo pueda defenderse de patógenos sin atacarse a sí mismo.",
    structureFunction: "Su forma alargada y tejido esponjoso facilitan la exposición de los linfocitos a una gran superficie de antígenos, favoreciendo la selección y maduración de células T.",
    hormones: [
      { name: "Timosina", desc: "Péptido que estimula el desarrollo y la maduración de las células T (linfocitos T) en el timo." },
      { name: "Timopoyetina", desc: "Polipéptido que induce la diferenciación de precursores linfoides y ayuda a regular la función inmunológica general." }
    ],
    color: "#ea580c", // Naranja Oscuro en lugar de Amarillo para mejor legibilidad
    zoomCoords: "200px 205px",
    zoomScale: 4.5,
    axis: [],
    context: {
      img: "/context_immunity.png",
      health: "Una buena alimentación en la primera infancia y el cumplimiento del calendario de vacunas ayuda al timo a programar tus defensas de por vida.",
      daily: "Es la razón por la que, de adolescente, ya eres inmune a muchas de las infecciones leves o resfriados que te daban constantemente de bebé."
    },
    video: "/video_timo.mp4",
    disease: {
      name: "Inmunodeficiencia Severa",
      img: "/disease_timo.png",
      desc: "Falta de desarrollo adecuado de linfocitos T, lo que hace al cuerpo extremadamente vulnerable a infecciones virales y bacterianas comunes.",
      causes: "La desnutrición infantil severa y la anemia temprana (problemas graves en algunas regiones del Perú) pueden afectar el desarrollo óptimo del timo y el sistema inmune.",
      prevention: "Lactancia materna exclusiva los primeros 6 meses, esquema completo de vacunación y alimentación rica en hierro para evitar la anemia infantil."
    }
  },
  suprarrenales: {
    id: "GL-006",
    name: "Glándulas Suprarrenales",
    desc: "Glándulas pares ubicadas sobre los riñones. Mediadoras principales de la respuesta al estrés, regulando respuestas agudas (lucha o huida) y el metabolismo crónico.",
    contribution: "Gestiona los mecanismos de supervivencia del organismo. Prepara al cuerpo de forma explosiva ante emergencias (adrenalina) y ayuda a mantener el equilibrio durante el estrés crónico, controlando la presión y minerales.",
    structureFunction: "Su forma triangular con una zona externa (corteza) y una interna (médula) permite la síntesis secuencial de hormonas de respuesta rápida y sostenida.",
    hormones: [
      { name: "Cortisol", desc: "Principal glucocorticoide. Hormona del estrés que moviliza reservas de energía, eleva la glucosa en sangre y suprime el sistema inmunológico e inflamatorio." },
      { name: "Adrenalina", desc: "Epinefrina. Secreta por la médula suprarrenal, prepara al cuerpo de forma inmediata para la respuesta de 'lucha o huida' (taquicardia, broncodilatación)." },
      { name: "Noradrenalina", desc: "Norepinefrina. Trabaja junto a la adrenalina; se enfoca principalmente en aumentar el tono vascular y la presión arterial periférica." },
      { name: "Aldosterona", desc: "Principal mineralocorticoide. Actúa en los riñones para conservar sodio, secretar potasio y estabilizar la presión sanguínea." }
    ],
    color: "#d97706", // Ámbar Fuerte
    zoomCoords: "200px 365px",
    zoomScale: 4.5,
    axis: ["path-hipotalamo-hipofisis", "path-hipofisis-suprarrenales"],
    context: {
      img: "/context_stress.png",
      health: "El estrés crónico por exámenes o problemas agota a estas glándulas, causando fatiga severa y baja concentración.",
      daily: "Es la adrenalina pura que sientes en el pecho cuando el profesor dice de la nada: 'Guarden todo, saquen una hoja para examen sorpresa'."
    },
    video: "/video_suprarrenales.mp4",
    disease: {
      name: "Síndrome de Cushing y Enfermedad de Addison",
      img: "/disease_suprarrenales.png",
      desc: "El Síndrome de Cushing es el exceso crónico de cortisol ('cara de luna llena', obesidad central). La Enfermedad de Addison es la falta severa de esta hormona, causando debilidad extrema.",
      causes: "Uso excesivo y prolongado de medicamentos corticoides (común por automedicación en farmacias peruanas para el asma o alergias) o tumores.",
      prevention: "Evitar la automedicación con corticoides sin supervisión médica estricta y aprender técnicas saludables para manejar el estrés diario."
    }
  },
  pancreas: {
    id: "GL-007",
    name: "Páncreas",
    desc: "Glándula mixta retroperitoneal. Sus islotes de Langerhans (porción endocrina) son el sistema de control primario de los niveles de glucosa en el torrente sanguíneo.",
    contribution: "Es el cajero principal del combustible celular. Se asegura de que todas las células reciban la glucosa necesaria para funcionar, evitando tanto el exceso tóxico en la sangre como la inanición celular.",
    structureFunction: "Su estructura con lóbulos exocrinos y los islotes endocrinos permite la gestión simultánea de la digestión y la regulación glucémica.",
    hormones: [
      { name: "Insulina", desc: "Hormona anabólica secretada por las células beta. Disminuye la glucemia facilitando la entrada de glucosa a músculos, hígado y tejido adiposo." },
      { name: "Glucagón", desc: "Hormona catabólica de las células alfa. Eleva la glucosa en sangre estimulando la glucogenólisis y gluconeogénesis hepática." },
      { name: "Somatostatina", desc: "Producida por las células delta. Actúa como un regulador maestro inhibiendo la secreción tanto de insulina como de glucagón." }
    ],
    color: "#0284c7", // Azul Fuerte
    zoomCoords: "200px 410px",
    zoomScale: 4.5,
    axis: [],
    context: {
      img: "/context_food_fixed.png",
      health: "Comer muchos azúcares y grasas dispara la insulina y agota al páncreas, arriesgándote a padecer diabetes en el futuro.",
      daily: "Comer mucha comida chatarra o gaseosa en el quiosco te da un pico de energía, seguido del temido 'mal del puerco' (sueño incontrolable en clase)."
    },
    video: "/video_pancreas.mp4",
    disease: {
      name: "Diabetes Mellitus Tipo 2",
      img: "/disease_pancreas.png",
      desc: "Enfermedad crónica donde el cuerpo no produce suficiente insulina o se vuelve resistente a ella. Es uno de los problemas de salud pública más graves en el Perú actual.",
      causes: "Dietas hipercalóricas (exceso de arroz, papa y fideos en un solo plato típico, acompañado de gaseosa), sedentarismo severo y obesidad.",
      prevention: "Mantener una alimentación balanceada (reducir carbohidratos simples), preferir agua en lugar de bebidas azucaradas, y hacer al menos 30 minutos de actividad física al día."
    }
  },
  ovarios: {
    id: "GL-008F",
    name: "Ovarios",
    desc: "Gónadas femeninas responsables de la maduración de los óvulos y la producción principal de hormonas sexuales femeninas, cruciales para el ciclo reproductivo y caracteres secundarios.",
    contribution: "Motor principal de la identidad biológica y el ciclo reproductivo femenino. Prepara cíclicamente el entorno corporal para la vida, a la vez que protege activamente el sistema óseo y cardiovascular de la mujer.",
    structureFunction: "Su forma ovalada y la presencia de folículos permite la maduración secuencial de óvulos y la liberación de hormonas en ciclos mensuales.",
    hormones: [
      { name: "Estrógenos", desc: "Hormonas sexuales femeninas principales. Regulan el desarrollo de caracteres sexuales secundarios, el ciclo menstrual y mantienen la densidad ósea." },
      { name: "Progesterona", desc: "Hormona crucial para preparar y mantener el endometrio uterino para la implantación y el embarazo." }
    ],
    color: "#ec4899", // Rosa Brillante (mucho más visible)
    zoomCoords: "200px 430px",
    zoomScale: 4.5,
    axis: ["path-hipotalamo-hipofisis", "path-hipofisis-gonadas"],
    context: {
      img: "/context_puberty_f.png",
      health: "El ciclo menstrual es un indicador vital de salud. Una dieta extrema o el exceso de estrés pueden alterarlo severamente.",
      daily: "Son los responsables biológicos de los cambios de humor repentinos, el desarrollo físico y todos los retos emocionales que atraviesas en secundaria."
    },
    video: "/video_ovarios.mp4",
    disease: {
      name: "Síndrome de Ovario Poliquístico (SOP)",
      img: "/disease_ovarios.png",
      desc: "Desequilibrio hormonal frecuente que provoca periodos irregulares, exceso de vello corporal (por andrógenos altos) y múltiples quistes en los ovarios.",
      causes: "Factores genéticos combinados frecuentemente con la resistencia a la insulina y el sobrepeso.",
      prevention: "Mantener un peso corporal saludable con dieta y ejercicio, acudir a un control ginecológico anual si hay irregularidades menstruales fuertes."
    }
  },
  testiculos: {
    id: "GL-008M",
    name: "Testículos",
    desc: "Gónadas masculinas encargadas de la producción de espermatozoides (espermatogénesis) y la síntesis primaria de andrógenos que dictan la virilidad.",
    contribution: "Fuerza motriz de la identidad biológica y el desarrollo físico masculino. Orquestan el crecimiento muscular, el fortalecimiento de la estructura ósea y aseguran la capacidad reproductiva constante.",
    structureFunction: "Su forma alargada y la disposición tubular dentro del escroto favorecen la producción continua de espermatozoides y la secreción de testosterona.",
    hormones: [
      { name: "Testosterona", desc: "Andrógeno principal. Regula el desarrollo de órganos reproductores masculinos, caracteres sexuales secundarios, masa muscular y espermatogénesis." }
    ],
    color: "#0ea5e9", // Celeste Brillante (alta visibilidad en fondo oscuro)
    zoomCoords: "200px 490px",
    zoomScale: 4.5,
    axis: ["path-hipotalamo-hipofisis", "path-hipofisis-gonadas"],
    context: {
      img: "/context_puberty_m_fixed.png",
      health: "El ejercicio físico regular y el sueño adecuado son clave para mantener los niveles de testosterona saludables durante tu desarrollo.",
      daily: "Son los responsables de que la voz te cambie de pronto (y te salgan 'gallos' al hablar en clase), además del acné y el desarrollo muscular."
    },
    video: "/video_testiculos.mp4",
    disease: {
      name: "Hipogonadismo Masculino",
      img: "/disease_testiculos.png",
      desc: "Producción insuficiente de testosterona, afectando gravemente el desarrollo muscular, la energía vital y las características sexuales masculinas.",
      causes: "Obesidad severa infantil, complicaciones por paperas mal cuidadas en la niñez, o lesiones traumáticas deportivas graves.",
      prevention: "Completar el esquema de vacunación (incluyendo paperas), usar protectores o suspensorios en deportes de contacto, y mantener una vida activa y sana."
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Intro Modal Logic
  const introModal = document.getElementById("intro-modal");
  const btnStartSim = document.getElementById("btn-start-sim");

  if (btnStartSim && introModal) {
    btnStartSim.addEventListener("click", () => {
      introModal.classList.add("hidden");
    });
  }

  // Set default gender
  document.body.classList.add('gender-male');
  
  // Pan variables
  let currentTranslateY = 0;
  let lastTranslateY = 0;

  const organs = document.querySelectorAll(".organ");
  const defaultState = document.getElementById("default-state");
  const dataState = document.getElementById("data-state");
  const systemsState = document.getElementById("systems-state");
  const resetBtn = document.getElementById("reset-zoom-btn");
  const btnOtherSystems = document.getElementById("btn-other-systems");
  const btnBackSystems = document.getElementById("btn-back-systems");
  
  // DOM Elements for Panel Update
  const organNameEl = document.getElementById("organ-name");
  const organDescEl = document.getElementById("organ-desc");
  const organContributionEl = document.getElementById("organ-contribution");
  const organStructureEl = document.getElementById("organ-structure");
  const organHormonesList = document.getElementById("organ-hormones");
  
  // Context DOM Elements
  const organContextImgEl = document.getElementById("organ-context-img");
  const organContextHealthEl = document.getElementById("organ-context-health");
  const organContextDailyEl = document.getElementById("organ-context-daily");
  
  // Video Elements
  const organVideoContainer = document.getElementById("organ-video-container");
  const organVideoEl = document.getElementById("organ-video");
  
  // Disease DOM Elements
  const organDiseaseImgEl = document.getElementById("organ-disease-img");
  const organDiseaseNameEl = document.getElementById("organ-disease-name");
  const organDiseaseDescEl = document.getElementById("organ-disease-desc");
  const organDiseaseCausesEl = document.getElementById("organ-disease-causes");
  const organDiseasePreventionEl = document.getElementById("organ-disease-prevention");
  
  // Tab Switching Logic
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
      
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
  
  // Para asignar colores dinámicos por CSS a cada imagen de órgano
  organs.forEach(organ => {
    const key = organ.getAttribute("data-organ");
    if(organData[key]) {
      organ.style.setProperty('--organ-color', organData[key].color);
    }
  });

  // Gender Toggle Logic
  const genderToggle = document.getElementById('gender-toggle');
  const toggleLabels = genderToggle.querySelectorAll('.toggle-label');
  const toggleTrack = genderToggle.querySelector('.toggle-track');

  const switchGender = (targetGender) => {
    const biodigitalLink = document.getElementById("biodigital-link");
    if (targetGender === 'male') {
      document.body.classList.replace('gender-female', 'gender-male');
      toggleLabels[0].classList.add('active');
      toggleLabels[1].classList.remove('active');
      if (biodigitalLink) biodigitalLink.href = "https://human.biodigital.com/widget/?be=2VVj&background.colors=0,0,0,1,0,0,0,1&initial.hand-hint=true&ui-fullscreen=true&ui-center=false&ui-dissect=true&ui-zoom=true&ui-help=true&ui-tools-display=primary&ui-info=true&uaid=3bFQg";
    } else {
      document.body.classList.replace('gender-male', 'gender-female');
      toggleLabels[1].classList.add('active');
      toggleLabels[0].classList.remove('active');
      if (biodigitalLink) biodigitalLink.href = "https://human.biodigital.com/widget/?be=2VVu&s=female&background.colors=0,0,0,1,0,0,0,1&initial.hand-hint=true&ui-fullscreen=true&ui-center=false&ui-dissect=true&ui-zoom=true&ui-help=true&ui-tools-display=primary&ui-info=true&uaid=3bFUj";
    }
    // Always reset view when switching gender
    resetBtn.click();
  };

  toggleLabels.forEach(label => {
    label.addEventListener('click', () => {
      switchGender(label.getAttribute('data-gender'));
    });
  });

  toggleTrack.addEventListener('click', () => {
    const currentGender = document.body.classList.contains('gender-male') ? 'female' : 'male';
    switchGender(currentGender);
  });

  // Organ click logic

  organs.forEach(organ => {
    organ.addEventListener("click", (e) => {
      // Remover clase active de todos los órganos
      organs.forEach(o => o.classList.remove("active"));
      
      const organKey = e.target.getAttribute("data-organ");
      
      // Añadir active a todos con el mismo data-organ
      document.querySelectorAll(`.organ[data-organ="${organKey}"]`).forEach(el => {
        el.classList.add("active");
      });

      // Lógica especial para iluminar todo el cerebro cuando se hace clic en sus hitboxes
      const brainImg = document.querySelector('.organ-img');
      if (["pineal", "hipotalamo", "hipofisis"].includes(organKey)) {
        brainImg.classList.add("active");
        brainImg.style.setProperty('--organ-color', organData[organKey].color);
      } else {
        brainImg.classList.remove("active");
      }

      // Obtener datos
      const data = organData[organKey];

      if (data) {
        // Actualizar el acento de color de la app entera
        document.documentElement.style.setProperty('--current-accent', data.color);

        // Cinematic Auto-Zoom
        currentTranslateY = 0;
        lastTranslateY = 0;
        const zoomGroup = document.getElementById("zoom-group");
        zoomGroup.style.transformOrigin = data.zoomCoords;
        zoomGroup.style.transform = `scale(${data.zoomScale}) translateY(0px)`;
        
        // Ejes Hormonales (Conexiones Animadas)
        document.querySelectorAll(".axis-path").forEach(path => path.classList.add("hidden"));
        if (data.axis && data.axis.length > 0) {
          data.axis.forEach(axisId => {
            const axisEl = document.getElementById(axisId);
            if (axisEl) {
              axisEl.classList.remove("hidden");
              // Reset animation
              axisEl.style.animation = 'none';
              axisEl.offsetHeight; /* trigger reflow */
              axisEl.style.animation = null; 
            }
          });
        }
        
        // Show Reset Button
        resetBtn.classList.remove("hidden");

        // Cambiar estados del panel
        defaultState.classList.add("hidden");
        systemsState.classList.add("hidden");
        dataState.classList.remove("hidden");

        // Actualizar Textos
        organNameEl.textContent = data.name.toUpperCase();
        organDescEl.textContent = data.desc;
        organContributionEl.textContent = data.contribution;
        organStructureEl.textContent = data.structureFunction;

        // Actualizar Contexto de Vida Diaria
        if (data.context) {
          organContextImgEl.src = data.context.img;
          organContextHealthEl.textContent = data.context.health;
          organContextDailyEl.textContent = data.context.daily;
        }

        // Actualizar Video
        if (data.video) {
          organVideoEl.src = data.video;
          organVideoContainer.classList.remove("hidden");
        } else {
          organVideoEl.pause();
          organVideoEl.removeAttribute("src");
          organVideoEl.load();
          organVideoContainer.classList.add("hidden");
        }

        // Actualizar Enfermedades
        const tabDiseasesBtn = document.querySelector('.tab-btn[data-tab="diseases"]');
        if (data.disease) {
          organDiseaseImgEl.src = data.disease.img;
          organDiseaseNameEl.textContent = data.disease.name.toUpperCase();
          organDiseaseDescEl.textContent = data.disease.desc;
          organDiseaseCausesEl.textContent = data.disease.causes;
          organDiseasePreventionEl.textContent = data.disease.prevention;
          tabDiseasesBtn.style.display = 'block';
        } else {
          tabDiseasesBtn.style.display = 'none';
        }

        // Limpiar y repoblar lista de hormonas (Formato Acordeón)
        organHormonesList.innerHTML = "";
        data.hormones.forEach(hormone => {
          const li = document.createElement("li");
          li.className = "hormone-item";
          
          li.innerHTML = `
            <div class="hormone-header">
              <span class="hormone-icon">&gt;</span>
              <span class="hormone-name">${hormone.name}</span>
            </div>
            <div class="hormone-details">
              <p>${hormone.desc}</p>
            </div>
          `;
          
          // Toggle function for accordion
          const header = li.querySelector(".hormone-header");
          header.addEventListener("click", () => {
            const isExpanded = li.classList.contains("expanded");
            // Opcional: Cerrar otros elementos
            // document.querySelectorAll('.hormone-item').forEach(i => i.classList.remove("expanded"));
            if (!isExpanded) {
              li.classList.add("expanded");
            } else {
              li.classList.remove("expanded");
            }
          });

          organHormonesList.appendChild(li);
        });
      }
    });
  });

  // Reset Zoom Logic
  resetBtn.addEventListener("click", () => {
    const zoomGroup = document.getElementById("zoom-group");
    currentTranslateY = 0;
    lastTranslateY = 0;
    zoomGroup.style.transformOrigin = "50% 50%";
    zoomGroup.style.transform = "scale(1) translateY(0px)";
    
    // Ocultar Ejes Hormonales
    document.querySelectorAll(".axis-path").forEach(path => path.classList.add("hidden"));
    
    // Restaurar UI a default
    organs.forEach(o => o.classList.remove("active"));
    const brainImg = document.querySelector('.organ-img');
    brainImg.classList.remove("active");
    
    defaultState.classList.remove("hidden");
    dataState.classList.add("hidden");
    systemsState.classList.add("hidden");
    document.documentElement.style.setProperty('--current-accent', 'var(--pure-white)');
    resetBtn.classList.add("hidden");
  });

  // Botón "Con qué otro sistema trabaja"
  if (btnOtherSystems) {
    btnOtherSystems.addEventListener("click", () => {
      defaultState.classList.add("hidden");
      dataState.classList.add("hidden");
      systemsState.classList.remove("hidden");
    });
  }

  // Botón Atrás en panel de sistemas
  if (btnBackSystems) {
    btnBackSystems.addEventListener("click", () => {
      systemsState.classList.add("hidden");
      defaultState.classList.remove("hidden");
    });
  }

  // --- Pan (Drag) Logic for Zoom ---
  let isDragging = false;
  let startY = 0;
  
  const zoomGroup = document.getElementById("zoom-group");
  const modelContainer = document.querySelector(".model-container");

  modelContainer.addEventListener("mousedown", (e) => {
    // Solo permitir arrastre si está en zoom
    if(!zoomGroup.style.transform || zoomGroup.style.transform.includes("scale(1)")) return;
    isDragging = true;
    startY = e.clientY;
    modelContainer.style.cursor = "grabbing";
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    modelContainer.style.cursor = "default";
    lastTranslateY = currentTranslateY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dy = e.clientY - startY;
    // Atenuar el movimiento para que se sienta natural
    currentTranslateY = lastTranslateY + (dy * 0.5); 
    
    // Límites expandidos para permitir scroll completo desde gónadas hasta hipotálamo
    if (currentTranslateY > 1500) currentTranslateY = 1500;
    if (currentTranslateY < -1500) currentTranslateY = -1500;
    
    const currentScaleMatch = zoomGroup.style.transform.match(/scale\(([^)]+)\)/);
    const scaleValue = currentScaleMatch ? currentScaleMatch[1] : 1;
    
    zoomGroup.style.transform = `scale(${scaleValue}) translateY(${currentTranslateY}px)`;
  });

});
