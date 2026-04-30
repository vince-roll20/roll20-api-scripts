const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "vasgegryp",
      verb: "gryp",
    },
    Restrained: {
      past: "beperk",
      verb: "beperk",
    },
    Prone: {
      past: "platgeslaan",
      verb: "slaan",
      suffix: "plat",
    },
    Poisoned: {
      past: "vergiftig",
      verb: "vergiftig",
    },
    Stunned: {
      past: "verdoof",
      verb: "verdoof",
    },
    Blinded: {
      past: "verblind",
      verb: "verblind",
    },
    Charmed: {
      past: "bekoor",
      verb: "bekoor",
    },
    Frightened: {
      past: "banggemaak",
      verb: "maak",
      suffix: "bang",
    },
    Incapacitated: {
      past: "onbekwaam",
      verb: "maak",
      suffix: "onbekwaam",
    },
    Invisible: {
      past: "onsigbaar",
      verb: "maak",
      suffix: "onsigbaar",
    },
    Paralyzed: {
      past: "verlam",
      verb: "verlam",
    },
    Petrified: {
      past: "versteen",
      verb: "versteen",
    },
    Unconscious: {
      past: "bewusteloos",
      verb: "maak",
      suffix: "bewusteloos",
    },
    Spell: {
      past: "deur 'n towerspreuk geraak",
      verb: "spreek 'n towerspreuk uit op",
    },
    Ability: {
      past: "deur 'n vermoë geraak",
      verb: "gebruik 'n vermoë op",
    },
    Advantage: {
      past: "het voordeel",
      verb: "gee voordeel aan",
      noBy: true,
    },
    Disadvantage: {
      past: "het nadeel",
      verb: "gee nadeel aan",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Vasgegryp",
    Restrained: "Beperk",
    Prone: "Neergewerp",
    Poisoned: "Vergiftig",
    Stunned: "Verdoof",
    Blinded: "Verblind",
    Charmed: "Bekoor",
    Frightened: "Bang",
    Incapacitated: "Onbekwaam",
    Invisible: "Onsigbaar",
    Paralyzed: "Verlam",
    Petrified: "Versteen",
    Unconscious: "Bewusteloos",
    Spell: "Towerspreuk",
    Ability: "Vermoë",
    Advantage: "Voordeel",
    Disadvantage: "Nadeel",
    Other: "Ander",
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
