import {
  FETCH_FAILED,
  FETCH_LOADING,
  FETCH_NEWS_STORIES_SUCCESS,
  FETCH_MORE_NEWS_STORIES_SUCCESS,
  FETCH_SINGLE_ITEM_SUCCESS,
} from '@redux/constants/newstories';

const initialState = {
  allStories: [],
  loadedStories: [],
  pageNumber: [],
  currentCount: 0,
  isLoading: false,
  hasError: false,
  message: '',
};

const newstoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        message: '',
      };
    case FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        message: action.payload.message,
      };
    case FETCH_NEWS_STORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allStories: action.payload.allStories,
        loadedStories: action.payload.loadedStories,
        currentCount: action.payload.currentCount,
      };
    case FETCH_MORE_NEWS_STORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadedStories: action.payload.loadedStories,
        message: action.payload.message,
        currentCount: action.payload.currentCount,
      };
    case FETCH_SINGLE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default newstoriesReducer;
