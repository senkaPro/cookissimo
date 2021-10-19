import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Card, CardBody, CardHeader, CardId, CardIngNumber, CardSource, CardTitle, IngredientsList, Steps, Preparation, TotalTime } from "./layout";

const ReadMore = styled.button`
  width: 12rem;
  margin-left: auto;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: white;
  color: #de3163;
  border: 1px solid #de3163;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgba(222, 49, 99, 0.9);
    color: white;
  }
`;

export const Recipe = ({ id, name, source, ingrCount, ingredients, instructions, totalTime }) => {
    const history = useHistory()
    const ingr = ingredients.map(ing => ing.name)
    const ingrList = ingr.slice(0,3)
    const prep = instructions.map(p => p).slice(0,3)
    const timeFormat = (time) => {
        if (parseInt(time) < 60) {
            return `${time} minutes.`
        } else {
            let hours = Math.floor(time / 60)
            let minutes = time % 60
            return `${hours} hours and ${minutes} minutes.`
        }
    }


    return (
      <Card>
        <CardHeader>
          <CardId>id: {id}</CardId>
          <CardTitle>{name}</CardTitle>
          <CardSource>{source}</CardSource>
          <CardIngNumber>Ingredients needed: {ingrCount}</CardIngNumber>
        </CardHeader>
        <CardBody>
          <Steps>Ingredients:</Steps>
          <IngredientsList>
            <p>
              {ingr.length > 3
                ? `${ingrList.toString()}...`
                : ingrList.toString()}
            </p>
          </IngredientsList>
          <Steps>Steps</Steps>
          <Preparation>
            {prep.map((p, i) => {
              let trim = p.substr(0, 50);
              let trimmed = trim.substr(
                0,
                Math.min(trim.length, trim.lastIndexOf(' ')),
              );
              return <li key={i}>{trimmed}</li>;
            })}
          </Preparation>
          <TotalTime>Time to cook: {timeFormat(totalTime)}</TotalTime>
        </CardBody>
        <ReadMore onClick={()=> history.push(`/recipe/${id}`)}>Read the full recipe</ReadMore>
      </Card>
    );
}