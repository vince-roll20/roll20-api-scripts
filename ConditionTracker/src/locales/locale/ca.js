const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "agafat",
      verb: "agafa",
    },
    Restrained: {
      past: "retingut",
      verb: "reté",
    },
    Prone: {
      past: "tombat",
      verb: "tomba",
    },
    Poisoned: {
      past: "enverinat",
      verb: "enverina",
    },
    Stunned: {
      past: "atordit",
      verb: "atordeix",
    },
    Blinded: {
      past: "cec",
      verb: "encega",
    },
    Charmed: {
      past: "encisat",
      verb: "encisa",
    },
    Frightened: {
      past: "espantat",
      verb: "espanta",
    },
    Incapacitated: {
      past: "incapacitat",
      verb: "incapacita",
    },
    Invisible: {
      past: "invisible",
      verb: "torna",
      suffix: "invisible",
    },
    Paralyzed: {
      past: "paralitzat",
      verb: "paralitza",
    },
    Petrified: {
      past: "petrificat",
      verb: "petrifica",
    },
    Unconscious: {
      past: "inconscient",
      verb: "deixa",
      suffix: "inconscient",
    },
    Spell: {
      past: "afectat per un encanteri",
      verb: "llança un encanteri sobre",
    },
    Ability: {
      past: "afectat per una habilitat",
      verb: "usa una habilitat sobre",
    },
    Advantage: {
      past: "té avantatge",
      verb: "atorga avantatge a",
      noBy: true,
    },
    Disadvantage: {
      past: "té desavantatge",
      verb: "imposa desavantatge a",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Agafat",
    Restrained: "Restringit",
    Prone: "Tombat",
    Poisoned: "Enverinat",
    Stunned: "Atordit",
    Blinded: "Cec",
    Charmed: "Encisat",
    Frightened: "Espantat",
    Incapacitated: "Incapacitat",
    Invisible: "Invisible",
    Paralyzed: "Paralitzat",
    Petrified: "Petrificat",
    Unconscious: "Inconscient",
    Spell: "Encanteri",
    Ability: "Habilitat",
    Advantage: "Avantatge",
    Disadvantage: "Desavantatge",
    Other: "Altres",
  },
  templates: {
    display: {
      custom: "{emoji} {target} affected by {effect} ({source})",
      advantage: "{emoji} {source} has advantage against {target}{subject}",
      disadvantage:
        "{emoji} {source} has disadvantage against {target}{subject}",
      noBy: "{emoji} {target} {past} ({source})",
      standard: "{emoji} {target} {past} by {source}",
    },
    apply: {
      custom: "{source} applies {effect} to {target}.",
      advantage: "{source} has advantage against {target}{subject}.",
      disadvantage: "{source} has disadvantage against {target}{subject}.",
      withSuffix: "{source} {verb} {target} {suffix}.",
      standard: "{source} {verb} {target}.",
    },
    remove: {
      custom: "{target} is no longer affected by {effect}.",
      advantage: "{source} no longer has advantage against {target}{subject}.",
      disadvantage:
        "{source} no longer has disadvantage against {target}{subject}.",
      noBy: "{target} no longer {past}.",
      standard: "{target} is no longer {past} by {source}.",
    },
  },
};

export default TRANSLATION;
