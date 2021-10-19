import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, CardHeader, CardBody, IngredientsList, Preparation, TotalTime } from "./layout";


const RecipeDetail = () => {
    
    const {id}  = useParams()
    const recipes = useSelector(state => state.recipes.recipes, shallowEqual)
    const [recipe, setRecipe] = React.useState({
      name:'',
      source:'',
      ingrCount:'',
      ingredients:[],
      instructions:[],
      totalTime:'',
    });

    const getRecipe = (recipes, id) => {
        return recipes.filter(rec => rec.id === parseInt(id))
    }
    React.useEffect(() => {
        const rec = getRecipe(recipes, id)[0]
        console.log(rec)
        setRecipe({ ...rec })
    },[])
    
    const timeFormat = (time) => {
        if (parseInt(time) < 60) {
            return `${time} minutes.`
        } else {
            let hours = Math.floor(time / 60)
            let minutes = time % 60
            return `${hours} hours and ${minutes} minutes.`
        }
    }

    return (<Container>
        <CardHeader>
            {recipe.name}
            <br/>
            {recipe.source}
            <br/>
            {recipe.ingrCount}
        </CardHeader>
        <CardBody>
            <IngredientsList>
              Ingredients:  <p>
            {recipe.ingredients.map((ing, i) => {
                let name = ing.name
                let quantity = ing.quantity
                return <li key={i}>{name} x {quantity}</li>
            })}</p>
            </IngredientsList>
            <Preparation>
                Preparation:<p>
            {recipe.instructions.map((p, i) => {
              return <li key={i}>{p}</li>;
            })}</p>
            </Preparation>
            <TotalTime>
                Time needed: {timeFormat(recipe.totalTime)}
            </TotalTime>
            </CardBody>
        </Container>
    )
}

export default RecipeDetail