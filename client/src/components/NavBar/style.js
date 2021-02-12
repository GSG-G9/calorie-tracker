import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav_icons: {
    width: 80,
    height: 80,

    '@media (min-device-width: 900px) and (max-device-width: 1800px)': {
      width: 70,
      height: 70,
    },

    '@media (min-device-width: 1800px)': {
      width: 80,
      height: 80,
    },
  },
  navbar_appBar: {
    bottom: 0,
    top: '89%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-device-width: 900px) and (max-device-width: 1200px)': {
      top: '26%',
      width: '9%',
      height: '33%',
      borderRadius: '5%',
    },
    '@media (min-device-width: 1200px) and (max-device-width: 1800px)': {
      top: '26%',
      borderRadius: '5%',
      width: '7%',
      height: ' 50%',
    },
    '@media (min-device-width: 1800px)': {
      top: '26%',
      width: '6.5%',
      height: '40%',
      borderRadius: '5%',
    },
  },
  navbar_toolBar: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',

    '@media (min-device-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '25%',
    },
  },
}));
export default useStyles;
