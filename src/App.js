import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Ui from './components/ui/Ui';
import MapComponent from './components/map/index';
import './App.css';
import Loader from './Loader/Loader';
import PageComponent from './Page';
import isUserAction from './actions/isUser';

const renderApp = () => {
  return (
    <>
      <Ui />
      <div id="mapContainer">
        <MapComponent />
      </div>
    </>
  );
};
const renderLoader = () => {
  return <Loader />;
};

function App() {
  const isUserReducer = useSelector(state => state.isUser);

  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(isUserAction(false));
  }, 1000);

  return (
    <>
      {isUserReducer === null ? renderLoader() : renderApp()}
      <PageComponent />
      {/* <button className="button Show-SearchBox is-white">
        <i class="fas fa-search-location"></i>
      </button> */}
    </>
  );
}

export default App;
