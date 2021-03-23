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
  .list-blog-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 20px;
    justify-content: center;
  }
`
