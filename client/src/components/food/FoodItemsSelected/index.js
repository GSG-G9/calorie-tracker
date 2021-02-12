import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FoodItems from '../FoodItems';
import Container from '../../Container';
import Button from '../../Button';
import { MyFood } from '../../../Utils/constant';

const { number } = PropTypes;

const useStyle = makeStyles((theme) => ({
  button: {
    color: theme.customColors.white,
    fontSize: '20px',
    textTransform: 'capitalize',
  },
  container: {
    width: '300px',
  },
}));

function FoodItemsSelected(props) {
  const { foodCategoryId } = props;
  const history = useHistory();
  const [foodArray, setFoodArray] = useState([]);
  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(`/api/v1/category/${foodCategoryId}/food`);
      setFoodArray(data);
    })();
  }, [foodCategoryId]);
  const classes = useStyle();
  return (
    <Container direction="column" itemColumns="12" spacing="4">
      <FoodItems key="1" foodArray={foodArray} />
      <Container key="2" direction="row" itemColumns="12" spacing="4">
        {[
          <Button
            key="1"
            color="primary"
            className={classes.button}
            variant="contained"
            disable={false}
            event={() => history.push(MyFood)}
          >
            add food
          </Button>,
        ]}
      </Container>
    </Container>
  );
}

FoodItemsSelected.propTypes = { foodCategoryId: number.isRequired };

export default FoodItemsSelected;
