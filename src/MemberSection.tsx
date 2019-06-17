import * as React from "react"
import { Card } from "."
import _ from "lodash"
import styled from "styled-components"
import { Typography } from "@material-ui/core"

type Member = {
  name: string
}

type Team = {
  name: string
  color: string
  members: { [id: string]: Member }
}

export const teams: { [key: string]: Team } = {
  alpha: {
    color: "red",
    name: "こどもべや♡おねえさん",
    members: {
      1: { name: "ふみん" },
      2: { name: "やまおか" },
      3: { name: "そららら" },
      4: { name: "センゴク" },
    },
  },
  bravo: {
    color: "green",
    name: "ゔぃっぷやまゆり園[ひまわり学級]",
    members: {
      1: { name: "プラナス" },
      2: { name: "がお" },
      3: { name: "あの" },
      4: { name: "めぎゅ" },
    },
  },
}

const NamePlate = styled.div<{ color: string }>`
  background: white;
  margin: 12px auto;
  width: 12rem;
  color: ${p => p.color};
  border-left: solid ${p => p.color};
  padding: 4px;
  transform: rotate(1deg);
`

function MemberSection() {
  return (
    <Card>
      <h2>選手</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {_.map(teams, (team, teamId) => (
          <div key={teamId}>
            <Typography style={{ color: team.color }} variant="caption">
              {teamId}
            </Typography>
            <Typography variant="h6">{team.name}</Typography>
            {_.map(team.members, (member, id) => (
              <NamePlate color={team.color}>
                <Typography variant="body1">{member.name}</Typography>
              </NamePlate>
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}

export default MemberSection
