export type Buttle = {
  done: boolean
  winner: "alpha" | "bravo" | "n"
  stage: string
  alphaPoint: number
  bravoPoint: number
  alphaTier: number
  bravoTier: number
  rule: "ヤグラ" | "エリア" | "ホコ" | "アサリ" | "ナワバリ"
}

export const buttleLogs: Buttle[] = [
  {
    done: true,
    winner: "n",
    alphaPoint: 1,
    bravoPoint: -1,
    alphaTier: 10,
    bravoTier: 10,
    stage: "エンガワ",
    rule: "ホコ",
  },
  {
    done: true,
    winner: "n",
    alphaPoint: -1,
    bravoPoint: 1,
    alphaTier: 10,
    bravoTier: 10,
    stage: "フジツボ",
    rule: "エリア",
  },
  {
    done: true,
    winner: "n",
    alphaPoint: 1,
    bravoPoint: -1,
    alphaTier: 10,
    bravoTier: 11,
    stage: "マンタマ",
    rule: "ヤグラ",
  },
  {
    done: true,
    winner: "n",
    alphaPoint: -1,
    bravoPoint: 1,
    alphaTier: 10,
    bravoTier: 9,
    stage: "バッテラ",
    rule: "アサリ",
  },
  {
    done: true,
    winner: "n",
    alphaPoint: -1,
    bravoPoint: 1,
    alphaTier: 10,
    bravoTier: 10,
    stage: "チョウザメ",
    rule: "ホコ",
  },
  {
    done: true,
    winner: "n",
    alphaPoint: -1,
    bravoPoint: 1,
    alphaTier: 10,
    bravoTier: 10,
    stage: "ショッツル",
    rule: "エリア",
  },
  {
    done: true,
    winner: "n",
    alphaPoint: 1,
    bravoPoint: -1,
    alphaTier: 10,
    bravoTier: 10,
    stage: "フジツボ",
    rule: "ヤグラ",
  },
  {
    done: true,
    winner: "n",
    alphaPoint: -1,
    bravoPoint: 1,
    alphaTier: 10,
    bravoTier: 9,
    stage: "アジスタ",
    rule: "アサリ",
  },
  {
    done: true,
    winner: "n",
    alphaPoint: -1,
    bravoPoint: 1,
    alphaTier: 3,
    bravoTier: 10,
    stage: "コンブ",
    rule: "ホコ",
  },
  {
    done: false,
    winner: "n",
    alphaPoint: 0,
    bravoPoint: 0,
    alphaTier: 0,
    bravoTier: 0,
    stage: "-",
    rule: "エリア",
  },
  {
    done: false,
    winner: "n",
    alphaPoint: 0,
    bravoPoint: 0,
    alphaTier: 0,
    bravoTier: 0,
    stage: "-",
    rule: "ヤグラ",
  },
  {
    done: false,
    winner: "n",
    alphaPoint: 0,
    bravoPoint: 0,
    alphaTier: 0,
    bravoTier: 0,
    stage: "-",
    rule: "アサリ",
  },
]

const graphData = [{ name: `#0`, alpha: 0, bravo: 0 }]
buttleLogs.forEach((buttle, i) => {
  const prev = graphData[i]
  if (!buttle.done) {
    return
  }
  console.log({ prev })
  graphData.push({
    name: `#${i + 1}`,
    alpha: prev.alpha + buttle.alphaPoint,
    bravo: prev.bravo + buttle.bravoPoint,
  })
})
console.log({ graphData })
export { graphData }

export const penaltyList = [
  "初恋を語る(Bravo)",
  "エロSS(やまおか)",
  "実写版しょうもなをうｐ(alpha)",
  "ロリコンはロリコンの良さを年上のお姉さん好きはお姉さんの良さを語る(alpha)",
]
