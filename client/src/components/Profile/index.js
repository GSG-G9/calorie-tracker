import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Loading from '../Loading';
import CardComponent from '../Card';
import AlertComponent from '../Alert';

function ProfileInfo() {
  const [userData, setUserData] = useState([]);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const useStyles = makeStyles(() => ({
    cardContent: {
      minHeight: '90vh',
      '@media (min-device-width: 900px)': {
        display: 'flex',
        minHeight: '100vh',
      },
    },

    img: {
      width: '70vw',
      height: '33vh',
      marginLeft: '12%',
      '@media (min-device-width: 900px)': {
        width: '30vw',
        height: '55vh',
        marginTop: '7%',
        marginLeft: '0',
      },
    },
    icon: {
      margin: '0 0 3% 0',
      '@media (min-device-width: 900px)': {
        margin: '10% 0 0 5%',
      },
    },
    info: {
      '@media (min-device-width: 900px)': {
        height: '40vh',
        marginTop: '13%',
      },
    },
    myprofile: {
      fontWeight: '700',
      '@media (min-device-width: 900px)': {
        width: '9vw',
        height: '7vh',
        margin: '6% 0 0 10%',
      },
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const { CancelToken } = Axios;
    const source = CancelToken.source();
    const getCalories = async () => {
      try {
        const {
          data: { data },
        } = await Axios.get('/api/v1/profile');

        setUserData(data[0]);
        setLoading(false);

        return null;
      } catch (err) {
        setLoading(false);
        if (err.response.data.message) {
          return setErrorMessage(err.response.data.message);
        }
        return setErrorMessage('something wrong');
      }
    };
    getCalories();
    return () => source.cancel('Operation canceled');
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      {ErrorMessage ? (
        <AlertComponent errorMessage={ErrorMessage} />
      ) : (
        <CardComponent ContentClassName={classes.cardContent}>
          <Typography variant="h5" className={classes.myprofile}>
            My Profile
          </Typography>

          <CardMedia
            component="img"
            className={classes.img}
            image="https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg"
          />
          <EditOutlinedIcon fontSize="large" className={classes.icon} />

          <div className={classes.info}>
            <Typography gutterBottom variant="h6">
              User Name : {userData.firstname} {userData.lastname}
            </Typography>
            <Typography gutterBottom variant="h6">
              Email : {userData.email}
            </Typography>
            <Typography gutterBottom variant="h6">
              Initial Weight : {userData.weight} kg
            </Typography>
            <Typography gutterBottom variant="h6">
              Initial Height : {userData.height} cm
            </Typography>
            <Typography gutterBottom variant="h6">
              Gender : {userData.gender === 'f' ? 'Female' : 'Male'}
            </Typography>
            <Typography gutterBottom variant="h6">
              Age : {userData.age} yr
            </Typography>
          </div>
        </CardComponent>
      )}
    </>
  );
}

export default ProfileInfo;
