import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    color: theme.customColors[1],
    paddingBottom: '15vh',
    paddingTop: '2rem',
    '@media(min-width:600px)': {
      paddingTop: '7rem',
    },
  },
}));

export default useStyle;
