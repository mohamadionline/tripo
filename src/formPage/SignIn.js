import React from 'react';

export default function SignIn() {
  return (
    <>
      <div className="signin ">
        <div className="setupHero">
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input className="input" type="email" placeholder="Please Enter Your PhoneNumber" />
            </div>
            <button className="button btnsignIn is-success ">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
