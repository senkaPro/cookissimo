import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom';
import { Header } from './components/header'
import AddRecipe from './components/recipes/components/recipeEntry'
import { Button } from './components/recipes/components/layout';
import { fetchRecipes } from './store/recipes/actions';
import { Container } from './components/layout'
import RecipeList from './components/recipes/recipeList';
import RecipeDetail from './components/recipes/components/recipeDetail';

function App() {
  const recipes = useSelector(state => state.recipes.recipes, shallowEqual);
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchRecipes())
  },[dispatch])
  return (
    <div className="App">
      <Header brand={'Cookissimo'} />
      <Container>
        <Switch>
          <Route exact path='/'><RecipeList recipes={recipes} /></Route>
          <Route path='/add'><AddRecipe /></Route>
          <Route path='/recipe/:id'><RecipeDetail /></Route>
        </Switch>
      </Container>
    </div>
  );
}


export default App;
