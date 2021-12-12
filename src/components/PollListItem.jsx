import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'

const PollListItemContainer = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.almostWhite};
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 100%;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  }
`

const Wrapper = styled.div`
  width: 95%;
  height: 40px;
  display: grid;
  grid-template-columns: 0.1fr 3fr 1.1fr 1.7fr 0.1fr;
  grid-template-rows: repeat(2, 50%);

  word-wrap: break-word;
  flex-direction: row;
  align-items: center;
  margin: 16px 26px 16px 16px;
`

const IconWrapper = styled.div`
  text-align: center;

  //width: 20px;
  display: flex;
  align-content: space-between;
  grid-row-end: span 2;
  //margin-left: 16px;
  margin: 12px;


`

const Icon = styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``

const Svg = styled(Icon)`
  fill: #BFCCE0;
  width: 16px;
  height: 16px;
  fill-rule: evenodd;
  clip-rule: evenodd;
  margin: 8px;

  &:hover {
    ${({del}) => del && `
    fill: ${colors.delSvg};
  `}
    ${({link}) => link && `
    fill: ${colors.linkSvg}
  `}
  }
`

const PollLetters = styled.div`
  ${typo.pollLetters};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 12px;
  background: ${colors.grayBlue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colors.brightPrimary};
  grid-row-end: span 2;

`

const Text = styled.div`
  ${typo.body1};
  color: ${colors.mainText};
  grid-row-end: span 2;
  margin-right: 8px;
  width: 100%;

`

const Info = styled.div`
  ${typo.info};
    //color: ${colors.gray};
  text-align: center;
`

const TextInfo = styled.div`
  ${typo.textInfo};
  text-align: center;
`

function checkDate(dateString) {
    const now = Date.now();
    const date = new Date(dateString);
    const DifferenceInTime = now - date.getTime();
    // console.log(dateString)
    const days = Math.round(DifferenceInTime / (1000 * 3600 * 24))
    //bad bad bad bad
    if (days > 1 && days < 30)
        return days + " days ago"
    if (days === 1)
        return "a day ago"
    if (days < 1)
        return "recently"
    if (days >= 30 && days < 30 * 2)
        return "a month ago"
    if (days >= 30 * 2 && days < 365)
        return Math.round(days / 30) + " months ago"
    if (days >= 365 && days < 365 * 2)
        return "a year ago"
    if (days > 365 * 2)
        return Math.round(days / 365) + " year ago"

    return "in a very good day"
}

const PollListItem = ({date, votes, letters, question, onClick}) => (
    <PollListItemContainer>
        <Wrapper onClick={onClick}>
            <PollLetters>{letters}</PollLetters>
            <Text>{question}</Text>
            <Text><TextInfo>
                {votes > 0 ? 'Started' : 'Created'}
            </TextInfo><Info>{checkDate(date)}</Info></Text>
            <Text><TextInfo> Votes</TextInfo><Info>{votes} users</Info></Text>
            <IconWrapper>
                <Svg viewBox="0 0 16 16" link={true}>
                    <path
                        d="M1.47186 7.42136L2.31457 6.57864C2.70707 6.18615 3.34343 6.18615 3.73593 6.57864C4.10039 6.9431 4.12643 7.51784 3.81403 7.91234L3.73593 8L2.89322 8.84271C1.71573 10.0202 1.71573 11.9293 2.89322 13.1068C4.02866 14.2422 5.84437 14.2828 7.0284 13.2284L7.15729 13.1068L8 12.2641C8.3925 11.8716 9.02886 11.8716 9.42136 12.2641C9.78582 12.6285 9.81185 13.2033 9.49946 13.5978L9.42136 13.6854L8.57864 14.5281C6.61616 16.4906 3.43435 16.4906 1.47186 14.5281C-0.438977 12.6173 -0.489262 9.55046 1.32101 7.57878L1.47186 7.42136ZM7.42136 1.47186C9.38384 -0.490621 12.5657 -0.490621 14.5281 1.47186C16.4906 3.43435 16.4906 6.61616 14.5281 8.57864L13.6854 9.42136C13.2929 9.81385 12.6566 9.81385 12.2641 9.42136C11.8716 9.02886 11.8716 8.3925 12.2641 8L13.1068 7.15729C14.2843 5.9798 14.2843 4.07071 13.1068 2.89322C11.9293 1.71573 10.0202 1.71573 8.84271 2.89322L8 3.73593C7.6075 4.12843 6.97114 4.12843 6.57864 3.73593C6.18615 3.34343 6.18615 2.70707 6.57864 2.31457L7.42136 1.47186ZM8.42136 6.15729C8.81385 5.76479 9.45022 5.76479 9.84271 6.15729C10.2352 6.54978 10.2352 7.18615 9.84271 7.57864L7.57864 9.84271C7.18615 10.2352 6.54978 10.2352 6.15729 9.84271C5.76479 9.45022 5.76479 8.81385 6.15729 8.42136L8.42136 6.15729Z"
                    />
                </Svg>
                <Svg viewBox="0 0 14 16" width="14" del={true}>
                    <path
                        d="M12 6C12.5523 6 13 6.44772 13 7V13C13 14.6569 11.6569 16 10 16H4C2.34315 16 1 14.6569 1 13V7C1 6.44772 1.44772 6 2 6H12ZM11 8H3V13C3 13.5523 3.44772 14 4 14H10C10.5523 14 11 13.5523 11 13V8ZM4 1C4 0.447715 4.44772 0 5 0H9C9.55229 0 10 0.447715 10 1V2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H4V1Z"
                    />
                </Svg></IconWrapper>


        </Wrapper>
    </PollListItemContainer>
)


export default PollListItem