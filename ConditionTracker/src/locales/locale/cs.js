const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "uchvácený",
      verb: "uchvátí",
    },
    Restrained: {
      past: "omezený",
      verb: "omezí",
    },
    Prone: {
      past: "sražený k zemi",
      verb: "srazí",
      suffix: "k zemi",
    },
    Poisoned: {
      past: "otrávený",
      verb: "otráví",
    },
    Stunned: {
      past: "omráčený",
      verb: "omráčí",
    },
    Blinded: {
      past: "oslepený",
      verb: "oslepí",
    },
    Charmed: {
      past: "okouzlený",
      verb: "okouzlí",
    },
    Frightened: {
      past: "vystrašený",
      verb: "vystraší",
    },
    Incapacitated: {
      past: "vyřazený",
      verb: "vyřadí",
    },
    Invisible: {
      past: "neviditelný",
      verb: "učiní",
      suffix: "neviditelným",
    },
    Paralyzed: {
      past: "paralyzovaný",
      verb: "paralyzuje",
    },
    Petrified: {
      past: "zkamenělý",
      verb: "zkamení",
    },
    Unconscious: {
      past: "v bezvědomí",
      verb: "uvede",
      suffix: "do bezvědomí",
    },
    Spell: {
      past: "ovlivněný kouzlem",
      verb: "sesílá kouzlo na",
    },
    Ability: {
      past: "ovlivněný schopností",
      verb: "použije schopnost na",
    },
    Advantage: {
      past: "má výhodu",
      verb: "udělí výhodu",
      noBy: true,
    },
    Disadvantage: {
      past: "má nevýhodu",
      verb: "udělí nevýhodu",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Uchvácený",
    Restrained: "Omezený",
    Prone: "Sražený",
    Poisoned: "Otrávený",
    Stunned: "Omráčený",
    Blinded: "Oslepený",
    Charmed: "Okouzlený",
    Frightened: "Vystrašený",
    Incapacitated: "Vyřazený",
    Invisible: "Neviditelný",
    Paralyzed: "Paralyzovaný",
    Petrified: "Zkamenělý",
    Unconscious: "V bezvědomí",
    Spell: "Kouzlo",
    Ability: "Schopnost",
    Advantage: "Výhoda",
    Disadvantage: "Nevýhoda",
    Other: "Jiné",
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
