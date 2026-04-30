const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "gegrepen",
      verb: "grijpt",
    },
    Restrained: {
      past: "vastgebonden",
      verb: "bindt vast",
    },
    Prone: {
      past: "neergehaald",
      verb: "haalt",
      suffix: "neer",
    },
    Poisoned: {
      past: "vergiftigd",
      verb: "vergiftigt",
    },
    Stunned: {
      past: "verdoofd",
      verb: "verdooft",
    },
    Blinded: {
      past: "verblind",
      verb: "verblindt",
    },
    Charmed: {
      past: "gecharmeerd",
      verb: "charmeert",
    },
    Frightened: {
      past: "bang",
      verb: "maakt",
      suffix: "bang",
    },
    Incapacitated: {
      past: "uitgeschakeld",
      verb: "schakelt uit",
    },
    Invisible: {
      past: "onzichtbaar",
      verb: "maakt",
      suffix: "onzichtbaar",
    },
    Paralyzed: {
      past: "verlamd",
      verb: "verlamt",
    },
    Petrified: {
      past: "versteend",
      verb: "versteent",
    },
    Unconscious: {
      past: "bewusteloos",
      verb: "maakt",
      suffix: "bewusteloos",
    },
    Spell: {
      past: "beïnvloed door een spreuk",
      verb: "spreekt een spreuk uit over",
    },
    Ability: {
      past: "beïnvloed door een vaardigheid",
      verb: "gebruikt een vaardigheid op",
    },
    Advantage: {
      past: "heeft voordeel",
      verb: "geeft voordeel aan",
      noBy: true,
    },
    Disadvantage: {
      past: "heeft nadeel",
      verb: "geeft nadeel aan",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Gegrepen",
    Restrained: "Vastgebonden",
    Prone: "Liggend",
    Poisoned: "Vergiftigd",
    Stunned: "Verdoofd",
    Blinded: "Verblind",
    Charmed: "Gecharmeerd",
    Frightened: "Bang",
    Incapacitated: "Uitgeschakeld",
    Invisible: "Onzichtbaar",
    Paralyzed: "Verlamd",
    Petrified: "Versteend",
    Unconscious: "Bewusteloos",
    Spell: "Spreuk",
    Ability: "Vaardigheid",
    Advantage: "Voordeel",
    Disadvantage: "Nadeel",
    Other: "Overig",
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
