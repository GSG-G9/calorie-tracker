import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  news_box: {
    backgroundColor: 'white',
    borderRadius: '25px 25px 0 0',
    marginTop: '-2em',
    '@media (min-device-width: 600px)': {
      marginTop: '-1em',
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
    borderRadius: '5px',
    margin: 'auto',
    '@media (min-device-width: 600px)': {
      borderRadius: '14px',
    },
  },
  container_box: {
    backgroundColor: theme.customColors[3],
  },

  header_box: {
    backgroundColor: theme.customColors[3],
    height: '33.5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      height: '40vh',
    },
    '@media (min-device-width: 900px)': {
      flexDirection: 'row',
    },
  },

  header_img: {
    display: 'block',
    width: '65%',
    height: '50%',

    '@media (min-device-width: 900px)': {
      width: '36%',
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
  login_signup_link: {
    textDecoration: 'none',
  },
  login_signup_button: {
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 'bold',
    '@media (min-device-width: 600px)': {
      fontSize: '1.3em',
    },
  },
  login_signup_box: {
    marginLeft: 15,
    opacity: '0.85',
  },
  separated_span: {
    color: 'white',
    fontWeight: 'bold',

    '@media (min-device-width: 900px)': {
      fontSize: '1.3em',
    },
  },
}));

export default useStyles;
