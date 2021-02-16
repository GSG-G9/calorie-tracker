import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  news_box: {
    backgroundColor: 'white',
    borderRadius: '2em 2em 0',
    width: '100%',
    margin: 'auto',
    '@media (min-device-width: 600px)': {
      borderRadius: 0,
    },
  },
  news_container: {
    width: '90%',
    '@media (min-device-width: 1200px)': {
      width: '80%',
    },
  },

  news_card: {
    backgroundColor: theme.customColors[6],
    borderRadius: '1em',
    margin: 'auto',
    '@media (min-device-width: 600px)': {
      borderRadius: '0.5em',
    },
  },
  wrapper: {
    position: 'relative',
  },
  container_box: {
    backgroundColor: theme.customColors[3],
  },

  header_box: {
    backgroundColor: theme.customColors[3],
    height: '37vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '1.8em',
    '@media (min-device-width: 900px)': {
      flexDirection: 'row',
      backgroundColor: theme.customColors[5],
    },
    '@media (min-device-width: 900px) and (max-device-width: 1199px)': {
      height: '31vh',
    },
    '@media (min-device-width: 1200px)': {
      height: '40vh',
    },
  },

  header_img: {
    display: 'block',
    width: '65%',
    height: '50%',

    '@media (min-device-width: 900px)': {
      width: '26%',
      height: '60%',
    },
  },

  header_caption: {
    color: 'white',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    width: '90vw',
    padding: '1em',
    opacity: '0.77',
    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      fontSize: '1.54rem',
    },
    '@media (min-device-width: 900px)': {
      color: theme.customColors[1],

      width: '44%',
      fontSize: '2rem',
    },
  },
  news_feed: {
    paddingLeft: '1em',
    paddingTop: '1em',
    textTransform: 'capitalize',
    color: theme.customColors[2],
    fontWEight: 'bolder',
    fontSize: '1.7rem',
  },

  news_content: {
    color: theme.customColors[2],
  },
  card_news_title: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingLeft: '0.2em',
    fontSize: '1.1rem',
    '@media (min-device-width: 600px)': {
      fontSize: '1.65em',
    },
  },
  card_news_body: {
    paddingLeft: '1.5em',
    fontSize: '1.16em',
    textAlign: 'left',
    '@media (min-device-width: 600px) and (max-device-width: 1199px)': {
      fontSize: '1.37em',
    },
    '@media (min-device-width: 1200px)': {
      fontSize: '1.6em',
    },
  },
}));

export default useStyles;
