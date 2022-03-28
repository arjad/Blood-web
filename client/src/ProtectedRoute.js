import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, path }) => {

  return (
    <Route
      render={(props) => {
        console.log("props = ", props);
        if (auth) 
        {
          return <Component />;
        }
        //false auth
        if (!auth)
        {
          return (
            <Redirect to={{ path: "/account", state: { from: props.location } }} />
          );
        }
      }}

    />
  );
};

export default ProtectedRoute;
