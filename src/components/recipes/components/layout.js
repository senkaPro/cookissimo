import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 60%;
  @media (max-width: 920px) {
    width: 80%;
    /* margin-top: 3rem; */
  }
`;

export const Grid = styled.section`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  /* padding: 1rem; */
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 28rem;
  /* border: rgba(222, 49, 99, 0.4) 1px solid; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CardHeader = styled.header`
    display: flex;
    flex-direction: column;
    height: 8rem;
    padding: 1rem;
    overflow: hidden;
    background-color: white;
    color: rgb(222,49,99);
    font-size: 1.25em;
    font-weight: 500;
    border-bottom: 1px whitesmoke solid;
`

export const CardTitle = styled.h1`
  font-size: 1em;
  text-align: start;
  overflow: hidden;
  word-wrap: break-word;
`;

export const CardId = styled.small`
    font-size: 0.8em;
    height: 1.1em;
    text-align: end;
`
export const CardSource = styled.small`
    font-size: 0.8em;
    text-align: end;
`

export const CardIngNumber = styled.small`
    font-size: 0.8em;
    line-height: 1rem;
    text-align: end;
`
export const CardBody = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: white;
    color: rgba(0,0,0,0.8);
    font-size: 1.2em;
    font-weight: 400;
    border-bottom: 1px whitesmoke solid;
`
export const IngredientsList = styled.section`
    display: flex;
    width: 100%;
    margin: 0;
    padding-left: 2rem;
    font-size: 1em;
`
export const Steps = styled.h4`
  margin: 0;
  padding-left: 0.5rem;
  height: 1.1rem;
`

export const Preparation = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: circle;
  margin: 0;
  padding-top: 1rem;
  padding-left: 4rem;
`;
export const TotalTime = styled.span`
  display: flex;
  justify-content: start;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1em;
`

export const Title = styled.h1`
  display: flex;
  width: 100%;
  font-size: 1.4em;
  font-weight: 500;
  justify-self: start;
  color: #de3163;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const FormError=styled.p`
  color: red;
`
export const Row = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem auto;
  margin: 0.5rem auto;
`;
export const Input = styled.input`
  width: 100%;
  height: 1.6rem;
  border: 2px solid lightblue;
  border-radius: 0.2rem;
  padding: 0.2rem auto;
  padding-left: 0.5rem;
  margin: 0 0.2rem;
  outline: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  transition: border-color 0.3s ease-in-out;
  &:focus {
    border-color: lightblue;
    color: rgba(0, 0, 0, 0.7);
    background-color: lightskyblue;
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 5.4rem;
  border: 2px solid lightblue;
  border-radius: 0.2rem;
  padding: 0.2rem auto;
  padding-left: 0.5rem;
  margin: 0 0.2rem;
  outline: none;
  resize: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  transition: border-color 0.3s ease-in-out;
  &:focus {
    border-color: lightblue;
    color: rgba(0, 0, 0, 0.7);
    background-color: lightskyblue;
  }
`
export const Add = styled.button`
  width: 4rem;
  background-color: white;
  color: #337bff;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.2rem;
  padding: 0 0.2rem;
  border-color: #337bff;
  outline: invert;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    color: white;
    background-color: #337bff;
  }
`;
export const Remove = styled.button`
  width: 4rem;
  background-color: white;
  color: lightcoral;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.2rem;
  padding: 0 0.2rem;
  border-color: lightcoral;
  outline: invert;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    color: white;
    background-color: lightblue;
  }
`;
export const Button = styled.button`
  width: 15rem;
  height: 2.5rem;
  font-size: 1.15em;
  border: 1px solid;
  border-radius: 1rem;
  border-color: #de3163;
  padding: 0 2rem;
  margin: 1rem auto;
  background-color: white;
  color: #de3163;
  align-self: flex-end;
  transition-duration: 0.3s;
  &:hover {
    background-color: #de3163;
    color: white;
  }
  @media (max-width: 768px) {
    margin-top: 0.8rem;
    font-size: 1.3em;
  }
`;
