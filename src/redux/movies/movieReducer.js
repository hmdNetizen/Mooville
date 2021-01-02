import {
  GET_ACTION_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_TRENDING_MOVIES_SUCCESS,
  GET_SINGLE_MOVIE,
  GET_SIMILAR_MOVIES,
  GET_MOVIE_VIDEO,
  GET_SEARCHED_MOVIES,
  GET_POPULAR_ACTION_MOVIES,
  GET_POPULAR_ADVENTURE_MOVIES,
  GET_POPULAR_ANIMATION_MOVIES,
  GET_POPULAR_COMEDY_MOVIES,
  GET_POPULAR_DOCUMENTARY_MOVIES,
  GET_POPULAR_HORROR_MOVIES,
  GET_POPULAR_ROMANCE_MOVIES,
  GET_POPULAR_SCIENCE_MOVIES,
  GET_POPULAR_THRILLER_MOVIES,
  GET_POPULAR_WAR_MOVIES,
  GET_ADVENTURE_MOVIES,
  GET_ANIMATION_MOVIES,
  GET_COMEDY_MOVIES,
  GET_DOCUMENTARY_MOVIES,
  GET_HORROR_MOVIES,
  GET_ROMANCE_MOVIES,
  GET_SCIENCE_FICTION_MOVIES,
  GET_THRILLER_MOVIES,
  GET_WAR_MOVIES,
  GET_UPCOMING_ACTION_MOVIES,
  GET_UPCOMING_ADVENTURE_MOVIES,
  GET_UPCOMING_ANIMATION_MOVIES,
  GET_UPCOMING_COMEDY_MOVIES,
  GET_UPCOMING_DOCUMENTARY_MOVIES,
  GET_UPCOMING_HORROR_MOVIES,
  GET_UPCOMING_ROMANCE_MOVIES,
  GET_UPCOMING_SCIENCE_FICTION_MOVIES,
  GET_UPCOMING_THRILLER_MOVIES,
  GET_UPCOMING_WAR_MOVIES,
  GET_VIEWED_MOVIES,
} from "./movieTypes";

