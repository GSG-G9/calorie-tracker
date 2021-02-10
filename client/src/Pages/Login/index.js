import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core';
import Axios from 'axios';
import Container from '../../components/Container';
import Button from '../../components/Button';
import InputFeild from '../../components/InputFeild';
import validationLogin from '../../Utils/validationLogin';
import Home from '../Home';

const useStyle = makeStyles((them) => ({
  root: {
    margin: them.spacing(1),
  },
  input: {
    width: '60%',
  },
  loginIcon: {
    margin: them.spacing(2),
  },
}));

function LoginPage() {
  const classes = useStyle();
  const history = useHistory();
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(data);

  const handlePush = async (e) => {
    try {
      e.preventDefault();
      await validationLogin.validate(data);
      await Axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setData({});
      history.push(Home);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container direction="column">
        <Container direction="row" spacing="1" className={classes.loginIcon}>
          <PersonIcon color="primary" />
          <Typography variant="body1">Log In</Typography>
        </Container>

        <form>
          <Container direction="column">
            <InputFeild
              type="email"
              label="Email"
              margin="normal"
              // value={email}
              name="email"
              className={classes.input}
              onChange={handleChange}
            />
            <InputFeild
              type="password"
              label="Password"
              margin="normal"
              // value={password}
              name="password"
              className={classes.input}
              onChange={handleChange}
            />
          </Container>
        </form>
        <form>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            event={handlePush}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.root}
            // event={handleSubmit}
          >
            Cancel
          </Button>
        </form>
      </Container>
    </>
  );
}

export default LoginPage;
