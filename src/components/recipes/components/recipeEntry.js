import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addRecipeToStore} from '../../../store/recipes/actions';
import {
  Container,
  Title,
  Form,
  FormError,
  Row,
  Input,
  Textarea,
  Add,
  Remove,
  Button,
} from './layout';

const AddRecipe = () => {
  const [ingredients, setIngredients] = React.useState([
    {ingrName: '', ingrQuantity: ''},
  ]);

  const [formData, setFormData] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({message: ''});
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = e => {
    const {name, value} = e.target;
    const data = {...formData};
    data[name] = value;

    if (data[name] === '') {
      return;
    } else {
      setFormData(data);
    }
  };

  const handleIngrChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...ingredients];
    list[index][name] = value;
    setIngredients(list);
  };

  const handleAddClick = () => {
    setIngredients([...ingredients, {ingrName: '', ingrQuantity: ''}]);
  };

  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    const list = [...ingredients];
    list.splice(index, 1);
    setIngredients(list);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      formData.name === '' ||
      formData.instructions === '' ||
      formData.totalTime === '' ||
      ingredients[0].ingrName === '' ||
      ingredients[0].ingrQuantity === ''
    ) {
      let error = {message: 'Please fill the form properly'};
      setFormErrors(error);
      return;
    } else {
      const rcp = {
        name: formData.name,
        source: formData.source,
        ingrCount: ingredients.length,
        ingredients: [...ingredients],
        instructions: formData.instructions,
        totalTime: formData.totalTime,
      };
      dispatch(addRecipeToStore(rcp));
      history.push('/');
    }
  };

  return (
    <Container>
      <Title>Fill the form to add a recipe:</Title>
      {formErrors.message !== '' && <FormError>{formErrors.message}</FormError>}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Input
            type='text'
            name='name'
            value={formData.name}
            onChange={e => handleChange(e)}
            placeholder='Recipe name'
          />
        </Row>
        <Row>
          <Input
            type='text'
            name='source'
            value={formData.source}
            onChange={e => handleChange(e)}
            placeholder='Recipe source'
          />
        </Row>
        {ingredients.map((ingr, i) => {
          return (
            <Row key={i}>
              <Input
                type='text'
                name='ingrName'
                value={ingr.ingrName}
                onChange={e => handleIngrChange(e, i)}
                placeholder='Ingredient '
              />
              <Input
                type='text'
                name='ingrQuantity'
                value={ingr.ingrQuantity}
                onChange={e => handleIngrChange(e, i)}
                placeholder='Ingredient quantity'
              />
              {ingredients.length !== 1 && (
                <Remove onClick={e => handleRemoveClick(e, i)}>-</Remove>
              )}
              {ingredients.length - 1 === i && (
                <Add onClick={e => handleAddClick()}>+</Add>
              )}
            </Row>
          );
        })}
        <Row>
          <Textarea
            type='textarea'
            name='instructions'
            value={formData.instructions}
            onChange={e => handleChange(e)}
            placeholder='Steps you need to prepare'
          />
        </Row>
        <Row>
          <Input
            type='text'
            name='totalTime'
            value={formData.totalTime}
            onChange={e => handleChange(e)}
            placeholder='Time cooking in minutes'
          />
        </Row>
      </Form>
      <Button
        type='submit'
        value='Add Recipe'
        onClick={e => {
          handleSubmit(e);
        }}>
        Add Recipe
      </Button>
    </Container>
  );
};

export default AddRecipe;
