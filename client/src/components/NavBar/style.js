import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar_appBar: {
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    top: 'auto',
    '@media (min-device-width: 600px)': {
      borderRadius: '5px',
      top: 'calc(50% - 150px)',
      bottom: 'auto',
      width: '60px',
      height: '300px',
      right: '2px',
      left: 'auto',
    },
  },
  navbar_toolBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (min-device-width: 600px)': {
      justifyContent: 'space-around',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
    },
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav_icons: {
    fontSize: '40px',
    cursor: 'pointer',
    color: 'white',
  },
  nav_icons_disabled: {
    color: theme.customColors[5],
    fontSize: '40px',
    cursor: 'none',
  },
}));
export default useStyles;
