import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    color: theme.customColors[1],
    paddingBottom: '15vh',
  },
}));

export default useStyle;