const initialState = {
  trending: [],
  actionMovies: [],
  similarMovies: [],
  searchedMovies: [],
  popularActionMovies: [],
  popularAdventureMovies: [],
  popularAnimationMovies: [],
  popularComedyMovies: [],
  popularDocumentaryMovies: [],
  popularHorrorMovies: [],
  popularRomanceMovies: [],
  popularScienceMovies: [],
  popularThrillerMovies: [],
  popularWarMovies: [],
  upcomingActionMovies: [],
  upcomingAdventureMovies: [],
  upcomingAnimationMovies: [],
  upcomingComedyMovies: [],
  upcomingDocumentaryMovies: [],
  upcomingHorrorMovies: [],
  upcomingRomanceMovies: [],
  upcomingScienceMovies: [],
  upcomingThrillerMovies: [],
  upcomingWarMovies: [],
  adventureMovies: [],
  animationMovies: [],
  comedyMovies: [],
  documentaryMovies: [],
  horrorMovies: [],
  romanceMovies: [],
  scienceFictionMovies: [],
  thrillerMovies: [],
  warMovies: [],
  error: "",
  loading: true,
  selectedMovie: null,
  movieVideo: null,
  viewedMovies: JSON.parse(localStorage.getItem("viewed")) || [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        trending: action.payload,
        loading: false,
        error: "",
      };
    case GET_ACTION_MOVIES_SUCCESS:
      return {
        ...state,
        actionMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
        loading: false,
        error: "",
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_MOVIE_VIDEO:
      return {
        ...state,
        movieVideo: action.payload,
        loading: false,
        error: "",
      };
    case GET_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_ACTION_MOVIES:
      return {
        ...state,
        popularActionMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_ADVENTURE_MOVIES:
      return {
        ...state,
        popularAdventureMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_ANIMATION_MOVIES:
      return {
        ...state,
        popularAnimationMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_COMEDY_MOVIES:
      return {
        ...state,
        popularComedyMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_DOCUMENTARY_MOVIES:
      return {
        ...state,
        popularDocumentaryMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_HORROR_MOVIES:
      return {
        ...state,
        popularHorrorMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_ROMANCE_MOVIES:
      return {
        ...state,
        popularRomanceMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_SCIENCE_MOVIES:
      return {
        ...state,
        popularScienceMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_POPULAR_THRILLER_MOVIES:
      return {
        ...state,
        popularThrillerMovies: action.payload,
        loading: false,
        error: "",
      };

    case GET_POPULAR_WAR_MOVIES:
      return {
        ...state,
        popularWarMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_ACTION_MOVIES:
      return {
        ...state,
        upcomingActionMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_ADVENTURE_MOVIES:
      return {
        ...state,
        upcomingAdventureMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_ANIMATION_MOVIES:
      return {
        ...state,
        upcomingAnimationMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_COMEDY_MOVIES:
      return {
        ...state,
        upcomingComedyMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_DOCUMENTARY_MOVIES:
      return {
        ...state,
        upcomingDocumentaryMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_HORROR_MOVIES:
      return {
        ...state,
        upcomingHorrorMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_ROMANCE_MOVIES:
      return {
        ...state,
        upcomingRomanceMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_SCIENCE_FICTION_MOVIES:
      return {
        ...state,
        upcomingScienceMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_THRILLER_MOVIES:
      return {
        ...state,
        upcomingThrillerMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_UPCOMING_WAR_MOVIES:
      return {
        ...state,
        upcomingWarMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_ADVENTURE_MOVIES:
      return {
        ...state,
        adventureMovies: action.payload,
        loading: false,
        error: "",
      };

    case GET_ANIMATION_MOVIES:
      return {
        ...state,
        animationMovies: action.payload,
        loading: false,
        error: "",
      };

    case GET_COMEDY_MOVIES:
      return {
        ...state,
        comedyMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_DOCUMENTARY_MOVIES:
      return {
        ...state,
        documentaryMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_HORROR_MOVIES:
      return {
        ...state,
        horrorMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_ROMANCE_MOVIES:
      return {
        ...state,
        romanceMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_SCIENCE_FICTION_MOVIES:
      return {
        ...state,
        scienceFictionMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_THRILLER_MOVIES:
      return {
        ...state,
        thrillerMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_WAR_MOVIES:
      return {
        ...state,
        warMovies: action.payload,
        loading: false,
        error: "",
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        trending: [],
        searchedMovies: [],
        popularAdventureMovies: [],
        popularAnimationMovies: [],
        popularDocumentaryMovies: [],
        popularRomanceMovies: [],
        popularComedyMovies: [],
        popularHorrorMovies: [],
        popularThrillerMovies: [],
        popularScienceMovies: [],
        popularWarMovies: [],
        upcomingActionMovies: [],
        upcomingAdventureMovies: [],
        upcomingAnimationMovies: [],
        upcomingComedyMovies: [],
        upcomingDocumentaryMovies: [],
        upcomingHorrorMovies: [],
        upcomingRomanceMovies: [],
        upcomingScienceMovies: [],
        upcomingThrillerMovies: [],
        upcomingWarMovies: [],
        actionMovies: [],
        adventureMovies: [],
        animationMovies: [],
        comedyMovies: [],
        documentaryMovies: [],
        romanceMovies: [],
        horrorMovies: [],
        scienceFictionMovies: [],
        thrillerMovies: [],
        warMovies: [],
        error: action.payload,
        selectedMovie: null,
        movieVideo: null,
        loading: false,
      };
    case GET_VIEWED_MOVIES:
      localStorage.setItem("viewed", JSON.stringify(action.payload));
      return {
        ...state,
        viewedMovies: action.payload,
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};
