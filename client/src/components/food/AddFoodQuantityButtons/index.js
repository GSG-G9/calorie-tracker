import React from 'react';
import { useHistory } from 'react-router-dom';
import { func, number, string } from 'prop-types';
import Container from '../../common/Container';
import Button from '../../common/Button';

function AddFoodQuantityButtons(props) {
  const { handleAddFoodQuantity, categoryId, buttonLabel, ...rest } = props;
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
        event={() =>
          history.push(buttonLabel === 'Edit Food' ? '/food' : '/food/list', {
            categoryId,
          })
        }
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
        {buttonLabel}
      </Button>
    </Container>
  );
}
AddFoodQuantityButtons.propTypes = {
  handleAddFoodQuantity: func.isRequired,
  categoryId: number.isRequired,
  buttonLabel: string,
};
AddFoodQuantityButtons.defaultProps = {
  buttonLabel: 'Add Food',
};
export default AddFoodQuantityButtons;
