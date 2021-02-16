import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../Loading';
import CardComponent from '../Card';

function ProfileInfo({ ContentClassName }) {
  //   const [firstName, setFirstName] = useState();
  //   const [lastName, setLastName] = useState();
  //   const [ErrorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const data = [
    {
      image:
        'https://i.pinimg.com/564x/a9/f6/e3/a9f6e37a1211793bd2f45f161dc3dfbb.jpg',
      firstname: 'zein',
      lastname: 'jendeya',
      email: 'zein@gmail.com',
      weight: 63,
      height: 1.68,
      gender: 'f',
      age: 19,
    },
  ];

  const useStyles = makeStyles(() => ({
    img: {
      '@media (min-device-width: 900px)': {
        flexDirection: 'row',
        width: '40%',
      },
    },
  }));

  const classes = useStyles();

  //   useEffect(() => {
  //     const { CancelToken } = Axios;
  //     const source = CancelToken.source();
  //     const getCalories = async () => {
  //       try {
  //         const {
  //           data: {
  //             data: { firstname, lastname },
  //           },
  //         } = await Axios.get('/api/v1/profile');

  //         setFirstName(firstname);
  //         setLastName(lastname);

  //         setLoading(false);
  //         setErrorMessage('success');

  //         return null;
  //       } catch (err) {
  //         setLoading(false);
  //         if (err.response.data.message) {
  //           return setErrorMessage(err.response.data.message);
  //         }
  //         return setErrorMessage('something wrong');
  //       }
  //     };
  //     getCalories();
  //     return () => source.cancel('Operation canceled');
  //   }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <CardComponent className={ContentClassName} style={{ display: 'flex' }}>
        <CardMedia
          component="img"
          className={classes.img}
          image="https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg"
        />

        <div style={{ marginLeft: '18%' }}>
          <Typography gutterBottom variant="h6">
            User Name : {data[0].firstname} {data[0].lastname}
          </Typography>
          <Typography gutterBottom variant="h6">
            Email : {data[0].email}
          </Typography>
          <Typography gutterBottom variant="h6">
            Initial Weight : {data[0].weight} kg
          </Typography>
          <Typography gutterBottom variant="h6">
            Initial Height : {data[0].height} cm
          </Typography>
          <Typography gutterBottom variant="h6">
            Gender : {data[0].gender === 'f' ? 'Female' : 'Male'}
          </Typography>
          <Typography gutterBottom variant="h6">
            Age : {data[0].age} yr
          </Typography>
        </div>
      </CardComponent>
    </>
  );
}

export default ProfileInfo;
