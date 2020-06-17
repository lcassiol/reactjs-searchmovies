import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 4rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  background-color: white;

  span {
    align-self: flex-end;

    svg {
      color: #999;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  img {
    margin: 0 auto;
    display: block;
    width: auto;
    height: 370px;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 3.2rem;
  }

  small {
    font-weight: bold;
  }
`;
