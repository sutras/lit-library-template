import { css } from 'lit'

export const anticonStyle = css`
  .anticon {
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .anticon > * {
    line-height: 1;
  }

  .anticon svg {
    display: inline-block;
  }

  .anticon::before {
    display: none;
  }

  .anticon .anticon-icon {
    display: block;
  }

  .anticon[tabindex] {
    cursor: pointer;
  }

  .anticon-spin::before,
  .anticon-spin {
    display: inline-block;
    -webkit-animation: loadingCircle 1s infinite linear;
    animation: loadingCircle 1s infinite linear;
  }

  @-webkit-keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
