import styled from 'styled-components'

export default styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .page-title-container{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .form-row-container{
    display: flex;
    .input-container{
      margin-bottom: 20px;
      &.image-input{
        margin-left: 20px;
      }
    }
    .btn{
      margin: 0 14px;
    }
  }
`
