const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "megragadva",
      verb: "megragadja",
    },
    Restrained: {
      past: "lefogva",
      verb: "lefogja",
    },
    Prone: {
      past: "földre döntve",
      verb: "földre dönti",
    },
    Poisoned: {
      past: "megmérgezve",
      verb: "megmérgezi",
    },
    Stunned: {
      past: "kábult",
      verb: "elkábítja",
    },
    Blinded: {
      past: "megvakítva",
      verb: "megvakítja",
    },
    Charmed: {
      past: "elbájolva",
      verb: "elbájolja",
    },
    Frightened: {
      past: "megrémülve",
      verb: "megrémíti",
    },
    Incapacitated: {
      past: "cselekvőképtelen",
      verb: "cselekvőképtelenné teszi",
    },
    Invisible: {
      past: "láthatatlan",
      verb: "láthatatlanná teszi",
    },
    Paralyzed: {
      past: "megbénítva",
      verb: "megbénítja",
    },
    Petrified: {
      past: "kővé dermedve",
      verb: "kővé dermeszti",
    },
    Unconscious: {
      past: "eszméletlen",
      verb: "eszméletlenné teszi",
    },
    Spell: {
      past: "varázslat hatása alatt",
      verb: "varázslatot mond",
    },
    Ability: {
      past: "képesség hatása alatt",
      verb: "képességet használ",
    },
    Advantage: {
      past: "előnye van",
      verb: "előnyt ad",
      noBy: true,
    },
    Disadvantage: {
      past: "hátránya van",
      verb: "hátrányt ad",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Megragadva",
    Restrained: "Lefogva",
    Prone: "Földön",
    Poisoned: "Mérgezett",
    Stunned: "Kábult",
    Blinded: "Vak",
    Charmed: "Elbájolt",
    Frightened: "Rémült",
    Incapacitated: "Cselekvőképtelen",
    Invisible: "Láthatatlan",
    Paralyzed: "Bénult",
    Petrified: "Megkövült",
    Unconscious: "Eszméletlen",
    Spell: "Varázslat",
    Ability: "Képesség",
    Advantage: "Előny",
    Disadvantage: "Hátrány",
    Other: "Egyéb",
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
