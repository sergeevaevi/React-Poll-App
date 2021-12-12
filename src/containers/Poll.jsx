import React, {useEffect, useState} from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'
import api from "../api";
import Spinner from "../components/Spinner";
// import PollList from "./MyPolls"
import PollOption from "../components/PollOption"
import PollListItem from "../components/PollListItem";


const PollList = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.almostWhite};
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 520px;
  margin-top: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
`

const PollQuestion = styled.h1`
  ${typo.pollQuestion};
  color: ${colors.mainText};
  margin-top: 40px;
  text-align: center;
`

const PollTextInfo = styled.h1`
  ${typo.pollTextInfo};
  margin-top: 8px;
`

export default function Poll({params}) {
    const [poll, setPoll] = useState(null)

    useEffect(() => {
        api.getPoll(params.pollId).then((data) => setPoll(data))
    }, [])

    if (!poll) {
        return <Spinner margin="70px auto"/>
    }

    return (
        <>
            {console.log(poll)}

            <PollQuestion>{poll.question}</PollQuestion>
            <PollTextInfo>{poll.hasVoted ? poll.votes + " users voted" : "Please select one option"}</PollTextInfo>
            <PollList>

                {/*{console.log(polls)}*/}
                {poll.options.map(({id, title}) => (

                    <PollOption
                        // onClick={() => setLocation("/poll/"+id)}
                        key={id}
                        result={poll.results[id]}
                        title={title}
                        votes={poll.votes}
                    />

                    ))}
            </PollList>
        </>
    )
}
