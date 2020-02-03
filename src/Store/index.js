import { combineReducers } from 'redux';
import isUser from './isUser';
import page from './page';
import mapMode from './mapMode';
import signup from './signup';
import mapRender from './mapRender';

// import mapMode from './@reducers/mapMode';
// import mapRender from './@reducers/mapRender';
// import modal from './@reducers/modal';
// import toolbar from './components/@reducers/toolbar';
// import username from './components/@reducers/username';
// import firstname from './components/@reducers/firstname';
// import lastname from './components/@reducers/lastname';
// import page from './@reducers/page'
// import mapVisibility from './@reducers/mapVisibility'
// import signup from './@reducers/signup'
// import repositories from './components/@reducers/repositories'

export default combineReducers({
  isUser,
  page,
  mapMode,
  mapRender,
  // modal,
  // mapVisibility,
  signup,
  // toolbar,
  // username,
  // firstname,
  // lastname,

  // repositories
});
