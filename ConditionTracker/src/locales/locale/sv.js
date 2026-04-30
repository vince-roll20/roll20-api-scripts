const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "fasthållen",
      verb: "håller fast",
    },
    Restrained: {
      past: "hindrad",
      verb: "hindrar",
    },
    Prone: {
      past: "liggande",
      verb: "slår",
      suffix: "omkull",
    },
    Poisoned: {
      past: "förgiftad",
      verb: "förgiftar",
    },
    Stunned: {
      past: "omtöcknad",
      verb: "omtöcknar",
    },
    Blinded: {
      past: "förblindad",
      verb: "förblindar",
    },
    Charmed: {
      past: "charmad",
      verb: "charmar",
    },
    Frightened: {
      past: "skrämd",
      verb: "skrämmer",
    },
    Incapacitated: {
      past: "oskadliggjord",
      verb: "oskadliggör",
    },
    Invisible: {
      past: "osynlig",
      verb: "gör",
      suffix: "osynlig",
    },
    Paralyzed: {
      past: "paralyserad",
      verb: "paralyserar",
    },
    Petrified: {
      past: "förstenad",
      verb: "förstenar",
    },
    Unconscious: {
      past: "medvetslös",
      verb: "gör",
      suffix: "medvetslös",
    },
    Spell: {
      past: "påverkad av en besvärjelse",
      verb: "kastar en besvärjelse på",
    },
    Ability: {
      past: "påverkad av en förmåga",
      verb: "använder en förmåga på",
    },
    Advantage: {
      past: "har fördel",
      verb: "ger fördel till",
      noBy: true,
    },
    Disadvantage: {
      past: "har nackdel",
      verb: "ger nackdel till",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Fasthållen",
    Restrained: "Hindrad",
    Prone: "Liggande",
    Poisoned: "Förgiftad",
    Stunned: "Omtöcknad",
    Blinded: "Förblindad",
    Charmed: "Charmad",
    Frightened: "Skrämd",
    Incapacitated: "Oskadliggjord",
    Invisible: "Osynlig",
    Paralyzed: "Paralyserad",
    Petrified: "Förstenad",
    Unconscious: "Medvetslös",
    Spell: "Besvärjelse",
    Ability: "Förmåga",
    Advantage: "Fördel",
    Disadvantage: "Nackdel",
    Other: "Annat",
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
