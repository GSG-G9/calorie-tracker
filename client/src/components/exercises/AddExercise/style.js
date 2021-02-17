import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    color: theme.customColors[1],
  },
  inputDuration: {
    backgroundColor: theme.customColors[5],
    borderRadius: '5px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyle;
