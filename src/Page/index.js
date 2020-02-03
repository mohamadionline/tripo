import React from 'react';
import { useSelector } from 'react-redux';
import FormPage from '../formPage/FormPage'
import Signin from '../formPage/SignIn'

export default () => {
  const pageReducer = useSelector(state => state.page);

  const renderFunction = () => {
    let page = null;
    switch (pageReducer) {
      case 'signin':
        page = <Signin />;
        break;
      case 'signup':
        page = <FormPage />;
        break;
      // case 'map':
      //   page = <MapComponent />;
      //   break;
      default:
        break;
    }
    return page;
  };

  return renderFunction();
};