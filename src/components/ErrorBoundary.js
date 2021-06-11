import React from "react";

export const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    return <div>Error {error.message}</div>;
  }
};
