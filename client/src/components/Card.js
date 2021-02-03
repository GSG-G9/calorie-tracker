import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  root: {
    display: "inline",
  },
});

const ExCard = () => {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <Card>
      {/* <CardHeader  
        title= {<Typography> Exercise </Typography>}
         /> */}
      <CardContent className={classes.root}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked}
              onChange={handleChange}
              name="checked"
              color="default"
            />
          }
          label="Exercise1"
        />
      </CardContent>
      <Typography> 300 </Typography>
      <BottomNavigationAction
        icon={<AddCircleOutlineIcon fontSize="large" />}
      />
    </Card>
  );
};

export default ExCard;
