import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Feed } from '../../components/Feed';

export const GlobalFeed = () => {
  const apiUrl = '/articles?limit=10&offset=0';
  const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl);
  console.log('res', response, error, isLoading);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className="home-page">
      <div className="banner">
        <h1>Medium Clone</h1>
        <p>A place to share knowledge</p>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Loading...</div>}
            {error && <div>Some error happened</div>}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
              </>
            )}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  );
};
