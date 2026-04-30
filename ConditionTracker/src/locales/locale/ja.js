const TRANSLATION = {
  conditions: {
    Grappled: {
      past: "つかまれた",
      verb: "つかむ",
    },
    Restrained: {
      past: "拘束された",
      verb: "拘束する",
    },
    Prone: {
      past: "伏せ状態",
      verb: "伏せ状態にする",
    },
    Poisoned: {
      past: "毒を受けた",
      verb: "毒を与える",
    },
    Stunned: {
      past: "朦朧状態",
      verb: "朦朧状態にする",
    },
    Blinded: {
      past: "盲目状態",
      verb: "盲目状態にする",
    },
    Charmed: {
      past: "魅了状態",
      verb: "魅了する",
    },
    Frightened: {
      past: "恐怖状態",
      verb: "恐怖状態にする",
    },
    Incapacitated: {
      past: "無力状態",
      verb: "無力状態にする",
    },
    Invisible: {
      past: "不可視状態",
      verb: "不可視状態にする",
    },
    Paralyzed: {
      past: "麻痺状態",
      verb: "麻痺状態にする",
    },
    Petrified: {
      past: "石化状態",
      verb: "石化状態にする",
    },
    Unconscious: {
      past: "気絶状態",
      verb: "気絶状態にする",
    },
    Spell: {
      past: "呪文の影響下",
      verb: "呪文をかける",
    },
    Ability: {
      past: "能力の影響下",
      verb: "能力を使う",
    },
    Advantage: {
      past: "有利を持つ",
      verb: "有利を与える",
      noBy: true,
    },
    Disadvantage: {
      past: "不利を持つ",
      verb: "不利を与える",
      noBy: true,
    },
  },
  condNames: {
    Grappled: "つかみ",
    Restrained: "拘束",
    Prone: "伏せ",
    Poisoned: "毒",
    Stunned: "朦朧",
    Blinded: "盲目",
    Charmed: "魅了",
    Frightened: "恐怖",
    Incapacitated: "無力",
    Invisible: "不可視",
    Paralyzed: "麻痺",
    Petrified: "石化",
    Unconscious: "気絶",
    Spell: "呪文",
    Ability: "能力",
    Advantage: "有利",
    Disadvantage: "不利",
    Other: "その他",
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
