const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "схвачен",
      verb: "схватывает",
    },
    Restrained: {
      past: "опутан",
      verb: "опутывает",
    },
    Prone: {
      past: "сбит с ног",
      verb: "сбивает",
      suffix: "с ног",
    },
    Poisoned: {
      past: "отравлен",
      verb: "отравляет",
    },
    Stunned: {
      past: "ошеломлен",
      verb: "ошеломляет",
    },
    Blinded: {
      past: "ослеплен",
      verb: "ослепляет",
    },
    Charmed: {
      past: "очарован",
      verb: "очаровывает",
    },
    Frightened: {
      past: "испуган",
      verb: "пугает",
    },
    Incapacitated: {
      past: "недееспособен",
      verb: "делает",
      suffix: "недееспособным",
    },
    Invisible: {
      past: "невидим",
      verb: "делает",
      suffix: "невидимым",
    },
    Paralyzed: {
      past: "парализован",
      verb: "парализует",
    },
    Petrified: {
      past: "окаменел",
      verb: "окаменяет",
    },
    Unconscious: {
      past: "без сознания",
      verb: "лишает",
      suffix: "сознания",
    },
    Spell: {
      past: "под действием заклинания",
      verb: "накладывает заклинание на",
    },
    Ability: {
      past: "под действием умения",
      verb: "использует умение на",
    },
    Advantage: {
      past: "имеет преимущество",
      verb: "дает преимущество",
      noBy: true,
    },
    Disadvantage: {
      past: "имеет помеху",
      verb: "накладывает помеху",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "Схвачен",
    Restrained: "Опутан",
    Prone: "Лежит ничком",
    Poisoned: "Отравлен",
    Stunned: "Ошеломлен",
    Blinded: "Ослеплен",
    Charmed: "Очарован",
    Frightened: "Испуган",
    Incapacitated: "Недееспособен",
    Invisible: "Невидим",
    Paralyzed: "Парализован",
    Petrified: "Окаменел",
    Unconscious: "Без сознания",
    Spell: "Заклинание",
    Ability: "Умение",
    Advantage: "Преимущество",
    Disadvantage: "Помеха",
    Other: "Другое",
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
