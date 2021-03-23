import styled from 'styled-components'

export default styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
  --lh: 1.2rem;
  --max-lines: 3;
  .image-container{
    width: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .date-container{
    padding: 20px;
  }
  .title-container{
    position: relative;
    padding: 20px;
  }
  .description-result-container{
    padding: 20px;
    *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

`
