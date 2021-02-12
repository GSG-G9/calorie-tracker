import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
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
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;

// http://localhost:5000/api/v1/healthnews
