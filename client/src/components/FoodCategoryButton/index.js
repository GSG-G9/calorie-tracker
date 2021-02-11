import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined';
import Button from '../Button';

const { string } = PropTypes;

const useStyle = makeStyles((theme) => ({
  button: {
    color: theme.customColors[1],
    backgroundColor: theme.customColors[6],
    width: '149px',
    fontSize: '20px',
  },
  container: {
    width: '214px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: theme.customColors[3],
    fontSize: '32px',
    cursor: 'pointer',
  },
}));

function FoodCategoryButton({ label, ...rest }) {
  const classes = useStyle();
  const [showIcon, setShowIcon] = useState(true);
  return (
    <div className={classes.container}>
      {showIcon ? (
        <AddCircleOutlinedIcon className={classes.icon} />
      ) : (
        <RemoveCircleOutlinedIcon className={classes.icon} />
      )}

      <Button
        className={classes.button}
        variant="contained"
        disable={false}
        event={() => {
          setShowIcon(!showIcon);
        }}
        {...rest}
      >
        {label}
      </Button>
    </div>
  );
}

FoodCategoryButton.propTypes = {
  label: string.isRequired,
};

export default FoodCategoryButton;
