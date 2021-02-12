import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined';
import Button from '../../Button';

const { string, bool, func } = PropTypes;

const useStyle = makeStyles((theme) => ({
  button: {
    color: theme.customColors[1],
    backgroundColor: theme.customColors[6],
    width: '149px',
    fontSize: '20px',
    textTransform: 'capitalize',
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

function FoodCategoryButton(props) {
  const classes = useStyle();
  const { label, showIcon, handleClick, ...rest } = props;
  return (
    <div className={classes.container}>
      {showIcon ? (
        <AddCircleOutlinedIcon onClick={handleClick} className={classes.icon} />
      ) : (
        <RemoveCircleOutlinedIcon
          onClick={handleClick}
          className={classes.icon}
        />
      )}

      <Button
        className={classes.button}
        variant="contained"
        disable={false}
        event={handleClick}
        {...rest}
      >
        {label}
      </Button>
    </div>
  );
}

FoodCategoryButton.propTypes = {
  label: string.isRequired,
  showIcon: bool.isRequired,
  handleClick: func.isRequired,
};

export default FoodCategoryButton;
