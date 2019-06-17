import * as React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import { Card } from "."
import _ from "lodash"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import { buttleLogs, graphData, penaltyList } from "./data"

const PointTd = styled.td`
  &[data-win="true"] {
    background: orange;
  }
`

function ButtleSection() {
  return (
    <Card>
      <h2>バトル</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>#</th>
                <th style={{ width: "30%" }}>Alpha</th>
                <th style={{ width: "30%" }}>Bravo</th>
              </tr>
            </thead>
            <tbody>
              {buttleLogs.map((buttle, i) => (
                <tr
                  key={i}
                  style={{
                    height: "40px",
                    background: buttle.done ? "" : "#aaa",
                  }}
                >
                  <th>
                    <Typography style={{ fontSize: ".8em" }}>
                      {i + 1}.{buttle.stage}
                    </Typography>
                    <Typography style={{ fontSize: ".8em" }}>
                      {buttle.rule}
                    </Typography>
                  </th>
                  <PointTd data-win={buttle.alphaPoint > 0}>
                    {buttle.alphaPoint > 0 && "+"}
                    {buttle.alphaPoint}
                  </PointTd>
                  <PointTd data-win={buttle.bravoPoint > 0}>
                    {buttle.bravoPoint > 0 && "+"}
                    {buttle.bravoPoint}
                  </PointTd>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <LineChart
            layout="vertical"
            width={500}
            height={450}
            data={graphData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[-5, 5]} />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Line dataKey="alpha" stroke="#f44" />
            <Line dataKey="bravo" stroke="green" />
          </LineChart>
        </div>
      </div>
      <h3>罰ゲームログ</h3>
      <div>
        {penaltyList.map((line, i) => (
          <Typography>
            {i}: {line}
          </Typography>
        ))}
      </div>
    </Card>
  )
}

export default ButtleSection
