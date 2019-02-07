import React from 'react'
import { styled } from '@smooth-ui/core-sc/'

const Logo = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>mood-happy</title>
    <path d="M12.733 0a11.25 11.25 0 0 0-9.849 16.716L.1 22.568A1 1 0 0 0 1.43 23.9l5.852-2.787A11.262 11.262 0 1 0 12.733 0zm0 20.531a9.244 9.244 0 0 1-4.875-1.4 1 1 0 0 0-.958-.051l-3.15 1.5a.25.25 0 0 1-.333-.333l1.5-3.15a1 1 0 0 0-.054-.958 9.259 9.259 0 1 1 7.869 4.392z" />
    <circle cx={8} cy={9.499} r={1.5} />
    <circle cx={17.5} cy={9.499} r={1.5} />
    <path d="M15.25 12.515h-4.967a.5.5 0 0 0-.5.5 2.984 2.984 0 0 0 5.967 0 .5.5 0 0 0-.5-.5z" />
  </svg>
)

const AdUrl = styled.span`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
`

const AdComponent = props => (
  <a {...props} href="https://transactions.sendowl.com/stores/9358/136644">
    <div>
      <Logo />
      <span
        style={{
          paddingLeft: '5px',
        }}
      >
        <AdUrl>Streamline 3.0</AdUrl>
        <br />
        The world’s largest icon library!
      </span>
    </div>
  </a>
)

const Ad = styled(AdComponent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: inherit;
  font-size: 12px;

  &:hover {
    color: inherit;
  }

  div {
    padding: 0 15px;
    display: flex;
    align-items: center;
  }

  svg {
    width: 60px;
    padding: 0 5px;
    fill: #9ea5b3;
  }
`

export default Ad
