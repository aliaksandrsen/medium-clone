import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmetting, setIsSubmetting] = useState(false);

  useEffect(() => {
    if (!isSubmetting) return;
    axios("https://conduit.productionready.io/api/users/login", {
      method: "post",
      user: {
        email: "ewewfwecefew@gmail.com",
        password: "234rcrcr",
      },
    })
      .then((res) => {
        console.log("res", res);
        setIsSubmetting(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsSubmetting(false);
      });
  }, [email, password, isSubmetting]);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    setIsSubmetting(true);
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
                  disabled={isSubmetting}
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
