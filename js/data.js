export const historiaZeus = [
    {
        id: 1,
        escena: "EL OLIMPO",
        historia: "Zeus observa desde su trono. Los templos están vacíos. Hera advierte: 'Si no actúas ahora, perderemos todo respeto'.",
        personaje: "Hera",
        // imagenFondo: primera imagen:Olimpo
                    // segunda:zeus y hera
                    // tecera:zeus(decision)
        decisiones: [
            {
                texto: "Castigarlos con tormentas",
                consecuencia: "castigo",
                impacto: { fe: -10, temor: 25, energia: -15 }
                // imagenFondo:camino(zeus castiga)
            },
            {
                texto: "Observarlos en silencio",
                consecuencia: "observar",
                impacto: { fe: -5, temor: -10, energia: 0 }
                // imagenFondo:zeus(decision)
            },
            {
                texto: "Darles una oportunidad",
                consecuencia: "oportunidad",
                impacto: { fe: 20, temor: -5, energia: -10 }
                 // imagenFondo:camino(zeus ayuda)
            }
        ]
    },
    {
        id: 2,
        escena: "LA TIERRA",
        historia: "Zeus mira hacia abajo. El mundo refleja su decisión anterior. Hermes aparece: 'Padre, el Tártaro se está agitando...'",
        personaje: "Hermes",
        // imagenFondo: "primera:zeus y hermes"
        //              
      
        decisiones: [
            { texto: "Continuar al Tártaro", impacto: { energia: 0 } }
        ]
    },
    {
        id: 3,
        escena: "EL TÁRTARO",
        historia: "Los titanes sienten tu duda. Una voz oscura susurra: 'Si dudas... caerás como nosotros'.",
        personaje: "Titán",
        // imagenFondo: "tartaro",
        decisiones: [
            {
                texto: "Reforzar las cadenas",
                impacto: { fe: 5, temor: 10, energia: -20 }
                 // imagenFondo:titanes con cadenas reforzadas
            },
            {
                texto: "Bajar personalmente",
                impacto: { fe: 10, temor: 20, energia: -30 }
                 // imagenFondo:zeus vs titanes
            },
            {
                texto: "Ignorar advertencia",
                impacto: { fe: -10, temor: -10, energia: 10 }
                 // imagenFondo:zeus ignora a los titanes
            }
        ]
    },
    {
        id: 4,
        escena: "CONSEJO DIVINO",
        historia: "Atenea pide sabiduría, Ares destrucción y Poseidón caos. Todos esperan tu mandato final.",
        personaje: "Dioses",
        // imagenFondo: "reunion de los dioses",
        decisiones: [
            {
                texto: "Gobernar con miedo",
                final: "tirano"
                 // imagenFondo:zeus gobierna con miedo
            },
            {
                texto: "Gobernar con equilibrio",
                final: "justo"
                    // imagenFondo:zeus gobierna con equilibrio
            },
            {
                texto: "Desatar el caos total",
                final: "caida"
                    // imagenFondo:zeus ignora a los titanes
            }
        ]
    }
];

export const finales = {
    justo: {
        titulo: "EL DIOS JUSTO",
        descripcion: "Los humanos reconstruyen los templos. El Olimpo brilla bajo un nuevo amanecer.",
        clase: "final-justo"
            // imagenFondo:Final bueno
    },
    tirano: {
        titulo: "EL TIRANO DEL CIELO",
        descripcion: "Tormentas eternas y humanos sometidos. Eres poderoso, pero estás solo.",
        clase: "final-tirano"
            // imagenFondo:Final Malo
    },
    caida: {
        titulo: "LA CAÍDA DEL OLIMPO",
        descripcion: "Los Titanes son libres. El trono de Zeus está en ruinas.",
        clase: "final-caida"
            // imagenFondo:Destruccion del olimpo
    }
};