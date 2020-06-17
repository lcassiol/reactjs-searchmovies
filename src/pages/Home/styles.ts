import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 40px;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 4rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
  }

  form {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1rem;

    label {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
      text-transform: uppercase;
    }

    input {
      font-size: 1.6rem;
      padding: 0.5rem 2rem;
      line-height: 2.8rem;
      outline: none;
      border-radius: 20px;
      border: 1px solid #ddd;
      margin-bottom: 1rem;
    }

    button {
      background-color: rgba(0, 0, 0, 0.75);
      color: white;
      padding: 1rem 2rem;
      border: 1px solid rgba(0, 0, 0, 0.75);
      border-radius: 20px;
      font-size: 1.4rem;
      cursor: pointer;
      transition: background-color 250ms;
    }

    button:hover {
      background-color: rgba(0, 0, 0, 0.85);
    }

    @media (min-width: 786px) {
      form {
        grid-template-columns: auto 1fr auto;
        grid-gap: 1rem;
        align-items: center;
      }

      input {
        margin-bottom: 0;
      }
    }
  }
`;

export const CardList = styled.div`
  margin-top: 4rem;
`;
