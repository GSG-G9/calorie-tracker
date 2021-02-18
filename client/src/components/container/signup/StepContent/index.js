import React from 'react';
import PropTypes from 'prop-types';
import BasicUserInfo from '../signUpForm/BasicUserInfo';
import GenderSelection from '../signUpForm/GenderSelection';
import PhysicalCharacteristics from '../signUpForm/PhysicalCharacteristics';

const { number, func, string, oneOfType, objectOf, shape } = PropTypes;
const StepContent = (props) => {
  const {
    step,
    handleBack,
    handleNext,
    setData,
    data,
    errorMessage,
    loadingBar,
  } = props;
  switch (step) {
    case 0:
      return <BasicUserInfo methods={{ handleBack, handleNext, setData }} />;
    case 1:
      return (
        <GenderSelection methods={{ handleBack, handleNext, setData, data }} />
      );
    case 2:
      return (
        <PhysicalCharacteristics
          methods={{
            handleBack,
            handleNext,
            setData,
            data,
            errorMessage,
            loadingBar,
          }}
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
  data: objectOf(oneOfType([string, number])).isRequired,
  loadingBar: shape.isRequired,
  errorMessage: string,
};
StepContent.defaultProps = {
  step: 0,
  errorMessage: '',
};

export default StepContent;
