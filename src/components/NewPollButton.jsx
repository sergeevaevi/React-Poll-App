import React from "react"
import styled from "styled-components"
import {useLocation} from 'wouter'
import * as PropTypes from "prop-types";
import typo from "../typo";
import colors from "../colors";


const NewPollTag = styled.button`
  ${typo.newPoll};
  padding: 4px 12px;
  display: inline-block;
  width: 79px;
  height: 25px;
  
  &:hover {
    background: ${colors.grayBlue};
    border-radius: 4px;
    color: ${colors.brightPrimary};
  }
`

export default function NewPollButton({onClick, children}) {
    return (
        <NewPollTag onClick={onClick}>{children}</NewPollTag>
    )
}

NewPollButton.propTypes = {children: PropTypes.node};