import styled from 'styled-components'


export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    background-color: white;
    margin: 1rem auto;
    padding: 3rem;
    border-radius: 6px;
    @media (max-width: 768px){
        width: 100%;
        padding: 0;
        margin: 0;
    }
`




