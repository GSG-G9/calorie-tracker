import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Box, Typography, useMediaQuery } from '@material-ui/core';
import ContainerComponent from '../../components/Container';
import CardComponent from '../../components/Card';
import useStyles from './style';
import girlImageSrc from '../../images/header.png';
import sportImageSrc from '../../images/sport.png';
import { context } from '../../components/userProvider';
import LoadingComponent from '../../components/Loading';
import LoginSignupButtonsBox from '../../components/LoginSignupButtonsBox';
import Footer from '../../components/Footer';

function HomePage() {
  const [isAuthenticated] = useContext(context);
  const smallScreen = useMediaQuery('(max-width:900px)');
  const largeScreen = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [news, setNews] = useState([]);
  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    (async () => {
      try {
        setLoading(true);
        const {
          data: { data },
        } = await axios.get('http://localhost:5000/api/v1/healthnews', {
          cancelToken: source.token,
        });
        setLoading(false);
        return setNews(data);
      } catch (err) {
        setLoading(false);
        if (err.response) {
          return setErrorMessage(err.response.data.message);
        }
        return setErrorMessage('something went wrong');
      }
    })();
    return () => source.cancel();
  }, []);

  return (
    <>
      <Box className={classes.wrapper}>
        <Box className={classes.container_box}>
          {!isAuthenticated && <LoginSignupButtonsBox />}
          <Box className={classes.header_box}>
            <img
              alt="girl"
              src={largeScreen ? sportImageSrc : girlImageSrc}
              className={classes.header_img}
            />
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
            {loading ? (
              <LoadingComponent />
            ) : errorMessage ? (
              <p>{errorMessage}</p>
            ) : (
              <ContainerComponent
                spacing="2"
                direction="column"
                screenSize={smallScreen ? 'sm' : 'lg'}
                className={classes.news_container}
              >
                {news.map((el) => (
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
            )}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default HomePage;
