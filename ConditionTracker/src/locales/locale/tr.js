const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "yakalanmış",
      verb: "yakalar",
    },
    Restrained: {
      past: "kısıtlanmış",
      verb: "kısıtlar",
    },
    Prone: {
      past: "yere düşmüş",
      verb: "yere düşürür",
    },
    Poisoned: {
      past: "zehirlenmiş",
      verb: "zehirler",
    },
    Stunned: {
      past: "sersemlemiş",
      verb: "sersemletir",
    },
    Blinded: {
      past: "kör olmuş",
      verb: "kör eder",
    },
    Charmed: {
      past: "büyülenmiş",
      verb: "büyüler",
    },
    Frightened: {
      past: "korkmuş",
      verb: "korkutur",
    },
    Incapacitated: {
      past: "etkisiz",
      verb: "etkisiz hale getirir",
    },
    Invisible: {
      past: "görünmez",
      verb: "görünmez yapar",
    },
    Paralyzed: {
      past: "felç olmuş",
      verb: "felç eder",
    },
    Petrified: {
      past: "taşlaşmış",
      verb: "taşlaştırır",
    },
    Unconscious: {
      past: "bilinçsiz",
      verb: "bilinçsiz bırakır",
    },
    Spell: {
      past: "bir büyüden etkilenmiş",
      verb: "üzerine büyü yapar",
    },
    Ability: {
      past: "bir yetenekten etkilenmiş",
      verb: "üzerinde yetenek kullanır",
    },
    Advantage: {
      past: "avantajı var",
      verb: "avantaj verir",
      noBy: true,
    },
    Disadvantage: {
      past: "dezavantajı var",
      verb: "dezavantaj verir",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Yakalanmış",
    Restrained: "Kısıtlanmış",
    Prone: "Yerde",
    Poisoned: "Zehirlenmiş",
    Stunned: "Sersemlemiş",
    Blinded: "Kör",
    Charmed: "Büyülenmiş",
    Frightened: "Korkmuş",
    Incapacitated: "Etkisiz",
    Invisible: "Görünmez",
    Paralyzed: "Felç",
    Petrified: "Taşlaşmış",
    Unconscious: "Bilinçsiz",
    Spell: "Büyü",
    Ability: "Yetenek",
    Advantage: "Avantaj",
    Disadvantage: "Dezavantaj",
    Other: "Diğer",
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
