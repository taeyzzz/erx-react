import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  .spinner {
    background: white;
    box-shadow: 0 0 0 7px #0044ad, inset 0 0 0 1px #0044ad;
    position: relative;
    height: 50px;
    width: 240px;
    border-radius: 8px;
    overflow: hidden;
    animation: rotate 4s linear infinite;
    &::before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: #0044ad;
      animation: load 4s linear infinite;
    }
  }
  @keyframes rotate {
    0%,
    42% {
      transform: rotate(0deg);
    }
    48%,
    92% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load {
    0% {
      width: 0;
    }
    40%,
    50% {
      width: 100%;
    }
    90%,
    100% {
      width: 0;
    }
  }
`
