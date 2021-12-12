import React from "react"
import styled from "styled-components"
import randomColor from "randomcolor";
import colors from '../colors'
import typo from '../typo'
// import Wrapper from "../components/PollListItem"
// import IconWrapper from "../components/PollListItem"
import Icon from "../components/PollListItem"
import ProgressBar from "./ProgressBar";
// import Svg from "../components/PollListItem"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  //min-width: 423px;
  //width: 95%;
  //height: 40px;
  //display: grid;
  //grid-template-columns: 0.1fr 3fr 1.1fr 1.7fr 0.1fr;
  //grid-template-rows: repeat(2, 50%);
  //
  //word-wrap: break-word;
  //flex-direction: row;
  //align-items: center;
  //margin: 16px 26px 16px 16px;
`

const PollOptionsContainer = styled.div`
  // background: ${colors.white};
  // border: 1px solid ${colors.almostWhite};
  box-sizing: border-box;
  border-radius: 8px;
  margin: 8px 48px;
  //cursor: pointer;
  //width: 100%;
  
  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  }
`

const Text = styled.div`
  ${typo.pollOption};
  //color: ${colors.mainText};
  //grid-row-end: span 2;
  //margin-right: 8px;
  //width: 100%;
  //display: flex;
  //justify-content: space-between;

`

const TextInfo = styled.div`
  ${typo.pollPercent};
  //text-align: center;
`

function getPercent(allVotes, vote){
    return (vote/allVotes)*100;

}

const PollOption = ({title, result, votes}) => (
    <PollOptionsContainer>
        <Wrapper>
            <Text>{title}</Text>
            <TextInfo>{getPercent(votes, result)} + ' %'</TextInfo>
        </Wrapper>
            {/*<Text><TextInfo> </TextInfo></Text>*/}
        <ProgressBar bgcolor={randomColor()} completed={getPercent(votes, result)} />


    {/*<IconWrapper><Svg viewBox="0 0 14 16" width="14" del={true}>*/}
    {/*    <path*/}
    {/*        d="M12 6C12.5523 6 13 6.44772 13 7V13C13 14.6569 11.6569 16 10 16H4C2.34315 16 1 14.6569 1 13V7C1 6.44772 1.44772 6 2 6H12ZM11 8H3V13C3 13.5523 3.44772 14 4 14H10C10.5523 14 11 13.5523 11 13V8ZM4 1C4 0.447715 4.44772 0 5 0H9C9.55229 0 10 0.447715 10 1V2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H4V1Z"*/}
    {/*    />*/}
    {/*</Svg></IconWrapper>*/}
     </PollOptionsContainer>
)


export default PollOption