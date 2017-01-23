import React, { Component } from 'react';
import Request from 'superagent';

import './News.css';

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: 'News from around the world',
      currentNewsItem: 'Breaking News Headline'
    }
  }

  componentWillMount() {
    this.fetchNews(); 
  };

  componentDidMount() {
    // fetch News continuously after certain interval
    setInterval (() => {
      this.fetchNews();
    }, 1000 * 60 * 60);

    // change current news item continuously 
    setInterval (() => {
      this.setHeadline();
    }, 1000 * 30 );
  };

  componentWillReceiveProps(newProps) {
  };

  shouldComponentUpdate(newProps, newState) {
    return true;
  };

  componentWillUpdate(nextProps, nextState) {
  };

  componentDidUpdate(prevProps, prevState) {
  };

  componentWillUnmount() {
  };

  fetchNews () {
    const serverUrl = 'http://localhost:5000/users/news';
    Request.get(serverUrl)
      .then((response) => {
        this.setState({
          news: response.body
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  setHeadline () {
    const length = this.state.news.length;
    const index = Math.floor(length * Math.random());
    const currentNewsItem = this.state.news[index];

    this.setState({ currentNewsItem });
  };

  render() {
    return (
      <div className='News'>
        <div className='container'>
          <p>{this.state.currentNewsItem.title}</p>
          <img src={this.state.currentNewsItem.urlToImage} role='presentation' />
        </div>
      </div>
    );
  }
}

export default News;
