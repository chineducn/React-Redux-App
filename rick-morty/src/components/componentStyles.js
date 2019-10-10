import styled from 'styled-components';

export const CharacterDiv = styled.div`
    border: 0.1rem solid;
    margin: 0.2rem;
    padding: 0.2rem;

    p {
      font-size: 1rem;
      span {
        font-weight: bold;
        font-size: 0.75rem;        
      }
    }

    #link {
      font-size: 0.75rem;
    }
`
export const ListSection = styled.section`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
`
export const WelcomeSection = styled.section`
  header {
    div {
      margin: 0 auto;
      width: 20rem
      img {
        width: 100%;
      }
    }
  }
`