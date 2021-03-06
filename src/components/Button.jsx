import React from 'react'
import styled from 'styled-components'

import colors from '../colors'
import typo from '../typo'

const ButtonTag = styled.button`
  ${typo.button};
  margin-top: 8px;
  width: 100%;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  display: inline-block;
  text-align: center;
  padding: 14px 13px;
  background: ${colors.brightPrimary};
  color: ${colors.white};
  border: 1px solid transparent;
  ${({ disabled }) => disabled && `
    background: ${colors.disabledBlue};
  `}
  ${({ loading }) => loading && `
    background: ${colors.brightPrimary};
  `}
  &:hover {
    background: ${colors.mediumPrimary};
  }
`

export default function Button({children, onClick, disabled, loading}) {
    return (
        <ButtonTag disabled={disabled} loading={loading} onClick={onClick}>{children}</ButtonTag>
    )
}