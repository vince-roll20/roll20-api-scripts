const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "fastholdt",
      verb: "fastholder",
    },
    Restrained: {
      past: "bundet",
      verb: "binder",
    },
    Prone: {
      past: "væltet omkuld",
      verb: "vælter",
      suffix: "omkuld",
    },
    Poisoned: {
      past: "forgiftet",
      verb: "forgifter",
    },
    Stunned: {
      past: "lammet",
      verb: "lammer",
    },
    Blinded: {
      past: "blindet",
      verb: "blinder",
    },
    Charmed: {
      past: "charmet",
      verb: "charmerer",
    },
    Frightened: {
      past: "skræmt",
      verb: "skræmmer",
    },
    Incapacitated: {
      past: "ukampdygtig",
      verb: "gør",
      suffix: "ukampdygtig",
    },
    Invisible: {
      past: "usynlig",
      verb: "gør",
      suffix: "usynlig",
    },
    Paralyzed: {
      past: "paralyseret",
      verb: "paralyserer",
    },
    Petrified: {
      past: "forstenet",
      verb: "forstener",
    },
    Unconscious: {
      past: "bevidstløs",
      verb: "gør",
      suffix: "bevidstløs",
    },
    Spell: {
      past: "påvirket af en besværgelse",
      verb: "kaster en besværgelse på",
    },
    Ability: {
      past: "påvirket af en evne",
      verb: "bruger en evne på",
    },
    Advantage: {
      past: "har fordel",
      verb: "giver fordel til",
      noBy: true,
    },
    Disadvantage: {
      past: "har ulempe",
      verb: "giver ulempe til",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Fastholdt",
    Restrained: "Bundet",
    Prone: "Omkuld",
    Poisoned: "Forgiftet",
    Stunned: "Lammet",
    Blinded: "Blindet",
    Charmed: "Charmed",
    Frightened: "Skræmt",
    Incapacitated: "Ukampdygtig",
    Invisible: "Usynlig",
    Paralyzed: "Paralyseret",
    Petrified: "Forstenet",
    Unconscious: "Bevidstløs",
    Spell: "Besværgelse",
    Ability: "Evne",
    Advantage: "Fordel",
    Disadvantage: "Ulempe",
    Other: "Andet",
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
