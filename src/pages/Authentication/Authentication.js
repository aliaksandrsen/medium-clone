import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";

export const Authentication = (props) => {
  const isLogin = props.match.path === "/login";
  const pageTitle = isLogin ? "Sing In" : "Sing Up";
  const descriptionLink = isLogin ? "/register" : "/login";
  const descriptionText = isLogin ? "Need an account?" : "Have an account?";
  const apiUrl = isLogin ? "/users/login" : "/users";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);

  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = isLogin
      ? { email, password }
      : {
          email: email,
          password: password,
          username: username,
        };

    doFetch({
      method: "post",
      data: {
        user,
      },
    });
  };

  useEffect(() => {
    if (!response) return;

    localStorage.setItem("token", response.user.token);
    setIsSuccessfullSubmit(true);
  }, [response]);

  if (isSuccessfullSubmit) {
    return <Redirect to="/" />;
  }

  return (
    <div className="authPage">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{pageTitle}</h1>

            <p className="text-xs-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <fieldset>
                {!isLogin && (
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={username}
                      onChange={onChangeUsername}
                    />
                  </fieldset>
                )}

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
                  {pageTitle}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
