import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Hidden,
  Card,
  CardActionArea,
  CardMedia,
  FormHelperText,
} from '@material-ui/core';
import Container from '../../../../common/Container';
import ButtonComponent from '../../../../common/Button';

const { shape, func } = PropTypes;

function GenderSelection(props) {
  const {
    methods: { handleNext, setData, handleBack, data },
  } = props;
  const [genderError, setGenderError] = useState(false);
  return (
    <Container screenSize="md" direction="row" itemColumns="6" spacing={2}>
      <Hidden smDown key="1">
        <CardMedia
          component="img"
          height="400"
          image="./signupImages/3.png"
          title="main"
        />
      </Hidden>

      <Container key="2" direction="column" itemColumns="12" spacing={3}>
        <Typography key="1" variant="h4">
          Select Gender
        </Typography>

        <Card key="2" style={{ width: '100px' }}>
          <CardActionArea>
            <CardMedia
              style={{ width: '100px' }}
              component="img"
              height="100"
              image="./signupImages/2.png"
              title="male"
              onClick={() => {
                handleNext();
                setData((userData) => ({
                  ...userData,
                  gender: 'm',
                }));
              }}
            />
          </CardActionArea>
        </Card>
        <Card key="3" style={{ width: '100px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100px"
              style={{ width: '100px' }}
              image="./signupImages/1.png"
              title="female"
              onClick={() => {
                handleNext();
                setData((userData) => ({
                  ...userData,
                  gender: 'f',
                }));
              }}
            />
          </CardActionArea>
        </Card>
        <div key="5">
          {genderError && (
            <FormHelperText className="Mui-error">
              You Have to choose your Gender !
            </FormHelperText>
          )}
        </div>

        <Container key="4" direction="row" itemColumns="4" spacing={5}>
          <ButtonComponent
            onClick={handleBack}
            key="1"
            variant="outlined"
            color="primary"
          >
            Back
          </ButtonComponent>
          <ButtonComponent
            onClick={() => {
              if (data && data.gender) {
                return handleNext();
              }
              return setGenderError(true);
            }}
            key="2"
            variant="contained"
            color="primary"
          >
            Next
          </ButtonComponent>
        </Container>
      </Container>
    </Container>
  );
}

GenderSelection.propTypes = {
  methods: shape({
    handleNext: func.isRequired,
    setData: func.isRequired,
    handleBack: func.isRequired,
  }).isRequired,
};
export default GenderSelection;
