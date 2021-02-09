import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Hidden,
  Card,
  CardActionArea,
  CardMedia,
} from '@material-ui/core';

import Container from '../../Container';
import ButtonComponent from '../../Button';

function BasicUserInfo() {
  return (
    <Container screenSize="lg" direction="row" itemColumns="6" spacing={2}>
      <Hidden smDown key="1">
        <CardMedia
          component="img"
          height="600"
          image="./signupImages/3.png"
          title="main"
        />
      </Hidden>

      <Container key="2" direction="column" itemColumns="12" spacing={5}>
        <Typography key="1" variant="h4">
          Select Gender
        </Typography>

        <Card key="2">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="./signupImages/1.png"
              title="male"
            />
          </CardActionArea>
        </Card>
        <Card key="3">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140px"
              image="./signupImages/2.png"
              title="female"
            />
          </CardActionArea>
        </Card>

        <Container key="4" direction="row" itemColumns="4" spacing={5}>
          <ButtonComponent key="1" variant="outlined" color="primary">
            Back
          </ButtonComponent>
          <ButtonComponent key="2" variant="contained" color="primary">
            Next
          </ButtonComponent>
        </Container>
      </Container>
    </Container>
  );
}

export default BasicUserInfo;
