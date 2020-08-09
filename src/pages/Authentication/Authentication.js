import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ response, isLoading, error }, doFetch] = useFetch("/users/login");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    doFetch({
      method: "post",
      user: {
        email,
        password,
      },
    });
  };

  return (
    <div className="authPage">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Login</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={isLoading}
                >
                  Sing in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
