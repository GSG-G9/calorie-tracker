import React from 'react';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import { bool } from 'prop-types';

const AddFoodIcon = (props) => {
  const { isClicked, ...rest } = props;
  switch (isClicked) {
    case isClicked:
      return <ControlPointIcon {...rest} />;
    default:
      return <IndeterminateCheckBoxOutlinedIcon {...rest} />;
  }
};

AddFoodIcon.propTypes = {
  isClicked: bool.isRequired,
};

export default AddFoodIcon;
