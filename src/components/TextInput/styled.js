import styled from 'styled-components'

export default styled.div`
  width: 100%;
  .label-container {
    margin-bottom: 4px;
  }
  .input,
  .textarea {
    width: 100%;
    font-family: 'Roboto';
    border: 1px solid #eee;
    background: white;
    border-radius: 4px;
    padding: 10px 16px;
    outline: none;
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      font-family: 'Roboto';
      color: #eee;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-family: 'Roboto';
      color: #eee;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-family: 'Roboto';
      color: #eee;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-family: 'Roboto';
      color: #eee;
    }
  }
  &.error {
    .label-container {
      color: red;
    }
    .input,
    .textarea {
      border: 1px solid red;
    }
    .error-message-container {
      color: red;
    }
  }
  &.disabled {
    .input,
    .textarea {
      color: #ddd;
      background: #eee;
      border: 1px solid #eee;
      &:active,
      &:focus {
        border: 1px solid #eee;
      }
    }
  }
`
