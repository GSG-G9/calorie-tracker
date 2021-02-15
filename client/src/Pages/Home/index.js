import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Box, Typography, useMediaQuery, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ContainerComponent from '../../components/Container';
import CardComponent from '../../components/Card';
import useStyles from './style';
import headerImageSrc from '../../images/header.png';
import { context } from '../../components/userProvider';
import Footer from '../../components/Footer';

function HomePage() {
  const [isAuthenticated] = useContext(context);
  const smallScreen = useMediaQuery('(max-width:900px)');
  const classes = useStyles();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get('http://localhost:5000/api/v1/healthnews', {
          cancelToken: source.token,
        });
        setNews(data);
      } catch (err) {
        console.log(err);
      }
    })();
    return () => source.cancel();
  }, []);

  return (
    <>
      <Box className={classes.header_box}>
        {!isAuthenticated && (
          <Box className={classes.login_signup_box}>
            <Link to="/login" className={classes.login_signup_link}>
              <Button className={classes.login_signup_button}>log in</Button>
            </Link>
            <span className={classes.separated_span}>|</span>
            <Link to="/signup" className={classes.login_signup_link}>
              <Button className={classes.login_signup_button}>sign up</Button>
            </Link>
          </Box>
        )}
        <img alt="girl" src={headerImageSrc} className={classes.header_img} />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.header_caption}
        >
          join our family and enjoy the luxury of a healthy body
        </Typography>
      </Box>
      <Box className={classes.news_box}>
        <Typography variant="h5" gutterBottom className={classes.news_feed}>
          news feed
        </Typography>
        <ContainerComponent
          spacing="2"
          direction="column"
          screenSize={smallScreen ? 'sm' : 'lg'}
          className={classes.news_container}
        >
          {news.slice(0, 2).map((el) => (
            <CardComponent
              cardClassName={classes.news_card}
              ContentClassName={classes.news_content}
            >
              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.card_news_title}
              >
                {el.title}:
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.card_news_body}
              >
                {el.content}
              </Typography>
            </CardComponent>
          ))}
        </ContainerComponent>
      </Box>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
