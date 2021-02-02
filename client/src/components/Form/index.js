// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="User Name" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     </form>
//   );
// }

import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} Validate autoComplete="off">
      <Grid container direction="column">
        <TextField
          error
          required
          id="first-name"
          type="string"
          helperText="This field should be text !!"
        />
        <TextField
          required
          error
          id="last-name"
          label="Last Name"
          type="string"
          helperText="This field should be text !!"
        />
        <TextField
          error
          required
          id="email"
          type="email"
          label="Email"
          helperText="invalid email !!"
        />
        <TextField
          error
          required
          id="password"
          type="password"
          label="Password"
          helperText="invalid password !!"
        />
      </Grid>
    </form>
  );
}
