import styled from 'styled-components'

export default styled.button`
  background: #0044ad;
  color: white;
  border-radius: 4px;
  border: 1px solid #0044ad;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  outline: none;
  min-width: 150px;
  transition: 0.3s;
  &.invert {
    background: transparent;
    color: #0044ad;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  &:disabled {
    background: #ddd;
    color: #eee;
    border: 1px solid #ddd;
    &:hover {
      box-shadow: none;
      cursor: default;
    }
  }
`
