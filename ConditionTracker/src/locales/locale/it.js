const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "afferrato",
      verb: "afferra",
    },
    Restrained: {
      past: "trattenuto",
      verb: "trattiene",
    },
    Prone: {
      past: "a terra",
      verb: "butta",
      suffix: "a terra",
    },
    Poisoned: {
      past: "avvelenato",
      verb: "avvelena",
    },
    Stunned: {
      past: "stordito",
      verb: "stordisce",
    },
    Blinded: {
      past: "accecato",
      verb: "acceca",
    },
    Charmed: {
      past: "affascinato",
      verb: "affascina",
    },
    Frightened: {
      past: "spaventato",
      verb: "spaventa",
    },
    Incapacitated: {
      past: "incapacitato",
      verb: "incapacita",
    },
    Invisible: {
      past: "invisibile",
      verb: "rende",
      suffix: "invisibile",
    },
    Paralyzed: {
      past: "paralizzato",
      verb: "paralizza",
    },
    Petrified: {
      past: "pietrificato",
      verb: "pietrifica",
    },
    Unconscious: {
      past: "privo di sensi",
      verb: "rende",
      suffix: "privo di sensi",
    },
    Spell: {
      past: "influenzato da un incantesimo",
      verb: "lancia un incantesimo su",
    },
    Ability: {
      past: "influenzato da un'abilità",
      verb: "usa un'abilità su",
    },
    Advantage: {
      past: "ha vantaggio",
      verb: "concede vantaggio a",
      noBy: true,
    },
    Disadvantage: {
      past: "ha svantaggio",
      verb: "impone svantaggio a",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Afferrato",
    Restrained: "Trattenuto",
    Prone: "A terra",
    Poisoned: "Avvelenato",
    Stunned: "Stordito",
    Blinded: "Accecato",
    Charmed: "Affascinato",
    Frightened: "Spaventato",
    Incapacitated: "Incapacitato",
    Invisible: "Invisibile",
    Paralyzed: "Paralizzato",
    Petrified: "Pietrificato",
    Unconscious: "Privo di sensi",
    Spell: "Incantesimo",
    Ability: "Abilità",
    Advantage: "Vantaggio",
    Disadvantage: "Svantaggio",
    Other: "Altro",
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
