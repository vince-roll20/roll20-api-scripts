const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "painissa",
      verb: "ottaa painiin",
    },
    Restrained: {
      past: "sidottu",
      verb: "sitoo",
    },
    Prone: {
      past: "kaadettu",
      verb: "kaataa",
    },
    Poisoned: {
      past: "myrkytetty",
      verb: "myrkyttää",
    },
    Stunned: {
      past: "tainnutettu",
      verb: "tainnuttaa",
    },
    Blinded: {
      past: "sokaistu",
      verb: "sokaisee",
    },
    Charmed: {
      past: "lumottu",
      verb: "lumoaa",
    },
    Frightened: {
      past: "pelästynyt",
      verb: "pelästyttää",
    },
    Incapacitated: {
      past: "toimintakyvytön",
      verb: "tekee",
      suffix: "toimintakyvyttömäksi",
    },
    Invisible: {
      past: "näkymätön",
      verb: "tekee",
      suffix: "näkymättömäksi",
    },
    Paralyzed: {
      past: "halvaantunut",
      verb: "halvaannuttaa",
    },
    Petrified: {
      past: "kivettynyt",
      verb: "kivettää",
    },
    Unconscious: {
      past: "tajuton",
      verb: "tekee",
      suffix: "tajuttomaksi",
    },
    Spell: {
      past: "loitsun vaikutuksen alainen",
      verb: "langettaa loitsun kohteeseen",
    },
    Ability: {
      past: "kyvyn vaikutuksen alainen",
      verb: "käyttää kykyä kohteeseen",
    },
    Advantage: {
      past: "on etu",
      verb: "antaa edun",
      noBy: true,
    },
    Disadvantage: {
      past: "on haitta",
      verb: "antaa haitan",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Painissa",
    Restrained: "Sidottu",
    Prone: "Maassa",
    Poisoned: "Myrkytetty",
    Stunned: "Tainnutettu",
    Blinded: "Sokaistu",
    Charmed: "Lumottu",
    Frightened: "Peloissaan",
    Incapacitated: "Toimintakyvytön",
    Invisible: "Näkymätön",
    Paralyzed: "Halvaantunut",
    Petrified: "Kivettynyt",
    Unconscious: "Tajuton",
    Spell: "Loitsu",
    Ability: "Kyky",
    Advantage: "Etu",
    Disadvantage: "Haitta",
    Other: "Muu",
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
