import styled, { css } from 'styled-components'

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`

const getInputTypeStyles = (props: any) => {
  if (props.type === 'password') {
    return `letter-spacing: 0.3em;`
  }
}

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`

export const FormInputField = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
  ${getInputTypeStyles}

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${shrinkLabel}
  }
`

const getShrinkLabel = (props: any) => {
  if (props.shrinkLabel) {
    return shrinkLabel
  }
}

export const FormInputLabel = styled.label<{ shrinkLabel: boolean }>`
  color: gray;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${getShrinkLabel}
`