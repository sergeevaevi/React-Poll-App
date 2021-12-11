import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Spinner from "../components/Spinner"
import PollListItem from "../components/PollListItem"
import { Route, setLocation } from "wouter"

import api from '../api'
import colors from '../colors'
import typo from '../typo'
import Poll from "./Poll";

const Header = styled.div`
  max-width: 560px;
  margin: 70px auto 24px;
`

const H2 = styled.h2`
  ${typo.h2};
  color: ${colors.mainText};
  
  text-align: left;
`

const PollList = styled.div`
  max-width: 560px;
  margin: 0 auto;
`

export default function MyPolls() {
  const [polls, setPolls] = useState(null)
  
  useEffect(() => {
    api.getPolls().then((data) => setPolls(data.polls))
  }, [])

  if (!polls) {
    return <Spinner margin="70px auto"/>
  }

  return (
    <>
      <Header>
        <H2>Your Polls</H2>
        {/* <NewPollButton>New poll</NewPollButton> */}
      </Header>
      <PollList>
        {polls.map(({id, letters, question}) => (
            <PollListItem
            key={id}
            letters={letters}
            question={question}
          />
        ))}
      </PollList>
    </>
  )
}
