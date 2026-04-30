const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "agarrado",
      verb: "agarra",
    },
    Restrained: {
      past: "restringido",
      verb: "restringe",
    },
    Prone: {
      past: "derrubado",
      verb: "derruba",
    },
    Poisoned: {
      past: "envenenado",
      verb: "envenena",
    },
    Stunned: {
      past: "atordoado",
      verb: "atordoa",
    },
    Blinded: {
      past: "cego",
      verb: "cega",
    },
    Charmed: {
      past: "encantado",
      verb: "encanta",
    },
    Frightened: {
      past: "assustado",
      verb: "assusta",
    },
    Incapacitated: {
      past: "incapacitado",
      verb: "incapacita",
    },
    Invisible: {
      past: "invisível",
      verb: "torna",
      suffix: "invisível",
    },
    Paralyzed: {
      past: "paralisado",
      verb: "paralisa",
    },
    Petrified: {
      past: "petrificado",
      verb: "petrifica",
    },
    Unconscious: {
      past: "inconsciente",
      verb: "deixa",
      suffix: "inconsciente",
    },
    Spell: {
      past: "afetado por um feitiço",
      verb: "lança um feitiço sobre",
    },
    Ability: {
      past: "afetado por uma habilidade",
      verb: "usa uma habilidade em",
    },
    Advantage: {
      past: "tem vantagem",
      verb: "concede vantagem a",
      noBy: true,
    },
    Disadvantage: {
      past: "tem desvantagem",
      verb: "impõe desvantagem a",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Agarrado",
    Restrained: "Restringido",
    Prone: "Derrubado",
    Poisoned: "Envenenado",
    Stunned: "Atordoado",
    Blinded: "Cego",
    Charmed: "Encantado",
    Frightened: "Assustado",
    Incapacitated: "Incapacitado",
    Invisible: "Invisível",
    Paralyzed: "Paralisado",
    Petrified: "Petrificado",
    Unconscious: "Inconsciente",
    Spell: "Feitiço",
    Ability: "Habilidade",
    Advantage: "Vantagem",
    Disadvantage: "Desvantagem",
    Other: "Outro",
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
