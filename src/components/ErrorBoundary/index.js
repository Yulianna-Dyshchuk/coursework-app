import React from "react";

export const ErrorBoundary = ({ children }) => {
  try {
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  } catch (error) {
    return <div>Error {error.message}</div>;
  }
};
