import React from 'react';
import './Form.css';
import mapModeAction from '../actions/mapMode';
import pageAction from '../actions/page';
import signupActions from '../actions/signupActions';
import { useSelector, useDispatch } from 'react-redux';
import countryCode from '../cunteryCode/cuntryCode';
export default function FormPage() {
  const dispatch = useDispatch();
  const signupReducer = useSelector(state => state.signup);

  return (
    <>
      <div className="sign-up">
        <section className="hero h-signup ">
          <div className="hero-body">
            <div className="container formGroup  has-text-centered">
              <button
                className="button addlocaction is-fullwidth  is-primary"
                onClick={() => {
                  dispatch(mapModeAction('getUserLocation'));
                  dispatch(pageAction(null));
                }}
              >
                Add a Location{' '}
              </button>
              <label className="label">Enter Your Phone Number</label>

              <div className="field">
                <p className="control has-icons-center">
                  <span className="select">
                    <select className="select-country">
                      {countryCode.map(country => {
                        return (
                          <option value={country.dial_code} key={country.name}>
                            {country.name}
                          </option>
                        );
                      })}
                    </select>
                  </span>
                </p>
                <input
                  className="input  input-signup form-input"
                  type="text"
                  placeholder="Phone"
                  value={signupReducer.phone_number}
                  onChange={e => {
                    const value = e.target.value;
                    const defaultValue = e.target.defaultValue;
                    console.log(defaultValue);
                    // const regex = /^[0-9]$/;
                    // if (regex.test(value)) {
                    //   dispatch(signupActions.updatePhone(signupReducer.phone_number + value));
                    // }
                  }}
                />
              </div>

              <div className="buttons btn2">
                <button
                  className="button  is-danger"
                  onClick={() => {
                    dispatch(pageAction(null));
                  }}
                >
                  Close
                </button>
                <button className="button   is-primary">Submit</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
