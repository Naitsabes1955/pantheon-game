// js/data.js - Historia de Zeus

const historiaZeus = [
    {
        id: 1,
        escena: "EL OLIMPO",
        historia: "Zeus observa desde su trono. Los templos están vacíos. Hera advierte: 'Si no actúas ahora, perderemos todo respeto'.",
        personaje: "Hera",
        imagenFondo: "assets/olimpo.jpeg",
        imagenPersonaje: "assets/zeus y hera.jpeg",
        decisiones: [
            {
                texto: "Castigarlos con tormentas",
                consecuencia: "castigo",
                impacto: { fe: -10, temor: 25, energia: -15 },
                imagen: "assets/camino(zeus castiga).jpeg"
            },
            {
                texto: "Observarlos en silencio",
                consecuencia: "observar",
                impacto: { fe: -5, temor: -10, energia: 0 },
                imagen: "assets/zeus(decision).jpeg"
            },
            {
                texto: "Darles una oportunidad",
                consecuencia: "oportunidad",
                impacto: { fe: 20, temor: -5, energia: -10 },
                imagen: "assets/camino a(zeus ayuda).jpeg"
            }
        ]
    },
    {
        id: 2,
        escena: "LA TIERRA",
        historia: "Zeus mira hacia abajo. El mundo refleja tu decisión anterior. Hermes aparece: 'Padre, el Tártaro se está agitando...'",
        personaje: "Hermes",
        imagenFondo: "assets/zeus y hermes.jpeg",
        decisiones: [
            {
                texto: "Continuar al Tártaro",
                impacto: { energia: 0 },
                imagen: "assets/tartaro.jpeg"
            }
        ]
    },
    {
        id: 3,
        escena: "EL TÁRTARO",
        historia: "Los titanes sienten tu duda. Una voz oscura susurra: 'Si dudas... caerás como nosotros'.",
        personaje: "Titán",
        imagenFondo: "assets/tartaro.jpeg",
        imagenPersonaje: "assets/titanes en el tartaro.jpeg",
        decisiones: [
            {
                texto: "Reforzar las cadenas",
                impacto: { fe: 5, temor: 10, energia: -20 },
                imagen: "assets/titanes con cadenas reforzadas.jpeg"
            },
            {
                texto: "Bajar personalmente",
                impacto: { fe: 10, temor: 20, energia: -30 },
                imagen: "assets/zeus vs titanes.jpeg"
            },
            {
                texto: "Ignorar advertencia",
                impacto: { fe: -10, temor: -10, energia: 10 },
                imagen: "assets/zeus ignora a los titanes.jpeg"
            }
        ]
    },
    {
        id: 4,
        escena: "CONSEJO DIVINO",
        historia: "Atenea pide sabiduría, Ares destrucción y Poseidón caos. Todos esperan tu mandato final.",
        personaje: "Dioses",
        imagenFondo: "assets/reunion de los dioses.jpeg",
        decisiones: [
            {
                texto: "Gobernar con miedo",
                final: "tirano",
                imagen: "assets/zeus gobierna con miedo.jpeg"
            },
            {
                texto: "Gobernar con equilibrio",
                final: "justo",
                imagen: "assets/zeus gobierna con equilibrio.jpeg"
            },
            {
                texto: "Desatar el caos total",
                final: "caida",
                imagen: "assets/zeus desata el caos.jpeg"
            }
        ]
    }
];

const finales = {
    justo: {
        titulo: "EL DIOS JUSTO",
        descripcion: "Los humanos reconstruyen los templos. El Olimpo brilla bajo un nuevo amanecer.",
        clase: "final-justo",
        imagen: "assets/Final(Zeus bueno).jpeg"
    },
    tirano: {
        titulo: "EL TIRANO DEL CIELO",
        descripcion: "Tormentas eternas y humanos sometidos. Eres poderoso, pero estás solo.",
        clase: "final-tirano",
        imagen: "assets/Final (Zeus malo).jpeg"
    },
    caida: {
        titulo: "LA CAÍDA DEL OLIMPO",
        descripcion: "Los Titanes son libres. El trono de Zeus está en ruinas.",
        clase: "final-caida",
        imagen: "assets/Final(Destruccion del olimpo).jpeg"
    }
};