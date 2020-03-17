import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Card, Button } from 'react-bootstrap';

import asyncOperations from '../redux/asyncOperations';
import selectors from '../redux/selectors';

function News({ news, isLoading, isError, fetchNews }) {
	useEffect(() => {
		fetchNews();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
    <>
      <div>
        {isError && <div style={{ color: 'red', textAlign: 'center' }}>SOMETHING WENT WRONG...</div>}
        {isLoading && <h2 style={{ textAlign: 'center' }}>LOADING...</h2>}
      </div>  
      <div className="cards-container">
        {news !== undefined &&
          news.map(({ title, urlToImage, author, content, url }) => {
            return (
              <Card border="dark" style={{ width: '18rem' }} key={title} className="card">
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Subtitle>Author: {author}</Card.Subtitle>
                  <Card.Text>{content}</Card.Text>
                  <Button variant="info" href={url}>
                    GO TO THE WEBSITE
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
	);
}

const mapStateToProps = (state) => ({
	news: selectors.getNews(state),
	isLoading: selectors.getLoader(state),
	isError: selectors.getError(state)
});

const mapDispatchToProps = {
	fetchNews: asyncOperations.fetchNews
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
