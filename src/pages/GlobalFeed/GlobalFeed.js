import React, { useEffect } from 'react';
import { stringify } from 'query-string';

import { useFetch } from '../../hooks/useFetch';
import { Feed } from '../../components/Feed';
import { Pagination } from '../../components/Pagination/Pagination';
import { getPaginator, LIMIT } from '../../utils';

export const GlobalFeed = ({ location, match }) => {
  const { currentPage, offset } = getPaginator(location.search);
  const stringifiedParams = stringify({
    LIMIT,
    offset,
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl);
  const url = match.url;

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);

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
                <Pagination
                  total={response.articlesCount}
                  limit={LIMIT}
                  url={url}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  );
};
