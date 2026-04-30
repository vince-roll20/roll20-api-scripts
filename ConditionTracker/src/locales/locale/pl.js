const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "pochwycony",
      verb: "chwyta",
    },
    Restrained: {
      past: "unieruchomiony",
      verb: "unieruchamia",
    },
    Prone: {
      past: "powalony",
      verb: "powala",
    },
    Poisoned: {
      past: "zatruty",
      verb: "zatruwa",
    },
    Stunned: {
      past: "ogłuszony",
      verb: "ogłusza",
    },
    Blinded: {
      past: "oślepiony",
      verb: "oślepia",
    },
    Charmed: {
      past: "zauroczony",
      verb: "zaurocza",
    },
    Frightened: {
      past: "przestraszony",
      verb: "przeraża",
    },
    Incapacitated: {
      past: "ubezwłasnowolniony",
      verb: "ubezwłasnowalnia",
    },
    Invisible: {
      past: "niewidzialny",
      verb: "czyni",
      suffix: "niewidzialnym",
    },
    Paralyzed: {
      past: "sparaliżowany",
      verb: "paraliżuje",
    },
    Petrified: {
      past: "skamieniały",
      verb: "zamienia w kamień",
    },
    Unconscious: {
      past: "nieprzytomny",
      verb: "pozbawia przytomności",
    },
    Spell: {
      past: "pod wpływem zaklęcia",
      verb: "rzuca zaklęcie na",
    },
    Ability: {
      past: "pod wpływem zdolności",
      verb: "używa zdolności na",
    },
    Advantage: {
      past: "ma ułatwienie",
      verb: "daje ułatwienie",
      noBy: true,
    },
    Disadvantage: {
      past: "ma utrudnienie",
      verb: "daje utrudnienie",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Pochwycony",
    Restrained: "Unieruchomiony",
    Prone: "Powalony",
    Poisoned: "Zatruty",
    Stunned: "Ogłuszony",
    Blinded: "Oślepiony",
    Charmed: "Zauroczony",
    Frightened: "Przestraszony",
    Incapacitated: "Ubezwłasnowolniony",
    Invisible: "Niewidzialny",
    Paralyzed: "Sparaliżowany",
    Petrified: "Skamieniały",
    Unconscious: "Nieprzytomny",
    Spell: "Zaklęcie",
    Ability: "Zdolność",
    Advantage: "Ułatwienie",
    Disadvantage: "Utrudnienie",
    Other: "Inne",
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
