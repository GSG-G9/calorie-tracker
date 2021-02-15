import React from 'react';
import { useHistory } from 'react-router-dom';
import { func } from 'prop-types';
import Container from '../../Container';
import Button from '../../Button';

function AddFoodQuantityButtons(props) {
  const { handleAddFoodQuantity, ...rest } = props;
  const history = useHistory();
  return (
    <Container
      screenSize="xs"
      key="1"
      direction="row"
      itemColumns="6"
      spacing={2}
      {...rest}
    >
      <Button
        color="primary"
        event={() => history.push('/food/list')}
        className=""
        variant="contained"
        key="1"
      >
        Back
      </Button>
      <Button
        color="primary"
        event={handleAddFoodQuantity()}
        className=""
        variant="contained"
        key="2"
      >
        Add Food
      </Button>
    </Container>
  );
}
AddFoodQuantityButtons.propTypes = { handleAddFoodQuantity: func.isRequired };
export default AddFoodQuantityButtons;
