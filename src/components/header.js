import react from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StaticHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: rgba(222, 49, 99, 0.4) 1px solid;
    background-color: white;
    color: #DE3163;
    @media (max-width: 768px){
        display: flex;
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 80%;
    padding: 1rem;
    justify-content: space-between;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Brand = styled(Link)`
  font-size: 2em;
  font-weight: 500;
  text-decoration: underline;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #de3163;
  @media (max-width: 768px) {
    font-size: 3rem;
    padding-bottom: 1rem;
  }
`;

const ButtonGroup = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 2rem 0;
    }
`

const Button = styled.button`
    font-size: 1.15em;
    border: 1px solid;
    border-radius: 1rem;
    border-color: #DE3163;
    padding: 0 2rem;
    margin: 0 0.5rem;
    background-color: white;
    color: #DE3163;
    transition-duration: 0.3s;
    &:hover{
        background-color: #DE3163;
        color: white;
    }
    @media (max-width: 768px){
        margin-top: 0.8rem;
        font-size: 1.3em;
    }
`
export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 0.8rem;
  color: #de3163;
  text-decoration: none;
`;


export const Header = ({ brand }) => {
    return (
      <StaticHeader>
        <Container>
            <Brand to={'/'}>{brand}</Brand>
            <ButtonGroup>
                <Link to='/add' style={{textDecoration: 'none'}}><Title>Create new recipe</Title></Link>
            </ButtonGroup>
          <ButtonGroup>
            <Button>Login</Button>
            <Button>Sign up</Button>
          </ButtonGroup>
        </Container>
      </StaticHeader>
    );
}