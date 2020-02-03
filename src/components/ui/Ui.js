import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bulma/css/bulma.css';
import './ui.css';
import pageAction from '../../actions/page';

// import isUser from '../../';

export default props => {
  const isUserReducer = useSelector(state => state.isUser);
  const mapModeReducer = useSelector(state => state.mapMode);
  const userLocationReducer = useSelector(state => state.signup.doneButtonState);
  console.log(userLocationReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar is-transparent">
        <div className="navbar-brand is-inline-block">
          <a className="navbar-item" href="https://bulma.io">
            Tripo
          </a>
          <p>{props.loc}</p>
        </div>
        <div className="navbar-end responsive">
          <div className="navbar-item">
            <div className="field is-grouped">
              {mapModeReducer === 'getUserLocation' ? (
                userLocationReducer ? (
                  <button className="button  mapMode   is-link">Mapmode</button>
                ) : (
                  <button className="button is-loading  is-link ">Mapmode</button>
                )
              ) : isUserReducer === false ? (
                <div className="buttons">
                  <button
                    className="button btn-sign is-primary"
                    onClick={() => {
                      dispatch(pageAction('signup'));
                    }}
                  >
                    sign up
                  </button>
                  <button
                    className="button btn-signin is-link"
                    onClick={() => {
                      dispatch(pageAction('signin'));
                    }}
                  >
                    sign in
                  </button>
                </div>
              ) : (
                <div className="buttons">
                  <button className="button  is-link">profile</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
