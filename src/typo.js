import {css} from 'styled-components'

const link = css`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.2px;
`

const h1 = css`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
`

const h2 = css`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`

const button = css`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
`

const input = css`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.21px;
`

const label1 = css`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.2px;
`

const body1 = css`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
`

const pollLetters = css`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.2px;
`

const textInfo = css`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #1A1B29;
`
const pollPercent = css`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  text-align: right;

  color: #343434;
`

const info = css`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  color: #9DA9B7;
`


const newPoll = css`
  font-family: "Lato", ui-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  background: none;
  border: none;
  color: #8897AD;

`

const pollQuestion = css`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
`

const pollTextInfo = css`

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  /* secondryTextOnGray */

  color: #858585;
`

const pollOption = css`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #000000;
`

export default {
    link,
    h1,
    h2,
    button,
    input,
    label1,
    body1,
    pollLetters,
    textInfo,
    info,
    newPoll,
    pollQuestion,
    pollTextInfo,
    pollOption,
    pollPercent,
}
