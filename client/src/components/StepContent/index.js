import React from 'react';
import PropTypes from 'prop-types';
import BasicUserInfo from '../signUpForm/BasicUserInfo';
import GenderSelection from '../signUpForm/GenderSelection';
import PhysicalCharacteristics from '../signUpForm/PhysicalCharacteristics';

const { number, func, string, objectOf } = PropTypes;
const StepContent = (props) => {
  const { step, handleBack, handleNext, setData, data } = props;
  switch (step) {
    case 0:
      return <BasicUserInfo methods={{ handleBack, handleNext, setData }} />;
    case 1:
      return <GenderSelection methods={{ handleBack, handleNext, setData }} />;
    case 2:
      return (
        <PhysicalCharacteristics
          methods={{ handleBack, handleNext, setData, data }}
        />
      );
    default:
      return <BasicUserInfo methods={{ handleBack, handleNext, setData }} />;
  }
};

StepContent.propTypes = {
  step: number,
  handleBack: func.isRequired,
  handleNext: func.isRequired,
  setData: func.isRequired,
  data: objectOf(string).isRequired,
};
StepContent.defaultProps = {
  step: 0,
};

export default StepContent;
