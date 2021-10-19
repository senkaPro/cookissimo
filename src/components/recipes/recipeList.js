import React from 'react';
import {Grid} from './components/layout';
import { Recipe } from './components/recipe';

const RecipeList = ({recipes}) => {
  return (
    <Grid>
      {recipes.map(rec => (
          <Recipe key={rec.id} {...rec}/>
      ))}
    </Grid>
  );
};

export default RecipeList;
