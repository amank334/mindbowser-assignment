import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { store } from "../store";
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  //const signed = store.getState().auth.isSignedIn;
  const signed= false;

  /**
   * Redirect user to Login page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (Login or Register) after being authenticated.
   */
  if (!isPrivate && signed) {
    return <Redirect to="/home" />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.elementType]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
