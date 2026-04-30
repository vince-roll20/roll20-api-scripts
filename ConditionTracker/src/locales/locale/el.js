const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "αρπαγμένος",
      verb: "αρπάζει",
    },
    Restrained: {
      past: "περιορισμένος",
      verb: "περιορίζει",
    },
    Prone: {
      past: "πεσμένος πρηνηδόν",
      verb: "ρίχνει",
      suffix: "πρηνηδόν",
    },
    Poisoned: {
      past: "δηλητηριασμένος",
      verb: "δηλητηριάζει",
    },
    Stunned: {
      past: "ζαλισμένος",
      verb: "ζαλίζει",
    },
    Blinded: {
      past: "τυφλωμένος",
      verb: "τυφλώνει",
    },
    Charmed: {
      past: "γοητευμένος",
      verb: "γοητεύει",
    },
    Frightened: {
      past: "φοβισμένος",
      verb: "φοβίζει",
    },
    Incapacitated: {
      past: "ανίκανος",
      verb: "καθιστά",
      suffix: "ανίκανο",
    },
    Invisible: {
      past: "αόρατος",
      verb: "καθιστά",
      suffix: "αόρατο",
    },
    Paralyzed: {
      past: "παραλυμένος",
      verb: "παραλύει",
    },
    Petrified: {
      past: "πετρωμένος",
      verb: "πετρώνει",
    },
    Unconscious: {
      past: "αναίσθητος",
      verb: "καθιστά",
      suffix: "αναίσθητο",
    },
    Spell: {
      past: "υπό επίδραση ξορκιού",
      verb: "ρίχνει ξόρκι σε",
    },
    Ability: {
      past: "υπό επίδραση ικανότητας",
      verb: "χρησιμοποιεί ικανότητα σε",
    },
    Advantage: {
      past: "έχει πλεονέκτημα",
      verb: "δίνει πλεονέκτημα σε",
      noBy: true,
    },
    Disadvantage: {
      past: "έχει μειονέκτημα",
      verb: "επιβάλλει μειονέκτημα σε",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Αρπαγμένος",
    Restrained: "Περιορισμένος",
    Prone: "Πρηνής",
    Poisoned: "Δηλητηριασμένος",
    Stunned: "Ζαλισμένος",
    Blinded: "Τυφλωμένος",
    Charmed: "Γοητευμένος",
    Frightened: "Φοβισμένος",
    Incapacitated: "Ανίκανος",
    Invisible: "Αόρατος",
    Paralyzed: "Παραλυμένος",
    Petrified: "Πετρωμένος",
    Unconscious: "Αναίσθητος",
    Spell: "Ξόρκι",
    Ability: "Ικανότητα",
    Advantage: "Πλεονέκτημα",
    Disadvantage: "Μειονέκτημα",
    Other: "Άλλο",
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
