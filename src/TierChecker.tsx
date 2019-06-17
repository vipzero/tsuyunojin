import * as React from "react"
import useSessionStorage from "react-use/lib/useSessionStorage"
import _ from "lodash"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from "@material-ui/icons/Add"
import Typography from "@material-ui/core/Typography"
import { Card } from "../"

const ranks = {
  T0: ["ソイチュ"],
  T1: "ボールド2種 パブロ モデラー ソイカス ジェット スクイク3種 カーボン もみじ".split(
    " "
  ),
  T2: "カーデコ シャプマ スプラローラー全種 無印バケツ H3 ダイナモ全種 わかば 96 ガイジーフォイル ヴァリアブル全種 ボルシチ".split(
    " "
  ),
  T3: `スシザップ52いずれも全種 L3全種 竹3種 スプチャリッター全種 ノヴァ全種 クラブラ全種 ジェカス ボトルガイジー プライムプラコラ H3Dチェリー ラピブララピデコエリート バケデコ ヒッセン全種 風呂 ノーチラス ホットブラスター スプスピ全種 スパヒュー 無印マニュマニュベツ 無印ケルビン`.split(
    " "
  ),
  T4: "ロンブラ全種 ホッカス ホクサイ全種 洗濯機全種 エクスロ全種 無印スパッタリースパクリ チャーコラチャーベツ マニュコラ クアッド2種 ケルデコケルベツ ハイドラ全種 バレル全種 スパガジェ無印ソレーラ プライムベッチュー デュアル全種 ラピブラベッチュー".split(
    " "
  ),
  T5: "パラシェルターキャンプ全種 スパガジェベッチュー スプチャスプスコ クーゲル全種".split(
    " "
  ),
}

function TierChecker() {
  const [usedWepons, setUsedWepons] = useSessionStorage<{
    [id: string]: number
  }>("UsedWepons", {})
  const [point, setPoint] = useSessionStorage<number>("point", 0)
  return (
    <Card style={{ background: "hsla(250, 100%, 90%, 0.8)" }}>
      <h2>TierChecker</h2>
      <div>
        <Typography variant="h5">合計: {point}pt</Typography>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateAreas: `"t0 t3 t4" "t1 t3 t4" "t2 t3 t5"`,
        }}
      >
        {_.values(ranks).map((wepons, pt) => (
          <div key={pt} style={{ gridArea: `t${pt}` }}>
            <h5>{pt}pt</h5>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {wepons.map(wepon => (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "4fr 1fr 1fr",
                  }}
                >
                  <Button
                    size="small"
                    onClick={() => {
                      setUsedWepons({
                        ...usedWepons,
                        [wepon]: (usedWepons[wepon] | 0) + 1,
                      })
                      setPoint(point + pt)
                    }}
                  >
                    <AddIcon fontSize="inherit" />
                    {wepon}
                  </Button>
                  <IconButton
                    onClick={() => {
                      setUsedWepons({
                        ...usedWepons,
                        [wepon]: 0,
                      })
                      setPoint(point - pt * usedWepons[wepon])
                    }}
                    size="small"
                    disabled={!usedWepons[wepon]}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <Typography
                    style={{ color: usedWepons[wepon] ? "black" : "#eee" }}
                  >
                    {usedWepons[wepon] | 0}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TierChecker
