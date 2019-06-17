import * as React from "react"
import { render } from "react-dom"
import MemberSection from "./MemberSection"
import ButtleSection from "./ButtleSection"
import TierChecker from "./TierChecker"
import styled, { createGlobalStyle } from "styled-components"
import { CssBaseline, Typography } from "@material-ui/core"

const GlobalStyle = createGlobalStyle`
a {
  color: #ccf;
}
body {
  font-family: sans-serif;
  text-align: center;
  background: repeating-linear-gradient(
    85deg,
    #bce2e8,
    #bce2e8 4px,
    #2ecfe8,
    0,
    #5dd5e8 20px
  );
}
`

export const Card = styled.div`
  padding: 16px 8px;
  max-width: 860px;
  margin: 20px auto;
  background: hsla(0, 50%, 100%, 0.8);
`

const Title = styled<any>(Typography)`
  -webkit-mask-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
`

function Header() {
  return (
    <header style={{ padding: "16px" }}>
      <Title variant="h1">
        VIPダービー
        <br />
        梅雨の陣
      </Title>
      <Typography variant="h3">6/16(日) 21:00</Typography>
    </header>
  )
}

function Rule() {
  return (
    <Card>
      <h2>大会特殊ルール</h2>
      <p>
        全てのブキにはTier(階級)が定められており、<b>Tier1=1pt</b>となる
        <br />
        チーム内で<b>合計ptが10以下</b>になるようにブキを組み合わせて試合に臨む
        <br />
        勝ち負けは±1でポイント変動して最終的に多いチームが勝ち
        <br />
        <b>3pt以下の勝利/敗北は+2/-1</b>
        <br />
        負けたほうはしょうもな罰ゲームの抽選してチーム全員でやる
      </p>
    </Card>
  )
}

const Golden = styled.div`
  background: gold;
  color: white;
  padding: 10px;
  text-shadow: 3px;
`

function Result() {
  return (
    <Card>
      <h2>勝利チーム</h2>
      <Golden>
        <Typography variant="h3">ゔぃっぷやまゆり園[ひまわり学級]</Typography>
      </Golden>
    </Card>
  )
}

function Footer() {
  return (
    <div style={{ background: "#074C56", padding: "1em", color: "white" }}>
      <div>
        本スレ:{" "}
        <a href="https://hebi.5ch.net/test/read.cgi/news4vip/1560669833">
          https://hebi.5ch.net/test/read.cgi/news4vip/1560669833
        </a>
      </div>
      <div>
        配信:{" "}
        <a href="https://www.twitch.tv/videos/439851513">
          https://www.twitch.tv/videos/439851513
        </a>
      </div>
      <div>
        しょうもな杯:{" "}
        <a href="https://shomona.vipper.dev/">https://shomona.vipper.dev/0j</a>
      </div>
      <div>made by @vip0</div>
    </div>
  )
}

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <div>
        <Header />
        <Rule />
        <MemberSection />
        <ButtleSection />
        <Result />
        <TierChecker />
        <Footer />
      </div>
    </>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
