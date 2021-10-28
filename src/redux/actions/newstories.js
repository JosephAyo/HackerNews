import {
  FETCH_FAILED,
  FETCH_LOADING,
  FETCH_MORE_NEWS_STORIES_SUCCESS,
  FETCH_NEWS_STORIES_SUCCESS,
  FETCH_SINGLE_ITEM_SUCCESS,
} from '@redux/constants/newstories';
import axios from 'axios';

export const fetchAll = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_LOADING,
      });
      // await deleteUser(db, username);
      let response = await axios(
        'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
      );
      const allStories = response.data;
      const loadedStories = allStories.slice(0, 5);
      dispatch({
        type: FETCH_NEWS_STORIES_SUCCESS,
        payload: {
          allStories,
          loadedStories,
          currentCount: loadedStories.length,
        },
      });
      return true;
    } catch (error) {
      dispatch({
        type: FETCH_FAILED,
        payload: {message: error.message ? error.message : error},
      });
      return false;
    }
  };
};

export const fetchOne = data => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_LOADING,
      });
      const {id} = data;
      let response = await axios(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      );
      const oneStory = response.data;
      dispatch({
        type: FETCH_SINGLE_ITEM_SUCCESS,
      });
      return oneStory;
    } catch (error) {
      dispatch({
        type: FETCH_FAILED,
        payload: {message: error.message ? error.message : error},
      });
      return false;
    }
  };
};

export const fetchMore = data => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_LOADING,
      });
      const {allStories, currentCount} = data;
      const newStories = allStories.slice(0, currentCount + 3);
      dispatch({
        type: FETCH_MORE_NEWS_STORIES_SUCCESS,
        payload: {
          loadedStories: newStories,
          currentCount: newStories.length,
          message: 'more stories fetched',
        },
      });
      return true;
    } catch (error) {
      dispatch({
        type: FETCH_FAILED,
        payload: {message: error.message ? error.message : error},
      });
      return false;
    }
  };
};
